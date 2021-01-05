import useScreenWidth from './withScreenWidth-HOC.component';

const smallButton =  <div className={`cursor-pointer capitalize rounded-full text-center text-white text-xs font-medium bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-300 to-blue-300 px-4 py-2`}>reqeust invite</div>
const largeButton =  <div className={`cursor-pointer capitalize rounded-full text-center text-white font-medium bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-300 to-blue-300 px-8 py-2`}>reqeust invite</div>

const Button=()=>{
    const {width} = useScreenWidth();

    return(
    <div>{width >= 768 ? smallButton : largeButton}</div>
    )
}
export default Button