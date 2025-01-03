import { Link } from 'react-router-dom';

export default function NotFoundPage(){
    return(<div className='flex flex-col gap-2'>
        <h1>404 NOT FOUND</h1>
        <Link to="/">Home</Link>
    </div>)
}