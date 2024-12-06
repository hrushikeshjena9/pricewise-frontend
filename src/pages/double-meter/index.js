import React, { useEffect, useRef, useState } from "react";
import ActionSection from "../../../components/CyberSecurity/CyberStep2/ActionSection";
import StepTwoLeftFilter from "../../../components/DoubleMeter/EnergyStep2/StepTwoLeftFilter";
import CompareToggle from "../../../components/DoubleMeter/EnergyStep2/CompareToggle";
import TopSection from "../../../components/CyberSecurity/CyberStep2/TopSection";
import EnergyStep2Tab from "../../../components/DoubleMeter/EnergyStep2/EnergyStep2Tab";
import EnergyStep3Rightbar from "../../../components/DoubleMeter/EnergyStep3/EnergyStep3Rightbar";
import EnergyStep4Leftbar from "../../../components/DoubleMeter/EnergyStep4/EnergyStep4Leftbar";
import EnergyStep4Rightbar from "../../../components/DoubleMeter/EnergyStep4/EnergyStep4Rightbar";
import SeveralMeters from "../../../components/DoubleMeter/EnergyStep1/SeveralMeters";
import DoubleMeter from "../../../components/DoubleMeter/EnergyStep1/DoubleMeter";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { PostData, axiosGet } from "../../../utils/ApiCalls";
import CredentialDetails from "../../../components/DoubleMeter/EnergyStep3/CredentialDetails";
import Verification from "../../../components/DoubleMeter/EnergyStep3/Verification";
import PaymentDetails from "../../../components/DoubleMeter/EnergyStep3/PaymentDetails";
import Address from "../../../components/DoubleMeter/EnergyStep3/Address";
import Image from "next/image";
import { useRouter } from "next/router";
import EnergyDeals from "../../../components/DoubleMeter/EnergyStep1/EnergyDeals";
import EnergyFaq from "../../../components/DoubleMeter/EnergyStep1/EnergyFaq";
import SunAnimation from "../../../components/common/SunAnimation";

const Index = ({ data, data2 }) => {
  const router = useRouter();
  const { step } = router.query;
  const [houseData, setHouseData] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    setValue,
    setError,
    formState: { errors },
  } = useForm();
  const [count, setCount] = useState(0);
  const [currentType, setCurrentType] = useState(0);

  const [a, setA] = useState(false);
  const [width, setWidth] = useState("0");
  const [showStepper, setShowStepper] = useState(false);
  const [meter, setMeter] = useState(0);
  const [formData, setFormData] = useState();
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [apiRes, setApiRes] = useState();
  const [checkedItems, setCheckedItems] = useState([]);
  const [houseType, setHouseType] = useState(null);
  const [no_gas, setNoGas] = useState(null);
  const [userDetails, setUserDetails] = useState();
  const [loading, setLoading] = useState(false);
  const [totalGasElctricCost, setTotalGasElectricCost] = useState();
  const [pageNo, setPageNo] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [showExtended, setShowExtended] = useState(false);
  const [showExtended2, setShowExtended2] = useState(false);
  const [originalElectricConsume, setOriginalElectricConsume] = useState(null);

  const className = "p-energy";
  useEffect(() => {
    if (step) setCount(step);
  }, [router]);
  useEffect(() => {
    if (count == 0) {
      setWidth("40%");
      setShowStepper(false);
    } else if (count == 1) {
      setWidth("50%");
      setShowStepper(true);
    } else if (count == 2) {
      setWidth("75%");
      setShowStepper(true);
    } else if (count == 3) {
      setWidth("100%");
      setShowStepper(true);
    } else {
      setWidth(null);
    }
  }, [count]);
  useEffect(() => {
    if (data) {
      setHouseData(data.data);
    }
  }, [data]);
  const [energyUserData, setEnergyUserData] = useState();
  const [singleEnergyData, setSingleEnergyData] = useState();
  const [authToken, setAuthToken] = useState();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    const data2 = JSON.parse(localStorage.getItem("SingleItem"));
    const data3 = JSON.parse(localStorage.getItem("EnergyUserData"));
    const token = localStorage.getItem("token");
    setUserDetails(data ? data : "");
    setSingleEnergyData(data2 ? data2 : "");
    setEnergyUserData(data3 ? data3 : "");
    setAuthToken(token ? token : "");
  }, []);
  const formSubmit = async (data) => {
    toast.loading("Submitting data, please wait...");
    console.log(data);
    const sendData = {
      user_id: userDetails?.id,
      postal_code: energyUserData?.postal_code,
      user_type: singleEnergyData?.product_type,
      category: singleEnergyData?.category,
      sub_category: 18,
      service_id: 5,
      service_type: "App\\Models\\EnergyProduct",
      combos: singleEnergyData?.combos,
      provider_id: singleEnergyData?.provider,

      shipping_address: {
        post_code: data.postcode,
        house_no: data.house_no,
      },
      billing_address: {},
      total_price: totalGasElctricCost,
      discounted_price: 3.456,
      discount_prct: 15,
      commission_prct: 10,
      commission_amt: singleEnergyData?.commission,
      request_status: "Under Process",
      no_gas: null,
      solar_panels: energyUserData?.solar_panel,
      cashback: singleEnergyData?.cashback,
      advantages: {
        gas_consume: energyUserData?.gas_consume,
        gas_price: singleEnergyData?.prices?.gas_rate,
        delivery_cost_gas: energyUserData?.delivery_cost_gas,
        delivery_cost_electric: singleEnergyData?.delivery_cost_electric,
        normal_electric_price: singleEnergyData?.prices?.normal_electric_rate,
        peak_electric_price: singleEnergyData?.prices?.off_peak_electric_rate,
        normal_electric_consume: energyUserData?.normal_electric_consume,
        peak_electric_consume: energyUserData?.peak_electric_consume,
        feed_in_peak: energyUserData?.feed_in_peak,
        feed_in_normal: energyUserData?.feed_in_normal,
        feed_in_peak_price: singleEnergyData?.feed_in_peak,
        feed_in_normal_price: singleEnergyData?.feed_in_normal,
        network_cost_gas: singleEnergyData?.network_cost_gas,
        network_cost_electric: singleEnergyData?.network_cost_electric,
        no_of_person: energyUserData?.no_of_person,
        government_levies_gas: singleEnergyData?.govt_taxes[0]?.value,
        government_levies_electric: singleEnergyData?.govt_taxes[1]?.value,
        reduction_of_energy_tax: singleEnergyData?.govt_taxes[2]?.value,
      },
    };
    try {
      const res = await PostData(
        "save-user-request",
        "",
        sendData,
        `Bearer ${authToken}`
      );
      toast.success(res.message);
      console.log(res);
      setCount(3);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
    toast.dismiss();
  };

  // ------scroll fade effect --------------
  const [scrollPosition, setScrollPosition] = useState(0);
  const [opacityAmount, setOpacityAmt] = useState(0);
  const sectionRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      const sectionHeight = sectionRef.current.clientHeight;
      setOpacityAmt(Math.min(scrollPosition / (sectionHeight * 1.2), 0.9));
    }
  }, [scrollPosition]);
  // ========effect ends ===========
  return (
    <>
      {showStepper && (
        <section>
          <div className="progressbar-bx">
            <div className="container">
              <div className="row">
                <div className="col">
                  <ul className="list-unstyled">
                    <li
                      onClick={() => setCount(0)}
                      className={count == 0 ? "active" : ""}
                    >
                      Stap 1: Vul de details in{" "}
                      <i className="fas fa-chevron-right" />
                    </li>
                    <li
                      className={count == 1 ? "active" : ""}
                      onClick={() => setCount(1)}
                    >
                      Stap 2: Vergelijken <i className="fas fa-chevron-right" />
                    </li>
                    <li
                      onClick={() => setCount(2)}
                      className={count == 2 ? "active" : ""}
                    >
                      Stap 3: Verzoek <i className="fas fa-chevron-right" />
                    </li>
                    <li
                      onClick={() => setCount(3)}
                      className={count == 3 ? "active" : ""}
                    >
                      Stap 4: Voltooid <i className="fas fa-flag" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: width }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <p className="mb-0">
                    {" "}
                    Je bent een stap dichterbij jouw beste keuze...
                    <Image
                      src="/images/hourglass.png"
                      alt="flags"
                      width={24}
                      height={24}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
       {a && (
        <CompareToggle 
        a={a}
        setA={setA}
        count={count}
        setCount={setCount}
        formData={formData}
        />
      )}

      
      
      {/* <button onClick={()=>setA(!a)}>asd</button> */}
      {count == 0 && !a &&(
        <>
          <section
            ref={sectionRef}
            className="form-bx position-relative overflow-hidden"
            style={{ position: "absolute" }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                background: "black",
                top: "0",
                left: "0",
                opacity: opacityAmount,
              }}
            ></div>
            <SunAnimation className={className} />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="enr-form-bx">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="title-sec">
                          <div className="row align-items-center"></div>
                        </div>
                      </div>

                      <SeveralMeters
                        clearErrors={clearErrors}
                        watch={watch}
                        setError={setError}
                        register={register}
                        errors={errors}
                        houseData={houseData}
                        setValue={setValue}
                        handleSubmit={handleSubmit}
                        setCount={setCount}
                        setFormData={setFormData}
                        setApiRes={setApiRes}
                        checkedItems={checkedItems}
                        setCheckedItems={setCheckedItems}
                        setHouseType={setHouseType}
                        houseType={houseType}
                        originalElectricConsume={originalElectricConsume}
                        setOriginalElectricConsume={setOriginalElectricConsume}
                        setNoGas={setNoGas}
                        no_gas={no_gas}
                        setLoading={setLoading}
                        setShowExtended={setShowExtended}
                        showExtended={showExtended}
                        setMeter={setMeter}
                        meter={meter}
                      />
                      {/* <EnergyDeals />
                                            <EnergyFaq /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section style={{ position: "relative" }}>
            <div
              className="qqq"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                background: "black",
                top: "0",
                left: "0",
                zIndex: 1,
                opacity: 1 - opacityAmount,
              }}
            ></div>
            <EnergyDeals data2={data2} />
          </section>
          <EnergyFaq />
        </>
      )}
      {count == 1 && !a &&(
        <>
          <main>
            <section>
              <div className="container">
                <div className="comparestep">
                  <TopSection />
                  <div className="row">
                    <StepTwoLeftFilter
                      currentType={currentType}
                      setCurrentType={setCurrentType}
                      formData={formData}
                      apiRes={apiRes}
                      checkedItems={checkedItems}
                      setCheckedItems={setCheckedItems}
                      houseType={houseType}
                      no_gas={no_gas}
                      setApiRes={setApiRes}
                      setLoading={setLoading}
                      loading={loading}
                      postsPerPage={postsPerPage}
                      pageNo={pageNo}
                    />
                    <div className="col-lg-8">
                      {apiRes && (
                        <>
                          <div className="listofcompanybx">
                            <ActionSection
                              setShowMoreInfo={setShowMoreInfo}
                              showMoreInfo={showMoreInfo}
                              apiRes={apiRes}
                              loading={loading}
                              setCount={setCount}
                              postsPerPage={postsPerPage}
                              pageNo={pageNo}
                              meter={meter}
                              setPageNo={setPageNo}
                              a={a}
                              setA={setA}
                              setPostsPerPage={setPostsPerPage}
                              formData = {formData}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </>
      )}
      {count == 2 && !a &&(
        <>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="profile-details">
                  <form onSubmit={handleSubmit(formSubmit)}>
                    <CredentialDetails
                      userDetails={userDetails}
                      register={register}
                      errors={errors}
                      formData={formData}
                      watch={watch}
                      setValue={setValue}
                    />
                    <Address
                      register={register}
                      errors={errors}
                      watch={watch}
                      setValue={setValue}
                    />
                     {/* <Verification /> */}
                    <PaymentDetails
                      register={register}
                      errors={errors}
                      watch={watch}
                      setValue={setValue}
                    />
                    {/* <Verification /> */}
                  </form>
                </div>
              </div>
              <EnergyStep3Rightbar
                userDetails={userDetails}
                setTotalGasElectricCost={setTotalGasElectricCost}
                setMeter={setMeter}
                meter={meter}
                formData={formData}
              />
            </div>
          </div>
        </>
      )}
      {count == 3 && !a && (
        <>
          <section>
            <div className="container">
              <div className="comparestep3">
                <div className="row">
                  <EnergyStep4Leftbar />
                  <EnergyStep4Rightbar />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Index;

export async function getServerSideProps() {
  try {
    const data = await axiosGet("house-type");
    const data2 = await axiosGet("get-energy-deals");

    return {
      props: { data: data, data2: data2 },
    };
  } catch (error) {
    console.error("Erroasdasdr fetching data:", error);
    return {
      props: { data: {}, data2: {} },
    };
  }
}
