import iconOnboarding from '../../images/icon-onboarding.svg';
import iconApi from '../../images/icon-api.svg';
import iconBudgeting from '../../images/icon-budgeting.svg';
import iconOnline from '../../images/icon-online.svg';

const icons = {
    onboarding: iconOnboarding,
    api: iconApi,
    budgeting: iconBudgeting,
    online: iconOnline
}

const AboutItem =({title, subtitle, imageUrl})=>{
    return(
        <div className="w-full sm:max-w-sm md:w-64 lg:w-56 text-center lg:text-left flex flex-col items-center lg:items-start mb-12">
            <img className="w-16 h-16 mb-8" src={icons[imageUrl]} alt="icon"/>
            <div className="w-full">
                <div className="text-blue-900 text-2xl mb-8">{title}</div>
                <div className="text-gray-500 text-md lg:text-sm">{subtitle}</div>
            </div>
        </div>
    )
}

export default AboutItem;


