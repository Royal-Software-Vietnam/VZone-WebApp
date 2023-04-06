import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '@/components/home/Sidebar'
import Poster from '@/components/form/Poster'
import { Carousel, Layout } from 'antd';
import { MdAdd } from "react-icons/md"
import { useApp } from './_app'
import { useEffect } from "react"
import Rightbar from '@/components/home/Rightbar'
import { useRouter } from 'next/router'
import Page from '@/components/page';
/**
<Image
  src="/vercel.svg" alt="Vercel Logo"
  className={styles.vercelLogo}
  width={100} height={24} priority
/>
**/


function Home() {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Virtual Zone</title>
        <meta name="description" content="Royal Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-[600px] overflow-y-auto scrollbar-none h-screen text-white">
          <div className="w-full heading border-solid border-[#2F3336] border-x-[0.6px] border-b-[0.6px] flex justify-between items-center p-[15px] h-[53px]">
            <h3 className="text-lg font-semibold">Home</h3>
            <Image
              src="/star.svg" alt="star"
              className=""
              width={18} height={18} priority
            />
          </div>
          <div className="w-full heading border-solid border-[#2F3336] border-x-[0.6px] border-b-[0.6px] p-[15px]">
            <Carousel slidesToShow={4} dots={false} draggable>
              <div className="w-[200px] h-[250px] p-2">
                <div className="bg-red-400 w-full h-full rounded-xl relative">
                  <img src="https://picsum.photos/200/250" alt="" className="rounded-xl w-full h-full" />
                  <div className="mark rounded-xl w-full h-full absolute bg-black bg-opacity-30 top-0 left-0 flex items-end justify-center pb-6">
                    <div className="w-12 border-solid border-white border-[4px] rounded-full flex items-center justify-center bg-red-500 h-12">
                      <MdAdd className="text-2xl text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[200px] h-[250px] p-2">
                <div className="bg-red-400 w-full h-full rounded-xl"></div>
              </div>
              <div className="w-[200px] h-[250px] p-2">
                <div className="bg-red-400 w-full h-full rounded-xl"></div>
              </div>
              <div className="w-[200px] h-[250px] p-2">
                <div className="bg-red-400 w-full h-full rounded-xl"></div>
              </div>
              <div className="w-[200px] h-[250px] p-2">
                <div className="bg-red-400 w-full h-full rounded-xl"></div>
              </div>
              <div className="w-[200px] h-[250px] p-2">
                <div className="bg-red-400 w-full h-full rounded-xl"></div>
              </div>
              <div className="w-[200px] h-[250px] p-2">
                <div className="bg-red-400 w-full h-full rounded-xl"></div>
              </div>
            </Carousel>
            <Poster />
            <Poster.Content media={true} />
            <Poster.Content media={false} />
            <Poster.Content media={true} />

          </div>
      </div>
    </>
  )
}

export default Home