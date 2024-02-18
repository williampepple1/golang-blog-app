const APP_URL = import.meta.env.BASE_URL

class AuthService {
    async login(email: string, password: string): Promise<void> {
      try {
        // Replace this with your actual login API call
        const response = await fetch(`${APP_URL}/auth/login`, {
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
  