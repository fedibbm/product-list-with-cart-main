import React from "react";
import OrderConfirmedSVG from "../svgs/OrderConfirmedSVG";

const OrderConfirmationPopUp = ({ Items, newOrder, toggleOff }) => {
    const totalPrice = Items.reduce(
        (prev, item) => prev + item.Qt * item.product.price,
        0
    );
    return (
        <div className="fixed inset-0 h-screen w-screen bg-black left-0 top-0 bg-opacity-50 flex flex-row justify-center items-end md:items-center ">
            <div className="fixed inset-0 h-screen w-screen" onClick={toggleOff}></div>
            <div className=" min-h-96 w-[450px] rounded-md bg-gray-100 p-8 z-10">
                <div className="flex flex-col items-start w-full gap-4">
                    <OrderConfirmedSVG className="h-10 w-10" />
                    <div className="flex-flex-col space-y-2">
                        <h1 className="text-3xl font-bold">Order Confirmed</h1>
                        <p className="text-rose-400 text-sm pl-1 ">
                            We hope you enjoy your food!
                        </p>
                    </div>
                    <div className="w-full p-2 pb-0 rounded-md bg-red bg-opacity-5 ">
                        {Items.map((item, index) => (
                            <div
                                className="flex flex-row w-full border-b border-b-rose-400 border-opacity-20 py-1"
                                key={index}
                            >
                                <div className="p-2">
                                    <div
                                        className="h-10 w-10 bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url(${item.product.image.thumbnail})`,
                                        }}
                                    ></div>
                                </div>
                                <div className="flex flex-col justify-around mr-auto py-2">
                                    <p className="text-sm font-semibold">
                                        {item.product.name}
                                    </p>
                                    <p className="text-sm text-rose-500">
                                        <span className="text-red font-semibold">
                                            {item.Qt}x
                                        </span>{" "}
                                        <span className="text-xs">@ </span>$
                                        {item.product.price.toFixed(2)}
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center align-center">
                                    <p className="text-base font-semibold pr-2">
                                        $
                                        {(item.Qt * item.product.price).toFixed(
                                            2
                                        )}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className="flex flex-row justify-between items-center py-5 px-2">
                            <p className="text-rose-500 text-sm">Order Total</p>
                            <p className="text-lg font-bold">
                                ${totalPrice.toFixed(2)}
                            </p>
                        </div>

                    </div>
                    <div className="w-full">
                          <button className="text-white bg-red py-4 rounded-full w-full " onClick={newOrder}>Start New Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmationPopUp;
