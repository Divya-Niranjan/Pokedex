function Car(props) {
  const cars = props.cars;
  return (
    <>
      <h2>I am a {props.brand.model}!</h2>;
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

function Garage() {
  let handleClick = () => {
    console.log("I was clicked");
  };
  const cars = ["Ford", "BMW", "Audi"];
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <button onClick={handleClick}>Click Me</button>
      <Car brand={carInfo} cars={cars} />
    </>
  );
}
