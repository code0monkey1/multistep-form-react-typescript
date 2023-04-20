import { ReactElement, useState } from 'react'

type Form={
  currentStepIndex: number,
  step:ReactElement,
  front:()=>void,
  back:()=>void,
  goTo:(index:number)=>void,
  steps:ReactElement[],
  isFirstStep:boolean,
  isLastStep:boolean
}

function useMultiStepForm(steps:ReactElement[]):Form {
  
   const [currentStepIndex,setCurrentStepIndex] = useState(0)
   
   const front=()=>{
        
       if(currentStepIndex+1==steps.length)return currentStepIndex

       setCurrentStepIndex(prevIndex => ++prevIndex)
   }

   const back=()=>{

     if(currentStepIndex===0)return currentStepIndex

     setCurrentStepIndex(prevIndex => --prevIndex)
   }

   const goTo=(index:number) =>{
      
      if( index >=0 && index < steps.length)
          setCurrentStepIndex( index )
    
   }


   return {
    currentStepIndex,
    step:steps[currentStepIndex],
    front,
    back,
    goTo,
    steps,
    isFirstStep:currentStepIndex===0,
    isLastStep:currentStepIndex+1===steps.length
   }
  
}

export default useMultiStepForm