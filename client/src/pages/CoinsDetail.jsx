import React from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../features/coinsDetail/Detail';


const CoinsDetail = () => {
    const params = useParams();
    console.log(params, "huihui")
    return (
        <div>
            <Detail coinId={params.coinId} />
        </div>
    )
}

export default CoinsDetail