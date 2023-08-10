import React, { useState } from 'react';
import Forgot1 from '../../components/forgot1';

const ForgotComponent = () => {

    return (

        <div className="bg-[url('/BackgroundMobile.png')] md:bg-[url('/Background.png')] bg-cover bg-no-repeat bg-center h-screen">
            <div className='w-full flex justify-center items-center md:justify-start md:ml-32 h-20'>
                <img
                    className="w-[167px] h-[35px] object-cover"
                    alt=""
                    src="/logo-1@2x.png"
                />

            </div>
            <div className="flex flex-col md:flex-row h-screen justify-around  items-center bg-[url('/Background.png')]  font-freesans">
                <Forgot1 />
            </div>

        </div>
    );
};

export default ForgotComponent;
