import { Link } from 'react-router-dom';

export default function PageHeaders(){
    return(<div className="sticky top-0 z-40 pt-3 flex flex-row items-center justify-evenly -m-7">
        <a className="w-[75px]">
            <img src="\src\assets\Uniqlo-Logo-500x281.png" alt="uniqlo-logo" className=""></img>
        </a>
        <div className="flex flex-row items-center gap-3 text-xl text-white">
            <Link to="/">
                <p className="">
                    NỮ
                </p>
            </Link>
            <Link>
                <p>
                    NAM
                </p>
            </Link>
            <Link>
                <p>
                    TRẺ EM
                </p>
            </Link>
            <Link>
                <p>
                    EM BÉ
                </p>
            </Link>
        </div>
        <div className="flex flex-row">
            <a>
                <img alt="Ngôn ngữ"></img>
            </a>
            <a>
                <img alt="Yêu Thích"></img>
            </a>
            <a>
                <img alt="Giỏ Hàng"></img>
            </a>
        </div>
    
    </div>)
}