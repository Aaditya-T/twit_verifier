import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const router = useRouter()
    const [verifyId, setVerifyId] = useState(null)

    //get oauth_verifier from url and display it
    useEffect(() => {
        if (router.asPath !== router.route) {
            setVerifyId(router.asPath.split('=')[2])
        }
    }, [router])

    useEffect(() => {
        console.log(verifyId)
    }, [verifyId])

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            Your verifier is: {verifyId} 
            {/* a copy icon */}
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => navigator.clipboard.writeText(verifyId)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 4a1 1 0 011-1h3a1 1 0 110 2H6a1 1 0 01-1-1zM4 7a1 1 0 100 2h12a1 1 0 100-2H4zM6 11a1 1 0 011-1h8a1 1 0 110 2H7a1 1 0 01-1-1zM4 13a1 1 0 100 2h12a1 1 0 100-2H4z" clipRule="evenodd" />
                </svg>
                Copy
            </button>

        </div>
    </main>
  )
}
