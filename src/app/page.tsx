import Link from "next/link"
import Navbar from "./navbar/page"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-200 font-kanit">
      <Navbar/>
        <div className=" p-[5rem] m-[9rem] rounded-2xl flex flex-row items-center shadow-2xl justify-between text-center  bg-gradient-to-r from-blue-900 to-violet-500">
            <div className=" justify-center flex flex-col items-center">
              <h1 className="text-4xl w-[90%]">LOCUS 3.0 - 
                An initiative by students of CET
              </h1>
              <p className="w-[90%] text-xl mt-8">
                <span className="italic">
                    "Practice makes progression.<br/>
                    Progress moulds success." <br/>
                </span>
              Enhance your KEAM preparations with LOCUS.
              </p>
              <Link href="/profile/toExam" type="button" className="black-btn shadow-com  px-10 py-4 my-6 shadow-xl">
              Take Test {'\u00A0'} ➤ 
              </Link>            
            </div>
            <div className="w-[70%] ">
              <Image src="/exambg.webp" alt="me" width={600} height={600}  className="shadow-com rounded-2xl" />
            </div>
        </div>
        
        <div className="p-[5rem] mx-[9rem] rounded-xl relative grid flex-col items-end justify-center overflow-hidden bg-white bg-clip-border text-center text-gray-700">
          <div className="absolute inset-0 m-0 overflow-hidden rounded-none bg-transparent bg-whowe bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/70"></div>
          </div>
          <div className="relative">
            <h2 className="block font-sans text-4xl font-medium tracking-normal text-white antialiased">
                Who  Are  We?
            </h2>
              <p className="block font-sans text-xl  tracking-normal text-white antialiased">
                LOCUS is a KEAM mock test initiative prepared exclusively by the students of College of Engineering Trivandrum. With the 2 
                previous years of LOCUS proved helpful to engineering aspirants, we are 
                here with third edition of LOCUS to sharpen your KEAM skills.
                <br/>
                <br/>
                An initiative by KSU UNION, College Of Engineering Trivandrum
              </p>
          </div>
        </div>

        <div className="p-10 bg-gray-800 mx-[9rem] mt-[7rem] rounded-2xl flex flex-col items-center justify-around shadow-2xl text-center ">
            
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Contact Us</h5>
                <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-10">
                      <div className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                          <svg viewBox="0 0 24 24" fill="currentColor" height="2em" width="2em" >
                            <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
                            <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1 1 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 00.648-.291l1.86-2.171a1 1 0 00-.086-1.391l-4.064-3.696z" />
                          </svg>
                          <div className="text-left ml-2">
                              <div className="mb-1 text-xs">Call Us On</div>
                              <div className="-mt-1 font-sans text-sm font-semibold"><a href="tel:+91 7994325113">+91 7994325113</a></div>
                          </div>
                      </div>
                      <div className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                          <svg viewBox="0 0 900 1000" fill="currentColor" height="2em" width="2em" >
                            <path d="M30 264C8.667 252-.667 238.667 2 224c1.333-9.333 10-14 26-14h846c25.333 0 32 10.667 20 32-5.333 9.333-13.333 16.667-24 22-9.333 4-73.333 38-192 102s-179.333 96.667-182 98c-10.667 6.667-26 10-46 10-18.667 0-34-3.333-46-10-2.667-1.333-63.333-34-182-98S39.333 268 30 264m850 100c13.333-6.667 20-3.333 20 10v368c0 10.667-5.667 21.333-17 32-11.333 10.667-22.333 16-33 16H50c-10.667 0-21.667-5.333-33-16-11.333-10.667-17-21.333-17-32V374c0-13.333 6.667-16.667 20-10l384 200c12 6.667 27.333 10 46 10s34-3.333 46-10l384-200" />
                          </svg>
                          <div className="text-left ml-2">
                              <div className="mb-1 text-xs">Mail Us</div>
                              <div className="-mt-1 font-sans text-sm font-semibold"><a className="font-sans text-sm font-semibold" href="mailto:locuscet@gmail.com">locuscet@gmail.com</a></div>
                          </div>
                      </div>
              </div>

        </div>

        <footer className='text-center mt-2 '>
          ©copyright 2022
        </footer>
    </main>
  )
}
      
      