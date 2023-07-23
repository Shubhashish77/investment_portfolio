import React from 'react'
import { styled } from 'styled-components';
import { FiArrowDownRight } from 'react-icons/fi';

import Heading from '../../ui/Heading';
import { useCoinDetail } from './useCoinDetail';
import Spinner from '../../ui/Spinner';
import Graph from './Graph';


const Card = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: #fff;
   border-radius: 10px;
   gap: 1rem;
`;

const CredWrapper = styled.div`
   display: flex;
   align-items: center;
   background-color: #fff;
   border-radius: 10px;
   gap: 1rem;
`;

const Tag = styled.div`
  width:60px ;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color:  ${props => props.bgclr ? props.color : '#50C878'};
  color: #fe71b8;
  font-size: 10px;
`;

const Icon = styled.div`
   border-radius: 50%;
   color: white;
   background-color: #fe71b8;
   width:20px ;
   height: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Desc = styled.p`
`;



const Detail = ({ coinId }) => {

    const { isLoading, coinDetail } = useCoinDetail(coinId);

    if (isLoading) return <Spinner />

    return (
        <div>
            <Card>
                <CredWrapper>
                    <Heading>{`$${coinDetail.market_data.current_price.usd}`}</Heading>
                    {coinDetail.market_data.price_change_percentage_1h_in_currency.usd > 0 ? (
                        <>
                            <Tag bgclr="#FED2E8">
                                {`${coinDetail.market_data.price_change_percentage_1h_in_currency.usd
                                    }%`}
                            </Tag>
                            <Icon>
                                <FiArrowDownRight />
                            </Icon>
                        </>
                    ) : (
                        <>hui</>
                    )}

                </CredWrapper>
                <Heading as="h1">{`${coinDetail.name} USD`}</Heading>
            </Card>
            <div>
                <Graph coinId={coinId} />
            </div>
            <Desc dangerouslySetInnerHTML={{ __html: coinDetail.description.en }}>

            </Desc>
        </div>
    )
}

export default Detail