import axios from "axios";
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/', 
    timeout: 10000, 
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  export default api;

api.interceptors.request.use(
    Config => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQxMjY4OTcyLCJpYXQiOjE3Mzg2NzY5NzIsImp0aSI6ImRhMGRjNTBiNjUwNDQ3MThhZDllM2ZmMmQ5OGZlYWZkIiwidXNlcl9pZCI6Mn0.725zico3qMngp8cKKew1x0BpSBrEfcIL8yraFnatCcE";
        if (token) {
            Config.headers.Authorization = `Bearer ${token}`;
        }
        return Config;
    }
)