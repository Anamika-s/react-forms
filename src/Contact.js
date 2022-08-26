import React from 'react'
import   {Formik, Form, Field} from "formik";
import './Contact.css'
export const ContactForm = (errors, touched) => {
  console.log(errors)
  return (
<div>Contact 

<Form>
<div className="form-group">
  
<small className='text-danger'> {errors.errors.name} </small> 
<label> Name </label>
 
  <Field type="text" name="name" className="form-control"/>
 
</div>

<div className="form-group">
  <label> Age </label> 
  <Field type="number" name="age" className="form-control"/>
  <small> {errors.errors.age} </small> 
</div>
<div className="form-group">
  <label> Mobile </label> 
  <Field type="text" name="mobile" className="form-control"/>
  <small> {errors.errors.mobile} </small> 
</div>

<div className="form-group">
  <label> Name </label> 
  <Field type="email" name="email"/>
  <small className='text-danger'> {errors.errors.email} </small> 
</div>

<div className="form-group">
  <label> Password </label> 
  <Field type="password" name="password"/>
</div>

<div className="form-group">
  <label> Gender </label> 
  Male <Field type="radio" name="gender" value="male"/>
  Female <Field type="radio" name="gender" value="female"/>
</div>
<div className="form-group">
<label> Select State </label>
<Field as="select" name="state">
  <option> Delhi </option>
  <option> UP </option>
  <option> HP </option>
  
</Field>
</div>

<div className="form-group">
  <Field type="date" name="doj"></Field>
</div>

<div className="form-group">
 
<Field as="textarea" name="comments" rows="10" columns="20"></Field>
</div>

<button> Submit </button>
</Form>

    </div>
  )
}
