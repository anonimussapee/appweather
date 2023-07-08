import { BoltIcon, CloudIcon, GlobeAmericasIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const Loading = () =>{
  return (
    <section className='loading-intro fixed top-0 right-0 left-0 bottom-0 bg-[var(--secondary-color)] z-40 flex flex-col justify-center items-center w-[100%] h-[100%] '>
    <div className='w-[300px] h-[300px] flex flex-col gap-5 items-center justify-center bg-[#4d4d4d62]  rounded-full p-2'>
      <div className='logo-app w-[280px] h-[200px] '>

      </div>
      <p className='text-white text-[4.7rem] font-extrabold text-center '>App Weather</p>
    </div>
    <div className='w-[300px] '>
        <div className='loading-bar h-[40px] bg-white rounded-full overflow-hidden'>
        <div className='p-[2.5px] flex justify-center gap-10 w-[300px]'>
          <SunIcon className='w-[35px] text-[var(--secondary-color)]'/>
          <CloudIcon className='w-[35px] text-[var(--secondary-color)]'/>
          <MoonIcon className='w-[35px] text-[var(--secondary-color)]'/>
          <BoltIcon className='w-[35px] text-[var(--secondary-color)]'/>
          <GlobeAmericasIcon className='w-[35px] text-[var(--secondary-color)]'/>
        </div>
      </div>
    </div>
   

  </section>
  )
}
export {Loading}