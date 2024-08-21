'use client'
import Image from "next/image";
import './globals.css'
import { useState } from "react";
// https://github.com/users/Umar-Farooq-217
export default function Home() {
  const [users,setUsers]= useState([]);
  const [name,setName] = useState('');
  const [followers,setFollowers]= useState([])
  const [open,setOpen] = useState(false)
  const [followeOpen,setFollowerOpen] = useState(false)
  const fetchUsers = async()=>{
    let response = await fetch(`https://api.github.com/users/${name}`)
    response =await response.json()
    setOpen(true)
    setUsers(response)
    console.log('response',response);
    setFollowerOpen(false)
    
  }

  const fetchFollowers = async()=>{
   let response = await fetch(users.followers_url)
   response = await response.json()
   setFollowerOpen(true)
   setFollowers(response)
   console.log('followers',response);
   
    
  }


  return (
   <div className="bg-[url('/back.jpg')] bg-cover min-h-screen  bg-center bg-no-repeat ">
    <h1 className="text-[50px] pt-10 text-center font-bold  bg-gradient-to-tr from-red-400  to-blue-500 bg-clip-text
     text-transparent">Github App</h1>
   
   <div className="bg-[rgba(255,255,255,0.3)] w-[min(500px,90%)] mx-auto text-center rounded-2xl ">
    <div className="">

    {/* <label htmlFor="name" className='text-2xl font-bold py-3'>Enter User Name : </label><br /> */}
    </div>
    <input onChange={(e)=>setName(e.target.value)} id='name' type="text" placeholder='Enter User Name' 
     className='text-xl font-bold py-2 px-2 inp mt-5 ' />
    <button onClick={fetchUsers}  className='btn4 my-5 ml-5'>Search</button>
   </div>
   {
    open &&
   
   <div className="bg-[rgba(255,255,255,0.3)] w-[min(500px,90%)] mx-auto mt-10 rounded-2xl p-5">
    
    <img className='w-[140px] h-[140px] rounded-full flex mx-auto mt-5' src={users.avatar_url} alt="pic" />
    <h1 className="text-3xl font-bold ml-5 py-3">Name :<span className="text-3xl font-bold text-white">{users.login}</span></h1>
    <h1 className="text-3xl font-bold ml-5 py-3">Id :<span className="text-3xl font-bold text-white">{users.id}</span></h1>
    <h1 className="text-3xl font-bold ml-5 py-3">Bio :<span className="text-3xl font-bold text-white">{users.bio}</span></h1>
    <h1 className="text-3xl font-bold ml-5 py-3">Followers :<span className="text-3xl font-bold text-white">{users.followers}
      </span></h1>
    <button 
              className="text-3xl font-bold ml-5 py-3" 
             
            >
               <a href={users.html_url} target='blank' className="text-xl hover:text-black hover:bg-white transition-all 1s ease-in font-bold text-white border-[2px]
                border-black py-2 px-3 rounded-xl">Github Link </a>
            </button>  
    <div onClick={fetchFollowers} className="">
      <button className='btn4 ml-5 mb-5'>Followers</button>
    </div>

   </div>
 
}
{followeOpen &&

   <div className="  grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  border-black border-[2px]">
    {
      followers.map((follower,i)=>{
        return(
          <div className="bg-[rgba(255,255,255,0.3)] border-slate-300 border-[2px] w-[min(500px,90%)]
           mx-auto mt-10 p-5 rounded-2xl " key={i}>
            <h1 className="text-3xl text-white bg-black rounded-full w-12 my-3 mx-3 flex justify-center
             items-center h-12">{i+1}</h1>
                <img className='w-[140px] h-[140px] rounded-full flex mx-auto mt-5' src={follower.avatar_url} alt="pic" />
                <h1 className="text-xl font-bold py-3">Name : <span className="text-xl font-bold text-white">{follower.login}
                  </span></h1>
    <h1 className="text-xl font-bold  py-3">Id : <span className="text-xl font-bold text-white">{follower.id}</span></h1>
    <h1 className="text-xl font-bold  py-3">Bio : <span className="text-xl font-bold text-white">{follower.bio}</span></h1>
    <h1 className="text-xl font-bold  py-3">Followers : <span className="text-xl font-bold text-white">{follower.followers}
      </span></h1>
     
            <a href={follower.html_url} target='blank' className="  ">
            <button className="uiverse ">
    <div className="wrapper">
        <span>Github Link</span>
        <div className="circle circle-12"></div>
        <div className="circle circle-11"></div>
        <div className="circle circle-10"></div>
        <div className="circle circle-9"></div>
        <div className="circle circle-8"></div>
        <div className="circle circle-7"></div>
        <div className="circle circle-6"></div>
        <div className="circle circle-5"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-1"></div>
    </div>
</button></a>

            
          </div>
        )
      })
    }
   </div>}
   </div>
  );
}
