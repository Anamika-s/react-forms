import React from 'react';
export const App1 = ()=>
{
  // Creating the ref element
  const name= React.createRef();
  const email = React.createRef();
  const mobile = React.createRef();
  const comments = React.createRef();
  const handleSubmit= (event)=>
  {
    event.preventDefault();
    console.log(name.current.value + " " + mobile.current.value + " " + comments.current.value+ ' ' + email.current.value) 

   console.log("submitted") 
  }
  return(
     
<>
<div className='container'>
<form onSubmit={handleSubmit}>
        <div className='form-group'>
      <label> FullName</label>
      <input type="text"   name="name" ref ={name} className='form-control'   /> 
      </div>
      <div className='form-group'>
      <label> Email</label>
      <input type="text"  className='form-control' ref={email} /> 
      </div>
      <div className='form-group'>
      <label> Mobile</label>
      <input type="text" className='form-control' ref={mobile} /> 
      </div>
      <div className='form-group'>
      <label> Comments </label>
      <textarea  className='form-control' ref={comments}/> 
      </div>
       
      <button type="submit" className="btn btn-primary"> Submit </button>
      </form>
      </div>

</>

  )
}