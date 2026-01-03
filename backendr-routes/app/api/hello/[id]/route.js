 import { NextResponse } from "next/server";
 import { users } from "../route";

 
   export  async  function GET(request , {params}) {
    let {id} =  await params
 try {
    const userid = parseInt(id)
    const user = users.find((i) => i.id === userid )
    return NextResponse.json(user)
 } catch (error) {
     return NextResponse.json({error: "Data not found "})
 }
   } 