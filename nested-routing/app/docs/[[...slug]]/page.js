export default async function Page({ params }) {
    const {slug} = await params;
  console.log(slug)

  return (
    <div>
      Welcome to Docs 
      {slug?.join("/")}
    </div>
  )
}
