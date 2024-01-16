import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom'

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
}

const LoginPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    email: "",
  });
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    localStorage.setItem('userInfo',JSON.stringify([{
        name:formData.name,
        number: formData.phoneNumber,
        email: formData.email,
    }]))
    
    if(localStorage.getItem('userInfo')){
         navigate('/listPage')
    }
  };

  return (
    <div className="container mx-auto lg:px-80 my-10 md:px-10 px-5">
        <h1 className="text-center text-3xl font-semibold">User InFo:</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button sx={{width:'100%'}} type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
