import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ActionCardSkeleton = () => {
    return (
        <div>
            <Skeleton height={40} width={880} />
            <Skeleton height={240} width={880} />
            <br />
        </div>
    )
}

export default ActionCardSkeleton