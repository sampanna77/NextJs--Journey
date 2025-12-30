import Link from "next/link"

function page() {
  return (
    <div><h1> Dashboard</h1>
    <div> 
      <Link className="text-blue-400 " href={"/dashboard/reports"}>View Reports </Link></div>
    <Link href={"/profile"}> See My Profile </Link>
    </div>

  )
}

export default page 