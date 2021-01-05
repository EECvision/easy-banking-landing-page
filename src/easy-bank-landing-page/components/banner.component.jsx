import React from 'react';

import Button from './button.component';
import BgIntroDesktop from '../images/bg-intro-desktop.svg';
import BgIntroMobile from '../images/bg-intro-mobile.svg';
import MockUps from '../images/image-mockups.png';
import NavDropdown from './nav-dropdown.component';
import useScreenWidth from './withScreenWidth-HOC.component';


const Banner =({toggleNav})=>{
    const {width} = useScreenWidth();
    
    const middleScreenSize = 768;

    const desktopBackground = (
        <div className="relative md:absolute w-full md:w-2/4 lg:w-2/3 flex justify-center bg-center bg-no-repeat bg-cover transform -translate-y-32 lg:-translate-y-20 translate-x-0 lg:translate-x-56 " style={{backgroundImage:`url(${BgIntroDesktop})`}}>
            <img className="w-full lg:w-3/4 transform translate-y-0 lg:translate-y-20 " src={MockUps} alt="mockup"/>
        </div>
    )
    
    const mobileBackground = (
        <div className={`relative  ${toggleNav ? 'mb-12' : null} lg:absolute w-full lg:w-2/3  flex justify-center bg-center bg-no-repeat bg-cover transform ${toggleNav ? '-translate-y-0' : '-translate-y-16'} lg:-translate-y-20 translate-x-0 lg:translate-x-1/2 `} style={{backgroundImage:`url(${BgIntroMobile})`}}>
            {
                toggleNav && width <= middleScreenSize
                ?   <NavDropdown/>
                :  <img className={`w-full lg:w-3/4 transform ${toggleNav ? '-translate-y-32' : '-translate-y-20'} lg:translate-y-20 `} src={MockUps} alt="mockup"/>
            }
        </div>
    )
    

    return(
        <div className={`relative w-full bg-gray-100 md:py-32 flex flex-col justify-center items-end ${ toggleNav && width <= 768 ? 'bg-gradient-to-b from-blue-900 to-blue-100' : ''} `}>
            {
                width >= middleScreenSize
                ? desktopBackground
                : mobileBackground
            }
            <div className="w-full flex md:justify-start justify-center lg:justify-between items-center px-6 lg:pl-32 lg:pr-12">
                <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-sm flex flex-col items-center md:items-start text-center md:text-left ">
                    <h1 className="text-blue-900 text-5xl mb-6">Next generation <br/> digital banking</h1>
                    <p className="text-gray-500 mb-6">
                        Take your financial life online. Your Easybank account will be a one-stop-shop 
                        for spending, saving, budgeting, investing, and much more.
                    </p>
                    <Button/>
                </div>
            </div>
        </div>
    )
}

export default Banner;



