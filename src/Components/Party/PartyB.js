import React, {useState} from "react";
import ReactSwitch from 'react-switch';
import "./PartyForm.css"
import PartyForm from "./PartyForm.js" 

const PartyInfo=()=>{
    const [BParty, setBParty] = useState(true);
    const [OParty, setOParty] = useState(true);
   
   const [BParties, setBParties] = useState([]);
   const [isToggled,  setIsToggled] = useState('checked');

     const handleToggle = (checked) => {
      setIsToggled(checked);
     };
    
    const handledrop=()=>{
        setBParty(!BParty);
    };
    const handledrop2=()=>{
        setOParty(!OParty);
    };
    const addBookingParty = (party) => {
        setBParties([...BParties, party]);
      };
      const removeBookingParty = (index) => {
        setBParties([...BParties.slice(0, index), ...BParties.slice(index + 1)]);
      };
    return (
       <div className="prt">
           <div className="head1">
              <div>
               <button className="arr" onClick={handledrop}>{(BParty)? <i class="fa-solid fa-angle-up"></i>:<i class="fa-solid fa-angle-down"></i>}</button>
               <h className="hd1">Booking Party Information</h></div>
               <p className="p1">(enter as much as possible)</p>
            </div>
           { (!BParty)&& <div><div className="ts"><p className="p1">Use information on account?</p> <ReactSwitch className="stoggle" onChange={handleToggle} checked={isToggled} />
</div><PartyForm/></div>
           }

          <div className="head1">
            <div>
               <button className="arr" onClick={handledrop2}>{(OParty)? <i class="fa-solid fa-angle-up"></i>:<i class="fa-solid fa-angle-down"></i>}</button>
               <h className="hd1">Opposing Party Information</h></div>
            </div>
           { (!OParty)&& <PartyForm/> }
           
        
          {BParties.map((party, index) => (
                    <div key={party.id}>
                    <button className="rmvprty" onClick={() => removeBookingParty(index)}><i class="fa-solid fa-xmark"></i> Remove Party</button>
                    <PartyForm key={party.id} party={party} />
              </div>
          ))}
        <button  className="addprty" onClick={addBookingParty}><i className="fa-solid fa-plus"></i> Additional Parties</button>
       </div>
    )

}
export default PartyInfo;