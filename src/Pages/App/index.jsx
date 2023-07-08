import { useState } from 'react';
import { CardWeather } from '../../Components/CardWeather';
import { Header } from '../../Components/Header';
import { Layout } from '../../Components/Layout';
import { useWeather } from '../../Components/useWeather';
import './app.css'
import { Loading } from '../../Components/Loading';


const App = () => {
  const {data,setCity, setSincronized, loading} = useWeather()

  const [tempType,setTempType] = useState({f:false, c:true})

  let futureTempRender = tempType.f ? 'C°' : tempType.c ? 'F°':' '

  return (
    <>
      <section className='w-[100%] h-[100vh]'>
      <Header setCity={setCity} setSincronized={setSincronized} />
      <Layout>
        <CardWeather data={data} tempType={tempType}/>
        <button className=' buttonTemp w-[178px] h-[38px] rounded-2xl text-[var(--text-primary-color)] text-[1.7rem]' onClick={()=>setTempType({f:!tempType.f, c:!tempType.c})}>Cambiar a grados {futureTempRender}</button>
      </Layout>
      </section>
      {loading && <Loading/>}
    </>

    )
}

export {App}
