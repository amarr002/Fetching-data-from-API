import { useState } from "react";
import "./Card1.css";
import Card2 from './Card2';

function Card1(props) {
  const [btnclick,setbtnclick] = useState(false)
  const [detailval,setdetailval] = useState("View Detail")

  const handleclick = () => {
      setbtnclick(!btnclick)
      // props.item2={btnclick}
      if(btnclick){
        setdetailval("View Detail")
      }
      else{
        setdetailval("Hide Detail")
      }

  }
  

  // const [btnval,setbtnval] = useState("")
  // const forbtnclick = (val) => {
  //   setbtnval(val)
  // }

  return (
    <div className="main_container_card1">
      <div className="container1">
        <div className="box">
          <h2>{props.items.name}</h2>
        </div>
        <div className="box">
          <h2>Contact</h2>
          <p>{props.items.phone}</p>
        </div>
        <div className="box">
          <h2>City</h2>
          <p>{props.items.address.city}</p>
        </div>
        <div className="box">
          <h2>State</h2>
          <p>{props.items.address.street}</p>
        </div>
        <div className="box">
          <button className="view_detail_btn" onClick={handleclick}>
          {detailval}
          </button>
        </div>
        {btnclick && <Card2 items2={props.items} />  }
      </div>
      
    </div>
  );
}

export default Card1;
