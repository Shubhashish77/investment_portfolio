import styled from "styled-components";
import { useCoins } from "./useCoins";
import { useState } from "react";

import Spinner from "../../ui/Spinner";
import CoinsRow from "./CoinsRow";
import { GiTwoCoins } from "react-icons/gi";



const Title = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: var(--color-grey-100);
   margin-bottom: 15px;
   border-radius: 10px;
   color: var(--color-brand-600);
   gap: 5px;
`

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;


const CoinsTable = () => {

    const [page, setPage] = useState(1)
    const { isLoading, coins } = useCoins(page);
    console.log(coins)
    if (isLoading) return <Spinner />;

    return (
        <>
            <Title as="h1"> <GiTwoCoins /> COINS </Title>
            <Table role="table">
                <TableHeader role="row">
                    <div></div>
                    <div>Icon</div>
                    <div>Name</div>
                    <div>SYMBOL</div>
                    <div>PRICE</div>
                    <div>24Hrs High</div>
                    <div>24Hrs Low</div>
                    <div>VOLUME</div>
                    <div></div>

                </TableHeader>
                {coins?.map((coin) => {
                    return <CoinsRow coin={coin} />
                })}
            </Table>
        </>
    )
}

export default CoinsTable;