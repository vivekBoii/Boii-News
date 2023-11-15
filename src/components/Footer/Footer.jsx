import React from 'react'

const Footer = () => {
  return (
    <>  
        <div className='border-[1.5px] mt-10 border-gray-200'></div>
        <footer className="bg-white rounded-lg shadow">
            <div className="w-full max-w-screen-xl p-4 flex flex-col md:flex-row items-center justify-between">
                <span className="text-sm text-black sm:text-center ">© 2023 <a href="" className="text-red-800 hover:underline">THE NEWS™</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
            </div>
        </footer>
    </>
  )
}

export default Footer