import React from 'react';
import FormWrapper from './FormWrapper';

type UserData={
  firstName:string
  lastName:string
  age:string,
}

type UserFormProps=UserData &{
  updateFields :(fields:Partial<UserData>)=>void
}

const UserForm = ({firstName,lastName,age,updateFields}:UserFormProps) => {
  return (
     <FormWrapper title="First Form">
      <label >First Name</label>
      <input onChange={({target})=> updateFields({firstName:target.value})} style={{width:'fit-content'}} value={firstName} autoFocus required type='text'/>
      <label>Last Name</label>
      <input style={{width:'fit-content'}} required type='text' value={lastName}/>
      <label>Age</label>
      <input style={{width:'fit-content'}} required min={1} type='number' value={age}/>
     </FormWrapper>
  )
}

export default UserForm