import React, { useState } from "react";
//import ReactSwitch from 'react-switch';

import "./PartyForm.css"

const PartyForm=()=>{
 const [selectedOption, setSelectedOption] = useState('');
 // const [isToggled,  setIsToggled] = useState('checked');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

//   const handleToggle = (checked) => {
//     setIsToggled(checked);
//   };
  
    return(
        <div className="PForm">
            {/* <div className="head1">
              <div>
               <button className="arr"><i class="fa-solid fa-angle-up"></i></button>
               <h className="hd1">Booking Party Information</h></div>
               <p className="p1">(enter as much as possible)</p>
            </div> */}
        
            {/* <div className="ts"><p className="p1">Use information on account?</p> <ReactSwitch className="stoggle" onChange={handleToggle} checked={isToggled} />
</div> */}
            <div className="pd">
               <div className="d">
                  <label  className="inplbl" htmlFor="FN">Firm Name</label>
                  {/* <input id="FN" type="text" placeholder="Input" /> */}
                  <select id="FN1"  value={selectedOption} onChange={handleOptionChange} >
                          <option value="">Input</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                  </select>
               </div>
               <div className="d" >
                  <label  className="inplbl"  htmlFor="FN">Booking Contact Name</label>
                  <input id="FN" type="text" placeholder="Type Here"/>
               </div>
               <div className="d">
                  <label   className="inplbl" htmlFor="FN">Phone Number (No Spaces)</label>
                  <input id="FN" type="text"  placeholder="Type Here"/>
               </div>
               <div className="d">
                  <label className="inplbl" htmlFor="FN">Billing Address</label>
                  <input id="FN" type="text"  placeholder="Type Here"/>
               </div>
               <div className="d">
                  <label  className="inplbl" htmlFor="FN">ZIP/Postal Code</label>
                  <input id="FN" type="text"  placeholder="Input"/>
               </div>
               <div className="d">
                  <label  className="inplbl"  htmlFor="FN">Country City</label>
                  <input id="FN" type="text" placeholder="City" />
               </div>
            </div>
            <div className="leadr">
               <div className="d">
                  <label  className="inplbl" htmlFor="FN">Role</label>
                  {/* <input id="FN" type="text" placeholder="Input" /> */}
                  <select id="FN1"  value={selectedOption} onChange={handleOptionChange} >
                          <option value="">Input</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                  </select>
               </div>
               <div className="d" >
                  <label  className="inplbl"  htmlFor="FN">Name of Represented Client</label>
                  <input id="FN" type="text" placeholder="Type Here"/>
               </div>
               <div className="d">
                  <label   className="inplbl" htmlFor="FN">Lead counsel(s) information</label>
                  <input id="FN" type="text"  placeholder="Type Here"/>
               </div>
               <div className="d">
                  <input id="FN2" type="text"  placeholder="Email"/>
               </div>
            </div>
            <div className="leadr2">
               <i className="fa-solid fa-plus"></i>
               <div className="d">
                  <input id="FN2" type="text"  placeholder="Add additional counsel"/>
               </div>
               <div className="d">
                  <input id="FN2" type="text"  placeholder=""/>
               </div>
            </div>

           
        </div>
    )
}

export default PartyForm;