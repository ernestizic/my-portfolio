import { Header } from "./components/Header";
import { IndexPage } from "./components/IndexPage";
import { BrowserRouter, Route } from "react-router-dom";
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path='/'>
          <IndexPage />
        </Route>
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
