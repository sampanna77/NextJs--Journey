import { NextResponse } from "next/server";
import { users } from "../../hello/route";

export async function DELETE( request , {params}) {
const {id} = await params ;
try {
    const userid = parseInt(id)
const userindex = users.findIndex((i) => i.id === userid)
if(userindex == -1)  {
    return NextResponse.json({error : "User not found"})

}
let deleteduser = users[userindex]
users.slice(userindex , 1)
 return NextResponse.json({success : true, deleteduser : deleteduser})
} catch (error) {
     return NextResponse.json({error : "User not found"})
   
}
}