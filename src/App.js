import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [name,setName] = useState(" ")
  const [email,setEmail] = useState(" ")
  const [mobile,setMobile] = useState(" ")
  const [comments,setComments] = useState(" ")
// const handle1 = (event) =>
// {
//    console.log("function called")
// // console.log(event)
// // console.log(event.target)
// // console.log(event.target.value)
// setName(event.target.value);
// }

// const handle2 = (event) =>
// {
 
// setEmail(event.target.value);
// }
// const handleChange =(event) =>
// {
//   setName(event.target.value)
//   setName(event.target.value)
//   setName(event.target.value)
  
// }

const handleSubmit = (event)=>
{
  event.preventDefault();
  console.log(name + " " + mobile + " " + comments  + " " + email)

}
  return (
    <div className="container">
      
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
      <label> FullName</label>
      <input type="text" value={name} name="name" className='form-control' onChange={(event)=> setName(event.target.value)} /> 
      </div>
      <div className='form-control'>
      <label> Email</label>
      <input type="text" value={email} onChange={(event)=> setEmail(event.target.value)} className='form-control'/> 
      </div>
      <div className='form-control'>
      <label> Mobile</label>
      <input type="text" value={mobile}  onChange={(event)=> setMobile(event.target.value)}className='form-control'/> 
      </div>
      <div className='form-control'>
      <label> Comments </label>
      <textarea value={comments} onChange={(event)=> setComments(event.target.value)} className='form-control'/> 
      </div>
       
      <button type="submit" className="btn btn-primary"> Submit </button>
      </form>
    </div>
  );
}

export default App;
