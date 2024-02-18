import { Navigate } from 'react-router-dom';
import { authService } from '../services/AuthService';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!authService.isAuthenticated()) {

    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
