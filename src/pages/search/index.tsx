import Page from "@/components/page"
import { GetServerSidePropsContext, GetStaticPropsContext, GetStaticPathsContext } from 'next'
import { search, getRecentSearchList } from "@/services"
import { useRouter } from 'next/router'
import axios from "axios"

interface SearchResults {
    users: Array<any>,
    posts: Array<any>
}

export default function Search(props:SearchResults) {
    
    const { users, posts } = props
    const router = useRouter()
    const { keyword } = router.query

    return keyword ? <>
        <div className="w-[600px] overflow-y-auto scrollbar-none h-screen text-white">
            <div className="w-full heading border-solid border-[#2F3336] border-x-[0.6px] border-b-[0.6px] flex justify-between items-center p-[15px] h-[53px]">
                <h3 className="text-lg font-semibold">Search</h3>
                <p>Kết quả cho từ khóa: {keyword}</p>
            </div>
        </div>
    </> : <>
        <div className="w-[600px] overflow-y-auto scrollbar-none h-screen text-white">
            <div className="w-full heading border-solid border-[#2F3336] border-x-[0.6px] border-b-[0.6px] flex justify-between items-center p-[15px] h-[53px]">
                <h3 className="text-lg font-semibold">Search</h3>
            </div>
            <div className="flex min-h-[450px] items-center justify-center border-[#2F3336] border-x-[0.6px] border-b-[0.6px]">
                <h1 className="text-white text-xl font-bold">Error</h1>
            </div>
        </div>
    </>
}

interface ServerSidePropsContext extends GetServerSidePropsContext {
    // custom properties
}

export async function getServerSideProps(context:ServerSidePropsContext) {
    const { req, res, query } = context

    let { data } = await axios.get(`http://localhost:4444/search?keyword=${query.keyword}&complete=1`, { headers: {token:req.cookies.token} })
    console.log(data)

    return {    
      props: data as SearchResults
    }
  }