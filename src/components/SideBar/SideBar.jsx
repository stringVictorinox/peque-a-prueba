import { AiFillHome, AiOutlineUser, AiOutlineBarChart, AiFillFileAdd, AiOutlineProfile } from 'react-icons/ai'
import { BsFillGearFill } from 'react-icons/bs'
import { FaCashRegister } from 'react-icons/fa'
import { BiSolidPieChartAlt2 } from 'react-icons/bi'
import { FiMonitor } from 'react-icons/fi'
import { BiMap } from 'react-icons/bi'

export default function SideBar() {

    return (
        <div className="bg-[#1A3D7D] h-screen p-3 pt-8 w-[243px]">

            <h1 className="text-center font-semibold text-white text-xl tracking-wide">
                <span className="text-[#52A5F5]">Smart</span>water
            </h1>

            <div className="flex items-center rounded-md bg-white mt-6 px-2 py-2 gap-x-4">
                <AiFillHome className='text-black text-2xl block float-left cursor-pointer' />
                <h1 className='font-semibold text-sm'>Inicio</h1>
            </div>

            <div className="flex items-center rounded-md mt-2 px-2 py-2 gap-x-4">
                <AiOutlineUser className='text-white text-2xl block float-left cursor-pointer' />
                <h1 className='text-white font-semibold text-sm'>Clientes</h1>
            </div>

            <div className="flex items-center rounded-md mt-2 px-2 py-2 gap-x-4">
                <BiMap className='text-white text-2xl block float-left cursor-pointer' />
                <h1 className='text-white font-semibold text-sm'>Mapa de clientes</h1>
            </div>

            <div className="flex items-center rounded-md mt-2 px-2 py-2 gap-x-4">
                <FiMonitor className='text-white text-2xl block float-left cursor-pointer' />
                <h1 className='text-white font-semibold text-sm'>Monitoreo de Distribuidores</h1>
            </div>


            <div className="flex items-center rounded-md mt-2 px-2 py-2 gap-x-4">
                <FaCashRegister className='text-white text-2xl block float-left cursor-pointer' />
                <h1 className='text-white font-semibold text-sm'>Ventas</h1>
            </div>

            <div className="flex flex-row justify-between items-center rounded-md mt-2 px-2 py-2">

                <div className='flex flex-row items-center gap-x-4'>
                    <AiFillFileAdd className='text-white text-2xl block float-left cursor-pointer' />
                    <h1 className='text-white font-semibold text-sm'>Pedidos</h1>
                </div>
                
                <div className='bg-[#367DFD] rounded-xl py-1 px-3'>
                    <h1 className='text-white'>1</h1>
                </div>
            </div>

            <div className="flex items-center rounded-md mt-2 px-2 py-2 gap-x-4">
                <AiOutlineProfile className='text-white text-2xl block float-left cursor-pointer' />
                <h1 className='text-white font-semibold text-sm'>Préstamos</h1>
            </div>

            <div className="flex items-center rounded-md mt-2 px-2 py-2 gap-x-4">
                <AiOutlineBarChart className='text-white text-2xl block float-left cursor-pointer' />
                <h1 className='text-white font-semibold text-sm'>Finanzas</h1>
            </div>

            <div className="flex items-center rounded-md mt-2 px-2 py-2 gap-x-4">
                <BiSolidPieChartAlt2 className='text-white text-2xl block float-left cursor-pointer' />
                <h1 className='text-white font-semibold text-sm'>Reportes</h1>
            </div>

            <div className="flex items-center rounded-md mt-2 px-2 py-2 gap-x-4">
                <BsFillGearFill className='text-white text-2xl block float-left cursor-pointer' />
                <h1 className='text-white font-semibold text-sm'>Configuración</h1>
            </div>

            <div className="bg-white rounded-2xl mt-20 items-center mx-auto px-2.5 py-2 w-32 cursor-pointer">
                <div className='flex justify-between justify-center px-2'>

                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.375 5.625C10.4121 5.625 11.25 4.78711 11.25 3.75C11.25 2.71289 10.4121 1.875 9.375 1.875H5.625C2.51953 1.875 0 4.39453 0 7.5V22.5C0 25.6055 2.51953 28.125 5.625 28.125H9.375C10.4121 28.125 11.25 27.2871 11.25 26.25C11.25 25.2129 10.4121 24.375 9.375 24.375H5.625C4.58789 24.375 3.75 23.5371 3.75 22.5V7.5C3.75 6.46289 4.58789 5.625 5.625 5.625H9.375ZM29.5605 16.0195C29.8418 15.7559 30 15.3867 30 15C30 14.6133 29.8418 14.2441 29.5605 13.9805L21.123 6.01172C20.7129 5.625 20.1152 5.51953 19.5996 5.74219C19.084 5.96484 18.75 6.47461 18.75 7.03125V11.25H11.25C10.2129 11.25 9.375 12.0879 9.375 13.125V16.875C9.375 17.9121 10.2129 18.75 11.25 18.75H18.75V22.9688C18.75 23.5312 19.084 24.0352 19.5996 24.2578C20.1152 24.4805 20.7129 24.375 21.123 23.9883L29.5605 16.0195Z" fill="#1B1B1B" />
                    </svg>

                    <h1 className="text-black font-bold text-sm mt-1.5">Salir</h1>


                </div>
            </div>

        </div>
    )
}
