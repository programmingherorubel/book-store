import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import SearchFilter from '../components/SearchFilter';
import BooksPagination from './BooksPagination';
import Footer from '../components/Footer';

const Books = () => {
    const [select,setSelect]=useState('All')
    const [books,setBooks] = useState([])
    const [searchValue,setSearchValue] = useState('')
    
    // pagination 
    const [currentPage,setCurrentPage]= useState(1)
    const [postPerPage,setPostPerPage]= useState(6)
    
 
   
    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => {
            setBooks(data.filter(prdct => {
                if(select === 'All'){
                    if(searchValue){
                        return prdct.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
                    }else{
                        return prdct 
                    }
                }else{
                    return prdct.category === select
                }
            }))
            
        })
    },[select,searchValue])
    

    
    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    let currentData = books.slice(firstPostIndex,lastPostIndex)
   
    return (
        <>
        <div className='container mx-auto'>
            <div className='container mx-auto py-12'>
                <div className='grid grid-cols-1 md:grid-cols-12'>
                    {/* part ONe  */}
                    <div className='md:col-span-3 sm:col-span-12 grid-cols-1 sticky'>
                        <SearchFilter setSelect={setSelect} setSearchValue={setSearchValue}/>
                    </div>
                    {/* part Two  */}
                    <div className='md:col-span-9 grid-cols-1'>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {
                                currentData.map(singleBook => <Card singleBook={singleBook} key={singleBook.length}></Card>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <BooksPagination postPerPage={postPerPage} totalpost={books.length} setCurrentPage={setCurrentPage} />
        </div>
        <Footer/>
        </>
    );
};

export default Books;