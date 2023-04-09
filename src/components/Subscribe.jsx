import React from 'react';

const Subscribe = () => {
    return (
        <div className='w-full bg-emerald-50 p-20'>
            <div className='container'>
                <div>
                    <h3 className='text-3xl text-center font-bold animate__animated animate__backInUp animate__delay-2s'>Subscribe For More Information</h3>

                    <div className='text-center'>
                    <input className="animate__animated animate__backInUp animate__delay-2s w-3/6 shadow appearance-none border rounded py-2 mt-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Input Your Name" />
                    </div>

                    <div className='animate__animated animate__backInUp animate__delay-3s mt-4 text-center'><button className='bg-gradient-to-r bg-transparent border-2  px-2 py-1 hover:bg-white transition-all text-white-700 font-medium rounded'>Subscribe</button>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default Subscribe;