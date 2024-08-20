import Image from "next/image";
import './globals.css'
// https://github.com/users/Umar-Farooq-217
export default function Home() {
  return (
   <div className="bg-[url('/back.jpg')] bg-cover bg-center bg-no-repeat h-[100vh]">
    <h1 className="text-[50px] pt-10 text-center font-bold  bg-gradient-to-tr from-red-400  to-blue-500 bg-clip-text text-transparent">Github App</h1>
   
   <div className="bg-[rgba(255,255,255,0.3)] ">
    <div className="">

    <label htmlFor="name" className='text-2xl font-bold py-3'>Enter User Name : </label><br />
    <input id='name' type="text" placeholer='Enter User Name' className='text-xl font-bold py-2 px-2 inp mt-5' />
    </div>
    <button  className='btn4 my-5'>Search</button>
   </div>
   </div>
  );
}
