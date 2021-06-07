import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App"> 
    
    <div class="pt-1 mt-12 bg-gray-500 text-white hover:bg-green-200">
      <ul class="flex flex-row-reverse  space-x-4 space-x-reverse mx-20 ">
 <div class="w-8 h-8 rounded hover:bg-indigo-400  ">
 <img  src="logo192.png "></img>
 </div>

        <li >
          <a class="hover:text-purple-900 " >EMAIL</a>
          </li> 
          <li >
          <a class="hover:text-purple-900 ">CONTACT</a>
          </li> 
          <li >
          <a class="hover:text-purple-900 ">ABOUT</a>
          </li> 
          <li >
          <a class="hover:text-purple-900">HOME</a>
          </li> 
        </ul> 

    </div>
    
<button class="  py-2 px-4 mt-4 font-semibold rounded-full  shadow-md text-white bg-green-500 hover:bg-green-700  hover:text-black focus:outline-none focus:ring focus:ring-offset-2 hover:translate-y-3 transform transition focus:ring-green-700 focus:ring-opacity-50   ">
  Click me
</button>

<button class="py-3 px-4 mt-4 font-bold rounded-full shadow-lg text-black bg-indigo-500 hov hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring focus:ring-offset-2 hover:translate-y-3 transform transition focus:ring-indigo-700 focus:ring-opacity-50 ">
SUBMIT
</button>
<div class="max-w-md mx-auto dark:bg-gray-700 mt-7 my-auto bg-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex ">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="1.jpeg" alt="Man looking at item at a store"></img>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold dark:text-green-500">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500  dark:bg-gray-500 dark:text-white">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>


    </div>
  );
}

export default App;
