import {MagnifyingGlassIcon, MoonIcon, SunIcon} from '@heroicons/react/24/solid'
import { useState } from 'react';
const Header = ({setCity, setSincronized}) => { 

 
  const [searchValue , setSearchValue] = useState('')
  const [dark,setDark]= useState(false);

  const toggleDarkmode = () => {
    document.body.classList.toggle('dark')
    setDark(!dark)
    
  }

  
  let renderIcon;
  if(document.body.classList.contains('dark')){

   renderIcon = (<SunIcon className='cursor-pointer absolute right-1  w-14 h-14 text-yellow-400' onClick={()=>{
    toggleDarkmode()
    setSincronized(false)}}/> )
  }else{
    renderIcon = (<MoonIcon className='cursor-pointer absolute left-1  w-14 h-14 text-violet-900' onClick={()=>{
      toggleDarkmode()
      setSincronized(false)}}/>)
  }  
  
  return (
    <header className='w-[100%] h-auto text-lg p-5 self-start mb-10'>
      <nav className='w-[100%] h-auto '>
        <ul className='flex sm:flex-wrap items-center justify-between gap-3'>
          <li className='text-[var(--text-primary-color)] text-[2.5rem] font-extrabold cursor-pointer sm:w-[50%]' onClick={()=>setSincronized(false)}>Weather App</li>
          <li className='relative font-extrabold text-[1.8rem] my-0 mx-auto sm:order-3'>
            <MagnifyingGlassIcon className='w-10 h-10 text-[var(--text-primary-color)] absolute top-2 left-2 cursor-pointer ' onClick={()=>{
              setCity(searchValue)
              setSincronized(false)
              }}/>
            <input type="search" className='rounded-xl text-[var(--text-primary-color)]  bg-[var(--input-bg-color)] w-[300px] h-[34px] sm:w-[280px] pl-14 p-3 placeholder:text-[var(--text-primary-color)] outline-[var(--color-primary)] ' value={searchValue} onChange={(e)=>{
                setSearchValue(e.target.value)
              }} onKeyPress={(e)=>{
                if(e.key === 'Enter'){
                  setCity(searchValue.trim())
                  setSincronized(false)
                }

              }} placeholder='Busca tu ciudad'/>
          </li>
          <li>
            <div className='w-24 h-14 relative rounded-full bg-white'>{renderIcon }</div>
          </li>
          
        </ul>
      </nav> 
    </header>
  ) 
}

export {Header}