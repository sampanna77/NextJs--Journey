import { NextResponse } from "next/server";


 export async function GET(request) {
  const data = request.headers.get("authorization");
console.log(data)

return new Response("ok" , {
    headers : {
       "Content-Type" : "text/html"
    }
})
}     