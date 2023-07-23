import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components';
import { IoLogoUsd } from 'react-icons/io';
import { formatCurrency } from '../../utils/helper';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  /* align-items: center; */
  /* justify-content: center; */
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
  display: flex;
  font-family: "Sono";
  font-weight: 600;
  color: ${props => props.color ? props.color : "#BF4F74"};
  gap: 2px;
`;


const CoinRow = ({ coin }) => {
  const { id, image, name, symbol, total_volume, current_price, high_24h, low_24h
  } = coin;

  return (
    <Link to={`/coins/${id}`}>
      <TableRow role="row">
        <div></div>
        <Img src={image} />
        <Coin>{name}</Coin>
        <div>{symbol.toUpperCase()}</div>
        <Price color=' #50C878'>
          {formatCurrency(current_price)}
        </Price>
        <Price color='#FF6347'>
          {formatCurrency(high_24h)}
        </Price>
        <Price>
          {formatCurrency(low_24h)}
        </Price>
        <div>{total_volume}</div>
        <div></div>
      </TableRow>
    </Link>
  )
}

export default CoinRow;