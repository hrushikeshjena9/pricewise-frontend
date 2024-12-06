import React, { useEffect, useState } from 'react'
import Invoice from '../../../../../components/InvoiceDownload/Invoice'
import { useRouter } from 'next/router'
import { axiosGet } from '../../../../../utils/ApiCalls'

const InvoiceDownload = () => {
    const [singleDataId, setSingleDataId] = useState()
    const [authToken, setAuthToken] = useState()
    const [invoiceDetails, setInvoiceDetails] = useState()
    const router = useRouter()
    useEffect(() => {
        const token = (localStorage.getItem('token'))
        setAuthToken(token ? token : '')
    }, [])
    useEffect(() => {
        setSingleDataId(router.query.id)
    }, [router])

    useEffect(() => {
        const getSingleData = async () => {
            try {
                const res = await axiosGet(`show-user-request/${singleDataId}`, `Bearer ${authToken}`)
                setInvoiceDetails(res)
            } catch (error) {
                console.log(error);
            }
        }
        if (singleDataId) getSingleData()
    },[authToken, singleDataId])
    return (
        <>
            <section className='container my-3'>
                <Invoice invoiceDetails={invoiceDetails} />
            </section>
        </>
    )
}

export default InvoiceDownload