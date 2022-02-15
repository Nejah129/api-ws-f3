import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Info = () => {
  const [user, setUser] = useState("");
  console.log(user)
  const { name } = useParams();
  console.log(name)

  useEffect(() => {
    try {
      const getOneUser = async () => {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setUser(res.data.find(el=>el.name===name))
      };
      getOneUser()
      
    } catch (error) {
      console.log(error);
    }
    
    
  }, [name]);
  console.log(user.company)

  return <div>
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <h4>{user.address&&user.address.city}</h4>
  </div>;
};

export default Info;
