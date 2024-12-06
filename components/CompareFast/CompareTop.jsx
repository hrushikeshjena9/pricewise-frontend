import React from "react";
// import { useRouter } from "next/router";

const CompareTop = ({a, setA }) => {
  // const router = useRouter();
  const handleBackClick = () => {
    setA(!a);
  };
  // console.log("setCount in CompareTop:", setCount);
  return (
    <>
      <div className="col-12">
        <ul className="d-flex justify-content-between">
          <li>
            <a href="#" className="back-button" onClick={handleBackClick}>
              <i className="fas fa-chevron-left"></i> Terug
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" className="text-dark">
              Veel gestelde vragen?
            </a>
          </li>
        </ul>

        <ul className="tabtop-icons">
          <li>
            <a href="javascript:void(0);">
              <i className="fas fa-calculator"></i>
              <span>Kosten</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="fas fa-ellipsis-h"></i>
              <span>Details</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="fas fa-id-card"></i>
              <span>Leverancier</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="fas fa-bezier-curve"></i>
              <span>Aanvraag</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CompareTop;
