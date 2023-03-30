import { BiSearch } from "react-icons/bi"
import Community from "../Community"
import Trends from "../Trends"

export default function Rightbar () {
    return <div className="w-[360px] h-screen pt-[12px] pl-[14px]">
        <div className="search-box relative flex items-center">
            <input type="text" className="w-full text-gray-400 bg-[#202327] pl-[48px] rounded-[42px] h-[42px] border-none ring-0 outline-none" placeholder="Search on me"/>
            <BiSearch className="absolute pl-[12px] text-gray-400 text-4xl"/>
        </div>

        <Trends>
            <Trends.Item title="Trending in Vietnam" content="#Royal_Academy" numbers={2200} />
            <Trends.Item title="Trending in Hanoi" content="#Tran_duy_hung" numbers={2000} />
            <Trends.Item title="Trending in Music" content="#ISound" numbers={1400} />
            <Trends.Item title="Trending in Game" content="#Lienminh_huyenthoai" numbers={220} />
        </Trends>

        <Community>
            <Community.Friend />
            <Community.Friend />
            <Community.Friend />
            <Community.Friend />
        </Community>
    </div>
}