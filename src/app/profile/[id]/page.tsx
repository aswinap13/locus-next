export default function userProfile({params}:any){
    return (
        <div className="w-[20%]">
            <h1>
                Profile Page 
            </h1>
            <p className="bg-orange-500 text-white">{params.id}</p>
        </div>
    )
}