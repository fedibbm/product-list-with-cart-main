    import React, { useState, useEffect } from "react";
    import CartSVG from "../svgs/CartSVG";
    import IncrementSVG from "../svgs/IncrementSVG";
    import DecrementSVG from "../svgs/DecrementSVG";

    const AddToCart = ({ className, onClick, productQt }) => {
        const [quantity, setQuantity] = useState(productQt || 0);
    
        useEffect(() => {
            setQuantity(productQt);
        }, [productQt]);
        useEffect(() => {
            if (quantity >= 0) {
                onClick(quantity);
            }
        }, [quantity]);
    
        const handleQuantityChange = (method) => {
            setQuantity((prev) => {
                const newQuantity = method === "+" ? prev + 1 : prev - 1;
                return Math.max(newQuantity, 0);
            });
        };
    
        return (
            <div className={className}>
                {quantity === 0 ? (
                    <div
                        className="bg-white border-rose-500 border-[1px] w-36 flex flex-row items-center justify-center h-10 rounded-full gap-2 hover:text-red hover:cursor-pointer"
                        onClick={() => handleQuantityChange("+")}
                    >
                        <CartSVG />
                        <p className="font-bold text-sm">Add to Cart</p>
                    </div>
                ) : (
                    <div className="bg-red border-rose-500 border-[1px] w-36 flex flex-row items-center justify-around h-10 rounded-full">
                        <button
                            className="rounded-full h-6 w-6 flex items-center justify-center text-white border border-white hover:bg-white hover:text-red hover:border-red"
                            onClick={() => handleQuantityChange("-")}
                        >
                            <DecrementSVG />
                        </button>
                        <div className="text-white text-lg">{quantity}</div>
                        <button
                            className="rounded-full h-6 w-6 flex items-center justify-center text-white border border-white hover:bg-white hover:text-red hover:border-red"
                            onClick={() => handleQuantityChange("+")}
                        >
                            <IncrementSVG />
                        </button>
                    </div>
                )}
            </div>
        );
    };
    
    export default AddToCart;