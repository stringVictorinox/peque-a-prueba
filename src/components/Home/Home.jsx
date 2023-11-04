import { AiFillHome } from 'react-icons/ai'
import Box from "../Box/Box"
import BoxClients from '../Box/BoxClients'
import BoxOrders from '../Box/BoxOrders';
import Rechart from '../ReCharts/Rechart';

export default function Home(){
  return (
    <div className='w-full h-screen overflow-y-scroll'>

      <div className='flex ml-3 mt-3 gap-x-4'>
        <AiFillHome className='text-3xl' />
        <h1 className='text-xl font-bold py-0.5'>Inicio</h1>
      </div>

      <div className="flex mt-8 ml-4 gap-x-4">
        <Box text="Clientes nuevos" value='18' percent='8.2' color='green' />
        <Box text="Préstamos activos" value='25' percent='8.2' color='red' />
        <Box text="Pedidos totales" value='1236' percent='8.2' color='green' />
        <Box text="Ingresos totales" value='1,783 Bs' percent="8.2" color='green' />
      </div>

      <div className='ml-4 mt-4'>
        <h1 className='font-semibold text-md'>Acciones rápidas</h1>
      </div>

      <div className='flex flex-row mt-4 ml-4 gap-x-4'>
        <BoxClients />
        <BoxOrders />
      </div>

      <Rechart />





    </div>
  )
}
