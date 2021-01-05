import Button from './button.component';
import iconFacebook from '../images/icon-facebook.svg';
import iconInstagram from '../images/icon-instagram.svg';
import iconYoutute from '../images/icon-youtube.svg';
import iconTwitter from '../images/icon-twitter.svg';
import iconPinterest from '../images/icon-pinterest.svg';
import {ReactComponent as Logo} from '../images/logo.svg';

const icons = [iconFacebook, iconYoutute, iconTwitter, iconPinterest, iconInstagram];
const footerLinksA = ['About Us','Contact','Blog'];
const footerLinksB = ['Careers','Support', 'Privacy Policy'];

const Footer =()=>{
    return(
        <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-32 py-8 bg-blue-900 text-white">
            <div className="flex flex-col items-center justify-center my-6">
                <Logo className="mb-6 bg-white" />

                <div className="inline-flex">
                    {
                        icons.map((icon,idx)=>(
                            <img className="px-2 py-1" key={idx} src={icon} alt="icon" />
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col items-center justify-center lg:items-start text-sm">
                    {
                        footerLinksA.map((link,idx)=>(
                            <span className="mb-2" key={idx}>{link}</span>
                        ))
                    }
            </div>
            <div className="flex flex-col items-center justify-center lg:items-start text-sm">
                    {
                        footerLinksB.map((link,idx)=>(
                            <span className="mb-2" key={idx}>{link}</span>
                        ))
                    }
            </div>            
            <div className="w-full max-w-md flex flex-col items-center lg:items-end my-6 justify-between">
                    <Button/>
                    <div className="mt-6 text-sm">© Easybank. All Rights Reserved</div>
            </div>
        </div>
    )
}

export default Footer;
