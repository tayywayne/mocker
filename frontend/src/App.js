import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import InterviewsScreen from './Screens/InterviewsScreen'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/interviews' element={<InterviewsScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
