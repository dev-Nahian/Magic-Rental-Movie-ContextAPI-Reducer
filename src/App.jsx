import { useState, useReducer } from "react";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
import { cartReducer, initialState } from "./reducers/CartReducer";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  // const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true)
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        {/* <MovieContext.Provider value={{ cartData, setCartData }}> */}
        <MovieContext.Provider value={{ state, dispatch }}> 
          <Page />
          <ToastContainer/>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
