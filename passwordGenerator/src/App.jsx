import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const[numberAllowed, setNumberAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)
  
  const passwordGen = useCallback(() =>{
    let pass = " "
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if (charAllowed) str+= "!@#$%^&*{}~"

    for(let i =0; i<=length; i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass+= str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])


  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3) for selecting few
    window.navigator.clipboard.writeText(password)
  },
[password])

  useEffect(()=>{
    passwordGen()
  }, [length,numberAllowed,charAllowed,passwordGen])


  return (
    <>
   <h1 className=' text-center text-4xl text-white 
  '>Password Generator</h1>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 py-4 bg-slate-500'>

     <div className='flex shadow rounded-xl overflow-hidden mb-4 mt-5' >
      <input 
      type="text "
      value = {password}
      className=' outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref = {passwordRef}
      />

      <button
      onClick={copyPasswordToClip}
       className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>Copy</button>

    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        type="range"
        min={6}
        max= {50}
        value={length}
        className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}/>
        <label >Length : {length}</label> 
      </div>

      
      <div className="flex items-center gap-x-1">

      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characterss</label>
      </div>
      
    </div>
    </div>

    </>
  )
  
}

export default App
