// import  { useEffect, useRef } from 'react';
// // import Prism from "prismjs"


// const CodeEditor = () => {
//   const textareaRef = useRef(null);

//   useEffect(() => {
//     const textarea = textareaRef.current;

//     const handleInput = () => {
//         textarea.style.height = "auto"
//         textarea.style.height = `${textarea.scrollHeight}px`; 
//     };

//     textarea.addEventListener('input', handleInput);

//     handleInput();

//     return () => {
//       textarea.removeEventListener('input', handleInput); 
//     };
//   }, []);

//   return (
//     <>
//       <div  className="w-[100%] h-[100vh]  bg-white-400">
//         <div className="w-[80%] h-full mx-auto pt-16">
//           <textarea
//             ref={textareaRef}
//             id="auto-resize"
//             name="codeInput"
//             className="bg-black w-full max-h-[80vh] text-white  h-full"
//           ></textarea>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CodeEditor;
/* eslint-disable react/prop-types */

import  { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; 
import 'prismjs/components/prism-javascript'; 

const CodeEditor = ({ initialCode = '', language = 'javascript' }) => {
  const [code, setCode] = useState(initialCode);
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="relative">
      <pre className="rounded   bg-gray-800 p-2 overflow-auto">
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
      <textarea
        className=" absolute top-0 pl-5 opacity-0 left-0 w-full h-full  z-10"
        value={code}
        onChange={handleChange}
        spellCheck="false"
        style={{
          background: 'none',
          border: 'none',
         
          caretColor: 'black', 
        }}
      />
    </div>
  );
};

export default CodeEditor;
