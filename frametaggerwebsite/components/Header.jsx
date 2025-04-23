import { Oswald } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const oswald = Oswald({
    weight: '500',
    subsets: ["latin"]
})
const Header = () => {
    return (
        <div className="flex justify-between flex-col md:flex-row items-center">
            <div className="flex items-center gap-2">
                <Image src="/frametagger-logo.png" alt="FrameTagger" width={40} height={40} />
                <div className="text-2xl">
                    <p className={oswald.className}>FrameTagger</p>
                </div>
            </div>
            <div className="bg-[#ededed] px-10 py-5 rounded-[20px] font-semibold flex items-center justify-center my-2 md:my-0 h-12">
                <Link href="#">Go to the app</Link>
            </div>
        </div>
    )
}

export default Header
