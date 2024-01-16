import { useEffect,useState } from "react"

const useWindowSize=()=>{
const [windowSize,setWindowSize]=useState(
{
width:undefined,
heigth:undefined
}
);
useEffect(()=>{
const handleWindow=()=>{
    setWindowSize({
width:window.innerWidth,
heigth:window.innerHeight
})};
handleWindow();

window.addEventListener('resize',handleWindow);



return ()=>{    window.removeEventListener('resize',handleWindow); }

},[])
return windowSize;
}
export default useWindowSize ;