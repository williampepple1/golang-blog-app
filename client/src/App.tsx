import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoute from './components/ProtectedRoutes';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';


const App = () => {
  return (
      <Router>
             <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/" element={ <ProtectedRoute><HomePage /> </ProtectedRoute>}>
            <Route path='profile' element={<ProfilePage />}/>
          </Route>
      </Routes>
        <ToastContainer />
      </Router>
  );
};

export default App;
