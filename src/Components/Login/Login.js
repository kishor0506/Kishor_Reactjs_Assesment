import React, { useEffect } from 'react'
// import './login.css';
import { Formik, Form } from 'formik';
import { TextField } from '../../InputField/TextField'
import * as Yup from 'yup';
import {useHistory} from 'react-router-dom'
export default function Login() {
    const history = useHistory();
    const validate = Yup.object({
      email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
    })
    return (
      <Formik
        initialValues={{
          email: '',
          password: '',
         
        }}
        validationSchema={validate}
        onSubmit={values => {
          console.log(JSON.stringify(values))
          sessionStorage.setItem('login',true)
        //   axios.post(`${ApiUrl}Student`,values).then((res)=>{
        //     Swal.fire('Good JOb',"","success")
        //     
        //   }).catch((err)=>Swal.fire(err,"","error")
        history.push('/ViewStudent')

        }
        }
      >
        {formik => (
              <div className="container mt-3">
                  <div className="row">
                      <div className="col-md-5">
                          <h1 className="my-4 font-weight-bold .display-4">Login</h1>
                          <Form>
                              <TextField label="Email" name="email" type="email" />
                              <TextField label="password" name="password" type="password" />
                              <button className="btn btn-dark mt-3" type="submit">Login</button>
                              <button className="btn btn-danger mt-3 ml-3" type="reset">Cancel</button>
                          </Form>
                      </div>
                      <div className="col-md-7 my-auto">
                          {/* <img className="img-fluid w-100" src={rocketImg} alt=""/> */}
                      </div>
                  </div>
              </div>
        )}
      </Formik>
    )
 




    return (
        <div>
            <div class="login">
    <input type="text" placeholder="Username" id="username"/>  
  <input type="password" placeholder="password" id="password"/>  
  <a href="#" class="forgot">forgot password?</a>
  <input type="submit" value="Sign In"/>
</div>
<div class="shadow"></div>

        </div>
    )
}
