
 async function page() {
  const res =  await fetch("http://localhost:3000/api/hello")
const data = await res.json()
  return (
   <div>
    {JSON.stringify(data)}
   </div>
  )
}

export default page