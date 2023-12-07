import React,{useState} from 'react';
import Upload from "./Upload.js"
import ReactSwitch from 'react-switch';
import "./index.css"
import "../Party/PartyForm.css"

const Logistic=()=>{
    

    const [BLogistic, setBLogistic] = useState(false);
    const [VLogistic, setVLogistic] = useState(false);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [isToggled,  setIsToggled] = useState('checked');
    const [isToggled1,  setIsToggled1] = useState('checked');
    const [selectedOption, setSelectedOption] = useState('');
    
   
     const handleOptionChange = (event) => {
       setSelectedOption(event.target.value);
     };
    const handleToggle = (checked) => {
     setIsToggled(checked);
    };
    const handleToggle1 = (checked) => {
      setIsToggled1(checked);
     };
    
    const handleChangeDate = (event) => {
      setDate(new Date(event.target.value));
    };
  
    const handleTimeChange = (event) => {
      setTime(event.target.value);
    };
    const handledrop=()=>{
        setBLogistic(!BLogistic);
    };
    const handledrop2=()=>{
        setVLogistic(!VLogistic);
    };
      return(
        <div className='rt'>
            <div className="head1">
              <div>
               <button className="arr" onClick={handledrop}>{(BLogistic)? <i class="fa-solid fa-angle-down"></i>:<i class="fa-solid fa-angle-up"></i>}</button>
               <h className="hd1">Basic Logistics</h></div>
            </div> 
            {BLogistic && <div className='blog'>
                <p className="p1">Upload Cover Page(optional)</p>
                <Upload/>
                <div className='course'>
                <div className="d" >
                  <label  className="inplbl"  htmlFor="FN">Style of cause</label>
                  <input id="FN" type="text" placeholder="Type Here"/>
               </div>
               <div className="d">
                  <label   className="inplbl" htmlFor="FN">Court File#</label>
                  <input  id="FN" type="text"  placeholder="Type Here"/>
               </div>
                <div className="d">
                    <label   className="inplbl"   htmlFor="date">Date:</label>
                   <input
                       id="FN"
                         type="date"
                        
                         value={date.toISOString().split('T')[0]}
                           onChange={handleChangeDate}
                   />
                </div>

            </div>
            <div className='course'>
               
               <div className="d">
                     <label  className="inplbl" htmlFor="time">Start Time</label>
                     <div style={{display:'flex', alignItems:'center',flexDirection:'row',marginTop:'5px',marginLeft:'-18px' }}> {time ? <i style={{fontSize:'1.2rem', alignSelf:'center', marginRight:'4px'}}class="fas fa-question-circle"></i>:null}
                       <input
                           className='time'
                           type="time"
                           id="FN"
                           value={time}
                           onChange={handleTimeChange}
                        />
                     </div>
               </div>
               <div className="d">
                     <label  className="inplbl" htmlFor="time">End Time</label>
                     <div style={{display:'flex', alignItems:'center',flexDirection:'row',marginTop:'5px',marginLeft:'-18px' }}> {time ? <i style={{fontSize:'1.2rem', alignSelf:'center', marginRight:'4px'}}class="fas fa-question-circle"></i>:null}
                       <input
                           className='time'
                           type="time"
                           id="FN"
                           value={time}
                           onChange={handleTimeChange}
                        />
                     </div>
               </div>
               <div className="d">
                   <label   className="inplbl" htmlFor="FN">Time Zone</label>
                   <input  id="FN" type="text"  placeholder=""/>
               </div>
            </div>
            <div className='course'>
               <div className="d">
                   <label   className="inplbl" htmlFor="FN">Arbitrator(s)</label>
                   <input  id="FN" type="text"  placeholder="Chair's Name"/>
               </div>
               <div className="d">
                   <input  id="FN1" type="text"  placeholder="Email"/>
               </div>
            </div>
            <div className="leadr2">
               <i className="fa-solid fa-plus"></i>
               <div className="d">
                  <input id="FN2" type="text"  placeholder="Add additional arbitrator"/>
               </div>
               <div className="d">
                  <input id="FN2" type="text"  placeholder=""/>
               </div>
            </div>
            <div className="ts"><p className="p1">Tribunal Secretary?</p> <ReactSwitch className="stoggle" onChange={handleToggle} checked={isToggled} />
</div>
            {
                isToggled &&  <div className="course">
                <div className="d">
                   <input id="FN1" type="text"  placeholder="Tribunal Secretary name"/>
                </div>
                <div className="d">
                   <input id="FN1" type="text"  placeholder=""/>
                </div>
             </div>
            }

            
           <div className='course'>
               <div className="d">
                   <label   className="inplbl" htmlFor="FN">Witness(s)</label>
                   <input  id="FN" type="text"  placeholder="Witness' Name"/>
               </div>
               <div className="d">
                   <input  id="FN1" type="text"  placeholder="Email"/>
               </div>
            </div>
            <div className="leadr2">
               <i className="fa-solid fa-plus"></i>
               <div className="d">
                  <input id="FN2" type="text"  placeholder="Add additional Witness"/>
               </div>
               <div className="d">
                  <input id="FN2" type="text"  placeholder=""/>
               </div>
            </div>
            </div>}




            <div className="head1">
              <div>
               <button className="arr" onClick={handledrop2}>{(VLogistic)? <i class="fa-solid fa-angle-down"></i>:<i class="fa-solid fa-angle-up"></i>}</button>
               <h className="hd1">Virtual Logistics</h></div>
            </div>
            {
                VLogistic && <div className='blog'>
                     <div style={{display:'flex', alignItems:'center',flexDirection:'row', marginLeft:'17px'}} className="ts">{isToggled ? <i style={{fontSize:'1.2rem', alignSelf:'center', marginRight:'4px'}}class="fas fa-question-circle"></i>:null}<p className="p1">Do you require a VCM (Virtual Case Manager)?</p> <ReactSwitch className="stoggle" onChange={handleToggle} checked={isToggled} />
</div>
          <div className='leadr3'>
               <div className="d">
                   <label   className="inplbl" htmlFor="FN">Is there a particular VCM you want to work with? </label>
                   <div style={{display:'flex', alignItems:'center',flexDirection:'row',marginTop:'5px',marginLeft:'-18px' }}> {selectedOption ? null:<i style={{fontSize:'1.2rem', alignSelf:'center', marginRight:'4px'}}class="fas fa-question-circle"></i>}<input   id="FN1" type="text"  placeholder=""/></div>
               </div>
            </div>


            <div style={{display:'flex', alignItems:'center',flexDirection:'row', marginLeft:'-3px'}} className="course">
               <div className="d">
                  <label  className="inplbl" htmlFor="FN">Select a virtual platform</label>
                  <div style={{display:'flex', alignItems:'center',flexDirection:'row',marginTop:'5px',marginLeft:'-18px' }}> {selectedOption ? null:<i style={{fontSize:'1.2rem', alignSelf:'center', marginRight:'4px'}}class="fas fa-question-circle"></i>}
                  <select id="FN"  value={selectedOption} onChange={handleOptionChange} >
                          <option value="">Input</option>
                          <option value="option1">Zoom</option>
                          <option value="option2">Microsost office</option>
                  </select>
                  </div>
               </div>
               <div className="d">
                  <label  className="inplbl" htmlFor="FN">Number of virtual breakout rooms</label>
                  <div style={{display:'flex', alignItems:'center',flexDirection:'row',marginTop:'5px',marginLeft:'-18px' }}> {selectedOption ? null:<i style={{fontSize:'1.2rem', alignSelf:'center', marginRight:'4px'}}class="fas fa-question-circle"></i>}
                  <select id="FN"  value={selectedOption} onChange={handleOptionChange} >
                          <option value="">Input</option>
                          <option value="option1"> 0</option>
                          <option value="option2"> 1</option>
                          <option value="option2"> 2</option>
                  </select>
                  </div>
               </div>
              
            </div>
            <div style={{display:'flex', alignItems:'center',flexDirection:'row', marginLeft:'17px'}} className="ts"> {isToggled1 ? <i style={{fontSize:'1.2rem', alignSelf:'center', marginRight:'4px'}}class="fas fa-question-circle"></i>:null}<p className="p2">Do you need us to provide Document Managing Services?</p> <ReactSwitch className="stoggle" onChange={handleToggle1} checked={isToggled1} />
</div>
            <div className='leadr4'>
               <div className="d">
                   <label   className="inplbl " htmlFor="FN">Do you have any special accomodations for your booking that our IT team can look into prior to the start date? </label>
                   <div style={{display:'flex', alignItems:'center',flexDirection:'row',marginTop:'5px',marginLeft:'-18px' }}> {selectedOption ? null:<i style={{fontSize:'1.2rem', alignSelf:'center', marginRight:'4px'}}class="fas fa-question-circle"></i>}
                   <input   id="FN1" type="text"  placeholder="Input"/>
                   </div>
               </div>
               {
                isToggled1 &&  <div className="ts"><p className="p2">Would you like the your matter to be recorded?</p> <ReactSwitch className="stoggle" onChange={handleToggle} checked={isToggled} />
                </div>
               }
             </div>
            

                </div>
            }

        </div>
      )
}
export default Logistic;