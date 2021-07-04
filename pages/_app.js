import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import { configureStore } from '../store/store';
import { Provider } from 'react-redux';

const store = configureStore();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store = { store }>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
