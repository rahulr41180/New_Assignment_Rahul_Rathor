
import './App.css';
import { Routes, Route } from "react-router-dom";
import pageExports from './pages/page.exports';

function App() {
  return (
    <Routes>
      <Route path="/" element={<><pageExports.HomePage /></>} />
      <Route path="/login" element={<><pageExports.LoginPage /></>} />
      <Route path="/register" element={<><pageExports.RegisterPage /></>} />
    </Routes>
  );
}

export default App;
