import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(number){
      str += "0123456789"
    }
    if(characters){
      str += "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"
    }
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, number, characters, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {passwordGenerator()},[length, number, characters, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-4 py-3 my-8 text-orange-600 bg-gray-500 font-bold text-lg'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='bg-white outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='cursor-pointer outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label className='font-medium text-white'>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={number}
            id='numberInput'
            className='cursor-pointer'
            onChange={() => {setNumber((prev) => !prev)}}
            />
            <label htmlFor='numberInput' className='font-medium text-white cursor-pointer'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={characters}
            id='characterInput'
            className='cursor-pointer'
            onChange={() => {setCharacters((prev) => !prev)}}
            />
            <label htmlFor='characterInput' className='font-medium text-white cursor-pointer'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
