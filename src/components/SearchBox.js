 import React from 'react';

 const SearchBox = ({ searchfield, searchChange }) => {
     return (
         <div className='pa2'>
            <input 
                className='pa2 ba b--red bg-light-yellow'
                type='search' 
                placeholder='Search Robots'
                onChange={ searchChange }
                />
        </div>
     ) 
 }

 export default SearchBox;
 