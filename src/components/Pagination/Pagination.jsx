import React from 'react';

const Pagination = (props) => {

  const previousPage = () =>{
    if(props.page!=1){
      props.setPage(props.page-1);
    }
  }
  
  const nextPage = () =>{
    if(props.page<Math.ceil(props.article/props.numArticle)){
      props.setPage(props.page+1);
    }
  }

  return (
    <div className='w-4/5 mx-auto flex justify-center'>
        <div className="flex">
            <button style={{backgroundColor:props.page==1?"#f05454":"",color:props.page==1?"white":""}} onClick={previousPage} className="flex items-center justify-center px-4 h-10 mr-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ">
                <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                </svg>
                Previous
            </button>
            <button style={{backgroundColor:props.page>=Math.ceil(props.article/props.numArticle)?"#f05454":"",color:props.page>=Math.ceil(props.article/props.numArticle)?"white":""}} onClick={nextPage} className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ">
                Next
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
        </div>
    </div>
  )
}

export default Pagination;