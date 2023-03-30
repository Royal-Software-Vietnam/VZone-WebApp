import { Input } from "antd"
import Image from 'next/image'
import { MdMoreHoriz } from "react-icons/md"
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { MdOutlineVerified } from "react-icons/md"
import styled from "styled-components"


export default function Poster() {
    return <div className="w-full border-solid border-[#2F3336] border-y-[0.6px] mt-4">
        <div className="flex items-start space-x-[12px] p-[12px]">
            <div className="user">
                <div className="w-[48px] h-[48px] rounded-full bg-gray-400"></div>
            </div>
            <div className="w-full">
                <Input.TextArea placeholder="What's happening?" className="text-white bg-black outline-none border-none placeholder:text-gray-400" />
                <div className="flex items-center justify-between mt-[20px]">
                    <div className="flex space-x-[12px]">
                        <Image

                            src="/img.svg" alt="img.svg"
                            width={20} height={20} priority
                        />
                        <Image
                            src="/gif.svg" alt="gif.svg"
                            width={20} height={20} priority
                        />
                        <Image
                            src="/poll.svg" alt="poll.svg"
                            width={20} height={20} priority
                        />
                        <Image
                            src="/emoji.svg" alt="emoji.svg"
                            width={20} height={20} priority
                        />
                        <Image
                            src="/event.svg" alt="event.svg"
                            width={20} height={20} priority
                        />
                    </div>
                    <button className="px-4 py-2 bg-blue-500 rounded-2xl"><b>Create</b></button>
                </div>
            </div>
        </div>
    </div>
}

Poster.Content = function _Content_({media}:any) {
    return <div className="w-full border-solid border-[#2F3336] border-b-[0.6px]">
        <div className="flex items-start space-x-[12px] p-[12px]">
            <div className="user">
                <div className="w-[48px] h-[48px] rounded-full bg-gray-400"></div>
            </div>
            <div className="w-full">
                <h4 className="flex space-x-1 items-center">
                    <b>Username</b>
                    <MdOutlineVerified className="text-blue-500" />
                    <span>7m ago</span>
                </h4>
                <p>
                    President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and
                    steel as a "major breakthrough"that would serve to both strengthen the US steel industry and combat the global climate
                    crisis.
                </p>

                { media && <div className="media-list my-[12px]">
                    <img
                        src={"https://picsum.photos/666/444"} alt="post image" className="w-full rounded-3xl"
                    />
                </div> }

                <div className="flex mt-[12px] space-x-[50px]">
                    <div className="item flex space-x-4">
                        <FcLike className="text-[20px]" />
                        <span>44</span>
                    </div>
                    <div className="item flex space-x-4">
                        <Image
                            src="/comment.svg" alt="event.svg"
                            width={20} height={20} priority
                        />
                        <span>44</span>
                    </div>
                    <div className="item flex space-x-4">
                        <Image
                            src="/share.svg" alt="event.svg"
                            width={20} height={20} priority
                        />
                        <span>44</span>
                    </div>
                    <div className="item flex space-x-4">
                        <MdMoreHoriz className="text-[20px]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}