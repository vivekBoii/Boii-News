import React from 'react';

function Card(props) {

  return (
    <>
        <div className="flex flex-col items-center mx-auto max-w-sm md:max-w-full md:w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 ">
            <img className="object-cover rounded-t-lg h-60 md:h-60 md:w-60 md:rounded-none md:rounded-l-lg" src={props.img} alt='news image'/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl xl:text-2xl font-bold tracking-tight text-gray-900 ">{props.heading}</h5>
                <p className="mb-3 text-sm xl:text-base font-normal text-gray-700 ">{props.desc.slice(0,110)+"...."}</p>
                <a target='_blank' className='text-black hover:underline' href={props.link}>Read More</a>
            </div>
        </div>
    </>
  )
}

export default Card