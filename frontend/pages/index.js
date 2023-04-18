import Link from 'next/link'
import { Montserrat } from 'next/font/google'

const mon = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='h-screen' >
    <h1 className={`${mon.className} text-center text-2xl`} >Next.js + Keystone.Js</h1>
    <div className='' >
   <p className='text-xl' >Home Page</p>
   <p className='text-blue-600 underline' >
    <Link href='/company' >See List of phone companies</Link>
   </p>
   <p className='text-green-600 underline'>
    <Link href='/phone' >See All phones</Link>
   </p>
    </div>
   </div>
  )
}
