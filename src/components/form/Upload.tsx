import React, { ChangeEvent, useState } from 'react';
import { message, Carousel, Form } from 'antd';
import { TiDelete } from "react-icons/ti"
import Image from 'next/image'

interface iUploader {
  content:string,
  medias:Array<any>,
  setContent:(value:any) => void,
  setMedias:(value:any) => void
}

function Uploader({ content, medias, setContent, setMedias }: iUploader) {

  const handleFileChange = (event: any) => {
    const fileList = event.target.files
    const fileArray: any = Array.from(fileList)
    console.log(fileArray)
    setMedias(fileArray)
  };

  return (
    <div>
      <div className="mb-2">
        <textarea name="content" value={content} onChange={(e:any) => setContent(e.target.value)} cols={10} className="px-3 overflow-hidden py-1 w-full outline-none rounded-xl placeholder:text-lg placeholder:text-gray-500" placeholder="Bạn đang nghĩ gì?" />
      </div>

      <div className="file-upload">
        <div className="preview-container">
          <Carousel draggable effect="fade">
            {medias?.map((file: any) => (
              <div key={file.name} className="w-full h-[500px] relative">
                <img src={URL.createObjectURL(file)} className="rounded-xl w-full h-[500px]" alt={file.name} />
                <i className="absolute top-2 right-2">
                  <TiDelete className="text-4xl text-gray-400 cursor-pointer" />
                </i>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="mt-3 rounded-xl border-gray-400 border-[0.3px] border-solid w-full flex items-center justify-between h-12 px-3">
          <p>Thêm vào bài viết của bạn</p>
          <div className="flex items-center space-x-3">
            <input name="medias" type="file" id="file-input" multiple onChange={handleFileChange} />
            <label htmlFor="file-input" className="custom-upload-button"><Image
              src="/img.svg" alt="img.svg"
              width={22} height={22} priority
            /></label>
            <Image
              src="/gif.svg" alt="gif.svg"
              width={22} height={22} priority
            />
            <Image
              src="/emoji.svg" alt="emoji.svg"
              width={22} height={22} priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploader