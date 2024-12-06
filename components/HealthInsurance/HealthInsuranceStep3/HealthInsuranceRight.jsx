import Image from "next/image";
import React, { useEffect, useState } from "react";

const HealthInsuranceRight = ({ singleData }) => {
  console.log(singleData);
  const [show, setShow] = useState(false);
  const [shippingCharge, setShippingCharge] = useState(0)
  const [mechanicalCharge, setMechanicalCharge] = useState(0)
  const [connectionCost, setConnectionCost] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [otherCost, setOtherCost] = useState(0)
  const [price, setPrice] = useState(0)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    if (typeof (singleData?.shipping_cost) == 'number') setShippingCharge(singleData?.shipping_cost)
    if (typeof (singleData?.mechanic_charge) == 'number') setMechanicalCharge(singleData?.mechanic_charge)
    if (typeof (singleData?.connection_cost) == 'number') setConnectionCost(singleData?.connection_cost)
    if (typeof (singleData?.discount) == 'number') setDiscount(singleData?.discount)
    if (typeof (singleData?.other_cost) == 'number') setOtherCost(singleData?.other_cost)
    if (typeof (singleData?.price) == 'number') setPrice(singleData?.price)
  }, [singleData])
  useEffect(() => {
    setTotal(price + shippingCharge + mechanicalCharge + connectionCost + otherCost - discount)
  }, [singleData])

  return (
    <>
      <div className="col-lg-4">
        <div className="stepright3">
          <div className="actionbx">
            <Image
              width={200}
              height={200}
              alt="aa"
              src="/images/stopwatch.png"
              className="actionicon stopwatch"
            />
            <h3>Actie:</h3>
            <h6>Geldig tot {singleData?.valid_till}</h6>
            <div className="actionbody">
              <div className="row">
                <div className="col-lg-6">
                  <div className="spe-img">
                    <Image
                      width={200}
                      height={200}
                      alt="aa"
                      src="/images/sunbg.png"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="spe-cn">
                    <h5>Pakket</h5>
                    {singleData?.features?.slice(0, 4).map((item, i) => (
                      <>
                        <p key={i} style={{ fontSize: '16px', display: "flex" }}><i className="fas fa-check text-success me-2" ></i>
                          {item?.feature_details?.name}</p>
                      </>
                    ))}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="spe-cn">
                    <i className="fas fa-info" />
                    <h5>Kosten:</h5>
                    <h4>€{price}</h4>
                    <span>/p.m</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="spe-cn">
                    <i className="fas fa-info" />
                    <h5>Bespaar:</h5>
                    <h4>€{discount}</h4>
                    <span>/p.j</span>
                  </div>
                </div>
              </div>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Energise korting:</td>
                    <td>€...</td>
                  </tr>
                  <tr>
                    <td>
                      Totaal pakket kosten:

                    </td>
                    <td style={{ position: 'relative' }}>
                      €{total}
                      {show ? (
                        <i
                          className="fas fa-chevron-up"
                          onClick={() => setShow(!show)}
                        ></i>
                      ) : (
                        <i
                          className="fas fa-chevron-down"
                          onClick={() => setShow(!show)}
                        ></i>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
              {show && (
                <div
                  style={{ position: "relative" }}
                  className="cost-break-details"
                >
                  {/* ---tab--------- */}
                  <div>
                    <ul
                      className="nav nav-pills mb-3 d-flex justify-content-start"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Package Breakdown
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div className="current-breakdown sub-total mb-3">
                        {/* <b>Current</b> */}
                        <div
                          className="yourdetailsbox"
                          style={{ backgroundColor: "unset", padding: "5px" }}
                        >
                          <ul className="infodetails">

                            <li>
                              Price:
                              <span>{price}</span>
                            </li>
                            <li>
                              Shipping cost:
                              <span>{shippingCharge}</span>
                            </li>
                            <li>
                              Mechanic cost:
                              <span>{mechanicalCharge}</span>
                            </li>
                            <li>
                              Connection cost:
                              <span>{connectionCost}</span>
                            </li>
                            <li>
                              Other cost:
                              <span>{otherCost}</span>
                            </li>
                            <li>
                              Discount:
                              <span>-{discount}</span>
                            </li>
                          </ul>
                          <div className="yourdetailedit">
                            <div className="row mb-0">
                              <div className="col-lg-6 mb-0">
                                <a>Total</a>
                              </div>
                              <div className="col-lg-6 text-end mb-0">
                                <ul>
                                  <li>
                                    <span>
                                      {total}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <hr />

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ------------------------ */}
                  {/* <div className="sub-total d-flex justify-content-between align-items-center mb-2">
                    <b>Subtotal</b>
                    <span>654</span>
                  </div> */}

                </div>
              )}
            </div>
            <div className="actionfooter">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/sale.png"
                        className="actionicon"
                      />
                      Energise korting:
                    </td>
                    <td>
                      <span>€...</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/hot-sale.png"
                        className="actionicon"
                      />
                      Totaal korting:
                    </td>
                    <td>
                      <span>€...</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body p-0 shadow">
              <div className="enter-prise-acc">
                <div className="entr-sc-title">
                  <h4>
                    <i className="fas fa-globe" /> Veel gestelde vragen
                  </h4>
                </div>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Vraag 1
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit voluptatibus natus quod ab necessitatibus.
                        Accusantium, ut alias.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Vraag 2
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit laborum commodi placeat modi beatae eveniet iste
                        quisquam eius ratione.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Vraag 3
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit laborum commodi placeat modi beatae eveniet iste
                        quisquam eius ratione.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >
                        Vraag 4
                      </button>
                    </h2>
                    <div
                      id="collapsefour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit laborum commodi placeat modi beatae eveniet iste
                        quisquam eius ratione.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefive"
                        aria-expanded="false"
                        aria-controls="collapsefive"
                      >
                        Vraag 5
                      </button>
                    </h2>
                    <div
                      id="collapsefive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit laborum commodi placeat modi beatae eveniet iste
                        quisquam eius ratione.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body p-0 shadow">
              <div className="enter-prise-acc">
                <div className="entr-sc-title">
                  <h4>
                    <i className="fas fa-globe" /> Stappenplan
                  </h4>
                </div>
                <div className="accordion" id="accordionover">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseover1"
                        aria-expanded="false"
                        aria-controls="collapseover1"
                      >
                        Stap 1
                      </button>
                    </h2>
                    <div
                      id="collapseover1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionover"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit voluptatibus natus quod ab necessitatibus.
                        Accusantium, ut alias.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseover2"
                        aria-expanded="false"
                        aria-controls="collapseover2"
                      >
                        Stap 2
                      </button>
                    </h2>
                    <div
                      id="collapseover2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionover"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit laborum commodi placeat modi beatae eveniet iste
                        quisquam eius ratione.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseover3"
                        aria-expanded="false"
                        aria-controls="collapseover3"
                      >
                        Stap 3
                      </button>
                    </h2>
                    <div
                      id="collapseover3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionover"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit laborum commodi placeat modi beatae eveniet iste
                        quisquam eius ratione.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseover4"
                        aria-expanded="false"
                        aria-controls="collapseover4"
                      >
                        Stap 4
                      </button>
                    </h2>
                    <div
                      id="collapseover4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionover"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit laborum commodi placeat modi beatae eveniet iste
                        quisquam eius ratione.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseover5"
                        aria-expanded="false"
                        aria-controls="collapseover5"
                      >
                        Stap 5
                      </button>
                    </h2>
                    <div
                      id="collapseover5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionover"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit laborum commodi placeat modi beatae eveniet iste
                        quisquam eius ratione.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthInsuranceRight;
