import { Formik, Form , Field} from "formik"
import * as yup from "yup";
import { ContactForm } from "./Contact";

export const EmployeeForm =() =>
{

  const UserSchema = yup.object().shape(
    {
  name :yup.string().required('*').min(5,"Min 5 characters are needed").max(20,"Max 20 characters are needed"),
age : yup.number().required("Age is must").min(20,"Min Age is 20").max(30,"Max Age is 30"),
email : yup.string().required("EMail is must").email("Format not correct"),
mobile:yup.string().required("Mobile is must")
    }
  )
  return(
 <>
 <div className="container">
<Formik
  initialValues={{
    name :"",
    age:0,
    email:"",
    mobile:"",
    password:"",
    gender:"",
    state:"",
    doj:"",
    comments:""

    }}
    validationSchema ={UserSchema}
    onSubmit= {values=>
    {
      console.log(values)
    }}
    component={ContactForm}/>

</div>
 </>
  )
}