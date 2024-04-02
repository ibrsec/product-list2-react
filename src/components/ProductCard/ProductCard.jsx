

import React, { useState } from 'react'
import cardStyle from './ProductCard.module.scss';
import { FaHeart } from "react-icons/fa";


const ProductCard = (props) => {
  const {price,title,image,favori} = props.product;
  const [fav,setFav] = useState(false);
  console.log(props);

const favClick = () => {
  setFav(!fav);



}

  return (
    <div className={"card px-1 " + cardStyle.card}>
        <div className={' ' + cardStyle.cardTop}>
            <span>{price} $</span>
            <FaHeart className={cardStyle.fav}  onClick={favClick} style={fav ? {color:"red"}:{color:"black"}} />
        </div>
        <img src={image} alt="" />
        <div className={cardStyle.cardInfo}>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default ProductCard;