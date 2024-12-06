import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const InternetTvPackageSkeleton = () => {
    return (
        <div className='row mb-3'>
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                <Skeleton height={100} width={150} />
            </div>
            <div className="col-lg-4 d-flex justify-content-start align-items-center">
                <div>
                    <Skeleton height={20} width={230} />
                    <Skeleton height={20} width={230} />
                    <Skeleton height={20} width={230} />
                </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-start align-items-center">
                <div>
                    <Skeleton height={20} width={230} />
                    <Skeleton height={20} width={230} />
                    <Skeleton height={20} width={230} />
                </div>
            </div>
        </div>
    )
}

export default InternetTvPackageSkeleton