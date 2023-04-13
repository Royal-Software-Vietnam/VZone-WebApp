import { useApp } from "../../_app"
import { useState } from "react"
import { useRouter } from "next/router"
import { setCookie, getCookie, deleteCookie } from 'cookies-next'
import Image from "next/image"
import { SiFampay } from "react-icons/si"
import { Form, Input, Select, DatePicker, Radio, Button, message, Row } from "antd"
import styles from "./styles.module.css"
import { signup, signin } from "@/services"

export default function Sign() {

    const [loading, setLoading] = useState<boolean>(false)
    const [signInMode, setSignInMode] = useState<boolean>(true)
    const router = useRouter()
    const [form] = Form.useForm()

    const onSign = async () => {
        try {
            setLoading(true)
            let { name, username, password, email, birthday, gender } = form.getFieldsValue()
            let { data } = !signInMode ? (await signup({ name, username, password, email, birthday, gender })):
            (await signin({ password, email }))

            if (signInMode) {
                setCookie('token', data.token)
                router.push("/")
            } else {
                form.resetFields()
                message.success("Đăng ký thành công, kiểm tra email để kích hoạt tài khoản")
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
        }
    }

    const switchMode = () => {
        setSignInMode(!signInMode)
    }

    const handleTest = async () => {
        console.log(`data`)
    }

    return <div className={`h-screen overflow-y-hidden scrollbar-none`}>
        {loading && <div className="w-screen h-screen flex items-center justify-center fixed z-50 top-0 left-0 bg-black bg-opacity-25">
            <h1 className="text-2xl text-black">LOADING ...</h1>
        </div>}
        <div className="sign-page flex flex-col lg:flex-row overflow-y-hidden scrollbar-none">
            <div className="banner lg:w-[55%] bg-sky-500 py-12 2xl:py-16 px-16 2xl:pl-20 h-auto hidden lg:flex flex-col justify-center items-center">
                <h1 className="self-start max-w-[608px] font-bold text-[40px] leading-[49px] text-white">Kết nối những yêu thương, Trao nhau ngàn cảm xúc</h1>
                <p onClick={handleTest} className="self-start mt-4 font-semibold text-[20px] leading-[24px] text-white">Đăng ký và trải nghiệm ngay hôm nay</p>
                <Image
                    className="flex w-[26rem] h-[26rem]"
                    src={"/banner.png"}
                    alt="banner image"
                    width={638}
                    height={638}
                />
                <p className="text-white text-center">© 2023 Royal Software.</p>
            </div>
            <div className="w-full lg:w-[45%] bg-black min-h-screen p-10 lg:p-16">
                <div className="heading flex items-center justify-between">
                    <SiFampay className="text-[2.5rem] text-sky-500" />
                    { signInMode ? <p className="text-[14px] text-white leading-[17px]">
                        Chưa có tài khoản? <span onClick={switchMode} className="cursor-pointer text-sky-500 font-semibold"> Đăng ký</span>
                    </p>:<p className="text-[14px] text-white leading-[17px]">
                        Đã có tài khoản? <span onClick={switchMode} className="cursor-pointer text-sky-500 font-semibold"> Đăng nhập</span>
                    </p> }
                </div>
                <h1 className="mt-12 font-bold text-[40px] leading-[49px] text-white">{signInMode ? 'Đăng Nhập':'Đăng Ký'}</h1>
                <p className="mt-8 mb-[15px] text-white text-lg">Vui lòng nhập đầy đủ các trường sau</p>
                <Form form={form}>
                    { !signInMode && <div className="flex flex-col lg:flex-row w-full justify-between items-center space-x-0 lg:space-x-6">
                        <Form.Item className="w-full" name="name" rules={[{ required: true, message: 'Tên không được bỏ trống' }]}>
                            <Input type="text" className="placeholder:text-gray-400 w-full text-white bg-[#202327] pl-[20px] h-12 border-none ring-0 outline-none" placeholder="Tên người dùng" />
                        </Form.Item>
                        <Form.Item className="w-full" name="username" rules={[{ required: true, message: 'Tên người dùng không được bỏ trống' }]}>
                            <Input type="text" className="placeholder:text-gray-400 w-full text-white bg-[#202327] pl-[20px] h-12 border-none ring-0 outline-none" placeholder="Tên tài khoản" />
                        </Form.Item>
                    </div> }
                    <div className={`flex flex-col lg:${signInMode?'flex-col':'flex-row'} w-full justify-between items-center space-x-0 lg:${signInMode?'space-x-0':'space-x-6'}`}>
                        <Form.Item className="w-full" name="email" rules={[{ required: true, message: 'Email không được bỏ trống' }]}>
                            <Input type="text" className="placeholder:text-gray-400 w-full text-white bg-[#202327] pl-[20px] h-12 border-none ring-0 outline-none" placeholder="Email" />
                        </Form.Item>
                        <Form.Item className="w-full" name="password" rules={[{ required: true, message: 'Mật khẩu không được bỏ trống' }]}>
                            <Input type="password" className="placeholder:text-gray-400 w-full text-white bg-[#202327] pl-[20px] h-12 border-none ring-0 outline-none" placeholder="Mật khẩu" />
                        </Form.Item>
                    </div>
                    <div className="flex w-full justify-between items-center space-x-6">
                        
                    </div>
                    { !signInMode && <Form.Item className="w-full" name="birthday" rules={[{ required: true, message: 'Sinh nhật được bỏ trống' }]}>
                        <DatePicker className="placeholder:text-gray-400 w-full text-white bg-[#202327] pl-[20px] h-12 border-none ring-0 outline-none" placeholder="Sinh nhật" />
                    </Form.Item> }
                    { !signInMode && <Form.Item className="w-full" name="gender" rules={[{ required: true, message: 'Giới tính không được bỏ trống' }]} label={<span className="text-gray-400">Giới tính</span>}>
                        <Radio.Group>
                            <Radio value={"Male"} className="text-white">Male</Radio>
                            <Radio value={"Female"} className="text-white">Female</Radio>
                            <Radio value={"Unknown"} className="text-white">Unknown</Radio>
                        </Radio.Group>
                    </Form.Item> }

                    <Button onClick={onSign} className="bg-sky-500 text-white w-full h-12 text-xl">{signInMode ? 'Đăng Nhập':'Đăng Ký'}</Button>
                </Form>
            </div>
        </div>
    </div>
}