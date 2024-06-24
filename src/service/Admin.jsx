import axios from "axios";

//backend project SchoolManagement 
const API_URL = "http://localhost:8080";

const Admin = {
  authenticate: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { username, password });
      return response.data; 
    } catch (error) {
      throw error; 
    }
  }
  

};

export default Admin;