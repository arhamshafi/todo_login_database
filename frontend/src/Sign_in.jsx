import React from 'react'

function Sign_in() {
    return (
        <div className='w-[500px] py-5 bg-white/10 backdrop-blur-[3px] rounded-2xl relative'>
            <h1 className='text-white font-bold text-3xl uppercase mt-0 tracking-[2px] text-center'>
                Sign <span className='text-green-600'>in</span>
            </h1>

            <div className='w-[80%] relative mx-auto mt-14'>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" "
                    autoComplete='off'
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
            </div>
            <div className='w-[80%] relative mx-auto mt-7'>
                <input
                    type="password"
                    name="email"
                    id="email"
                    placeholder=" "
                    autoComplete='off'
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
            </div>
            <p className='top-57 right-14  text-blue-300 cursor-pointer absolute hover:underline w-max h-max mx-auto'>sign_up</p>
            <button className='py-2 px-5 transition-all duration-200 ease-in-out hover:bg-green-500 active:scale-95 rounded-xl bg-green-600 block mx-auto mt-10 tracking-[2px] font-bold cursor-pointer text-white '>Login</button>

        </div>
    )
}

export default Sign_in
