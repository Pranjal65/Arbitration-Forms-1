import React,{useState} from 'react';

import ReactSwitch from 'react-switch';
import "./index.css"
import "../Party/PartyForm.css"

const Logistic=()=>{
    

    const [BLogistic, setBLogistic] = useState(false);
    const [VLogistic, setVLogistic] = useState(false);
   
    const [isToggled,  setIsToggled] = useState('checked');
    const [isToggled1,  setIsToggled1] = useState('checked');
    const [isToggled2,  setIsToggled2] = useState('checked');
    const [isToggled3,  setIsToggled3] = useState('checked');
    const [isToggled4,  setIsToggled4] = useState('checked');
    const [isToggled5,  setIsToggled5] = useState('checked');
    const [isToggled6,  setIsToggled6] = useState('checked');
    const [selectedOption, setSelectedOption] = useState('');
    const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
   
     const handleOptionChange = (event) => {
       setSelectedOption(event.target.value);
     };
    const handleToggle = (checked) => {
     setIsToggled(checked);
    };
    const handleToggle1 = (checked) => {
      setIsToggled1(checked);
     };
     const handleToggle2 = (checked) => {
        setIsToggled2(checked);
       };
       const handleToggle3 = (checked) => {
        setIsToggled3(checked);
       };
       const handleToggle4 = (checked) => {
        setIsToggled4(checked);
       };
       const handleToggle5 = (checked) => {
        setIsToggled5(checked);
       };
       const handleToggle6= (checked) => {
        setIsToggled6(checked);
       };
    
  
  
    const handledrop=()=>{
        setBLogistic(!BLogistic);
    };
    const handledrop2=()=>{
        setVLogistic(!VLogistic);
    };
      return(
        <div style={{alignSelf:'center'}} className='rt'>
            <div className="head1">
              <div>
               <button className="arr" onClick={handledrop}>{(BLogistic)? <i class="fa-solid fa-angle-down"></i>:<i class="fa-solid fa-angle-up"></i>}</button>
               <h className="hd1">Court Report</h></div>
            </div> 
            {BLogistic && <div className='blog'>
                    <div className="ts"><p className="p2" style={{fontSize:'0.8rem'}}>Will this matter plan to have Court Reporter?</p> <ReactSwitch className="stoggle" onChange={handleToggle} checked={isToggled} />
                    </div> 
                     {
                        isToggled && <div className='courtreport1'>
                                   <div className="ts"><p  style={{fontSize:'0.8rem'}} className="p2">Would you like an Arbitration Place Court Reporter?</p> <ReactSwitch className="stoggle" onChange={handleToggle1} checked={isToggled1} /></div> 
                                   {
                                         isToggled1 && <div style={{marginLeft:'-7px'}}  className='courtreport'>
                                             <div className="d">
                                                <label  style={{fontSize:'0.8rem', display:'block', width:'180px'}}  className="inplbl" htmlFor="FN">Is there a specific Arbitration Place Court Reporter 
you prefer?</label>
                                               <div style={{display:'flex', alignItems:'center',flexDirection:'row',marginTop:'5px',marginLeft:'-18px' }}> {selectedOption ? null:<i style={{fontSize:'1.2rem', alignSelf:'center', marginRight:'4px'}}class="fas fa-question-circle"></i>}
                                                <select id="FN"  value={selectedOption} onChange={handleOptionChange} >
                                                       <option value="">Select AP Court Reporter</option>
                                                       <option value="option1">Zoom</option>
                                                      <option value="option2">Microsost office</option>
                                               </select>
                                               </div>
                                             </div>
                                         </div>
                                     }
                                      <div className="ts"><p style={{fontSize:'0.8rem'}} className="p2">Will a transcript be required?</p> <ReactSwitch className="stoggle" onChange={handleToggle2} checked={isToggled2} /></div> 
                                   {
                                         isToggled2 && <div style={{marginLeft:'-7px'}} className='courtreport'>
                                             <div className="d">
                                                <label style={{fontSize:'0.8rem'}}  className="inplbl" htmlFor="FN">Turnaround time? 
you prefer?</label>    
                                                <div style={{display:'flex', alignItems:'center',flexDirection:'row',marginTop:'5px',marginLeft:'-18px' }}> {selectedOption ? null:<i style={{fontSize:'1.2rem', alignSelf:'center', marginRight:'4px'}}class="fas fa-question-circle"></i>}
                                                <select id="FN"  value={selectedOption} onChange={handleOptionChange} >
                                                       <option value="">Standard</option>
                                                       <option value="option1">option 1</option>
                                                      <option value="option2">option 2</option>
                                               </select>
                                               </div>
                                             </div>
                                         </div>
                                     }
                                     <div style={{display:'flex', alignItems:'center',flexDirection:'row', marginLeft:'17px'}}  className="ts">{isToggled3 ? <i style={{fontSize:'1.2rem', alignSelf:'center', marginRight:'4px'}}class="fas fa-question-circle"></i>:null}<p style={{fontSize:'0.8rem'}} className="p1">Multilingual?</p> <ReactSwitch className="stoggle" onChange={handleToggle3} checked={isToggled3} /></div> 
                                   {
                                         isToggled3 && <div className='courtreport'>
                                             <div className="d">
                                                <label style={{fontSize:'0.8rem',display:'block', width:'180px'}}  className="inplbl " htmlFor="FN">Please list the non-english languages you would like accommodated (separate by comma)</label>
                                                <input   id="FN" type="text"  placeholder="Input"/>
                                             </div>
                                             <div className="d">
                                                <label  style={{fontSize:'0.8rem'}}  className="inplbl" htmlFor="FN">Daily Rough Draft?</label>
                                                <div style={{display:'flex', alignItems:'center',flexDirection:'row',marginTop:'5px',marginLeft:'-18px' }}> {selectedOption ? null:<i style={{fontSize:'1.2rem', alignSelf:'center', marginRight:'4px'}}class="fas fa-question-circle"></i>}
                                                <select id="FN"  value={selectedOption} onChange={handleOptionChange} >
                                                       <option value="">I don't know</option>
                                                       <option value="option1">option 1</option>
                                                      <option value="option2">option 2</option>
                                               </select>
                                               </div>
                                             </div>
                                             <div className="d">
                                                <label   style={{fontSize:'0.8rem'}} className="inplbl" htmlFor="FN">Realtime reporting?</label>
                                                <div style={{display:'flex', alignItems:'center',flexDirection:'row',marginTop:'5px',marginLeft:'-18px' }}> {selectedOption ? null:<i style={{fontSize:'1.2rem', alignSelf:'center', marginRight:'4px'}}class="fas fa-question-circle"></i>}
                                                <select id="FN"  value={selectedOption} onChange={handleOptionChange} >
                                                       <option value="">I don't know</option>
                                                       <option value="option1">option 1</option>
                                                      <option value="option2">option 2</option>
                                               </select>
                                               </div>
                                             </div>
                                         </div>
                                     }
                       
                       
                        </div>
                         
                    }

              

            </div>}

            <div className="head1">
              <div>
               <button className="arr" onClick={handledrop2}>{(VLogistic)? <i class="fa-solid fa-angle-down"></i>:<i class="fa-solid fa-angle-up"></i>}</button>
               <h className="hd1">Additional Features</h></div>
            </div>
            {
                VLogistic && <div className='blog'>
                     <div className="ts"><p  style={{fontSize:'0.8rem'}} className="p2">Do you require interpretation?</p> <ReactSwitch className="stoggle" onChange={handleToggle4} checked={isToggled4} /></div>
                     {
                        isToggled4 && <div>
                                <div className='leadr3'>
                                     <div className="d">
                                    <label   style={{fontSize:'0.8rem',display:'block', width:'180px'}} className="inplbl" htmlFor="FN">Please list all languages to be interpreted (separate by comma)</label>
                                    <div style={{display:'flex', alignItems:'center',flexDirection:'row',marginTop:'5px',marginLeft:'-18px' }}> {inputValue ? null:<i style={{fontSize:'1.2rem', alignSelf:'center', marginRight:'4px'}}class="fas fa-question-circle"></i>} <input  value={inputValue} onChange={handleChange} id="FN1" type="text"  placeholder="Input"/></div>
                                     
                                  </div>
                               </div>
                        </div>
                     }
                     
                     <div style={{display:'flex', alignItems:'center',flexDirection:'row'}} className="ts">
                        {isToggled5 ? <i style={{fontSize:'1.2rem', alignSelf:'center',marginLeft:'-24px', marginRight:'4px'}}class="fas fa-question-circle"></i>:null}<p  style={{fontSize:'0.8rem'}} className="p2"> Do you require CART services?</p> <ReactSwitch className="stoggle" onChange={handleToggle5} checked={isToggled5} /></div>
                     <div className="ts"><p  style={{fontSize:'0.8rem'}} className="p2">Will you need a quote prior to confirmation?</p> <ReactSwitch className="stoggle" onChange={handleToggle6} checked={isToggled6} /></div>
                    <div className='leadr3'>
                                     <div className="d">
                                    <label   style={{fontSize:'0.8rem'}}  className="inplbl" htmlFor="FN">Please list any additional requests or considerations you might have at this time</label>
                                     <input   id="FN1" type="text"  placeholder="Input"/>
                                  </div>
                    </div>


            
                </div>
            }

        </div>
      )
}
export default Logistic;