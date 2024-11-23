export const signup = (email, password) => {
    // Check if user already exists in localStorage
    const existingUser = JSON.parse(localStorage.getItem('users')) || [];
  
    // Check if the email already exists
    if (existingUser.some(user => user.email === email)) {
      return false; // Email is already registered
    }
  
    // Add the new user
    existingUser.push({ email, password });
    localStorage.setItem('users', JSON.stringify(existingUser));
  
    return true; // Signup successful
  };
  
  export const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Find the user with the matching email and password
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user)); // Save the current user in localStorage
      return true;
    }
  
    return false;
  };
  
  export const logout = () => {
    localStorage.removeItem('currentUser'); // Remove the current user from localStorage
  };
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem('currentUser'); // Check if there's a logged-in user
  };
  
  export const getUser = () => {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null; // Return the current user or null if not logged in
  };
  