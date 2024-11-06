import {  useLoaderData, useParams } from "react-router-dom";
import Card from "./card";
import { useEffect, useState } from "react";


const Speratedcatagory = () => {
   
    const data = useLoaderData();
   

    const {category} = useParams()
    

    const [products, setProduct ]= useState([])

    useEffect (()=> {
        if(category){
            const filterProduct = [...data].filter(
              (product) => product.category === category
            )
            setProduct(filterProduct);
        } else{

            setProduct(data);
        }
    },[data, category])


    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
          {products.map((product) => (
            <Card key={product.productId} product={product} />
          ))}
        </div>
       
      </>
    );
};

export default Speratedcatagory;