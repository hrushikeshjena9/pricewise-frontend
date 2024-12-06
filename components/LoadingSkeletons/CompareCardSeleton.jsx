import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CompareCardSkeleton = () => {
    return (
        <>
            <div style={{padding: '15px'}}>
                <Skeleton height={60} width={225} />
                <Skeleton height={182} width={225} />
                <div>
                    <Skeleton height={20} width={225} />
                    <Skeleton height={20} width={225} />
                    <Skeleton height={20} width={225} />
                    <Skeleton height={20} width={225} />
                    <Skeleton height={20} width={225} />
                    <Skeleton height={20} width={225} />
                    <Skeleton height={20} width={225} />
                </div>
            </div>
        </>
    )
}

export default CompareCardSkeleton