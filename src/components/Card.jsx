import React, { useState } from 'react'
import shoes from '../assets/vapoorfly-1.png'

const Card = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = ()=>{

        setCount(count + 1);

    }

    const handleDecrement = ()=>{

        
        if(count !== 0){
            setCount(count - 1);
        }

        

    }

    let deliveryCharges = 0;
    
    if (count !== 0){
        deliveryCharges = 600;
    }
    else{
        deliveryCharges = 0;
    }

    let price = 22000
    let quantityPrice = price*count;



  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-2">
          <div class="flex my-5 p-10">
            <img src={shoes} class="w-50 h-50" alt="" />
            <div class="bag=product-content ms-5">
              <h5 class="font-semibold text-lg">Nike Vaporfly 4</h5>
              <p class="text-lg text-slate-500">Men's Road Racing Shoes</p>
              <p class="font-semibold text-lg">MRP: ₹{price}</p>
              <p class="font-semibold text-lg"></p>

              <div class="quantity-button flex items-center gap-3 mt-5">
                <button class="decrement bg-slate-100 p-2 rounded-full" onClick={handleDecrement}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                  </svg>
                </button>
                <span class="text-xl">{count}</span>
                <button class="increment bg-slate-100 p-2 rounded-full" onClick={handleIncrement}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="bag-items-prices p-10">
            <div class="bag-items-price-title">
              <h2 class="text-3xl font-semibold">Summary</h2>
            </div>
            <div class="bag-items-price-content mt-10">
              <ul class="w-100">
                <li class="flex items-center justify-between mb-3">
                  <p class="text-xl font-semibold">Subtotal</p>
                  <p class="text-xl subtotal-price">₹{quantityPrice}</p>
                </li>
                <li class="flex items-center justify-between border-b-1 pb-3">
                  <p class="text-xl font-semibold">Estimated Delivery & Handling</p>
                  <p class="text-xl delivery-charges">₹{deliveryCharges}</p>
                </li>
                <li class="flex items-center justify-between mt-3">
                  <p class="text-xl font-semibold">Total</p>
                  <p class="total-price text-xl">₹{quantityPrice + deliveryCharges}</p>
                </li>
                <li>
                  <button class="bg-black hover:bg-gray-700 text-white cursor-pointer px-5 py-2 rounded mt-10">Buy Now</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card
