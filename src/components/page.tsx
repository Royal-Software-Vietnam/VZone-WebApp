import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '@/components/home/Sidebar'
import Poster from '@/components/form/Poster'
import { Carousel } from 'antd';
import { MdAdd } from "react-icons/md"
import { useEffect } from "react"
import Rightbar from '@/components/home/Rightbar'
import { getCookie } from 'cookies-next'

function Page({ children }:{ children:React.ReactNode }) {

  const token = getCookie("token")
  
  return <main className="home lg:px-[10%] 2xl:px-[17.08%] bg-black flex space-x-[8px] overflow-hidden">
        <Sidebar />
        { children }
        <Rightbar />
      </main>
}

export default Page