import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import axios from 'axios';

function Sign_in({ lodaer , setcrnt_user }) {
    let navigate = useNavigate()



    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(4, 'Password must be at least 4 characters')
                .required('Password is required')
        }),
        onSubmit: async (values, { resetForm }) => {
            try {

                let res = await axios.post("http://localhost:4500/login", values)
                console.log(res.data.sms);
                if (res.data.sms) {
                    setcrnt_user(res.data)
                    alert("Login Successfully")
                    setTimeout(() => {
                        navigate("/dashboard");
                        resetForm();
                    }, 1500)
                }
                else {
                    alert("invalid email or password")
                }
            }
            catch (error) {
                console.error("Login error:", error);
                alert("Server Error! Try again.");
            }
        }
    });

    return (
        <div className='w-[500px] py-8 border-2 border-white backdrop-blur-[3px] rounded-2xl relative'>

            <div className='w-full flex justify-center gap-6 items-center'>
                <button className='py-2 bg-white cursor-pointer text-green-600 px-5 rounded-xl hover:scale-108 transition-all duration-200 ease-in active:scale-100 font-bold' onClick={() => navigate("/sign_up")} >Sign up</button>
                <button className='py-2 bg-green-500 text-white cursor-pointer px-5 rounded-xl hover:scale-108 transition-all duration-200 ease-in active:scale-100 font-bold'>Login</button>
            </div>

            <h1 className='text-center text-green-500 uppercase font-bold mt-6 text-2xl'>LOGIN <span className='text-white'>Here !</span></h1>

            <form onSubmit={formik.handleSubmit}>
                {/* Email */}
                <div className='w-[80%] relative mx-auto mt-6'>
                    <input
                        type="email"
                        name="email"
                        id='email'
                        placeholder=" "
                        autoComplete='off'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className='
                            w-full peer h-[40px]
                            outline-none px-3
                            bg-white text-black
                            rounded-xl
                            border-2 border-gray-300
                            focus:border-green-600 transition-all duration-200 ease-linear
                        '
                    />
                    <label
                        htmlFor="email"
                        className='
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
                        '
                    >
                        Email
                    </label>
                    {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500 text-sm mt-1 font-semibold">{formik.errors.email}</div>
                    )}
                </div>

                {/* Password */}
                <div className='w-[80%] relative mx-auto mt-7'>
                    <input
                        type="password"
                        name="password"
                        id='password'
                        placeholder=" "
                        autoComplete='off'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className='
                            w-full peer h-[40px]
                            outline-none px-3
                            bg-white text-black
                            rounded-xl
                            border-2 border-gray-300
                            focus:border-green-600 transition-all duration-200 ease-linear
                        '
                    />
                    <label
                        htmlFor="password"
                        className='
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
                        '
                    >
                        Password
                    </label>
                    {formik.touched.password && formik.errors.password && (
                        <div className="text-red-500 text-sm mt-1 font-semibold">{formik.errors.password}</div>
                    )}
                </div>

                <button
                    type="submit"
                    className='w-[80%] h-[40px] hover:scale-105 transition-all duration-200 ease-in-out hover:bg-green-500 active:scale-100 rounded-xl bg-green-600 block mx-auto mt-7 tracking-[2px] font-bold cursor-pointer text-white '
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Sign_in;
