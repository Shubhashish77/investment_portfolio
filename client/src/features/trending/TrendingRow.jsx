import React from 'react'
import { styled } from 'styled-components';
import { formatCurrency } from '../../utils/helper';

// import { formatCurrency } from "../../utils/helper"

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 2px solid var(--color-grey-100);
  }
  &:hover{
    scale: 1.02;
    transition: all 1s;
  }
`;

const Img = styled.img`

  width: 5rem;
  transform: scale(1.2) translateX(-7px);
`;

const Coin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
  color: #50C878;
`;


const TrendingRow = ({ trendingCoin }) => {
  console.log("final", trendingCoin)
  const { id, large: icons, name, symbol, price_btc } = trendingCoin.item;

  return (
    <TableRow role="row">
      <div></div>
      <Img src={icons} />
      <Coin>{name}</Coin>
      <div>{symbol.toUpperCase()}</div>
      <Price>
        {formatCurrency(price_btc)}
      </Price>
    </TableRow>
  )
}

export default TrendingRow;