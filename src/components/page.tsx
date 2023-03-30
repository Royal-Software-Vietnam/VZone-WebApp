import { useApp } from "@/pages/_app";

export default function Page({ children }: { children: React.ReactNode }) {
    let { loading } = useApp()

    return <>
        {loading && <div className="w-screen h-screen fixed z-50 top-0 left-0 bg-black bg-opacity-25">
            <h1 className="text-2xl text-white">LOADING ...</h1>
        </div>}
        {children}
    </>
}