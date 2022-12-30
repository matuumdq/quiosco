import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";
import Layout from "../layout/Layout";


export default function Total() {

    const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

    const confirmarPedido = () => pedido.length === 0 || nombre === '' || nombre.length<3

    return (
        <Layout pagina='Total y confirmar pedido'>
            <h1 className="text-4xl font-black">Total y confirmar pedido</h1>
            <p className="text-2xl my-10">Confirma tu pedido a continuacion</p>

            <form
                onSubmit={colocarOrden}
            >
                <div>
                    <label 
                        htmlFor="nombre"
                        className="block uppercase text-slate-800 font-bold text-xl">
                        Nombre
                    </label>
                    <input
                        id="nombre"
                        type='text'
                        className="bg-gray-200 w-full lg:w-1/3 p-2 mt-3 rounded-md"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="mt-10">
                    <p className="text-2xl">Texto a pagar: {' '} <span className="font-bold">{formatearDinero(total)}</span></p>
                </div>

                <div className="mt-5">
                    <input
                        type='submit'
                        className={`${confirmarPedido() ? 'bg-indigo-300 hover:cursor-not-allowed' : 'bg-indigo-600 hover:cursor-pointer hover:bg-indigo-800'} w-full lg:w-auto uppercase text-white font-bold px-5 py-2 rounded text-center`}
                        value='Confirmar Pedido' 
                        disabled={confirmarPedido()}
                    />
                </div>
            </form>
        </Layout>
    )
}