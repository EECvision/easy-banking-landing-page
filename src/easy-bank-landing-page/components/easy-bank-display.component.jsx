import {useState} from 'react';

import Header from './header.component';
import Banner from './banner.component';
import AboutMenu from './about-section/about-menu.component';
import ArticleMenu from './article-section/article-menu.component';
import Footer from './footer.component';
import useScreenWidth from './withScreenWidth-HOC.component';

const EasyBankDisplay =()=>{

    const {width} = useScreenWidth();
    const [toggleNav, setToggleNav] = useState(false);
    const handleSetToggleNav=()=>{
        setToggleNav(!toggleNav)
    }

    const viewWithToggleNavOn = (
        <div className="w-full overflow-hidden flex flex-col items-center pb-8">
            <Header toggleNav={toggleNav} setToggleNav={handleSetToggleNav}/>
            <Banner toggleNav={toggleNav}/>
        </div>
    )

    const viewWithToggleNavOff = (
        <div className="w-full overflow-hidden flex flex-col items-center">
            <Header toggleNav={toggleNav} setToggleNav={handleSetToggleNav}/>
            <Banner toggleNav={toggleNav}/>
            <AboutMenu/>
            <ArticleMenu/>
            <Footer/>
        </div>
    )
    return (
        <div>
            {
                toggleNav && width <= 768
                ? viewWithToggleNavOn
                : viewWithToggleNavOff
            }
        </div>
    )
}

export default EasyBankDisplay;