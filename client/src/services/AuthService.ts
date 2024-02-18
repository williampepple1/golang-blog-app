const APP_URL = import.meta.env.VITE_BASE_URL

class AuthService {
    async login(email: string, password: string): Promise<void> {
      try {
        console.log(APP_URL)
        console.log(import.meta.env.VITE_BASE_URL)
        // Replace this with your actual login API call
        const response = await fetch(`${APP_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          throw new Error('Email or Password incorrect');
        }
  
        const data = await response.json();
        
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.data)
        console.log(data.data)
        
      } catch (error) {
        console.error(error);
        throw error; 
      }
    }
  
    logout(): void {
        // Clear token from local storage
        localStorage.removeItem('token');
        
      }
    
      getToken(): string | null {
        return localStorage.getItem('token');
      }
    
      isAuthenticated(): boolean {
        return !!this.getToken();
      }
  }
  
  export const authService = new AuthService();
  