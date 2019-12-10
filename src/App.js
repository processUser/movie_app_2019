import React from 'react';

function Food({fav}){  //props or { fav }
  return <h2>I like {fav}</h2>  //props.fav or { fav }
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
