import darkpng from '../assets/dark-mode-button.png'
import lightpng from '../assets/light-mode-button.png'
import React,{useEffect} from 'react';


export default function DarkMode() {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  const element = document.documentElement;

  useEffect(() => {
    if(theme === "dark") {
      element.classList.add("dark")
      localStorage.setItem("theme",  "dark")
    }
    else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "dark")
    }
  },[theme])

  const changetheme = () => {
    if(theme === "light") {
      setTheme('dark')
    }
    else {
      setTheme("light")
    }
  }
  return (
    <div className=' relative'>
        <img src={darkpng} alt="" onClick={changetheme} className={`w-12 cursor-pointer drop-shadow-custom  transition-all duration-300   absolute right-0 z-10 ${theme !== "dark" ? "opacity-0" : "opacity-100"}`}/>
        
        <img src={lightpng} alt="" onClick={changetheme} className='w-12 drop-shadow-custom cursor-pointer  transition-all duration-300 ' />
    </div>
  )
}

