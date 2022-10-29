export const authHeader = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
  
    if (user && token) {
      return { Authorization: token };
    } else {
      return {};
    }
}