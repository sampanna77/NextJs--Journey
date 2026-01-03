import { NextResponse } from "next/server";

 export const  users = [
    {
        id : 1 ,
        name : "Sampanna Ghimire",
        email : "sampanna77@gmail.com" ,
        age : 10
    }  ,
    {
        id : 2 ,
        name : "Anish Ghimire",
        email : "anish@gmail.com" ,
        age : 23
    } ,
    {
        id :3 ,
        name : "Prajwal Rai",
        email : "prajwal88@gmail.com",
        age : 80
    }
]

  export   function GET(request) {
try {
    const searchParams = request.nextUrl.searchParams
    const name = searchParams.get("name")
    const age = searchParams.get("age");

let filtereduser = users
if(age){
    filtereduser = filtereduser.filter((i) => i.age === parseInt(age))
}

    console.log(name , age);
   return NextResponse.json({filtereduser})
} catch (error) {
    return NextResponse.json({error: "Data not found "})
}
  }