import react from "react"
import useDarkMode from "../hooks/useDarkMode";
export default function nav(){
    const[colorTheme, setTheme]= useDarkMode()
    return{
        <div class= "fixed top-0 bg-blue-500 w-full p-5 dark bg-yellow-900">
        <span onClick={()=>setTheme(colorTheme)} class="w- 10 h-10 bg-indigo-800 block rounded full shadow-lg cursor-pointer flex items-center justify-center"
        {
            colorTheme==="Light"?
            
        }
        </span>
        </div>

    }:
}