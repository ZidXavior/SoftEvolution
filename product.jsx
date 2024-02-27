import React from "react";
import Product from "./Product";
import productsData from "./productsData";

function App() {
return (
E-Commerce
{productsData.map((product, index) => (
))}
);
}

const Product = ({ title, image, description }) => {
return(
<li style={{width : "300px"}}>

    <img src={image} alt={title} 
    width="100%" />
    <h2>{title}</h2>
    <p>{description}</p>
</li>

);
};

const productsData = [
{
title: 'Rubrix',
image: 'rubiks-cube.jpeg',
description:
' Rubik’s Cube consists of 26 small cubes that rotate on a central axis; nine coloured cube faces, in three rows of three each, form each side of the cube. When the cube is twisted out of its original arrangement, the player must then return it to the original configuration—one among 43 quintillion possible ones.',
},
{
title:WoodPegSolitaire ,
image: wood-peg-solitaire.jpeg,
description:
'Wooden Europe Board Game Single Chess Independently Cognitive Ability Toy Adult Classical Educational Toys Quality wood material  smooth and no burr , comfortable hand feel.' },

];

export default App;