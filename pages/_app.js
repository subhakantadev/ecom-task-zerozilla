import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import store from "../app/store";
import { Provider } from 'react-redux';
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>

    </div>
  );
}

export default MyApp;
