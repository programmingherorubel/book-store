import React from 'react';

const BooksPagination = ({postPerPage,totalpost,setCurrentPage}) => {
    const page = []
    for (let i=1; i<=Math.ceil(totalpost/postPerPage);i++){
        page.push(i)
    }
    
    return (
        <div className='container mx-auto text-center'>
            <ul className='flex gap-5 text-center justify-center'>
                {
                    page.map(singlepage => <li key={singlepage.length} className='w-[30px] p-1 h-[30px] rounded-[50%] text-white bg-blue-600' onClick={()=>setCurrentPage(singlepage)}>{singlepage}</li>)
                }
            </ul>
        </div>
    );
};

export default BooksPagination;