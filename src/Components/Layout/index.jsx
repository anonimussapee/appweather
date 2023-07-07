const Layout = ({children}) => {
  return (
    <section className='w-[100%] h-[85vh]  flex flex-col gap-16 justify-center items-center'>
      {children}
    </section>
  )
}
export {Layout}