import { useRouter } from 'next/router'

const pasos = [
    {paso: 1, nombre: 'Menu', url: '/'},
    {paso: 2, nombre: 'Resumen', url: '/resumen'},
    {paso: 3, nombre: 'Total', url: '/total'}
]


const Pasos = () => {
   
    const router = useRouter()

    const getRuta = () => {
        switch(router.pathname){
            case '/': return 1;
            case '/resumen': return 6;
            case '/total': return 12;
            default: return
        }
    }

  return (
    <>
        <div className="flex justify-between mb-5">
            {pasos.map(paso => (
                <button 
                    onClick={() => {
                        router.push(paso.url)
                    }}
                    key={paso.paso}
                    className='font-bold text-2xl'
                >
                    {paso.nombre}
                </button>
            ))}
        </div>
        <div className='bg-gray-100 mb-10'>
            <div className={`rounded-full uppercase bg-amber-500 text-xs leading-none h-2 text-center text-white w-${getRuta()}/12`}></div>
        </div>
    </>
  )
}

export default Pasos