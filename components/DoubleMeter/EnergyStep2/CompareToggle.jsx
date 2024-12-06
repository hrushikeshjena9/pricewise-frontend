import React, { useEffect, useState } from "react";
import CompareFilterLeft from "../../../components/CompareFast/CompareFilterLeft";
import CompareFilterRight from "../../../components/CompareFast/CompareFilterRight";
import CompareTop from "../../../components/CompareFast/CompareTop";
import CenterDetails from "../../../components/CompareSecond/CenterDetails";
import { PostData } from "../../../utils/ApiCalls";
import Image from "next/image";

const CompareToggle = ({ a, setA, setCount, formData }) => {
  console.log(formData, "asdasdas");

  const [checkedItems, setCheckedItems] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  const [compareProd, setCompareProd] = useState();
  const [obtainComparedData, setObtainComparedData] = useState();
  const [obtainFilter, setObtainFilter] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [ids, setIds] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  useEffect(() => {
    const comparedProd = JSON.parse(localStorage.getItem("CompareIds"));
    setCompareProd(comparedProd ? comparedProd : []);
  }, []);
  console.log(compareProd);

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
          ...formData,
          search_keyword: searchKeyword,
          power_consumption: formData.normal_electric_consume,
        });
        setObtainComparedData(res.data);
        console.log(res.data);
        setObtainFilter(res.filters);

        if(res.search_keyword){
          setSearchKeyword(res.search_keyword);
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    if (ids?.length > 0) getComparedData();
  }, [ids, checkedItems, reFetch, searchKeyword]);
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <CompareTop a={a} setA={setA} />
          <CompareFilterLeft
            obtainComparedData={obtainComparedData}
            obtainFilter={obtainFilter}
            setCheckedItems={setCheckedItems}
            checkedItems={checkedItems}
            setSearchKeyword={setSearchKeyword}
            searchKeyword={searchKeyword}
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
            setCount={setCount}
            a={a}
            setA={setA}
            formData={formData}
          />
        </div>
      </div>
    </>
  );
};

export default CompareToggle;
