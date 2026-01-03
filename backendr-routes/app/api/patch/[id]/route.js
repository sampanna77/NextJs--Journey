import { NextResponse } from "next/server";
import { users } from "../../hello/route";
export async function PATCH(request , {params} ){
try {
    const {id} = await params
    const userid = parseInt(id)
    const userindex = users.findIndex(u => u.id === userid)
 if(userindex === -1)
 {
    return NextResponse.json({success:false })
 }

 const body  = await request.json()

 users[userindex] = {
 ...users[userindex] ,
 ...body ,
 }

 return NextResponse.json({success : true , data : users[userindex]})
} catch (error) {
    return NextResponse.json({error : "something went wrong "})
}
} 