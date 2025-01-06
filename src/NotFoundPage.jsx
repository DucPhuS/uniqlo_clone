import { Link } from 'react-router-dom';

export default function NotFoundPage(){
    return(
    <div className='flex flex-col gap-8 items-center place-content-center h-screen bg-gray-100'>
        <h1 className='text-red-700 text-5xl'>404 NOT FOUND</h1>
        <Link className='text-4xl' to="/">Home</Link>
    </div>)
}