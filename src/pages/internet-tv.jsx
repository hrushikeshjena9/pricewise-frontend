import { useEffect, useState } from "react";
import InternetDeails from "../../components/Tv&internet/InternetDeails";
import InternetFaq from "../../components/Tv&internet/InternetFaq";
import InternetForm1 from "../../components/Tv&internet/InternetForm1";
import LeftFilter from "../../components/Tv&internet/TvInternetstep/LeftFilter";
import { TopSection } from "../../components/Tv&internet/TvInternetstep/TopSection";
import ActionSection from "../../components/Tv&internet/TvInternetstep/ActionSection";
import TvInternetStep3Leftbar from "../../components/Tv&internet/TvInternetstep/TvInternetStep3Leftbar";
import TvInternetStep3Rightbar from "../../components/Tv&internet/TvInternetstep/TvInternetStep3Rightbar";
import InternetTvstep4 from "../../components/Tv&internet/TvInternetstep/TvInternetStep4Left";
import TvinternetStep5left from "../../components/Tv&internet/TvInternetstep/TvInternetStep5left";
import { PostData, axiosGet } from "../../utils/ApiCalls";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";

const InternetTv = ({ data, data2,data3 }) => {
  console.log('====================================');
  console.log(data3);
  console.log('====================================');
  
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState("0");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [show, setShow] = useState(1);
  const [showStepper, setShowStepper] = useState(true);
  const [houseData, setHouseData] = useState([]);
  const [apiRes, setApiRes] = useState();
  const [apiSendData, setApiSendData] = useState();
  const [checkedItems, setCheckedItems] = useState([]);
  const [authToken, setAuthToken] = useState();
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const [addedPackages, setAddedPackages] = useState([]);
  const [pageNo, setPageNo] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  const router = useRouter()
  const { step } = router.query;
  useEffect(() => {
    if (step) setCount(step)
  }, [router])
  const singleData = useSelector(
    (state) => state?.internetTv?.internetSingleProd[0]
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = JSON.parse(localStorage.getItem("userData"));
    setAuthToken(token ? token : "");
    setUserDetails(data ? data : "");
  }, []);
  useEffect(() => {
    if (data) {
      setHouseData(data.data);
    }
  }, [data]);
  useEffect(() => {
    if (count == 0) {
      setWidth("35%");
      setShowStepper(false)
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
  useEffect(() => {
    console.log(apiSendData);
    const filteredData = async () => {
      setLoading(true);
      try {
        const res = await PostData(
          "internet-tv",
          "",
          { ...apiSendData, filters: checkedItems, postsPerPage: postsPerPage, pageNo: pageNo },
          `Bearer ${authToken}`
        );
        setApiRes(res);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    if (checkedItems) filteredData();
  }, [checkedItems, postsPerPage, pageNo]);
  return (
    <>
      {count == 0 && (
        <>
          <main>
            <InternetForm1
              setShowStepper={setShowStepper}
              showStepper={showStepper}
              setCount={setCount}
              houseData={houseData}
              setApiRes={setApiRes}
              setApiSendData={setApiSendData}
              setLoading={setLoading}
              data3={data3}
            />
            <InternetDeails data2= {data2} data3={data3}/>
            <InternetFaq />
          </main>
        </>
      )}
      <>
        {showStepper && (
          <>
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
                          Stap 1: Vul de gegevens in {" "}
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
                          Stap 3: Aanvraag  <i className="fas fa-chevron-right" />
                        </li>
                        <li
                          onClick={() => setCount(3)}
                          className={count == 3 ? "active" : ""}
                        >
                          Stap 4: Voltooid  <Image src="/images/flags.png" alt="flags" width={25} height={25} />
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
                      <p className="mb-0">Je bent een stap dichterbij jouw beste keuze...<Image src="/images/hourglass.png" alt="flags" width={24} height={24} /></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* {count == 0 && (
              <>
                <main>
                  <InternetForm1
                    setShowStepper={setShowStepper}
                    showStepper={showStepper}
                    setCount={setCount}
                    houseData={houseData}
                    setApiRes={setApiRes}
                    setApiSendData={setApiSendData}
                    setLoading={setLoading}
                  />
                  <InternetDeails />
                  <InternetFaq />
                </main>
              </>
            )} */}
            {count == 1 && (
              <>
                <main>
                  <section>
                    <div className="container">
                      <div className="comparestep">
                        <TopSection />
                        <div className="row">
                          <LeftFilter
                            apiRes={apiRes}
                            apiSendData={apiSendData}
                            setCheckedItems={setCheckedItems}
                            checkedItems={checkedItems}
                            data3={data3}
                          />
                          <div className="col-lg-8">
                            <div className="listofcompanybx">
                              <ActionSection
                                showMoreInfo={showMoreInfo}
                                setShowMoreInfo={setShowMoreInfo}
                                apiRes={apiRes}
                                setCount={setCount}
                                postsPerPage={postsPerPage}
                                pageNo={pageNo}
                                setPageNo={setPageNo}
                                setPostsPerPage={setPostsPerPage}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </main>
              </>
            )}
            {count == 2 && (
              <>
                <div className="container">
                  <div className="row">
                    {show == 1 && (
                      <>
                        <TvInternetStep3Leftbar
                          setShow={setShow}
                          show={show}
                          singleData={singleData}
                          setAddedPackages={setAddedPackages}
                          addedPackages={addedPackages}
                        />
                        <TvInternetStep3Rightbar
                          setShow={setShow}
                          singleData={singleData}
                          addedPackages={addedPackages}
                        />
                      </>
                    )}
                    {show == 2 && (
                      <>
                        <InternetTvstep4
                          setShow={setShow}
                          userDetails={userDetails}
                        />
                        <TvInternetStep3Rightbar
                          setShow={setShow}
                          show={show}
                          singleData={singleData}
                          addedPackages={addedPackages}
                        />
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
            {count == 3 && (
              <>
                <div className="container">
                  <div className="comparestep3">
                    <div className="row">
                      <TvinternetStep5left />
                      <TvInternetStep3Rightbar />
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </>
    </>
  );
};

export default InternetTv;

export async function getServerSideProps() {
  try {
    const data = await axiosGet("house-type");
    const data2 = await axiosGet('get-internet-tv-deals');
    const data3 = await axiosGet('get-internet-tv-package');
    return {
      props: { data: data, data2: data2,data3:data3.data },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { data: {}, data2: {} },
    };
  }
}
