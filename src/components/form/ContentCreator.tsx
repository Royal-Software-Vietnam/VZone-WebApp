import { Modal } from "antd"
import { useState, useRef } from "react"
import type { ModalProps } from "antd"
import Uploader from "./Upload"
import { createPost } from "@/services"
import axios from "axios"
export default function ContentCreator(props: ModalProps & { setShowContentCreator: (v: any) => void }) {

    const [content, setContent] = useState<string>("")
    const [medias, setMedias] = useState<any>()
    const formRef = useRef<any>()

    const handleCreatePost = async () => {
        try {
            /* UPLOAD TO STORAGE FIRST */
            let uploadRequests: any = []
            medias.map((item: any) => {
                const formData = new FormData()
                formData.append('file', item)
                uploadRequests.push(axios.post("http://localhost:8888/upload", formData))
            })

            let uploadResponses = await Promise.all(uploadRequests)
            let rawMedias = uploadResponses.map(item => ({ src: item.data }))
            console.log(`upload response`, rawMedias)
            let res = await createPost({ content, medias: rawMedias })
            console.log(`create response`, res)
            setContent("")
            setMedias(null)
            props.setShowContentCreator(false)
        } catch (error) {
            console.log(error)
        }
    }

    return <Modal title="Tạo bài viết" {...props} footer={
        <div className="w-full">
            <button onClick={handleCreatePost} className="text-md bg-sky-500 font-semibold text-white px-4 py-2 rounded-lg w-full">Đăng</button>
        </div>
    }>
        <form ref={formRef}>
            <Uploader content={content} setContent={setContent} medias={medias} setMedias={setMedias} />
        </form>
    </Modal>
}