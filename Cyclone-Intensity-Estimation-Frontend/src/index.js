import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App';
import Home from './components/Home/Home';
import MonitorCyclone from './components/MonitorCyclone/MonitorCyclone';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/monitor',
        element: <MonitorCyclone />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
