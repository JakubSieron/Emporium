import React, { createContext, useContext, useState } from 'react';

// Create Context
const AuthContext = createContext();

// Export hook
export const useAuth = () => useContext(AuthContext);

// Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // store user object {email, role}

  const login = (email, password) => {
    // TEMP: Basic fake login
    if (email === 'admin@example.com' && password === 'admin123') {
        setUser({ email, role: 'admin' }); 
    } else if (email && password) {
      setUser({ email, role: 'customer' });
    }
  };

  const register = (email, password) => {
    // TEMP: Basic fake register
    setUser({ email, role: 'customer' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
