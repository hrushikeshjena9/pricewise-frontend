import { useEffect, useState } from "react"
import { HealthHomeTop } from '../../../components/HealthInsurance/HealthInsuranceStep1/HealthHomeTop'
import HealthHomebottomFaq from '../../../components/HealthInsurance/HealthInsuranceStep1/HealthHomeBottomFaq';
import HealthHomeDeails from '../../../components/HealthInsurance/HealthInsuranceStep1/HealthHomeDeals';
import HealthInsuranceStep2Header from "../../../components/HealthInsurance/HealthInsuranceStep2/HealthInsuranceStep2Header";
import HealthInsuranceStep2Left from "../../../components/HealthInsurance/HealthInsuranceStep2/HealthInsuranceStep2Left";
import HealthInsuranceStep2Right from "../../../components/HealthInsurance/HealthInsuranceStep2/HealthInsuranceStep2Right";
import HealthInsuranceRight from "../../../components/HealthInsurance/HealthInsuranceStep3/HealthInsuranceRight";
import HealthInsuranceLeftStep4 from "../../../components/HealthInsurance/HealthInsuranceStep4/HealthInsuranceLeftStep4";
import HealthInsuranceRightStep4 from "../../../components/HealthInsurance/HealthInsuranceStep4/HealthInsuranceRightStep4";
import Image from "next/image";
import { PostData, axiosGet } from "../../../utils/ApiCalls";
import { useSelector } from "react-redux";
import PersonalInfo from "../../../components/HealthInsurance/HealthInsuranceStep3/PersonalInfo";
import AdditionalInfo from "../../../components/HealthInsurance/HealthInsuranceStep3/AdditionalInfo";
import AdditionalQuestions from "../../../components/HealthInsurance/HealthInsuranceStep3/AdditionalQuestions";
import Delivery from "../../../components/HealthInsurance/HealthInsuranceStep3/Delivery";
import Verification from "../../../components/HealthInsurance/HealthInsuranceStep3/Verification";
import { useForm } from "react-hook-form";

const Index = ({ data }) => {
    // console.log(data);
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [count, setCount] = useState(0)
    const [width, setWidth] = useState('0')
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [showStepper, setShowStepper] = useState(false)
    const [formData, setFormData] = useState()
    const [apiData, setApiData] = useState()
    const [apiFilters, setApiFilters] = useState()
    const [apiSendData, setApiSendData] = useState();
    const [checkedItems, setCheckedItems] = useState([]);
    const [authToken, setAuthToken] = useState()
    const [coveragesType, setCoveragesType] = useState()
    const [reducedValue, setReducedValue] = useState(0)
    const [discountedVal, setDiscountedVal] = useState(0)
    const [userDetails, setUserDetails] = useState()
    const [pageNo, setPageNo] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
    const singleData = useSelector((state) => state?.healthInsurance?.healthInsuranceSingleProd[0]);
    const formData2 = useSelector((state) => state?.healthInsurance?.healthInsurance[0]);
    // console.log(formData2?.healthInsurance[0]);
    useEffect(() => {
        const token = (localStorage.getItem('token'))
        const userDetails = JSON.parse(localStorage.getItem('userData'))
        setAuthToken(token ? token : '')
        setUserDetails(userDetails ? userDetails : '')
    }, [])
    console.log("single data", singleData);

    useEffect(() => {
        if (typeof (singleData?.discount_percentage) == 'number' && typeof (singleData?.price) == 'number') {
            const reduce = (singleData.discount_percentage / 100) * (singleData.price)
            console.log("hello");
            console.log("reduce val", reduce);
            setReducedValue(reduce)
        }
    }, [singleData])
    useEffect(() => {
        const finalVal = singleData?.price - reducedValue
        console.log("final val",finalVal);
        setDiscountedVal(finalVal)
    }, [singleData, reducedValue])
    console.log("discount", discountedVal);

    useEffect(() => {
        if (count == 0) {
            setWidth('40%')
            setShowStepper(true)
        } else if (count == 1) {
            setWidth('50%')
        } else if (count == 2) {
            setWidth('75%')
        } else if (count == 3) {
            setWidth('100%')
        } else {
            setWidth(null)
        }
    }, [count])
    useEffect(() => {
        const filteredData = async () => {
            try {
                // const res = await PostData("health-insurance", { postal_code: postCode })
                const res = await PostData('health-insurance', { ...apiSendData }, '', `Bearer ${authToken}`)
                console.log(res);
                // setApiFilters(res?.filters)
                setApiData(res)
            } catch (error) {
                console.log(error);
            }
        }
        if (checkedItems && checkedItems.length > 0) filteredData()
    }, [checkedItems])
    useEffect(() => {
        const coverageData = async () => {
            try {
                const res = await PostData('health-insurance', '', '', `Bearer ${authToken}`)
                setCoveragesType(res?.coverages)
            } catch (error) {
                console.log(error);
            }
        }
        coverageData()
    }, [])
    const onSubmit = async (data) => {
        console.log(data);
        const sendData = {
            user_id: userDetails?.id,
            user_type: "personal",
            category: singleData?.category,
            sub_category: singleData?.sub_category,
            service_id: singleData?.id,
            total_price: singleData?.price,
            shipping_address: formData2?.address,
            postal_code: formData2?.post_code,
            billing_address: formData2?.address,
            discounted_price: discountedVal,
            request_status: singleData?.status,
            contactDetails: {
                first_name: data.first_name,
                last_name: data.last_name,
                landline_number: data.landline_number,
                email: data.email,
                age: data.age,
                account_number: data.account_number,
                sex: data.sex,
                mobile_number: data.mobile_number,
                initials: data.initials,
                prefix: data.postcode,
            },
            additionalInfo: {
                self: {
                    self_firstname: data.self_firstname,
                    self_DOB: data.self_DOB,
                    self_lastname: data.self_lastname,
                    self_gender: data.self_gender,
                    self_bsn: data.self_bsn,
                },
                partner: {
                    partner_firstname: data.partner_firstname,
                    partner_gender: data.partner_gender,
                    partner_lastname: data.partner_lastname,
                    partner_marital_status: data.partner_marital_status,
                    partner_nationality: data.partner_nationality,
                    partner_DOB: data.partner_DOB,
                    partner_bsn: data.partner_bsn,
                }
            },
            additionalQuestion: {
                self: {
                    income_abroad: data.income_abroad,
                    own_income: data.own_income,
                    source_of_income: data.source_of_income,
                    income_abroad: data.income_abroad,
                    living_address: data.living_address,
                    work_address: data.work_address,
                },
                partner: {
                    partner_income_abroad: data.p_income_abroad,
                    partner_living_address: data.p_living_address,
                    partner_own_income: data.p_own_income,
                    partner_working_address: data.p_working_address,
                }
            },
            delivery: {
                differ_postal_addrr: data.differ_postal_addrr,
                switch_service: data.switch_service
            },
            verification: {
                payment_method: data.payment_method,
                verification: data.verification,
                get_notified: data.get_notified,
            }
        }
        try {
            const res = await PostData('save-user-request', '', sendData, `Bearer ${authToken}`)
            console.log(res);
        } catch (error) {
            console.log(error);

        }
    };
    return (
        <>
            {showStepper &&
                <section>
                    <div className="progressbar-bx">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <ul className="list-unstyled">
                                        <li onClick={() => setCount(0)}
                                            className={count == 0 ? "active" : ""}>Stap 1: Vul de gegevens in <i className="fas fa-chevron-right" />
                                        </li>
                                        <li className={count == 1 ? "active" : ""} onClick={() => setCount(1)}>Stap 2: Vergelijk <i className="fas fa-chevron-right" />
                                        </li>
                                        <li onClick={() => setCount(2)}
                                            className={count == 2 ? "active" : ""}>Stap 3: Aanvraag <i className="fas fa-chevron-right" />
                                        </li>
                                        <li onClick={() => setCount(3)}
                                            className={count == 3 ? "active" : ""}
                                        >Stap 4: Voltooid <i className="fas fa-flag" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: width }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                    <p className='mb-0'> Je bent een stap dichterbij jouw beste keuze...<Image src="/images/hourglass.png" alt="flags" width={24} height={24} /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }

            {count == 0 &&
                <>
                    <HealthHomeTop setShowStepper={setShowStepper} setCount={setCount}
                        setFormData={setFormData}
                        setApiData={setApiData}
                        setApiFilters={setApiFilters}
                        setApiSendData={setApiSendData}
                        apiSendData={apiSendData}
                        authToken={authToken}
                        coveragesType={coveragesType}
                    />
                    <HealthHomeDeails data={data} />
                    <HealthHomebottomFaq />
                </>
            }
            {count == 1 &&
                <>
                    <main>
                        <section>
                            <div className="container">
                                <div className="comparestep">
                                    <HealthInsuranceStep2Header />
                                    <div className="row">
                                        <HealthInsuranceStep2Left formData={formData}
                                            apiData={apiData}
                                            apiFilters={apiFilters}
                                            setCheckedItems={setCheckedItems}
                                            checkedItems={checkedItems}
                                            coveragesType={coveragesType} />
                                        <div className="col-lg-8">
                                            <HealthInsuranceStep2Right showMoreInfo={showMoreInfo}
                                                setShowMoreInfo={setShowMoreInfo}
                                                apiData={apiData}
                                                setCount={setCount}
                                                postsPerPage={postsPerPage}
                                                pageNo={pageNo}
                                                setPageNo={setPageNo}
                                                setPostsPerPage={setPostsPerPage} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </>
            }
            {count == 2 &&
                <>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="compare-toppart mt-2">
                                    <h2>Stel jouw deal vandaag veilig</h2>
                                    <div className="secure-wrp">
                                        <Image width={200} height={200} alt="aa" src="/images/secure.png" className="img-fluid secureimg" />
                                    </div>
                                    <p>
                                        Vul de resterende gegevens in die de aanbieder nodig heeft, zodat
                                        wij alles vlekkenloos kunnen regelen en jij snel hier van kan
                                        profiteren.
                                    </p>
                                </div>
                                <div className="profile-details">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <PersonalInfo register={register} errors={errors} />
                                        <AdditionalInfo register={register} errors={errors} />
                                        <AdditionalQuestions register={register} errors={errors} />
                                        <Delivery register={register} errors={errors} />
                                        <Verification register={register} errors={errors} />
                                    </form>
                                </div>
                            </div>

                            <HealthInsuranceRight singleData={singleData} />
                        </div>
                    </div>
                </>
            }
            {count == 3 &&
                <>
                    <div className="container">
                        <div className="comparestep3">
                            <div className="row">
                                <HealthInsuranceLeftStep4 />
                                <HealthInsuranceRightStep4 />
                            </div>
                        </div>
                    </div>

                </>
            }
        </>
    )
}

export default Index;

export async function getServerSideProps() {
    try {
        const data = await axiosGet('get-top-four-deals')
        console.log("countdown data", data);
        return {
            props: { data: data },
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: { data: {} },
        };
    }
}
