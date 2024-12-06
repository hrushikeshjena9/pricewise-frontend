import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const OrderCardSkeleton = () => {
    return (
        <div>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', marginTop: '15px' }}>
                <Skeleton height={30} width={328} />
                <Skeleton height={30} width={322} />
            </div>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                <Skeleton height={30} width={328} />
                <Skeleton height={30} width={322} />
            </div>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                <Skeleton height={30} width={328} />
                <Skeleton height={30} width={322} />
            </div>
        </div>
    )
}

export default OrderCardSkeleton