import React from 'react';
import './App.css';
import ProductTable from './ProductTable'
function App() {
  const products =[
    {category :"Electronics",name :"Mobile Phone",price :120},
    {category :"Electronics",name :"Laptop",price :450},
    {category :"Electronics",name :"speaker",price :40},
    {category :"Clothes",name :"Jean",price :30},
    {category :"Clothes",name :"T'shirt",price :15},
    {category :"Clothes",name :"Dress",price :40},
  ];
  return (
    <div className="App">
      <div>
 <ProductTable
 props={products}/>
  </div>
      
    </div>
  );
}

export default App;
