import React, { useState,useEffect } from "react";
import products from "../../data.json";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import OrderConfirmationPopUp from "./OrderConfirmationPopUp";

const DessertsPage = () => {
    const [cartItems, setCartItems] = useState([]);


    const [isPopUpToggled, setIsPopUpToggled] = useState(false);

    const addProduct = (Item)=>{
        const productIndex = cartItems.findIndex(f=> f.product.name === Item.product.name);
        if (productIndex === -1 && Item.Qt > 0) {
            setCartItems(prevItems => [...prevItems, Item]);
        } else {
            setCartItems(prevItems =>
                prevItems.map((i, index) =>
                    index === productIndex ? Item : i
                ).filter(i => i.Qt > 0)
            );
        }
    }

    const removeItemHandler = (item)=>{
        setCartItems(prev => prev.filter(i => i.product.name !== item.product.name));
    }

    const handleConfirmOrder = ()=>{
        setIsPopUpToggled(true);
    }

    const handleNewOrder = ()=>{
        setCartItems([]);
        setIsPopUpToggled(false);
    }
    return (
        <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start w-full my-32 gap-y-8">
            <div className="flex flex-col">
                <h1 className="text-3xl pb-10 font-bold">Desserts</h1>
                <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 min-[2000px]:grid-cols-5 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} addProduct={addProduct} Items={cartItems} />
                    ))}
                </div>
            </div>
            <Cart Items={cartItems} removeItemHandler={removeItemHandler} confirmOrder={handleConfirmOrder}/>
            {isPopUpToggled?<OrderConfirmationPopUp newOrder={handleNewOrder} toggleOff={()=>setIsPopUpToggled(false)}  Items={cartItems}/>:""}
        </div>
    );
};

export default DessertsPage;
