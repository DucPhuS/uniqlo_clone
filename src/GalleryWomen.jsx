import {Link} from 'react-router-dom';

export default function Tab(){
    return(
    <div className="absolute top-0 w-full z-20">
        <div className='absolute w-full z-50 max-w-[25.75rem] left-1/2 -translate-x-1/2 top-[0.75rem] pt-3  '>
            <div className="flex flex-row justify-between font-helvetica drop-shadow-2xl">
                <Link to="/">
                    <p className="text-white drop-shadow-2xl cursor-pointer">
                        NỮ
                    </p>
                </Link>
                <Link>
                    <p className="text-white drop-shadow-2xl cursor-pointer">
                        NAM
                    </p>
                </Link>
                <Link>
                    <p className="text-white drop-shadow-2xl cursor-pointer">
                        TRẺ EM
                    </p>
                </Link>
                <Link>
                    <p className="text-white drop-shadow-2xl cursor-pointer">
                        EM BÉ
                    </p>
                </Link>
            </div>
        </div>
        
    </div>
    )
}