import {  NextResponse } from "next/server";
import { users } from "../hello/route";

export async function POST (request) {
  try {
    const {name , email  , age} = await request.json()

    if(!name || !email  || !age){
        return NextResponse.json({success : false})
    }

    const newuser = {
        id : users.length + 1 ,
        name : name ,
        email : email,
        age: age
    }

    users.push(newuser)

    return NextResponse.json({success : true , users} , {status : 201})
  } catch (error) {
    return NextResponse.json({success : false})
  }
}  