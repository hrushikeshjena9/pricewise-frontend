import Image from "next/image";
import React, { useEffect, useState } from "react";

const InternetDeails = ({ data2,data3 }) => {
  const [internetDeals, setInternetDeals] = useState();
  useEffect(() => {
    setInternetDeals(data2?.data);
  }, [data2]);
  return (
    <>
      <section>
        <div className="topdealcyber">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="dealbx">
                  <div className="card">
                    <div className="card-header">
                      <h3>
                        Top 4 Alles in-1 <span>Deals</span>
                      </h3>
                    </div>
                    <div className="card-body table-responsive">
                      <table className="table text-nowrap">
                        <tbody>
                          {internetDeals && internetDeals.length > 0 && (
                            <>
                              {internetDeals?.map((item, i) => (
                                <tr key={i}>
                                  <td>
                                    <div className="deal-num">
                                      <h6>{i + 1}</h6>
                                      <Image
                                        width={200}
                                        height={200}
                                        alt="aa"
                                        src={item?.icon}
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="infobx">
                                      <i className="bx bx-info-circle" />
                                      <h6>Prijs:</h6>
                                      <p>
                                        <span>€ 200</span> P.j
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="infobx">
                                      <i className="bx bx-info-circle" />
                                      <h6>Besparing:</h6>
                                      <p>
                                        <span>€ 200</span> P.j
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="infobx">
                                      <i className="bx bx-info-circle" />
                                      <h6>Actie:</h6>
                                      <p>
                                        <span>€ 200</span> P.j
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <a
                                      className="btn reqbtn w-100"
                                      href="javascript:void(0);"
                                    >
                                      Aanvragen
                                    </a>
                                  </td>
                                </tr>
                              ))}
                            </>
                          )}
                          {/* <tr>
                                                        <td><Image width={200} height={200} alt="aa" src="/images/cyber2.png" /></td>
                                                        <td>
                                                            <div className="infobx">
                                                                <i className="bx bx-info-circle" />
                                                                <h6>Prijs:</h6>
                                                                <p><span>€ 200</span> P.j</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="infobx">
                                                                <i className="bx bx-info-circle" />
                                                                <h6>Besparing:</h6>
                                                                <p><span>€ 200</span> P.j</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="infobx">
                                                                <i className="bx bx-info-circle" />
                                                                <h6>Actie:</h6>
                                                                <p><span>€ 200</span> P.j</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="btn reqbtn w-100" href="javascript:void(0);">Aanvragen</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image width={200} height={200} alt="aa" src="/images/cyber3.png" /></td>
                                                        <td>
                                                            <div className="infobx">
                                                                <i className="bx bx-info-circle" />
                                                                <h6>Prijs:</h6>
                                                                <p><span>€ 200</span> P.j</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="infobx">
                                                                <i className="bx bx-info-circle" />
                                                                <h6>Besparing:</h6>
                                                                <p><span>€ 200</span> P.j</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="infobx">
                                                                <i className="bx bx-info-circle" />
                                                                <h6>Actie:</h6>
                                                                <p><span>€ 200</span> P.j</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="btn reqbtn w-100" href="javascript:void(0);">Aanvragen</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image width={200} height={200} alt="aa" src="/images/cyber4.png" /></td>
                                                        <td>
                                                            <div className="infobx">
                                                                <i className="bx bx-info-circle" />
                                                                <h6>Prijs:</h6>
                                                                <p><span>€ 200</span> P.j</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="infobx">
                                                                <i className="bx bx-info-circle" />
                                                                <h6>Besparing:</h6>
                                                                <p><span>€ 200</span> P.j</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="infobx">
                                                                <i className="bx bx-info-circle" />
                                                                <h6>Actie:</h6>
                                                                <p><span>€ 200</span> P.j</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="btn reqbtn w-100" href="javascript:void(0);">Aanvragen</a>
                                                        </td>
                                                    </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InternetDeails;
