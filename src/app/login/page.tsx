"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from 'next/navigation'
import axios from "axios";
import toast from 'react-hot-toast';


export default function loginPage(){
    const router = useRouter();

    const [user,setUser] = React.useState({
        username :"",
        password : "",
    })

    const [buttondis,SetButtondis] = React.useState(false)
    useEffect(()=>{
        if(user.username.length > 0 && user.password.length > 0){
            SetButtondis(false);
        }else{
            SetButtondis(true);
        }
    },[user])
    const [loading, setLoading] = React.useState(false);
    const login = async ()=>{
        try {
            setLoading(true);
            const response = await axios.post("api/users/login",user)
            router.push('/profile');

        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
    return (
        <div className="flex justify-center items-center flex-col w-full p-10">
        <h1>{loading ? "Processing" : "Login"}</h1>
        <div className="flex flex-col w-[50%] items-center">
            <div className="username flex flex-col w-[50%] mt-6  ">
                <label htmlFor="username">Username</label>
                <input value={user.username} onChange={(e)=> setUser({...user, username : e.target.value})} name="username" type="text" className="text-black px-2 rounded" placeholder="username"></input>
            </div>
            <div className="password flex flex-col w-[50%] mt-6 ">
                <label htmlFor="password">Password</label>
                <input value={user.password} onChange={(e)=> setUser({...user, password : e.target.value})} name="password" type="password" className="text-black px-2 rounded" placeholder="password"></input>
            </div>
            <button onClick={login} className="bg-green-500 text-white py-1 px-3 rounded mt-6">{ buttondis? "No Login ": "Log In" }</button>
            <Link href="/signup" className="bg-blue-500 text-white py-1 px-3 rounded mt-6">SignUp here</Link>
        </div>
    </div>
    )    
}