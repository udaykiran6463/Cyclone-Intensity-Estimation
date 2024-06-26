# Cyclone Intensity Estimation

Developing a Convolutional Neural Network (CNN) method for estimating cyclone intensity using infrared band satellite images sourced from the INSAT-3D satellite.

## Dataset

The dataset consists of images of various cyclones (at 30-minute intervals) of the Indian peninsula and their cyclone intensities estimated at every 6-hour interval. The collection is of IR images, suitable for capturing images of cyclones even at night. Missing cyclone intensity values are imputed using time-series data analysis. The dataset, consisting of 17,112 images, is collected from the Meteorological and Oceanographic Satellite Data Archive Center (MOSDAC) of ISRO.

Visit MOSDAC at: [MOSDAC](https://www.mosdac.gov.in/)

## Methodology

The approach is divided into three parts:

1. **Cyclone Detection**: Detect the cyclone from the satellite image using the YOLOv5 object detection model.
2. **Region of Interest (ROI) Extraction**: Extract the ROI from the detected cyclone.
3. **Model Training**: Train various architectures like VGG16, VGG19, ResNet50 with different Fully Connected Layer (FCL) setups such as 128×1, 128×64×1, 128×64×32×1.
    - Achieved the best result with the VGG16-128×64×1 model.
    - Further optimized this architecture using Neural Architecture Search (NAS) to find the optimal FCL setup. The best performance was achieved with the VGG16-128×128×1 model.

![Methodology](https://github.com/manchalaharikesh/cyclone-intensity-estimation/blob/main/Cyclone-Intensity-Estimation-Backend/static/Methodology_Cyclone_Intensity_Estimation.png?raw=true)

## Results

After training the model using transfer learning (TL) and NAS + TL, we achieved the following results:

**Results of VGG-16-128×64×1**
1. Mean Absolute Error (MAE): 7.51
2. Root Mean Squared Error (RMSE): 9.63
3. R² Score: 0.92

**Results of VGG-16-128×128×1**
1. Mean Absolute Error (MAE): 6.77
2. Root Mean Squared Error (RMSE): 8.88
3. R² Score: 0.945

![image](https://github.com/udaykiran6463/Cyclone-Detection-and-Intensity-Estimation-using-INSAT-3D-Imagery/assets/139199158/255f6a21-9a6c-4658-9962-cc539a23b309)
![image](https://github.com/udaykiran6463/Cyclone-Detection-and-Intensity-Estimation-using-INSAT-3D-Imagery/assets/139199158/dfad98c1-393f-4cf0-9026-35a24dcb81ba)
![image](https://github.com/udaykiran6463/Cyclone-Detection-and-Intensity-Estimation-using-INSAT-3D-Imagery/assets/139199158/a81507ed-093f-4e22-8b9e-32cb5ce114d0)
![image](https://github.com/udaykiran6463/Cyclone-Detection-and-Intensity-Estimation-using-INSAT-3D-Imagery/assets/139199158/fdee1a92-bdf7-4332-9ec3-7a8162efebef)
![image](https://github.com/udaykiran6463/Cyclone-Detection-and-Intensity-Estimation-using-INSAT-3D-Imagery/assets/139199158/422c464c-1250-4eb4-8c70-5d844bd116c4)
![image](https://github.com/udaykiran6463/Cyclone-Detection-and-Intensity-Estimation-using-INSAT-3D-Imagery/assets/139199158/f803414a-6743-4315-b557-889a9e62124c)







## User Interface

![image](https://github.com/udaykiran6463/Cyclone-Detection-and-Intensity-Estimation-using-INSAT-3D-Imagery/assets/139199158/8dfc688a-621c-4cea-97eb-03241aad664d)

![image](https://github.com/udaykiran6463/Cyclone-Detection-and-Intensity-Estimation-using-INSAT-3D-Imagery/assets/139199158/2e3fe4e1-40c4-4ba2-a07f-07011b2ff030)

![image](https://github.com/udaykiran6463/Cyclone-Detection-and-Intensity-Estimation-using-INSAT-3D-Imagery/assets/139199158/00d406b6-9efa-43c6-92bb-bca0fec34def)


## Research Papers
survey paper:https://docs.google.com/document/d/1eH5-2Muim-MLueKpBH0gsl5E8xqEKEH_8eqrq0zzrYo/edit
Research Paper:https://drive.google.com/file/d/1j_X3y1aA54xLhZubJNbEuVE4PqnxSkdj/view




## Further Scope

A fusion model approach can be used with BT / Microwave and IR images, as both produce distinct features of cyclones.

