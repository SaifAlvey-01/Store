import React from 'react';
import Style from './searchStyle.module.css'
const Search = () => {
    return (
        <React.Fragment>
            <div className={Style.inputcontainer}>
            <input 
                className=' w-[400px] h-[44px] rounded-lg border-[0.8px] border-solid border-gainsboro '
                placeholder='Search'
                type="text"
            />   
            </div>
        </React.Fragment>
    );
}

export default Search;