
const page = (props) => {
    console.log(props)
  return (
    <div>
      <h1>Show Art</h1>
      <p>{props.params.title}</p>
    </div>
  )
}

export default page
