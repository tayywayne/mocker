import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import Header from './Components/Header'
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
