import React from 'react';
import img1 from '../img/team-1.png'
import img2 from '../img/team-2.png'
import img3 from '../img/team-3.png'
import img4 from '../img/team-4.png'

const Team = () => {
    
    const teamObject = [
        {
            id:1,
            name:'Dabid Henry',
            img:img1,
            title:'AUTHOR,',
            description:'Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit.'
        },
        {
            id:2,
            name:'Jennifer Doe',
            img:img2,
            title:'DESIGNER,',
            description:'Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit.'
        },
        {
            id:3,
            name:'James Coleman',
            img:img3,
            title:'CONSULTANT,',
            description:'Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit.'
        },
        {
            id:4,
            name:'Linda Heyes',
            img:img4,
            title:'SUPPORT,',
            description:'Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit.'
        },
    ]
    return (
        <div className='container mx-auto mt-10 mb-10'>
            <div className='text-center'>
                <h2 className='text-gray-500 text-3xl font-bold'>Authors of the month</h2>
                <h4 className='text-gray-400 text-sm font-normal text-center mt-5'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-12  '>
                {
                    teamObject.map(team => <div key={team.length} className='mt-12 text-center mx-auto'>
                        <img src={team.img}  className='text-center w-[200px]'/>

                        <h4 className='text-gray-400 text-gl text-md font-normal text-center mt-3'>
                            {team.title}
                        </h4>
                        <h4 className='text-gray-400 text-xl text-md font-normal text-center mt-3'>
                            {team.name}
                        </h4>

                        <hp className='text-gray-400 text-sm text-md font-normal text-center mt-3'>
                            {team.description}
                        </hp>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Team;