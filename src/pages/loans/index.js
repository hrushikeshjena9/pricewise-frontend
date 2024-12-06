import React, { use, useEffect, useState } from "react";
import LoansForm from "../../../components/Loans/LoanStep1/LoansForm";
import LoanDeals from "../../../components/Loans/LoanStep1/LoanDeals";
import LoansFaq from "../../../components/Loans/LoanStep1/LoansFaq";
import LoanExtendForm from "../../../components/Loans/LoanStep1/LoanExtendForm";
import LoanStep2Leftbar from "../../../components/Loans/LoanStep2/LoanStep2Leftbar";
import LoanRightProducts from "../../../components/Loans/LoanStep2/LoanRightProducts";
import LoanStep4Rightbar from "../../../components/Loans/LoanStep3/LoanStep4Rightbar";
import ContactDetails from "../../../components/Loans/LoanStep3/ContactDetails";
import MortgageInfo from "../../../components/Loans/LoanStep3/MortgageInfo";
import LoanDocuments from "../../../components/Loans/LoanStep3/LoanDocuments";
import Payment from "../../../components/Loans/LoanStep3/Payment";
import Image from "next/image";
import SunAnimation from "../../../components/common/SunAnimation";
import LoanStep4Left from "../../../components/Loans/LoanStep4/LoanStep4Left";
import LoanStep4Right from "../../../components/Loans/LoanStep4/LoanStep4Right";
import LoanStep2Top from "../../../components/Loans/LoanStep2/LoanStep2Top";

const Index = () => {
  const [loanSecondStep, setLoanSecondStep] = useState(false);
  const [rightTab, setRightTab] = useState(1);
  const [count, setCount] = useState(1);
  const className = "personal-loans";
  const [showStepper, setShowStepper] = useState(false);
  const [width, setWidth] = useState("0");
  useEffect(() => {
    if (count == 1) {
      setWidth("25%");
    } else if (count == 2) {
      setWidth("50%");
    } else if (count == 3) {
      setWidth("75%");
    } else if (count == 4) {
      setWidth("100%");
    } else {
      setWidth(null);
    }
  }, [count]);
  console.log(rightTab);
  return (
    <>
      {count == 1 && (
        <>
          <main>
            <div className="eventwrp">
              <SunAnimation className={className} />
              <div className="container">
                <div className="card border-0">
                  <div className="card-body">
                    <div className="row justify-content-center">
                      <LoansForm
                        setLoanSecondStep={setLoanSecondStep}
                        loanSecondStep={loanSecondStep}
                        setCount={setCount}
                        showStepper={showStepper}
                        setShowStepper={setShowStepper}
                        setRightTab={setRightTab}
                      />
                      {loanSecondStep && (
                        <LoanExtendForm
                          setLoanSecondStep={setLoanSecondStep}
                          loanSecondStep={loanSecondStep}
                          setCount={setCount}
                          showStepper={showStepper}
                          rightTab={rightTab}
                          setShowStepper={setShowStepper}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <LoanDeals />
          <LoansFaq />
        </>
      )}
      {showStepper && count != 1 && (
        <>
          <section>
            <div className="progressbar-bx">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <ul className="list-unstyled">
                      <li
                        onClick={() => setCount(1)}
                        className={count == 1 ? "active" : ""}
                      >
                        Stap 1: Vul de details in{" "}
                        <i className="fas fa-chevron-right" />
                      </li>
                      <li
                        className={count == 2 ? "active" : ""}
                        onClick={() => setCount(2)}
                      >
                        Stap 2: Vergelijken{" "}
                        <i className="fas fa-chevron-right" />
                      </li>
                      <li
                        onClick={() => setCount(3)}
                        className={count == 3 ? "active" : ""}
                      >
                        Stap 3: Verzoek <i className="fas fa-chevron-right" />
                      </li>
                      <li
                        onClick={() => setCount(4)}
                        className={count == 4 ? "active" : ""}
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
          {count == 2 && (
            <>
            <LoanStep2Top />
              <div className="container">
                <div className="row">
                  <LoanStep2Leftbar />
                  <LoanRightProducts />
                </div>
              </div>
            </>
          )}
          {count == 3 && (
            <>
              <section>
                <div className="container">
                  <div className="comparestep3">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>Stel jouw deal vandaag veilig</h2>
                        <div className="secure-wrp">
                          <Image
                            width={120}
                            height={59}
                            src="/images/secure.png"
                            className="img-fluid secureimg"
                            alt="aa"
                          />
                        </div>
                        <p>
                          Vul de resterende gegevens in die de aanbieder nodig
                          heeft, zodat wij alles vlekkenloos kunnen regelen en
                          jij snel hier van kan profiteren.
                        </p>
                        <ContactDetails />
                        <MortgageInfo />
                        <LoanDocuments />
                        <Payment />
                      </div>
                      <LoanStep4Rightbar />
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </>
      )}

      {count == 4 && (
        <>
          <div className="container">
            <div className="comparestep3">
              <div className="row">
                <LoanStep4Left />
                <LoanStep4Right />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Index;
