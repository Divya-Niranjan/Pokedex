function Sample(props) {
  return (
    <div>

      {props.name==="John" ? <h1>Hi John!</h1>:<h1>Hi StrangePerson!</h1>}
    </div> 
  )
}

export default Sample;