import React, { useEffect } from "react";
import CarbonNeutralSVG from "../svgs/CarbonNeutralSVG";
import { RemoveItemButton } from "./RemoveItemButton";
import EmptyCartSVG from "../svgs/EmptyCartSVG";

const Cart = ({ Items = [], removeItemHandler, confirmOrder }) => {
    const totalQt = Items.reduce((prev, item) => prev + item.Qt, 0);
    const totalPrice = Items.reduce(
        (prev, item) => prev + item.Qt * item.product.price,
        0
    );
    return (
        <div className="bg-gray-100 p-8 rounded-md w-[min(450px,90%)] shadow-sm min-h-80 flex flex-col">
            <h1 className="text-2xl font-bold text-red py-2">
                Your Cart ({totalQt})
            </h1>
            {/* Render list items only if Items is not empty */}
            {Items.length > 0 ? (
                <div>
                    <ul className="flex flex-col">
                        {Items.map((item, index) =>
                            item.Qt > 0 ? (
                                <li
                                    key={index}
                                    className="text-lg border-b border-b-rose-500 border-opacity-10 flex flex-row items-center"
                                >
                                    <div className="flex flex-col w-full py-2">
                                        <h1 className="text-lg font-semibold py-2">
                                            {item.product.name}
                                        </h1>
                                        <p>
                                            <span className="text-red font-semibold text-base">
                                                {item.Qt}x
                                            </span>{" "}
                                            <span className="text-sm text-rose-400">
                                                @ $
                                                {item.product.price.toFixed(2)}{" "}
                                            </span>{" "}
                                            <span className="text-sm font-semibold text-rose-500">
                                                $
                                                {(
                                                    item.Qt * item.product.price
                                                ).toFixed(2)}
                                            </span>
                                        </p>
                                    </div>
                                    <RemoveItemButton
                                        onClick={() => removeItemHandler(item)}
                                    />
                                </li>
                            ) : null
                        )}
                    </ul>

                    <div className="flex flex-row w-full justify-between my-4">
                        <p>Order Total</p>
                        <h1 className="text-xl font-bold ">
                            ${totalPrice.toFixed(2)}
                        </h1>
                    </div>
                    <div className="h-12 bg-red bg-opacity-5 flex flex-row justify-center items-center rounded-md my-4 gap-2">
                        <CarbonNeutralSVG />{" "}
                        <p>
                            this is a{" "}
                            <span className="font-semibold">
                                carbon-neutral
                            </span>{" "}
                            delivery
                        </p>
                    </div>
                    <div>
                        <button className="flex flex-col justify-center items-center bg-red p-4 rounded-full w-full"onClick={confirmOrder}>
                            <p className="text-white">Confirm Order</p>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center w-full gap-3 grow">
                    <EmptyCartSVG />
                    <p className="text-rose-500 font-semibold">
                        Your added items will appear here
                    </p>
                </div>
            )}
        </div>
    );
};

export default Cart;
