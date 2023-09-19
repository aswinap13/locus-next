"use client";
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function profilePage(){
    const router = useRouter()
    const logout = async ()=>{
        try {
            await axios.get("/api/users/logout") 
            router.push("/")
        } catch (error:any) {
            toast.error(error.message)
            console.log(error.message)
        }
    }

    const [data,setData] = useState('');

        const getUserDetails  = async ()=>{
            try{
                const response = await axios.get("/api/users/userProfile");
                setData(response.data.data._id)
            }catch(error:any){
                console.log(error.message)
            }
        }
    

    return (
        <div>
            <h1>
                Profile Page
            </h1>
            <h2 className='text-white'>{data ? data: "" }</h2>
            <button className="bg-blue-400 px-3" onClick={getUserDetails}>Get User Data</button>
            <Link href="profile/toExam" type="button" className="black-btn shadow-com  px-10 py-4 my-6 shadow-xl">
              Take Test {'\u00A0'} ➤ 
            </Link> 
            <button className="bg-red-400 px-3" onClick={logout}>Logout</button>
        </div>
    )
}