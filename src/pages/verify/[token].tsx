import { useState } from "react"
import { useRouter } from 'next/router'
import { DingtalkOutlined } from "@ant-design/icons"
import OtpInput from 'react-otp-input';
import { verify } from "@/services";
export default function Verify(props: any) {

    const router = useRouter()
    const { token } = router.query
    const [otp, setOtp] = useState('')
    console.log(token)

    const handleVerify = async () => {
        let { data } = await verify({ token:String(token), otp })
        console.log(data)
    }

    return <div className="bg-black w-screen h-screen flex items-center justify-center">
        <div className="rounded-xl bg-[#202327] w-[700px] h-80 p-8 space-x-2">
            <div className="heading flex items-center">
                <DingtalkOutlined className="text-[2.75rem] text-sky-500" />
                <p className="text-[20px] text-white leading-[22px] font-bold">
                    Virtual <span className="text-sky-500 font-bold">Zone</span>
                </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center px-20 pt-8">
                <h1 className="mb-4 text-4xl font-bold text-white">Xác thực tài khoản</h1>
                <OtpInput
                inputStyle={"bg-black text-white text-3xl mx-1 rounded-lg"}
                    value={otp}
                    onChange={setOtp}
                    numInputs={5}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                />
                <button onClick={handleVerify} className="mt-4 bg-sky-500 rounded-lg py-2 px-4 text-white text-2xl">Xác Thực</button>
            </div>
        </div>
    </div>
}