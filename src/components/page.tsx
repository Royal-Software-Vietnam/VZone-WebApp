import Sidebar from '@/components/home/Sidebar'
import Rightbar from '@/components/home/Rightbar'
function Page({ children, isLogin }:{ children:React.ReactNode, isLogin?:boolean }) {
  
  return <main className="home lg:px-[10%] 2xl:px-[17.08%] bg-black flex space-x-[8px] overflow-hidden">
        <Sidebar />
        { children }
        <Rightbar />
      </main>
}

export default Page