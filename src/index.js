import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'assets/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/react_bc53_getchagrooveon">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate persistor={persistor}>
          <ToastContainer />
          <App />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
