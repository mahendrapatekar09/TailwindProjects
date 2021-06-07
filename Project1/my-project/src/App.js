import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App"> 
    back
    <div class="pt-1 mt-12 bg-gray-500 text-white hover:bg-green-200">
      <ul class="flex flex-row-reverse  space-x-4 space-x-reverse mx-20 ">
    <img  src="/Project1/my-project/img/2.png"></img>
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
    
<button class="py-2 px-4 mt-4 font-semibold rounded-full shadow-md text-white bg-green-500 hover:bg-green-700 border-green-700 hover:text-black     ">
  Click me
</button>

<button class="py-3 px-4 mt-4 font-bold rounded-full shadow-lg text-black bg-indigo-500 hov hover:bg-indigo-800 hover:text-white">
SUBMIT
</button>
<div class="max-w-md mx-auto mt-7 bg-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="1.jpeg" alt="Man looking at item at a store"></img>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>

    </div>
  );
}

export default App;
