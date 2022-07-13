import React ,{useState} from 'react';


export default function Textform
    () {
        const handleupclick =() =>{
          //  console.log("uppercase was clicked " +text);
            let newtext=text.toLocaleUpperCase();
            setText(newtext);
        }
        const handleOnChange=(event) =>
        {
          //  console.log("on change");
            setText(event.target.value)
        }
        const [text, setText] = useState('');
  return (
    <div>
<h1> Enter text</h1>
              <label for="message" class="block mt-8 mx-16 mb-2 text-sm font-medium text-gray-900 dark:text-gray-400" >Your message</label>
<textarea id="message" rows="4" class=" p-2.5 w-96 mx-8 alig h-28 text-sm text-gray-900 bg
-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500
 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." value={text} onChange={handleOnChange}></textarea>
   <div>
   <button class='bg-blue-300 ml-8 rounded text-white border-solid border-2 border-indigo-600 hover:bg-indigo-900'onClickCapture={handleupclick}>convert to uppercase</button>
   </div>
    </div>
    
  )
}
 