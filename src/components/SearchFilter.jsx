import React from 'react';

const SearchFilter = ({setSelect,setSearchValue}) => {
    return (
        <div>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search Your Product" onChange={(e)=>setSearchValue(e.target.value)}  />
                    <h3>Filter Your Book</h3>

                    <select defaultValue='All' onClick={(e)=>setSelect(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option >All</option>
                        <option >War</option>
                        <option >Crime</option>
                        <option >Horror</option>
                        <option >Thriller</option>
                        <option >Classic</option>
                    </select>

                </div>
    );
};

export default SearchFilter;


