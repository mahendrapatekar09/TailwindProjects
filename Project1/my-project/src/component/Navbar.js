import React from 'react'

export default function Navbar(props) {
  return (
    
        <nav class ={`pt-1 mt-12 bg-${props.dark} text-white navbar-${props.dark} hover:text-red-500`}>
  
  <ul class="flex flex-row-right  space-x-4 space-x mx-10 ">
    <button  class="flex">
      
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>
</button>
    
<div class="w-8 h-8 rounded hover:bg-indigo-400  ">

<img  src="logo192.png "></img>


</div  >

    <li >
      <a class="hover:text-purple-900 ">HOME</a> 
      </li> 
      <li >
      <a class="hover:text-purple-900 ">CONTACT</a>
      </li> 
      <li >
      <a class="hover:text-purple-900 ">ABOUT</a>
      </li> 
      <li >
      <a class="hover:text-purple-900">EMAIL</a>
      </li> 
      <form class="flex ">
        <input class="form-control me-2 bg-gray-300 absolute   " type="search"placeholder="search "aria-label='search'/>
        <span>
        <button class='border-2-black-500 absolute ml-48 rounded-full' type='submit '>search</button>
        </span>
    </form>
<button class="absolute top-5 right-5 w-20 h-10 md:h- md:w-16 rounded-2xl bg-gray-500  mt-5 flex item-center transition duration-300 focus:outline-none
">
  <div id='switch toggle'
  class="w-6 h-6 md:h-7 mt-1 md:w-7 relative rounded-full transition duration-500 transform bg-yellow-500 translate-x-2 p-1 text-white"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 "  fill="none" viewBox="0 0 30 30" stroke="currentColor " stroke-width="3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>
  </div>

</button>

  

    </ul> 
    
  
    <div class="flex justify-center">
  <div class="form-check form-switch">
    <input class="form-check-input appearance-none w-15 ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label class="form-check-label inline-block text-gray-800" for="flexSwitchCheckDefault">Default switch checkbox input</label>
  </div>
</div>
    
    </nav>
   


  )
}
