import React from "react";
import { useSelector } from "react-redux";

// import { Container } from './styles';

export default function Product() {
  const product = useSelector(state => state.product.data);
  return (
    <React.Fragment>
      <div>ESSE SAO OS PRODUTOS</div>
      <ul>
        {product.map(product => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}
