
export const Hero = () => {

  return (
    <div className="relative w-full h-96 mt-10 rounded-lg dark:text-white text-center">
      <div className="hero absolute top-0 left-0 h-96 w-full rounded-lg blur-sm opacity-30"></div>
      <div className="hero-content w-full h-96 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-5">Bienvenido a The Computer Scientist</h2>
        <p className="text-lg">Todo sobre tecnología</p>
      </div>
    </div>
  )
}