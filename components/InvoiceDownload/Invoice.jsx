import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner';
import { useReactToPrint } from 'react-to-print';

const Invoice = ({ invoiceDetails }) => {
    const [supplierDetails, setSupplierDetails] = useState()
    const [subscriberDetails, setSubscriberDetails] = useState()
    const [services, setServices] = useState()
    const [advantages, setAdvntages] = useState()
    const [feedInCost, setFeedInCost] = useState(0)
    const [totalElectricPrice, setTotalElectricPrice] = useState()
    const [totalGasPrice, setTotalGasPrice] = useState()
    const [totalValue, setTotalValue] = useState(0)
    const contentToPrint = useRef(null);
    const handlePrint = useReactToPrint({
        documentTitle: "Print This Document",
        onBeforePrint: () => console.log("before printing.."),
        onAfterPrint: () => console.log("afetr printing.."),
        removeAfterPrint: true,
    });
    useEffect(() => {
        setSupplierDetails(invoiceDetails?.data?.provider_details)
        setSubscriberDetails(invoiceDetails?.data?.user_details)
        setServices(invoiceDetails?.data?.service)
        setAdvntages(invoiceDetails?.data?.advantages)
        setTotalElectricPrice(
            ((advantages?.normal_electric_consume) ? (advantages?.normal_electric_consume) : 0 * (services?.normal_electric_price) ? (services?.normal_electric_price) : 0) +
                ((advantages?.peak_electric_consume) ? (advantages?.peak_electric_consume) : 0 * (advantages?.peak_electric_price) ? (advantages?.peak_electric_price) : 0) +
                ((advantages?.feed_in_normal) ? (advantages?.feed_in_normal) : 0 * (services?.feed_in_normal) ? (services?.feed_in_normal) : 0) +
                ((advantages?.feed_in_peak) ? (advantages?.feed_in_peak) : 0 * (services?.feed_in_peak) ? (services?.feed_in_peak) : 0) +
                (feedInCost ? feedInCost : 0) + (services?.network_cost_electric) ? (services?.network_cost_electric) : 0
                    + (advantages?.reduction_of_energy_tax) ? parseInt(advantages?.reduction_of_energy_tax) : 0)

        setTotalGasPrice(
            ((advantages?.gas_consume) ? (advantages?.gas_consume) : 0 * (services?.gas_price) ? (services?.gas_price) : 0) +
                (services?.government_levies_gas) ? (services?.government_levies_gas) : 0
                    + (services?.delivery_cost_gas) ? (services?.delivery_cost_gas) : 0 +
                        (services?.network_cost_gas) ? (services?.network_cost_gas) : 0)
        setTotalValue(((totalElectricPrice) + (totalGasPrice)) - ((invoiceDetails?.cashback) ? (invoiceDetails?.cashback) : 0))
    }, [invoiceDetails, services, advantages])
    useEffect(() => {
        setTotalValue(((totalElectricPrice) + (totalGasPrice)) - ((invoiceDetails?.cashback) ? (invoiceDetails?.cashback) : 0))
    }, [totalGasPrice, totalElectricPrice, advantages])
    useEffect(() => {
        let sum = (parseInt(advantages?.feed_in_normal) + parseInt(advantages?.feed_in_peak))
        console.log(sum);
        if (sum && sum < 50) {
            setFeedInCost(0)
        } else if (sum && sum < 500) {
            setFeedInCost(110)
        } else if (sum && sum < 1000) {
            setFeedInCost(170)
        } else if (sum && sum < 1500) {
            setFeedInCost(220)
        } else if (sum && sum < 2000) {
            setFeedInCost(260)
        }
    }, [invoiceDetails, supplierDetails])
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
                <button className='invoice-download-btn'
                    onClick={() => {
                        handlePrint(null, () => contentToPrint.current);
                    }}
                >
                    Download invoice <i className="fas fa-download"></i></button>
            </div>
            <div className='invoice-main-box'>
                <div>
                    <div id="invoiceholder" ref={contentToPrint}>
                        <div id="invoice" className="effect2 my-4" style={{ padding: '20px' }} >
                            <div id="invoice-top" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="logo">
                                    <Image src={'/images/logo.png'} width={100} height={100} alt='aa' />
                                </div>

                                <div className="title">
                                    <h1>Order no #1069</h1>
                                    <p>Order Date: 3453</p>
                                    <p>Status: under process</p>
                                </div>
                            </div>
                            <div id="invoice-mid" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="subscriber-details">
                                    <h5>Subscriber Details :</h5>

                                    <p>Name: {subscriberDetails?.name}</p>
                                    <p>Address: {subscriberDetails?.address}</p>
                                    <p>Email: {subscriberDetails?.email}</p>
                                </div>
                                <div className="supplier-details">
                                    <h5>Supplier Details :</h5>
                                    <p>Name: {supplierDetails?.name}</p>
                                    <p>Address: {supplierDetails?.address}</p>
                                </div>
                            </div>
                            <div id="invoice-end" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                <div className="current-subscription">
                                    <h5>Current :</h5>
                                    <hr />
                                    <p><span>Normal elctric cost:</span>
                                        {((advantages?.normal_electric_consume) * (services?.normal_electric_price)).toFixed(2)}</p>
                                    <p><span>Off peak electric cost:</span>
                                        {((advantages?.peak_electric_consume) * (advantages?.peak_electric_price)).toFixed(2)}</p>
                                    <p><span>Normal return delivery:</span>
                                        {((advantages?.feed_in_normal) * (services?.feed_in_normal)).toFixed(2)}</p>
                                    <p><span>Off peak return delivery:</span>
                                        {((advantages?.feed_in_peak) * (services?.feed_in_peak)).toFixed(2)}</p>
                                    <p><span>Fixed delivery cost electric:</span> {(services?.delivery_cost_electric)}</p>
                                    <p><span>Feed in costs:</span> {feedInCost}</p>

                                    <p><span>Network managemnent costs electric:</span>
                                        {services ? (services.network_cost_electric).toFixed(2) : 0}</p>
                                    <p><span>Reduction of energy tax:</span>
                                        {advantages ? advantages.reduction_of_energy_tax : 0}</p>
                                </div>
                                <div className="gas-subscription">
                                    <h5>Gas :</h5>
                                    <hr />
                                    <p><span>Gas consumption:</span> {((advantages?.gas_consume) * (services?.gas_price)).toFixed(2)}</p>
                                    <p><span>Government levies:</span> {(services?.government_levies_gas)}</p>
                                    <p><span>Fixed delivery cost gas:</span> {services?.delivery_cost_gas ? (services?.delivery_cost_gas) : 0}</p>
                                    <p><span>Network managemnent costs:</span> {(services?.network_cost_gas)}</p>
                                </div>
                            </div>
                            <div className="sub-total" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                <h5>Sub total (current + gas)</h5>
                                <h6>{((totalElectricPrice) + (totalGasPrice))}</h6>
                            </div>
                            <div className="sub-total" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ width: '100%' }}>
                                    <div className='d-flex justify-content-between align-items-center'><b>Cashback: </b> {(invoiceDetails?.cashback) ? (invoiceDetails?.cashback) : 0}</div>
                                    <div className='d-flex justify-content-between align-items-center'><h5>Total per year :</h5> <b>{totalValue}</b></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Invoice