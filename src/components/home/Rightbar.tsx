import { BiSearch } from "react-icons/bi"
import { ChangeEvent, useState } from "react"
import Community from "../Community"
import Trends from "../Trends"
import { search, getRecentSearchList } from "@/services"
import { useRouter } from "next/router"

export default function Rightbar() {

    const router = useRouter()
    const [isShowSearchResults, setIsShowSearchResults] = useState<boolean>(false)
    const [keyword, setKeyword] = useState<string>("")
    const [recentData, setRecenData] = useState<any>()
    const [searchResults, setSearchResults] = useState<any>()

    const handleSubmitSearch = async (e:any) => {
        e.preventDefault()
        router.push(`/search?keyword=${keyword}`)
        setIsShowSearchResults(false)
    }

    const handleFocus = async () => {
        setIsShowSearchResults(true)
        let { data } = await getRecentSearchList()
        if (data?.keywords) setRecenData(data.keywords)
    }

    const handleChangeSearch = async (event: any) => {
        setKeyword(event.target.value)
        let { data } = await search({keyword:event.target.value})
        setSearchResults(data)
    }

    const handleBlur = () => {
        setTimeout(() => setIsShowSearchResults(false), 222)
    }

    return <div className="w-[360px] h-screen pt-[12px] pl-[14px] overflow-y-auto scrollbar-none">
        <div className="search-box relative flex items-center">
            <form onSubmit={handleSubmitSearch} className="w-full">
                <input onChange={handleChangeSearch} onBlur={handleBlur} onFocus={handleFocus} type="text" className="w-full text-gray-400 bg-[#202327] pl-[48px] rounded-[42px] h-[42px] border-none ring-0 outline-none" placeholder="Search on me" />
            </form>
            <BiSearch className="absolute pl-[12px] text-gray-400 text-4xl" />
            {isShowSearchResults && <div onClick={(e:any) => e.stopPropagation()} className="absolute top-[55px] w-full h-[450px] overflow-y-auto scrollbar-none bg-[#3c3d3f] rounded-[15px] p-4">
                { (searchResults?.users || searchResults?.posts) ? <div>
                    { searchResults?.users && searchResults?.users?.map((item:any, index:number) => <div key={index * 12} onClick={()=>router.push(`/profile/${item?._id}`)} className="flex items-center space-x-3">
                        <img src={item.cover} alt="" className="rounded-full w-12 h-12" />
                        <div className="txt-group text-white">
                            <p className="font-semibold">{item.name}</p>
                            <small className="text-gray-300">{item.username}</small>
                        </div>
                    </div>) }
                    { recentData?.length >= 1 && recentData?.map((item:any, index:number) => <p key={index} onClick={() => console.log(111)} className="text-white font-semibold">{item}</p>) }
                </div>:<div>
                    { recentData?.length >= 1 && recentData?.map((item:any, index:number) => <p key={index} onClick={() => console.log(111)} className="text-white font-semibold">{item}</p>) }
                </div> }
            </div>}
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