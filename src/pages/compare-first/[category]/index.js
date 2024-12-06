import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CompareTop from "../../../../components/CompareFast/CompareTop";
import CompareFilterLeft from "../../../../components/CompareFast/CompareFilterLeft";
import CompareFilterRight from "../../../../components/CompareFast/CompareFilterRight";
import { PostData } from "../../../../utils/ApiCalls";
import Image from "next/image";

const Index = () => {
  const [count, setCount] = useState(1);
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
  const [pathName, setPathName] = useState();
  const [navigateUrl, setNavigateUrl] = useState();
  const [apiUrl, setApiUrl] = useState();
  const router = useRouter();
  useEffect(() => {
    setPathName(router.query.category);
  }, [router]);
  useEffect(() => {
    console.log(pathName);
    if (pathName == "double-meter") {
      setNavigateUrl("/double-meter");
      setApiUrl("energy-compare");
    } else if (pathName == "internet-tv") {
      setNavigateUrl("/internet-tv");
      setApiUrl("internet-tv-compare");
    } else if (pathName == "health-insurance") {
      setNavigateUrl("/health-insurance");
      setApiUrl("health-insurance-compare");
    } else if (pathName == "home-insurance") {
      setNavigateUrl("/home-insurance");
      setApiUrl("home-insurance-compare");
    }
  }, [pathName]);
  console.log(apiUrl);
  useEffect(() => {
    const comparedProd = JSON.parse(localStorage.getItem("CompareIds"));
    setCompareProd(comparedProd ? comparedProd : []);
  }, []);
  useEffect(() => {
    if (count == 0) {
      setWidth("25%");
    } else if (count == 1) {
      setWidth("50%");
    } else if (count == 1.5) {
      setWidth("65%");
    } else if (count == 2) {
      setWidth("75%");
    } else if (count == 3) {
      setWidth("100%");
    } else {
      setWidth(null);
    }
  }, [count]);
  console.log(pathName);
  useEffect(() => {
    const idsArray = compareProd?.map((obj) => obj.id);
    setIds(idsArray);
  }, [compareProd]);
  useEffect(() => {
    const getComparedData = async () => {
      setIsLoading(true);
      try {
        const res = await PostData(apiUrl, {
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
    getComparedData();
  }, [ids, checkedItems, reFetch, router, apiUrl]);
  return (
    <>
      
      <div className="container py-4">
        <div className="row">
          <CompareTop
            obtainComparedData={obtainComparedData}
            count={count}
            setCount={setCount}
          />
          <CompareFilterLeft
            obtainComparedData={obtainComparedData}
            obtainFilter={obtainFilter}
            setCheckedItems={setCheckedItems}
            checkedItems={checkedItems}
          />

          <CompareFilterRight
            obtainComparedData={obtainComparedData}
            isLoading={isLoading}
            compareProd={compareProd}
            setIds={setIds}
            ids={ids}
            reFetch={reFetch}
            setReFetch={setReFetch}
            navigateUrl={navigateUrl}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
