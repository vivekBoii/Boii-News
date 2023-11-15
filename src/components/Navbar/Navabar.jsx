import React from 'react';
import { Link } from 'react-router-dom';

const Navabar = (props) => { 
    
  return (
    <div className='fixed top-0 w-full'>
        <nav className="bg-white border-gray-200">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <div className="hidden md:block text-black flex flex-col items-center text-sm">
                    <div>{new Date().toGMTString().slice(0,3)}</div>
                    <div>{new Date().toGMTString().slice(4,17)}</div>
                </div>
                <Link to="#" className="flex items-center">
                    <img src="./worldNews.png" className="h-8 mr-3" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">THE NEWS</span>
                </Link>
                <div className="flex items-center">
                    <button  type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 8 19">
                            <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                        </svg>
                    </button>
                    <button  type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                        <svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 20 17">
                            <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                        </svg>
                    </button>
                    <button  type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">                                             
                        <svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 18 19">
                            <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
        <nav className="relative bg-white text-black">
            <div className='border-2 border-gray-200'></div>
            <div id='navBarCat' className="max-w-screen-xl overflow-scroll px-4 py-1 mx-auto">
                <div className="flex items-center justify-between">
                    <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                        <li>
                            <Link to="/" className="text-gray-900 hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link to="/business" className="text-gray-900 hover:underline">Business</Link>
                        </li>
                        <li>
                            <Link to="/technology" className="text-gray-900 hover:underline">Technology</Link>
                        </li>
                        <li>
                            <Link to="/entertainment" className="text-gray-900 hover:underline">Entertainment</Link>
                        </li>
                        <li>
                            <Link to="/science" className="text-gray-900 hover:underline">Science</Link>
                        </li>
                        <li>
                            <Link to="/health" className="text-gray-900 hover:underline">Health</Link>
                        </li>
                        <li>
                            <Link to="/sports" className="text-gray-900 hover:underline">Sports</Link>
                        </li>
                        <li>
                            <Link to="/bitcoin" className="text-gray-900 hover:underline">bitcoin</Link>
                        </li>
                        <li>
                            <Link to="/education" className="text-gray-900 hover:underline">Education</Link>
                        </li>
                        <li>
                            <Link to="/environmental" className="text-gray-900 hover:underline">Environmental</Link>
                        </li>
                        <li>
                            <Link to="/crime" className="text-gray-900 hover:underline">Crime</Link>
                        </li>
                    </ul>
                    <div className='flex items-center gap-4 cursor-pointer'>
                        <input type="text" id="search-navbar" value={props.appSearch} onChange={(event)=>{props.appSetSearch(event.target.value)}} className="block w-28 p-2 pl-4 text-sm text-black border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search..."/>
                        <Link to="/search">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='border-2 border-gray-200 transform translate-y-[-15px]'></div>
        </nav>
    </div>
  )
}

export default Navabar