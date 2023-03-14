import React from 'react'
type FormWrapperProps={
  title:string,
  children:React.ReactNode
}
const FormWrapper = ({title,children}:FormWrapperProps) => {
  return (<>
    <h2 style={{textAlign:'center',margin:0,marginBottom:"2rem"}}>{title}</h2>
    <div style={{display:"grid",gap:"2rem .5rem",justifyContent:"flex-start",gridTemplateColumns:"auto minmax(auto,20vw) "}}>{children}</div>
    </>
  )
}

export default FormWrapper