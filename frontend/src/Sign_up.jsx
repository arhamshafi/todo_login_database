import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import axios from 'axios';

function Sign_up({ lodaer , setcrnt_user }) {
    const navigate = useNavigate();
   


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First name is required'),
            lastName: Yup.string().required('Last name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            phone: Yup.string()
                .matches(/^[0-9]{11}$/, 'Phone must be exactly 11 digits')
                .required('Phone number is required'),
            password: Yup.string()
                .min(4, 'Password must be at least 4 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm password is required'),
        }),
        onSubmit: async (values, { resetForm }) => {

            try {

                let res = await axios.post("http://localhost:4500/sign_up", values)
                if(res.data.sms){

                    setcrnt_user(res.data)
                    resetForm()
                    alert( res.data.message )
                    setTimeout(()=>{
                        navigate("/dashboard")
                        
                    },1500)
                }
                else{
                    alert("This Email is Already Exist !! Try Again ")
                }

            }
            catch (error) {
                console.error("Signup error:", error);
                alert("Server Error! Try again.");
            }

        }
    });

    const inputClass = `
        w-full peer h-[40px] outline-none px-3 bg-white text-black
        rounded-xl border-2 border-gray-300
        focus:border-green-600 transition-all duration-200 ease-linear
    `;

    const labelClass = `
        absolute left-3 text-black font-bold tracking-[2px]
        transition-all duration-200 ease-in
        top-2 text-base
        peer-placeholder-shown:top-2
        peer-placeholder-shown:text-base
        peer-focus:top-[-22px]
        peer-focus:text-sm
        peer-focus:text-green-500
        peer-not-placeholder-shown:top-[-22px]
        peer-not-placeholder-shown:text-sm
        peer-not-placeholder-shown:text-green-500
    `;

    const renderField = (name, type, label) => (
        <div className='w-[80%] relative mx-auto mt-6'>
            <input
                type={type}
                name={name}
                id={name}
                placeholder=" "
                autoComplete='off'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
                className={inputClass}
            />
            <label htmlFor={name} className={labelClass}>{label}</label>
            {formik.touched[name] && formik.errors[name] && (
                <div className="text-red-500 text-sm mt-1 font-semibold">{formik.errors[name]}</div>
            )}
        </div>
    );

    return (
        <div className='w-[500px] py-8 border-2 border-white backdrop-blur-[3px] rounded-2xl relative'>
            <div className='w-full flex justify-center gap-6 items-center'>
                <button className='py-2 bg-green-500 text-white cursor-pointer px-5 rounded-xl hover:scale-108 transition-all duration-200 ease-in active:scale-100 font-bold'  >Sign up</button>
                <button className='py-2 bg-white text-green-600 cursor-pointer px-5 rounded-xl hover:scale-108 transition-all duration-200 ease-in active:scale-100 font-bold' onClick={() => navigate('/')}>Login</button>
            </div>

            <h1 className='text-center text-green-500 uppercase font-bold mt-6 text-2xl'>
                CREATE <span className='text-white'>ACCOUNT</span>
            </h1>

            <form onSubmit={formik.handleSubmit}>
                {renderField('firstName', 'text', 'First Name')}
                {renderField('lastName', 'text', 'Last Name')}
                {renderField('email', 'email', 'Email')}
                {renderField('phone', 'text', 'Phone')}
                {renderField('password', 'password', 'Password')}
                {renderField('confirmPassword', 'password', 'Confirm Password')}

                <button
                    type="submit"
                    className='w-[80%] h-[40px] hover:scale-105 transition-all duration-200 ease-in-out hover:bg-green-500 active:scale-100 rounded-xl bg-green-600 block mx-auto mt-7 tracking-[2px] font-bold cursor-pointer text-white'
                >
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default Sign_up;
