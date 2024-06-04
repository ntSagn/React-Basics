import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Practice from './pages/Practice';
import NoPage from './pages/NoPage';
import Game from './pages/Game'
import Form from './pages/Form';
import Calculator from './pages/Calculator';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="practice" element={<Practice />} />
          <Route path="game" element={<Game />} />
          <Route path="form" element={<Form />} />
          <Route path="cal" element={<Calculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
