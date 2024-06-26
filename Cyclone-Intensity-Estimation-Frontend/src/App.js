import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import appStore from './utils/store/appStore';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Provider store={appStore}>
      <NavBar />
      <Outlet />
      <Footer />
    </Provider>
  );
}

export default App;
