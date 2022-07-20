import { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { IndexPage } from "./components/IndexPage";
import { Footer } from './components/Footer';
import kursor from 'kursor';
import ProgressBar from "react-scroll-progress-bar";
import Aos from 'aos';
import 'aos/dist/aos.css';

new kursor({
  type: 3,
  removeDefaultCursor: true,
  color: '#fcd201'
});

function App() {
  useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ProgressBar bgcolor="#fcd201" duration="1"/>
        <Route path='/'>
          <IndexPage />
        </Route>
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
