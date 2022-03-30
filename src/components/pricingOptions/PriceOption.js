import React from 'react';
import Benefit from '../benefit/Benefit';
import { ArrowRightIcon } from '@heroicons/react/solid'

const PriceOption = (props) => {
    // console.log(props.option);
    const {name,price,benefits} = props.option;
    return (
        <div className='bg-white rounded-lg p-4'>
            <h1 className='bg-indigo-300 py-2 rounded text-xl font-bold'>{name}</h1>
            <p>
            <span className='text-4xl font-bold'>${price}</span>
            <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
           <div>
           <h3 className='text-2xl font-bold text-left'>Benefits: </h3>
           {
              benefits.map(benefit =><Benefit benefit={benefit} >

              </Benefit> ) 
           }
           </div>
           <button className='bg-green-500 p-2 w-full rounded text-white font-bold flex justify-center   gap-1'>Buy Now <ArrowRightIcon className='w-6 h-6 '></ArrowRightIcon> </button>
        </div>
    );
};

export default PriceOption;