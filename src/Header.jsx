import React, { useContext, useState } from "react";
import logo from './assets/logo.svg'
import Rign from './assets/ring.svg'
import Moon from './assets/icons/moon.svg'
import Sun from './assets/icons/sun.svg'
import ShoppingCart from './assets/shopping-cart.svg'
import CartDetails from "./cine/CartDetails";
import { MovieContext, ThemeContext } from "./context";


export default function Header() {

  // State Hook
  const [showCart, setShowCart] = useState(false)

  // Context Hook
  // const {cartData} = useContext(MovieContext);
  const {darkMode, setDarkMode} = useContext(ThemeContext)


  // UseReducer
  const {state} = useContext(MovieContext)


  console.log(state.cartData);
  

 
  // Click Handler
  function handleCartShow(){
    setShowCart(true)
  }


  return (
    <header>
      {
        showCart && <CartDetails onClose={()=> setShowCart(false)} />
      }
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Rign} width="24" height="24" alt="Ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={()=> setDarkMode(darkMode => !darkMode)}
            >
              <img
                src={darkMode? Sun : Moon}
                width="24"
                height="24"
                alt="moon"
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}
            >
              <img
                src={ShoppingCart}
                width="24"
                height="24"
                alt="shoppingCart"
              />
              {
                // cartData.length > 0 && (
                //   <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                //     {cartData.length}
                //   </span>
                // )
                state.cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {state.cartData.length}
                  </span>
                )
              }
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
