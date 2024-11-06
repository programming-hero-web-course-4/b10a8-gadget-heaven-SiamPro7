import toast from "react-hot-toast";

// get all product from local storage
const getAllFavourites =()=>{
    const all = localStorage.getItem("carts")

    if(all){
        const carts = JSON.parse(all);
        console.log(carts);
        return carts
    }else{
        console.log([]);
return []
    }


    
}
// add a product to local storage 
const addCart =product =>{
    // get all previously saved storage
   const carts = getAllFavourites();
   const isExist = carts.find((item) => item.productId == product.productId);
   if (isExist)return toast.error("This product alrey added!");
   console.log(carts);

   carts.push(product);
   localStorage.setItem("carts", JSON.stringify(carts))
   toast.success("Successfully created!");
}
// remove a product to local stroge

export {addCart, getAllFavourites}