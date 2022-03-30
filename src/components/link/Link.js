import React from 'react';

const Link = (props) => {
    const {name,link} = props.route;
    return (
        
                 <li className='m-18 p-4 font-sans'>
                 <a href={link}>{name}</a>
                 </li>
        
    );
};

export default Link;