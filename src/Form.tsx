import React, { FormEvent, useState } from 'react';
import UserForm from './UserForm';
import useMultiStepForm from './hooks/useMultiStepForm';

export type FormDataProps={
    firstName:string
      lastName:string
      age:string
      street:string
      city:string
      zip:string
      email:string
      password:string
}

  const INITIAL_DATA:FormDataProps={
      firstName:"",
      lastName:"",
      age:'',
      street:"",
      city:'',
      zip:'',
      email:'',
      password:''
  }

function Form() {
   
  const [data,setData] = useState(INITIAL_DATA)
  
  const updateFields =(fields:Partial<FormDataProps>) =>{
     setData(prevData => { return {...prevData,...fields} })
  }

  const {steps,currentStepIndex,front,back,step,isFirstStep,isLastStep} = useMultiStepForm([<UserForm {...data} updateFields={updateFields}/>,<h1>two</h1> ,<h1>three</h1>])
  
    const onSubmit=(e:FormEvent)=>{
   e.preventDefault()
   if(!isLastStep) return front()

   alert("Account submitted")
  }

  return (
    <div style={{position: 'relative',background:"snow",border: '1px solid black',
    padding:"2rem",margin:"1rem",borderRadius:"2rem"}}>
    <form >
    
        <div  style={{position:"absolute",color:"black",right:"1rem",top:"0.5rem"}}>  
          {currentStepIndex+1} / {steps.length}
        </div>
        
     <div >
       {step}
      </div>
       
        <div  style={{margin:"1rem",display:"flex",color:"black",gap:"0.5rem",justifyContent:'flex-end'}}> 
        
          {!isFirstStep ? <button style={{height:'fit-content'}} onClick={back} type='button' >Prev</button>:'' }
          
           <button style={{height:'fit-content'}} onClick={onSubmit} type='submit' >{isLastStep?"Finish":"Next"}</button>
         
       </div>

     </form>
</div>
  )
}

export default Form