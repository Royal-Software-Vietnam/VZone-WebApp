import { RiSettings4Line, RiVideoAddLine, RiSearchLine } from "react-icons/ri"
import { HiOutlineDotsHorizontal } from "react-icons/hi"

export default function Community ({ children }:{ children:React.ReactNode }) {
    return <div className="h-450px] w-full mt-[12px] bg-[#202327] rounded-[15px] px-[16px] py-[12px]">
        <div className="heading flex items-center justify-between mb-[12px]">
            <h1 className="leading-[23px] text-[19px] font-bold text-white">Community</h1>
            <div className="flex items-center space-x-3">
                <RiVideoAddLine className="text-[22px] text-gray-400" />
                <RiSearchLine className="text-[22px] text-gray-400" />
                <RiSettings4Line className="text-[22px] text-gray-400" />
            </div>
        </div>
        { children }

        <h1 className="text-sky-500">Show more</h1>
    </div>
}

Community.Friend = function _Friend_() {
    return <div className="py-[12px] flex items-center space-x-[12px]">

        <div className="w-[48px] h-[48px] bg-gray-500 rounded-full"></div>

        <div className="txt-group">
            <p className="font-[400] text-[15px] leading-[18px] text-white">Username</p>
            <p className="text-sm text-[#6E767D]">3mins ago</p>
        </div>
    </div>
}