import React, { useContext, useState } from "react";
import { getImgUrl } from "../utils/cine-utillity";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../context";
import { toast } from "react-toastify";

export default function MovieCart({ movie }) {
  // State Hook
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Context Hook
  /*const { cartData, setCartData } = useContext(MovieContext);*/

  // UseReducer
  const { state, dispatch } = useContext(MovieContext);

  // Click Handler
  function handleModalClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }

  function handleMovieSelection(movie) {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  // Add To Cart Function
  function handleAddToCart(event, movie) {
    event.stopPropagation();

    // const found = cartData.find((item) => {
    //   return item.id === movie.id;
    // });

    // if (!found) {
    //   setCartData([...cartData, movie]);
    // } else {
    //   console.error(`The Movie ${movie.title} Has Been Already Added to cart`);
    // }

    const found = state.cartData.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });

      toast.success(`Movie ${movie.title} added successfully`, {
        position: "bottom-right",
      });
    } else {
      toast.error(` ${movie.title} Has Been Already Added to cart`, {
        position: "bottom-right",
      });
    }
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a onClick={() => handleMovieSelection(movie)} href="#">
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />

          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>

            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>

            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>     
    </>
  );
}
