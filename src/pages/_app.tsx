import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import axios from 'axios'
import React, { useState } from "react"
import { Nunito } from 'next/font/google'
import { setCookie, getCookie, deleteCookie } from 'cookies-next'
import { GetServerSidePropsContext, GetStaticPropsContext, GetStaticPathsContext } from 'next'

import Page from '@/components/page'

const roboto = Nunito({
  weight: '500',
  subsets: ['latin'],
})

const AppContext = React.createContext<{
  user?:any, setUser?:any, 
  loading?:any, setLoading?:any
}>({})

export const AppProvider = ({children}:{children:React.ReactNode}) => {
  const [user, setUser] = useState<any>()
  const [loading, setLoading] = useState<any>(false)
  console.log(`Version: 1.0.0`)

  return <AppContext.Provider value={{user, setUser, loading, setLoading}}>
    {children}
  </AppContext.Provider>
}

export const useApp = () => React.useContext(AppContext)

export default function App({ Component, pageProps }: AppProps) {

  const token = getCookie("token")
  console.log(token)

  return <main className={roboto.className}>
    <AppProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </AppProvider>
  </main>
}

interface ServerSidePropsContext extends GetServerSidePropsContext {
  // custom properties
}
