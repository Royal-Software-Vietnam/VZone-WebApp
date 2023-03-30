import Image from 'next/image'
import { RiHomeLine, RiScan2Line, RiNotificationLine, RiMessage3Line, RiBookmarkLine, RiUserLine, RiSettings4Line } from "react-icons/ri"

interface iProps {
    menu?: Array<any>
}

export default function Sidebar() {
    return <div className="sidebar w-[275px] h-screen flex flex-col p-[13px] justify-between">
          <div className="top text-white">
            <div className="item flex items-center justify-start space-x-1 py-[13px]">
              <Image
                src="/logo.png" alt="Vercel Logo"
                className=""
                width={66} height={66} priority
              /><p className="font-bold text-2xl">VZone</p>
            </div>
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