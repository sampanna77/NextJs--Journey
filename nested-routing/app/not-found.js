 import Link from "next/link"
 import Image from "next/image"
function notfound() {
  return (
    <div className=" flex flex-col items-center justify-center h-screen  bg-white text-black ">
        <Image src = {"/404error.svg"}  alt = "not found" height = {400} width = {400} />
      <Link href={"/"} className="mt-5 bg-blue-400 px-3 py-2 rounded-md text-white font-semibold "> Back to home </Link>
    </div>
  )
}

export default notfound