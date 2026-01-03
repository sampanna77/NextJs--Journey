import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function GET(request) {
    
const cookiesstore = await cookies()

cookiesstore.delete("theme")
return NextResponse.json({
    message : "Cookies deleted successfully"
})
  
}  