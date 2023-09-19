import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getTokenData =(request :NextRequest)=> {
    try {
        const enToken = request.cookies.get('token')?.value || '';
        const token :any= jwt.verify(enToken,process.env.TOKEN_SECRET!);
        return token.id;
    } catch (error:any) {
        throw new Error(error.message)
    }
}