

import React from 'react'
import cardStyle from './ProductCard.module.scss';
import { FaHeart } from "react-icons/fa";


const ProductCard = (props) => {
    const {image,price,title} = props.product;
  return (
    <div className={"card " + cardStyle.card}>
        <div className={' ' + cardStyle.cardTop}>
            <span>{price} $</span>
            <FaHeart className={cardStyle.fav}/>
        </div>
        <img src={image} alt="" />
        <div className={cardStyle.cardInfo}>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default ProductCard;