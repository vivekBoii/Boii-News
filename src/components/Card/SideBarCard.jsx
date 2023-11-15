import React from 'react';

function Card(props) {

  return (
    <>
        <div className="mx-auto flex flex-col items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 ">
            <img className="object-cover rounded-t-lg h-50 md:h-32 md:w-28 md:rounded-none md:rounded-l-lg" src={props.img} alt='news image'/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 ">{props.heading}</h5>
                <a target='_blank' className='text-black hover:underline' href={props.link}>Read More</a>
            </div>
        </div>
    </>
  )
}

export default Card