import React from 'react';
import { useGetPaymentPageQuery } from '../../API/paymentAPI';

const Frame = () => {

    const { data, error, isLoading } = useGetPaymentPageQuery()
    
    console.log(data)
    return (
        <div>
            Frame
        </div>
    );
};

export default Frame;