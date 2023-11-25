import Image from "next/image";

export default function Body(){
    return(
        <section className=" w-full flex flex-col container">
            <div className=" mx-auto  w-5/6  shadow-sm h-40 flex items-center  justify-between">
            <div className="InputContainer ">
  <input type="text" name="text" className="input" id="input" placeholder="Search"/>
  
  <label  className="labelforsearch">
<svg viewBox="0 0 512 512" className="searchIcon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
</label>
<div className="bordeer"></div>

<button className="micButton"><svg viewBox="0 0 384 512" className="micIcon"><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"></path></svg>
</button>


</div>
<div className="flex items-center justify-center px-4 p-1 rounded-lg  bg-app-primary mr-20">
  <button
    id="dropdownDefault"
    data-dropdown-toggle="dropdown"
    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    type="button"
  >
    Filter by category
    <svg
      className="w-4 h-4 ml-2"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>
  <div></div>
</div>

           
            </div>
            <div className="h-full  w-9/12 border-black  border-r-2 grid grid-cols-3 gap-5 p-4">
                    
                    <div  className="border shadow-md  bg-app-light border-gray-300 h-fit flex flex-col items-center p-2  hover:rotate-0   hover:cursor-pointer">
                        <div className="border-b gap-3 border-black h-16 w-full  px-2 pr-10 flex justify-between items-center">
                        <Image src="/download.jpg" alt="IMAGE" width={500} height={300} className="w-1/6 rounded-full"/>
                           <div className="w-full ">

                            <div className="w-9/12  font-serif font-bold">IMAD bouderoua
                           </div>
                           <h5>3 min ago </h5>
                            </div></div>
                        <div className="my-4 card" >
                        </div>
                        <div className=" h-20 w-full pr-4 flex justify-between items-center">
                            <div className="p-2 flex flex-col">
                                <span className="text-lg font-bold text-app--dark">Casablanca</span>
                                <span className="text-base  font-semibold text-gray-400">Price: 10000 DH</span>
                            </div>

                            <div className="p-2">
                                <Image src="/icons8-favorites-64.png" alt="Favorite Icon" width={32} height={32} />
                            </div>
                        </div>

                    </div>
                    <div className="border shadow-md bg-app-light border-gray-300 h-fit flex flex-col items-center p-2  hover:rotate-0   hover:cursor-pointer">
                        <div className="border-b border-black h-16 w-full  px-2 pr-10 flex justify-between items-center">
                            <Image src="/download.jpg" alt="IMAGE" width={500} height={300} className="w-12 rounded-full"/>
                            <div className="w-9/12  font-serif font-bold">IMAD bouderoua</div>
                        </div>
                        <div className="my-4 card" >
                        </div>
                        <div className=" h-20 w-full pr-4 flex justify-between items-center">
                            <div className="p-2 flex flex-col">
                                <span className="text-lg font-bold text-app--dark">Casablanca</span>
                                <span className="text-base  font-semibold text-gray-400">Price: 10000 DH</span>
                            </div>

                            <div className="p-2">
                                <Image src="/icons8-favorites-64.png" alt="Favorite Icon" width={32} height={32} />
                            </div>
                        </div>

                    </div>
                    <div className="border shadow-md bg-app-light border-gray-300 h-fit flex flex-col items-center p-2  hover:rotate-0   hover:cursor-pointer">
                        <div className="border-b border-black h-16 w-full  px-2 pr-10 flex justify-between items-center">
                        <Image src="/download.jpg" alt="IMAGE" width={500} height={300} className="w-1/6 rounded-full"/>
                            <div className="w-9/12  font-serif font-bold">IMAD bouderoua</div></div>
                        <div className="my-4 card" >
                        </div>
                        <div className=" h-20 w-full pr-4 flex justify-between items-center">
                            <div className="p-2 flex flex-col">
                                <span className="text-lg font-bold text-app--dark">Casablanca</span>
                                <span className="text-base  font-semibold text-gray-400">Price: 10000 DH</span>
                            </div>

                            <div className="p-2">
                                <Image src="/icons8-favorites-64.png" alt="Favorite Icon" width={32} height={32} />
                            </div>
                        </div>

                    </div><div className="border shadow-md bg-app-light border-gray-300 h-fit flex flex-col items-center p-2  hover:rotate-0   hover:cursor-pointer">
                        <div className="border-b border-black h-16 w-full  px-2 pr-10 flex justify-between items-center">
                        <Image src="/download.jpg" alt="IMAGE" width={500} height={300} className="w-1/6 rounded-full"/>
                            <div className="w-9/12  font-serif font-bold">IMAD bouderoua</div></div>
                        <div className="my-4 card" >
                        </div>
                        <div className=" h-20 w-full pr-4 flex justify-between items-center">
                            <div className="p-2 flex flex-col">
                                <span className="text-lg font-bold text-app--dark">Casablanca</span>
                                <span className="text-base  font-semibold text-gray-400">Price: 10000 DH</span>
                            </div>

                            <div className="p-2">
                                <Image src="/icons8-favorites-64.png" alt="Favorite Icon" width={32} height={32} />
                            </div>
                        </div>

                    </div><div className="border shadow-md bg-app-light border-gray-300 h-fit flex flex-col items-center p-2  hover:rotate-0   hover:cursor-pointer">
                        <div className="border-b border-black h-16 w-full  px-2 pr-10 flex justify-between items-center">
                        <Image src="/download.jpg" alt="IMAGE" width={500} height={300} className="w-1/6 rounded-full"/>
                            <div className="w-9/12  font-serif font-bold">IMAD bouderoua</div></div>
                        <div className="my-4 card" >
                        </div>
                        <div className=" h-20 w-full pr-4 flex justify-between items-center">
                            <div className="p-2 flex flex-col">
                                <span className="text-lg font-bold text-app--dark">Casablanca</span>
                                <span className="text-base  font-semibold text-gray-400">Price: 10000 DH</span>
                            </div>

                            <div className="p-2">
                                <Image src="/icons8-favorites-64.png" alt="Favorite Icon" width={32} height={32} />
                            </div>
                        </div>

                    </div><div className="border shadow-md bg-app-light border-gray-300 h-fit flex flex-col items-center p-2  hover:rotate-0   hover:cursor-pointer">
                        <div className="border-b border-black h-16 w-full  px-2 pr-10 flex justify-between items-center">
                        <Image src="/download.jpg" alt="IMAGE" width={500} height={300} className="w-1/6 rounded-full"/>
                            <div className="w-9/12  font-serif font-bold">IMAD bouderoua</div></div>
                        <div className="my-4 card" >
                        </div>
                        <div className=" h-20 w-full pr-4 flex justify-between items-center">
                            <div className="p-2 flex flex-col">
                                <span className="text-lg font-bold text-app--dark">Casablanca</span>
                                <span className="text-base  font-semibold text-gray-400">Price: 10000 DH</span>
                            </div>

                            <div className="p-2">
                                <Image src="/icons8-favorites-64.png" alt="Favorite Icon" width={32} height={32} />
                            </div>
                        </div>

                    </div><div className="border shadow-md bg-app-light border-gray-300 h-fit flex flex-col items-center p-2  hover:rotate-0   hover:cursor-pointer">
                        <div className="border-b border-black h-16 w-full  px-2 pr-10 flex justify-between items-center">
                        <Image src="/download.jpg" alt="IMAGE" width={500} height={300} className="w-1/6 rounded-full"/>
                            <div className="w-9/12  font-serif font-bold">IMAD bouderoua</div></div>
                        <div className="my-4 card" >
                        </div>
                        <div className=" h-20 w-full pr-4 flex justify-between items-center">
                            <div className="p-2 flex flex-col">
                                <span className="text-lg font-bold text-app--dark">Casablanca</span>
                                <span className="text-base  font-semibold text-gray-400">Price: 10000 DH</span>
                            </div>

                            <div className="p-2">
                                <Image src="/icons8-favorites-64.png" alt="Favorite Icon" width={32} height={32} />
                            </div>
                        </div>

                    </div><div className="border shadow-md bg-app-light border-gray-300 h-fit flex flex-col items-center p-2  hover:rotate-0   hover:cursor-pointer">
                        <div className="border-b border-black h-16 w-full  px-2 pr-10 flex justify-between items-center">
                        <Image src="/download.jpg" alt="IMAGE" width={500} height={300} className="w-1/6 rounded-full"/>
                            <div className="w-9/12  font-serif font-bold">IMAD bouderoua</div></div>
                        <div className="my-4 card" >
                        </div>
                        <div className=" h-20 w-full pr-4 flex justify-between items-center">
                            <div className="p-2 flex flex-col">
                                <span className="text-lg font-bold text-app--dark">Casablanca</span>
                                <span className="text-base  font-semibold text-gray-400">Price: 10000 DH</span>
                            </div>

                            <div className="p-2">
                                <Image src="/icons8-favorites-64.png" alt="Favorite Icon" width={32} height={32} />
                            </div>
                        </div>

                    </div><div className="border shadow-md bg-app-light border-gray-300 h-fit flex flex-col items-center p-2  hover:rotate-0   hover:cursor-pointer">
                        <div className="border-b border-black h-16 w-full  px-2 pr-10 flex justify-between items-center">
                        <Image src="/download.jpg" alt="IMAGE" width={500} height={300} className="w-1/6 rounded-full"/>
                            <div className="w-9/12  font-serif font-bold">IMAD bouderoua</div></div>
                        <div className="my-4 card" >
                        </div>
                        <div className=" h-20 w-full pr-4 flex justify-between items-center">
                            <div className="p-2 flex flex-col">
                                <span className="text-lg font-bold text-app--dark">Casablanca</span>
                                <span className="text-base  font-semibold text-gray-400">Price: 10000 DH</span>
                            </div>

                            <div className="p-2">
                                <Image src="/icons8-favorites-64.png" alt="Favorite Icon" width={32} height={32} />
                            </div>
                        </div>

                    </div><div className="border shadow-md bg-app-light border-gray-300 h-fit flex flex-col items-center p-2  hover:rotate-0   hover:cursor-pointer">
                        <div className="border-b border-black h-16 w-full  px-2 pr-10 flex justify-between items-center">
                        <Image src="/download.jpg" alt="IMAGE" width={500} height={300} className="w-1/6 rounded-full"/>
                            <div className="w-9/12  font-serif font-bold">IMAD bouderoua</div></div>
                        <div className="my-4 card" >
                        </div>
                        <div className=" h-20 w-full pr-4 flex justify-between items-center">
                            <div className="p-2 flex flex-col">
                                <span className="text-lg font-bold text-app--dark">Casablanca</span>
                                <span className="text-base  font-semibold text-gray-400">Price: 10000 DH</span>
                            </div>

                            <div className="p-2">
                                <Image src="/icons8-favorites-64.png" alt="Favorite Icon" width={32} height={32} />
                            </div>
                        </div>

                    </div><div className="border shadow-md bg-app-light border-gray-300 h-fit flex flex-col items-center p-2  hover:rotate-0   hover:cursor-pointer">
                        <div className="border-b border-black h-16 w-full  px-2 pr-10 flex justify-between items-center">
                        <Image src="/download.jpg" alt="IMAGE" width={500} height={300} className="w-1/6 rounded-full"/>
                            <div className="w-9/12  font-serif font-bold">IMAD bouderoua</div></div>
                        <div className="my-4 card" >
                        </div>
                        <div className=" h-20 w-full pr-4 flex justify-between items-center">
                            <div className="p-2 flex flex-col">
                                <span className="text-lg font-bold text-app--dark">Casablanca</span>
                                <span className="text-base  font-semibold text-gray-400">Price: 10000 DH</span>
                            </div>

                            <div className="p-2">
                                <Image src="/icons8-favorites-64.png" alt="Favorite Icon" width={32} height={32} />
                            </div>
                        </div>

                    </div>
            </div>
            <div className="h-full w-3/12">

            </div>

        </section>
    )
}