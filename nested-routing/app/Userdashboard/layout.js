import Link from "next/link"

function layout({tab1 , tab2}) {
  return (
    <div>
        <nav className="mb-4 "> 
            <Link href = {"/Userdashboard/tab1"}> Tab 1 </Link> | {""}
            <Link href = {"/Userdashboard/tab2"}> Tab 2 </Link> | {""}
        </nav>

        <div>  { tab1} </div>
        <div>  { tab2} </div>
    </div>
  )
}

export default layout  