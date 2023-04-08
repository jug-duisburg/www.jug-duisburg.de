import Image from 'next/image'
import logo from '../images/logo.png'

export default function Home() {
  return (
    <main className="flex flex-col items-center space-y-10 text-center px-10">

      <Image src={logo} alt={"Logo"} width={500}/>

      <div className="text-5xl">
        Homepage der JUG Duisburg
      </div>

      <div className={"text-2xl"}>
        Work in progress...
      </div>

    </main>
  )
}
