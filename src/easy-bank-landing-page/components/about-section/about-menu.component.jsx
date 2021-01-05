import React,{useState} from 'react';
import aboutData from './about-data.json';
import AboutItem from './about-item.component';

const AboutMenu =()=>{
    const [data] = useState(aboutData);

    return (
        <div className="w-full flex flex-col items-center lg:items-start justify-evenly bg-purple-100 px-6 lg:px-32 py-16">
            <div className="w-full max-w-md px-4 lg:px-0 text-center lg:text-left flex flex-col items-start  justify-center mb-12">
                <h1 className="w-full text-blue-900 text-4xl mb-8">Why choose Easybank?</h1>
                <p className="text-gray-500 text-lg">
                    We leverage Open Banking to turn your bank account into your financial hub. Control 
                    your finances like never before.
                </p>
            </div>
            <div className="w-full flex items-center lg:justify-between justify-evenly flex-wrap">
                {
                    data.map(({id, ...otherProps})=>{
                        return <AboutItem key={id} {...otherProps}/>
                    })
                }
            </div>
        </div>
    )
}

export default AboutMenu;

