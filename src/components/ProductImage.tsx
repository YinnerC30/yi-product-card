import React,{ CSSProperties, useContext } from 'react';
import { productContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}


export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(productContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img src={imgToShow} alt="Product image" className={` ${styles.productImg} ${className}`} style={style} />
  );
};
