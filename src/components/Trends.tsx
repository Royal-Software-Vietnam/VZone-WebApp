import { RiSettings4Line, RiVideoAddLine } from "react-icons/ri"
import { HiOutlineDotsHorizontal } from "react-icons/hi"

export default function Trends({ children }:{ children:React.ReactNode }) {
    return <div className="h-450px] w-full mt-[12px] bg-[#202327] rounded-[15px] px-[16px] py-[12px]">
        <div className="heading flex items-center justify-between mb-[12px]">
            <h1 className="leading-[23px] text-[19px] font-bold text-white">Trends for you</h1>
            <RiSettings4Line className="text-[22px] text-white" />
        </div>
        { children }

        <h1 className="text-sky-500">Show more</h1>
    </div>
}

interface iItem {
    title: string,
    content: string,
    numbers: number
}

Trends.Item = function _Item_({title, content, numbers}:iItem) {
    return <div className="py-[12px]">
        <div className="heading flex items-center justify-between">
            <p className="font-[400] leading-[16px] text-[14px] text-gray-400">{title}</p>
            <HiOutlineDotsHorizontal className="text-gray-400 text-lg"/>
        </div>
        <h1 className="my-[4px] leading-[23px] text-[16px] font-bold text-white">{content}</h1>
        <p className="my-[4px] font-[400] leading-[16px] text-[14px] text-gray-400">{numbers} posts</p>
    </div>
}