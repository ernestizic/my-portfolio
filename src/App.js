import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage } from "./components/IndexPage";
import kursor from 'kursor';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AppLayout from "./components/AppLayout";
import NotFound from "./components/NotFound";

new kursor({
  type: 3,
  removeDefaultCursor: true,
  color: '#fcd201'
});

function App() {
  useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

  useEffect(() => {
		const loader = document.querySelector('.loading');
    loader.style.display = 'none';
	}, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <AppLayout /> }>
          <Route index element={ <IndexPage /> } />
        </Route>
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
