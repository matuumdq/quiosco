import Image from 'next/image'
import React from 'react'
import useQuiosco from '../hooks/useQuiosco'

const Categorias = ({categoria}) => {

    const { handleClickCategoria, categoriaActual } = useQuiosco()

    const {nombre, icono, id } = categoria

  return (
    <div className = { `${categoriaActual?.id === id ? 'bg-amber-300' : ''}
    flex items-center gap-4 w-full border p-5 hover:bg-amber-300`}
    >
        <Image
            width={70}
            height={70}
            src={`/assets/img/icono_${icono}.svg`}
            alt='Imagen Icono'
        />
        <button
            type='button'
            className='text-2xl font-bold hover:cursor-pointer'
            onClick={() => handleClickCategoria(id)}
        >
            {nombre}
        </button>
    </div>
  )
}

export default Categorias