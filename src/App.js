import React from 'react';

function Food({name}){
  return <h2>I like {name}</h2>
}

const foodILike = [
  {name:"kimchi"},
  {name:"ramen"},
  {name:"samgiopsal"},
  {name:"chukumi"},
  {name:"kimbap"}
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish => (
        <Food name={dish.name} />
      ))}
    </div>
  );
}

export default App;
