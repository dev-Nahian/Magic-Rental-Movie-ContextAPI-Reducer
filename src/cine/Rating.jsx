import React from "react";
import Star from '../assets/star.svg'

export default function Rating({ value }) {
  const stars = Array(value).fill(Star);

  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} alt="star" height="14" width="14" />
      ))}

    </>
  );
}
