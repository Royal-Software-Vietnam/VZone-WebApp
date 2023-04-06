import { GetServerSidePropsContext, GetStaticPropsContext, GetStaticPathsContext } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import axios from "axios"

export default function Profile(props: any) {

  console.log(props)

  return <div className="w-[600px] overflow-y-auto scrollbar-none h-screen text-white">
    <div className="w-full heading border-solid border-[#2F3336] border-x-[0.6px] border-b-[0.6px] flex justify-between items-center p-[15px] h-[53px]">
      <div className="flex space-x-8 justify-center items-center">
        <Link href="/"><Image src="/back.svg" alt="back image" width={22} height={22} /></Link>
        <div>
        <h3 className="text-lg leading-4 font-semibold">{props.name}</h3>
        <small>{props.username}</small>
        </div>
      </div>
    </div>
  </div>
}

interface ServerSidePropsContext extends GetServerSidePropsContext {
  // custom properties
}

export async function getServerSideProps(context: ServerSidePropsContext) {
  const { req, res, query, params } = context

  let { data: user } = await axios.get(`http://localhost:4444/profile/${params?.id}`)

  return {
    props: {
      ...user
    }
  }
}