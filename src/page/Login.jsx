import React, { useEffect, useState } from 'react';
import '../assets/css/login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {

     
    const [input, setInput] = useState({});
    const [errors, setErrors] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const handleInput = (e)=>{
        setInput(prevState => ({...prevState, [e.target.name] : e.target.value}))
        console.log(input);
    }

    const handleLogin = (e)=>{
        e.preventDefault()
        setLoading(true)
        axios.post('http://localhost:8000/api/auth/login', input).then(res=>{
            // save data localStorage
            localStorage.email = res.data.email
            localStorage.name = res.data.name
            localStorage.number = res.data.number
            localStorage.photo = res.data.photo
            localStorage.token = res.data.token

            setLoading(false)
            // navigate('/admin');
            window.location.reload();
        }).catch(errors =>{
            setLoading(false)
            if (errors.response.status == 422) {
                setErrors(errors.response.data.errors)
            }
        })
    }

    // const navigate = useNavigate();

    // useEffect(() => {
    //   if (!localStorage.token) {
    //     navigate('/login');
    //   } else {
    //     navigate('/dashboard')
    //     window.location.reload();
    //   }
    // }, [navigate]);

    return (
        <div>
           
            <div className="wrapper">
            <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>

            </div>
            <div className="text-center mt-4 name">
                EduTrack
            </div>
            <form className="p-3 mt-3">
                <div className="form-field d-flex align-items-center">
                
                <input type={"text"} name={"email"} value={input.email} onChange={handleInput}  id={"email"} placeholder="Enter your email" />                
                </div>
                <p className={'login-error-msg text-danger text-center'}> <small>{errors.email != undefined? errors.email[0]:null}</small> </p>
                <div className="form-field d-flex align-items-center">                
                <input type={"password"} name={"password"} onChange={handleInput} value={input.password}   id={"pwd"} placeholder="Password" />                
                </div>
                <p className={'login-error-msg text-danger text-center'}> <small>{errors.password != undefined? errors.password[0]:null}</small> </p>
                <button onClick={handleLogin} className="btn mt-3" dangerouslySetInnerHTML={{ __html:isLoading?'<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Login...':'Login' }} />
            </form>
            <div className="text-center fs-6">
                <a href="#">Forget password?</a> or <Link to="/register">Sign up</Link>
            </div>
            </div>


        </div>
    );
};



export default Login;