"use client";

import { useState } from 'react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number | string>(0);

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResult(0);
  };
  const clearOne = () => {
    setInput(input.toString().slice(0,-1));
    setResult(0);
  };

  const calculateResult = () => {
    try {
      // eval can be dangerous and is used here just for simplicity. Consider using a safer math library.
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
       <h1 className="bg-blue-300 text-4xl font-bold text-center mt-2 mb-4">ERUM WARIS <br />Next.js Calculator Project</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-bold text-center mt-2 mb-4">Calculator</h1>
        <div className="mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-2 text-right text-lg bg-gray-200 rounded"
          />
          <div className="text-right text-xl  bg-gray-200 h-8">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
        <button
            className="bg-gray-300 p-4 rounded"
            onClick={() => handleClick('*')}
          >
            *
          </button>
      
          <button
            className="bg-gray-300 p-4 rounded"
            onClick={() => handleClick('/')}
          >
            /
          </button>
          <button
            className="bg-gray-300 p-4 rounded"
            onClick={clearOne}
          >
            C
          </button>
         
          <button
            className="bg-gray-300 p-4 rounded"
            onClick={clearInput}
          >
            AC
          </button>
          <button
            className="bg-gray-300 p-4 rounded"
            onClick={() => handleClick('-')}
          >
            -
          </button>

          <button
            className="bg-gray-300 p-4 rounded"
            onClick={() => handleClick('9')}
          >
            9
          </button>
          <button
            className="bg-gray-300 p-4 rounded"
            onClick={() => handleClick('8')}
          >
            8
          </button>
          <button
            className="bg-gray-300 p-4 rounded"
            onClick={() => handleClick('7')}
          >
            7
          </button>
          <button
            className="bg-gray-300 p-4 rounded"
            onClick={() => handleClick('+')}
          >
            +
          </button>

          <button
            className="bg-gray-300 p-4 rounded"
            onClick={() => handleClick('6')}
          >
            6
          </button>
          <button
            className="bg-gray-300 p-4 rounded"
            onClick={() => handleClick('5')}
          >
            5
          </button>
          <button
            className="bg-gray-300 p-4 rounded"
            onClick={() => handleClick('4')}
          >
            4
          </button>
          <button
            className="row-span-2 bg-blue-500 text-white p-4 rounded"
            onClick={calculateResult}
          >
            =
          </button>

          <button
            className="bg-gray-300 p-4 rounded"
            onClick={() => handleClick('1')}
          >
            1
          </button>
          <button
            className="bg-gray-300 p-4 rounded"
            onClick={() => handleClick('2')}
          >
            2
          </button>
          <button
            className="bg-gray-300 p-4 rounded"
            onClick={() => handleClick('3')}
          >
            3
          </button>

          <button
            className="col-span-1 bg-gray-300 p-4 rounded"
            onClick={() => handleClick('0')}
          >
            0
          </button>
          <button
            className="col-span-1 bg-gray-300 p-4 rounded"
            onClick={() => handleClick('00')}
          >
            00
          </button>
          <button
            className="bg-gray-300 p-4 rounded"
            onClick={() => handleClick('.')}
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;














