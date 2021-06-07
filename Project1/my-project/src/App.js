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

<div>
  <img src="/img/2.png w-15 h-15"></img>
</div>
    
    </div>
  );
}

export default App;
