from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense, Flatten, Dropout
from tensorflow.keras.applications import VGG16
from tensorflow.image import resize
import numpy as np
import joblib

def intensityModel():
    vgg_model = VGG16(weights='imagenet', include_top=False, input_shape=(224, 224, 3))

    for layer in vgg_model.layers:
        layer.trainable = False

    model = Sequential()
    model.add(vgg_model)
    model.add(Flatten())
    model.add(Dense(128, activation='relu'))
    model.add(Dense(128, activation='relu'))
    model.add(Dropout(0.03))
    model.add(Dense(1, activation='linear'))

    return model

def estimateIntensity(model, img):
    model.load_weights('./models/' + 'vgg16-128_128.h5')
    scaler = joblib.load('./models/' + 'scaler-vgg16_32_32.pkl')
    img = resize(img, size = (224, 224))
    img = np.expand_dims(img, axis = 0)
    pred = scaler.inverse_transform(model.predict(img/255)[0][0].reshape(-1, 1))[0][0]
    pred = pred * 1.852

    return round(pred, 2)