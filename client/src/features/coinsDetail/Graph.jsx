import React from 'react'
import { useMarketChart } from './useMarketChart';
import { Area, AreaChart, CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import moment from 'moment';

import Spinner from '../../ui/Spinner';
import { styled } from 'styled-components';

const Container = styled.div`
   margin-top: 4rem;
   margin-bottom: 4rem;
  
`;

const Graph = ({ coinId }) => {

    const { isLoading, marketChart } = useMarketChart(coinId);

    if (isLoading) return <Spinner />

    const formatterData = marketChart.prices.map((data) => ({
        time: moment(data[0]).format('MMMDD'),
        price: data[1]
    }))

    console.log(formatterData)
    return (
        <Container>
            <ResponsiveContainer height={500} width="100%" >
                <AreaChart data={formatterData} >
                    <XAxis dataKey='time' style={{ fontFamily: 'sans-serif', fontWeight: 600 }} angle={-45} textAnchor="end" />
                    <YAxis unit='$' style={{ fontFamily: 'sans-serif', fontWeight: 600 }} />
                    <Tooltip wrapperStyle={{ fontFamily: 'Roboto, sans-serif' }} />
                    <Legend
                        wrapperStyle={{ fontFamily: 'Roboto, sans-serif', padding: '10px' }}
                        verticalAlign="bottom"
                        height={36}
                    />
                    <CartesianGrid strokeDasharray='4 4' />
                    <Area dataKey='price' type='monotone' stroke='#4f46e5' strokeWidth={5} fill='#c7d2fe' />
                </AreaChart>
            </ResponsiveContainer>
        </Container>
    )
}

export default Graph