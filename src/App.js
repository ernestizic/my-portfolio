import { Header } from "./components/Header";
import { IndexPage } from "./components/IndexPage";
import { BrowserRouter, Route } from "react-router-dom";
import { Footer } from './components/Footer';
import kursor from 'kursor';
import ProgressBar from "react-scroll-progress-bar";

new kursor({
  type: 3,
  removeDefaultCursor: true,
  color: '#fcd201'
});

function App() {
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
