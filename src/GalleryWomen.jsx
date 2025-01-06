import {Link} from 'react-router-dom';

export default function ScrollPage(){
    return(
    <div className="absolute top-0 w-full z-0">
        <div className='absolute w-full z-10 max-w-[25.75rem] left-1/2 -translate-x-1/2 top-[0.75rem]'>
            <div className="flex flex-row justify-between">
                <Link to="/">
                    <p className="text-white">
                        NỮ
                    </p>
                </Link>
                <Link>
                    <p className="text-white">
                        NAM
                    </p>
                </Link>
                <Link>
                    <p className="text-white">
                        TRẺ EM
                    </p>
                </Link>
                <Link>
                    <p className="text-white">
                        EM BÉ
                    </p>
                </Link>
            </div>
        </div>
        <div className="">
            <img className="" src="\src\assets\women1.jpg" alt="women-1"></img>
        </div>
    </div>
    )
}