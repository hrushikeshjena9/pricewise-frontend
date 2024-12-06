import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Pagination = ({ apiRes,setPostsPerPage, setPageNo, pageNo, postsPerPage }) => {
    const router = useRouter()
    const totalProducts = apiRes ? (apiRes?.data?.length) : 0

    useEffect(() => {
        setPageNo(router?.query?.pageNo)
    }, [router])
    const numOfPages = Math.floor(
        totalProducts / postsPerPage + (totalProducts % postsPerPage)
    );

    let endRange = +pageNo + 3;
    let startRange = +pageNo - 3;
    if (pageNo == 1 || startRange <= 0) {
        startRange = 1;
    }
    if (endRange > numOfPages) {
        endRange = numOfPages;
    }
    const pageNumbers = [];

    for (let i = startRange; i <= endRange; i++) {
        pageNumbers.push(
            <li key={i} className="page-item">
                <Link
                    className={pageNo == i ? "page-link active" : "page-link"}
                    href={`?pageNo=${i}`}
                >
                    {i}
                </Link>
            </li>
        );
    }
    return (
        <>
            <section className="pagination-top mt-5">
                <div className="container d-flex justify-content-end">
                    <nav aria-label="...">
                        <ul className="pagination">
                            <li className="page-item">
                                <Link
                                    className="page-link"
                                    href={`?pageNo=1`}
                                >
                                    First
                                </Link>
                            </li>
                            {pageNumbers}
                            <li className="page-item">
                                <Link
                                    className="page-link"
                                    href={`?pageNo=${numOfPages}`}
                                >
                                    Last
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Pagination