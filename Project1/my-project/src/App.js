import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    
    <div class="p-6 max-w-sm mx-auto mt-12 bg-red-300 rounded-xl shadow-md flex items-center space-x-4">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/Project1/img/2.png" alt="ChitChat Logo"></img>
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>
       
<div class="py-8 px-8 max-w-sm mx-auto mt-6 bg-gray-300 rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="/Project1/img/WhatsApp Image 2021-06-06 at 2.17.34 AM (1).jpeg" alt="Woman's Face"></img>
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-red-500 font-semibold">
        Mahendra patekar
      </p>
      <p class="text-purple-700 font-medium">
      Web developer
      </p>
    </div>
    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
  </div>
</div>
    </div>
  );
}

export default App;
