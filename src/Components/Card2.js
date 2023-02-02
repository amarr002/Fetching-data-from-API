import "./Card2.css"

function Card2(props) {
  return (
    <div className="main_container_card2">
    <div className='container1_card2'>
    <h2>Description</h2>
    <p>{props.items2.catchPhrase}</p>
    </div>
    <div className='container2_card2'>
    <div className='box1_card2'>
    <h3>Contact</h3>
    <p>{props.items2.phone}</p>
    <h3>Designation</h3>
    <p>{props.items2.company.bs}</p>
    <h3>Email</h3>
    <p>{props.items2.email}</p>
    <h3>Phone</h3>
    <p>{props.items2.phone}</p>
    </div>
    <div className='box2_card2'>
    <h3>Address</h3>
    <p>{props.items2.address.street}</p>
    <h3>City</h3>
    <p>{props.items2.address.city}</p>
    <h3>State</h3>
    <p>{props.items2.address.street}</p>
    <h3>Country</h3>
    <p>{props.items2.address.street}</p>
    </div>
    </div>
      
    </div>
  )
}

export default Card2
