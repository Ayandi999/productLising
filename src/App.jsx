import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('https://api.freeapi.app/api/v1/public/randomproducts')
    .then((data)=>data.json())
    .then((data)=>setData(data.data.data))
  },[])

  return (
    <>
      <div className="app-container">
        {
          data.map((prod)=>(<ProductCard
             key={prod.id} 
             title={prod.title}
             description={prod.description}
             price={prod.price}
             discountPercentage={prod.discountPercentage}
             rating={prod.rating}
             brand={prod.brand}
             category={prod.category}
             images={prod.images}
             />))
        }
      </div>
    </>
  )
}

export default App
