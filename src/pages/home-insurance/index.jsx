import React, { useEffect, useState } from "react";
import HomeInsuranceForm1 from "../../../components/HomeInsurance/HomeInsuranceStep1/HomeInsuranceForm1";
import HomeInsuranceDeals from "../../../components/HomeInsurance/HomeInsuranceStep1/HomeInsuranceDeals";
import HomeInsuranceFaq from "../../../components/HomeInsurance/HomeInsuranceStep1/HomeInsuranceFaq";
import HomeInsuranceStep2Header from "../../../components/HomeInsurance/HomeInsuranceStep2/HomeInsuranceStep2Header";
import HomeInsuranceStep2Right from "../../../components/HomeInsurance/HomeInsuranceStep2/HomeInsuranceStep2Right";
import HomeInsuranceStep2Left from "../../../components/HomeInsurance/HomeInsuranceStep2/HomeInsuranceStep2Left";
import HomeInsuranceTabingPart from "../../../components/HomeInsurance/HomeInsuranceStep2/HomeInsuranceTabingPart";
import HomeInsuranceStep3left from "../../../components/HomeInsurance/HomeInsuranceStep3/HomeInsuranceStep3left";
import HomeInsuranceStep3right from "../../../components/HomeInsurance/HomeInsuranceStep3/HomeInsuranceStep3right";
import HomeInsuranceLeftStep4 from "../../../components/HomeInsurance/HomeInsuranceStep4/HomeInsuranceLeftStep4";
import HomeInsuranceRightStep4 from "../../../components/HomeInsurance/HomeInsuranceStep4/HomeInsuranceRightStep4";
import Image from "next/image";
import { axiosGet, PostData } from "../../../utils/ApiCalls";

const Index = ({ data }) => {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState("0");
  const [coverages, setCoverages] = useState(data);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showStepper, setShowStepper] = useState(false);
  const [authToken, setAuthToken] = useState();
  const [userDetails, setUserDetails] = useState();
  const [checkedItems, setCheckedItems] = useState([]);
  const [apiRes, setApiRes] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userDetails = JSON.parse(localStorage.getItem("userData"));
    setAuthToken(token ? token : "");
    setUserDetails(userDetails ? userDetails : "");
  }, []);
  useEffect(() => {
    if (count == 0) {
      setWidth("40%");
      setShowStepper(true);
    } else if (count == 1) {
      setWidth("50%");
    } else if (count == 2) {
      setWidth("75%");
    } else if (count == 3) {
      setWidth("100%");
    } else {
      setWidth(null);
    }
  }, [count]);
  console.log(coverages);
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
                      Stap 1: Vul de gegevens in{" "}
                      <i className="fas fa-chevron-right" />
                    </li>
                    <li
                      className={count == 1 ? "active" : ""}
                      onClick={() => setCount(1)}
                    >
                      Stap 2: Vergelijk <i className="fas fa-chevron-right" />
                    </li>
                    <li
                      onClick={() => setCount(2)}
                      className={count == 2 ? "active" : ""}
                    >
                      Stap 3: Aanvraag <i className="fas fa-chevron-right" />
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
      {count == 0 && (
        <>
          <HomeInsuranceForm1
            setShowStepper={setShowStepper}
            setCount={setCount}
            authToken={authToken}
            userDetails={userDetails}
            setApiRes={setApiRes}
            data={data}
            coverages={coverages}
          />
          <HomeInsuranceDeals />
          <HomeInsuranceFaq />
        </>
      )}
      {count == 1 && (
        <>
          <section>
            <div className="container">
              <div className="comparestep">
                <HomeInsuranceStep2Header />
                <div className="row">
                  <HomeInsuranceStep2Left
                    apiRes={apiRes}
                    checkedItems={checkedItems}
                    setCheckedItems={setCheckedItems}
                  />
                  <div className="col-lg-8">
                    <div className="listofcompanybx">
                      <HomeInsuranceStep2Right
                        showMoreInfo={showMoreInfo}
                        setShowMoreInfo={setShowMoreInfo}
                        apiRes={apiRes}
                        setCount={setCount}
                      />

                      {/* {showMoreInfo &&
                                                <HomeInsuranceTabingPart
                                                    apiRes={apiRes} />
                                            } */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {count == 2 && (
        <>
          <div className="container">
            <div className="row">
              <HomeInsuranceStep3left
                userDetails={userDetails}
                authToken={authToken}
              />
              <HomeInsuranceStep3right apiRes={apiRes} />
            </div>
          </div>
        </>
      )}
      {count == 3 && (
        <>
          <div className="container">
            <div className="comparestep3">
              <div className="row">
                <HomeInsuranceLeftStep4 />
                <HomeInsuranceRightStep4 />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Index;


export async function getServerSideProps() {
  try {
    const data = await PostData("home-recommended-insurance");
    return {
      props: { data: data.data },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { data: {}, data2: {} },
    };
  }
}
