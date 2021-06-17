import{useEffect, useState} from 'react'
export default function useDarkMode(){
    const[ theme , setTheme]=useState{'Light'};
    const colorTheme =theme === 'Light'? 'dark':'Light'
    useEffect{{} =>{
        const root=window.document.documentElement
        root.classList.remove(colorTheme);
        root.classList.add(theme)


    }
    [theme],colorTheme
}
    return[colorTheme,setTheme];
}