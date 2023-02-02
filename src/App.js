import './App.css';
import Card1 from './Components/Card1';
import Axios from "axios";
import { useState,useEffect } from 'react';


function App() {
  const [apidata,setapidata] = useState([]);


      useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        setapidata(res.data);
      });
      },[]);
   
      
     
    
  return (
    <div >
    
      {apidata.map((data) => (
      <Card1 items={data}/>
       ))}
     {/* items2={forbtnclick} */}
     {/* props.items.filter((item.id)=>{
        
      } */}
    </div>
  );
}

export default App;
