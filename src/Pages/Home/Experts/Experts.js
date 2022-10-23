import React from 'react';
import expert1 from '../../../Images/Experts/expert-1.jpg';
import expert2 from '../../../Images/Experts/expert-2.jpg';
import expert3 from '../../../Images/Experts/expert-3.jpg';
import expert4 from '../../../Images/Experts/expert-4.jpg';
import expert5 from '../../../Images/Experts/expert-5.jpg';
import expert6 from '../../../Images/Experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts =[
    {id:1, name:'Will Smith', img: expert1},
    {id:2, name:'Chris Rock', img: expert2},
    {id:3, name:'Dwayne Rock', img: expert3},
    {id:4, name:'Messi', img: expert4},
    {id:5, name:'Ronaldo', img: expert5},
    {id:6, name:'Jackson', img: expert6},
] 

const Experts = () => {
    return (
        <div id='experts' className='container '>
            
            <h2 className='text-info text-center'>Experts</h2>
            <div className="row text-center d-flex justify-center">
                {
                    experts.map(expert=><Expert
                    key={expert.id}
                    expert = {expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;