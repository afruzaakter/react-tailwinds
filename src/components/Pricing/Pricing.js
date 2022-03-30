import React from 'react';
import PriceOption from '../pricingOptions/PriceOption';


const Pricing = () => {
    const pricingOptions = 
    [
        {id:1, name: 'free', price: 100 ,
         benefits:
         ['lifetime free',
          'unlimited deals',
           'localized deals',
           'fantastic deal',
           'crazy deals'
        ]},
        {id:2, name: 'Regular', price: 9.99,  benefits:
        ['everything on free',
         'unlimited deals',
          'localized deals',
          'fantastic deal',
          'crazy deals'
       ]},
        {id:3, name: 'Premium', price: 19.85,  
        benefits:
        ['everything On Regular',
         'unlimited deals',
          'localized deals',
          'fantastic deal',
          'crazy deals'
       ]},
    ]

    
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono selection:'>Best Deals of the Town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolor sequi eaque quia iusto officia accusamus in molestiae quo rem.</p>
    <div className='grid md:grid-cols-3 mt-4 gap-4  '>
        {
            pricingOptions.map(option => <PriceOption key ={option.id} option={option}>

            </PriceOption>  )
        }

 </div>
        </div>
    );
};

export default Pricing;