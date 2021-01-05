import imageConfetti from '../../images/image-confetti.jpg';
import imagePlane from '../../images/image-plane.jpg';
import imageRestaurant from '../../images/image-restaurant.jpg';
import imageCurrency from '../../images/image-currency.jpg';

const images = {
    confetti: imageConfetti,
    plane: imagePlane,
    restaurant: imageRestaurant,
    currency: imageCurrency
}

const ArticleItem =({imageUrl, author, title, subtitle})=>{
    return(
        <div className="w-full sm:max-w-sm md:w-64 lg:w-56 flex flex-col items-center rounded shadow-lg mb-12">
            <img className="w-full md:h-40 rounded-t" src={images[imageUrl]} alt="pic"/>
            <div className="py-12 px-6 lg:p-6 h-64">
                <div className="text-xs text-gray-500 mb-1">{author}</div>
                <h1 className="text-lg text-gray-900 leading-tight py-2  mb-2">{title}</h1>
                <p className="text-md md:text-xs text-gray-500">{subtitle}</p>
            </div>
        </div>
    )
}

export default ArticleItem;