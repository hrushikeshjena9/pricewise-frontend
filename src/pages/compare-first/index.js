import React, { useEffect, useState } from "react";
import CompareFilterLeft from "../../../components/CompareFast/CompareFilterLeft";
import CompareFilterRight from "../../../components/CompareFast/CompareFilterRight";
import CompareTop from "../../../components/CompareFast/CompareTop";
import CenterDetails from "../../../components/CompareSecond/CenterDetails";
import { PostData } from "../../../utils/ApiCalls";
import Image from "next/image";

const Index = () => {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState("0");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [show, setShow] = useState(1);
  const [checkedItems, setCheckedItems] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  const [compareProd, setCompareProd] = useState();
  const [obtainComparedData, setObtainComparedData] = useState();
  const [obtainFilter, setObtainFilter] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [ids, setIds] = useState([]);
  useEffect(() => {
    const comparedProd = JSON.parse(localStorage.getItem("CompareIds"));
    setCompareProd(comparedProd ? comparedProd : []);
  }, []);
  console.log(compareProd);
  useEffect(() => {
    if (count == 0) {
      setWidth("50%");
    } else if (count == 1) {
      setWidth("75%");
    } else if (count == 2) {
      setWidth("100%");
    } else {
      setWidth(null);
    }
  }, [count]);

   
  useEffect(() => {
    const idsArray = compareProd?.map((obj) => obj.id);
    setIds(idsArray);
  }, [compareProd]);
  console.log(checkedItems);
  useEffect(() => {
    const getComparedData = async () => {
      setIsLoading(true);
      try {
        const res = await PostData("energy-compare", {
          compare_ids: ids,
          features: checkedItems,
        });
        setObtainComparedData(res.data);
        setObtainFilter(res.filters);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    if (ids?.length > 0) getComparedData();
  }, [ids, checkedItems, reFetch]);
  return (
    <>
      {count == 0 && <></>}
      {count == 1 && <></>}
      {count == 2 && <></>}
      {count == 3 && <></>}
      <section>
        <div className="progressbar-bx">
          <div className="container">
            <div className="row">
              <div className="col">
                <ul className="list-unstyled">
                  <li>
                    Stap 1: Vul de gegevens in{" "}
                    <i className="fas fa-chevron-right" />
                  </li>
                  <li
                    className={count == 0 ? "active" : ""}
                    onClick={() => setCount(0)}
                  >
                    Stap 2: Vergelijk <i className="fas fa-chevron-right" />
                  </li>
                  <li
                    onClick={() => setCount(1)}
                    className={count == 1 ? "active" : ""}
                  >
                    Stap 3: Aanvraag <i className="fas fa-chevron-right" />
                  </li>
                  <li
                    onClick={() => setCount(2)}
                    className={count == 2 ? "active" : ""}
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
      <div className="container py-4">
        <div className="row">
          <CompareTop obtainComparedData={obtainComparedData} count={count} setcount={setCount}/>
          <CompareFilterLeft
            obtainComparedData={obtainComparedData}
            obtainFilter={obtainFilter}
            setCheckedItems={setCheckedItems}
            checkedItems={checkedItems}
          />
          {/* <CenterDetails /> */}
          <CompareFilterRight
            obtainComparedData={obtainComparedData}
            isLoading={isLoading}
            compareProd={compareProd}
            setIds={setIds}
            ids={ids}
            reFetch={reFetch}
            setReFetch={setReFetch}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
