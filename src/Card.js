function Card(props) {
  return ( 
  <div className="border-2 p-4 bg-[#aeaeae] border-[#000] mx-auto">
    <img className="w-32 h-32" src={props.src}/>
    <h1 className="text-xl font-bold text-center">{props.title}</h1>
  </div> );
}

export default Card;