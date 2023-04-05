import Card from "./Card";
function Pokemon() {
  let names = [
    {
      name: "Pikachu",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    },
    {
      name: "Bulbasaur",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    {
      name: "Charmander",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    },
    {
      name: "Squirtle",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    },
  ];
  return (
    <div className="flex justify-evenly my-8">
      {
        names.map((obj)=>{
          return<Card src={obj.src} title={obj.name}/>
        })
      }
    </div>
  );
}

export default Pokemon;
