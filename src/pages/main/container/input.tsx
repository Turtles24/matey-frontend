import { InstaIcon } from "../../../components/Icon/InstaIcon"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export function Input(){
    return(
        <>
            <div>
                <div className="flex items-center align-middle justify-center">
                <InstaIcon />
                </div>
                <div className="mt-5">
                <p><text className="font-bold text-xl">인스타그램에서 친구를 찾아볼게요</text></p>
                <text className="text-sm font-bold">사용중인 인스타그램 아이디를 알려주세요</text>
                </div>
            </div>
            <div>
                <div className="mt-10">
                    <input className="focus:outline-none border-b-2 font-medium text-center px-10" type="text" placeholder="@인스타아이디">
                    </input> 
                </div>
                <div className="mt-3">
                <input className="focus:outline-none border-b-2 font-medium text-center px-10"  type="password" placeholder="비밀번호"></input>
                </div>
            </div>
            <div className="mt-40">
                <button className="bg-orange-400 py-1 hover:bg-orange-300 border-none px-10 rounded-md font-semibold">MATEY 시작하기!</button>
            </div>
        </>


    )
}