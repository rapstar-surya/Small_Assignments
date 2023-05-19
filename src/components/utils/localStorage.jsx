export const getUsers = () => {
    const userData = localStorage.getItem('userData');
    let users = [];
  
    if (userData) {
      try {
        users = JSON.parse(userData);
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    }
  
    return users;
  };
  