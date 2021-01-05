import Logo from '../images/logo.svg';
import IconHamburger from '../images/icon-hamburger.svg';
import IconClose from '../images/icon-close.svg';
import Button from './button.component';

const navLinks = ['home', 'about', 'contact', 'blog', 'careers'];

const Header =({toggleNav, setToggleNav})=>{

    const handleClick=()=>{
        setToggleNav()
    }
    
    return (
        <div className={`w-full bg-white z-10 shadow-lg flex md:justify-between justify-between items-center px-6 lg:px-32 py-8 lg:py-2`}>
            <img src={Logo} alt="logo"/>
            <div className="hidden md:inline-flex text-gray-500">
                {
                    navLinks.map((navlink, idx)=>(
                        <span className="capitalize text-sm px-4 border-b-2 border-white cursor-pointer hover:border-green-500" key={idx}>{navlink}</span>
                    ))
                }
            </div>
            <div className="hidden md:block"><Button/></div>
            {
                toggleNav
                ?  <img onClick={()=>handleClick()} className="md:hidden cursor-pointer" src={IconClose} alt="icon"/>
                :  <img onClick={()=>handleClick()} className="md:hidden cursor-pointer" src={IconHamburger} alt="icon"/>
            }
        </div>
    )
}

export default Header;