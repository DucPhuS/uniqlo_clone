import { Link } from 'react-router-dom';

export default function PageHeaders(){
    return(
    <div className='relative z-10'>
        <div className='pt-3 z-10 bg-transparent'>
            <nav className="pt-0 z-10 bg-transparent ml-auto mr-auto h-auto max-w-custom w-custom">
                <div className='relative flex flex-row align-top items-center h-auto bg-transparent'>
                    <div className="w-[76.5px] mr-auto flex-grow-0">
                        <Link to="/" >
                            <img src="\src\assets\Uniqlo-Logo-500x281.png" alt="uniqlo-logo" className="object-fill"></img>
                        </Link>
                    </div>
                    <div className="relative flex flex-row ml-auto flex-grow-0 text-white">
                        <div className='inline-flex flex-col justify-center h-[44px] min-w-[44px] mr-2 p-1'>
                            <Link className='hover:text-[#6a6a6a]'>
                                <svg className='size-[24px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </Link>
                        </div>
                        <div className='inline-flex flex-col justify-center h-[44px] min-w-[44px] mr-2 p-1'>
                            <Link className=' hover:text-[#6a6a6a]'>
                                <svg className='size-[24px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </Link>
                        </div>
                        <div className='inline-flex flex-col justify-center h-[44px] min-w-[44px] mr-2 p-1'>
                            <Link className='hover:text-[#6a6a6a]'>
                                <svg className='size-[24px] ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </Link>
                        </div>  
                    </div>
                </div>
            </nav>
        </div>
    </div>)
}