
 async function page({params}) {
     const {id , reviewsid} = await params
  return (
    <div> page {id} {reviewsid}</div>
  )
}

export default page