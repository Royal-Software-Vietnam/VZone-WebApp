import { useApp } from "../_app"
import { useState } from "react"
import { useRouter } from "next/router"
import { setCookie, getCookie, deleteCookie } from 'cookies-next'
import Page from "@/components/page"

export default function Sign() {

    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()

    const handleSignin = () => {
        setLoading(true)
        setCookie('token', 'EXAMPLE_TOKEN')
        router.push("/")
    }
    return <div>
        {loading && <div className="w-screen h-screen fixed z-50 top-0 left-0 bg-black bg-opacity-25">
            <h1 className="text-2xl text-black">LOADING ...</h1>
        </div>}
        <div className="sign-page px-[17.08%] flex space-x-12">
            <button onClick={handleSignin}>Sign in</button>
            <button>Sign up</button>
        </div>
    </div>
}