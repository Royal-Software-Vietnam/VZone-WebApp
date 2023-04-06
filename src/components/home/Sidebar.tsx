import Image from 'next/image'
import { RiHomeLine, RiScan2Line, RiNotificationLine, RiMessage3Line, RiBookmarkLine, RiUserLine, RiSettings4Line } from "react-icons/ri"
import { SiFampay } from "react-icons/si"
import Link from 'next/link'
interface iProps {
    menu?: Array<any>
}

export default function Sidebar() {
    return <div className="sidebar w-[275px] h-screen flex flex-col p-[13px] justify-between overflow-y-auto">
          <div className="top text-white">
              <Link href="/" className="item flex items-center justify-start space-x-1 py-[13px]">
                <SiFampay className="text-sky-500 text-4xl" /><p className="font-bold text-2xl">Zone</p>
              </Link>
            <div className="item flex justify-start space-x-3 py-[13px]">
              <RiHomeLine className="text-2xl"/>
              <p>Home</p>
            </div>
            <div className="item flex justify-start space-x-3 py-[13px]">
              <RiNotificationLine className="text-2xl"/>
              <p>Notifications</p>
            </div>
            <div className="item flex justify-start space-x-3 py-[13px]">
              <RiScan2Line className="text-2xl"/>
              <p>Explore</p>
            </div>
            <div className="item flex justify-start space-x-3 py-[13px]">
              <RiMessage3Line className="text-2xl"/>
              <p>Message</p>
            </div>
            <div className="item flex justify-start space-x-3 py-[13px]">
              <RiBookmarkLine className="text-2xl"/>
              <p>Bookmarks</p>
            </div>
            <div className="item flex justify-start space-x-3 py-[13px]">
              <RiUserLine className="text-2xl"/>
              <p>Profile</p>
            </div>
            <div className="item flex justify-start space-x-3 py-[13px]">
              <RiSettings4Line className="text-2xl"/>
              <p>Settings</p>
            </div>
          </div>
          <div className="bot text-white">
            <p>Username</p>
          </div>
        </div>
}