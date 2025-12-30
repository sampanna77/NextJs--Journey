  import Link from "next/link"
 
function page() {
  return (
    <div>
        <h1> Section </h1>
          <Link href={"/settings"}> See My Profile </Link>

        </div>

  )
}

export default page