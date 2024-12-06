import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TvInternetStep3Rightbar = ({ singleData, addedPackages }) => {
  const [show, setShow] = useState(false);
  const [singleInternetData, setSingleInternetData] = useState();
  const [totalCost, setTotalCost] = useState();
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [price, setPrice] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [addedPackCost, setAddedPackCost] = useState(0)

  // console.log(singleData);
  // console.log(typeof (singleInternetData?.discounted_price));
  useEffect(() => {
    setTotalDiscount(
      singleInternetData?.discounted_price * singleInternetData?.discounted_till
    );
    setPrice(
      (12 - singleInternetData?.discounted_till) * singleInternetData?.price
    );
    if (singleData) {
      setSingleInternetData(singleData);
    }
    setTotalCost(
      (typeof totalDiscount == "number" ? totalDiscount : 0) +
        (typeof price == "number" ? price : 0) +
        (singleInternetData?.mechanic_charge
          ? singleInternetData?.mechanic_charge
          : 0) +
        (singleInternetData?.shipping_cost
          ? singleInternetData?.shipping_cost
          : 0) +
        (singleInternetData?.other_cost ? singleInternetData?.other_cost : 0) -
        (singleInternetData?.discount ? singleInternetData?.discount : 0)
    );
  }, [singleData, totalDiscount, price, singleInternetData]);
  useEffect(() => {
    const calculateTotalPrice = () => {
      const totalPrice = addedPackages?.reduce(
        (acc, currentItem) => acc + currentItem?.package_price,
        0
      );
      setAddedPackCost(totalPrice ? totalPrice : 0)
      return totalPrice;
    };
    calculateTotalPrice();
  }, [addedPackages]);
  useEffect(() => {
    setSubTotal(totalCost + addedPackCost)
  },[totalCost,addedPackCost ])
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
            <h6>Geldig tot {singleInternetData?.valid_till}</h6>
            <div className="actionbody">
              <div className="row">
                <div className="col-lg-6">
                  <div className="spe-img">
                    <Image
                      width={200}
                      height={200}
                      alt="aa"
                      src={singleInternetData?.image}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="spe-cn">
                    <h5>Pakket</h5>
                    {singleInternetData?.features
                      ?.slice(0, 4)
                      .map((item, i) => (
                        <>
                          <div className="d-flex mb-1">
                            <i className="fas fa-check text-success me-2"></i>
                            <p key={i} style={{ fontSize: "16px" }}>
                              {item?.feature_details?.name}
                            </p>
                          </div>
                        </>
                      ))}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="spe-cn">
                    <i className="fas fa-info" />
                    <h5>Kosten:</h5>
                    <h4>€{singleInternetData?.price}</h4>
                    <span>/p.m</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="spe-cn">
                    <i className="fas fa-info" />
                    <h5>Bespaar:</h5>
                    <h4>€....</h4>
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
                      {/* {show && <hr />} */}
                    </td>
                    <td style={{ position: "relative" }}>
                      €{subTotal ? subTotal : 0}
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
                      className="nav nav-pills mb-3"
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
                              1 Year price:
                              <span>{price ? price : 0}</span>
                            </li>
                            <li>
                              Discounted price:
                              <span>
                                {totalDiscount ? totalDiscount.toFixed(2) : 0}
                              </span>
                            </li>
                            <li>
                              Shipping cost:
                              <span>{singleInternetData?.shipping_cost}</span>
                            </li>
                            <li>
                              Mechanic cost:
                              <span>{singleInternetData?.mechanic_charge}</span>
                            </li>
                            <li>
                              Other cost:
                              <span>{singleInternetData?.other_cost}</span>
                            </li>
                            <li>
                              Discount:
                              <span>-{singleInternetData?.discount}</span>
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
                                      {totalCost ? totalCost.toFixed(3) : 0}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <hr />
                            {addedPackages && addedPackages.length > 0 ? (
                              <>
                                {addedPackages?.map((item, i) => (
                                  <div className="row mb-0" key={i}>
                                    <div className="col-lg-9 mb-0">
                                      <a>{item?.package_name}</a>
                                    </div>
                                    <div className="col-lg-3 text-end mb-0">
                                      <ul>
                                        <li>
                                          <span>{item?.package_price}</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                ))}
                              </>
                            ) : (
                              <>
                                <p>No extra packages added</p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ------------------------ */}
                  <div className="sub-total d-flex justify-content-between align-items-center mb-2">
                    <b>Subtotal</b>
                    <span>{subTotal}</span>
                  </div>
                 
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
              <p className="px-4">
                <b>Tip:</b> Mocht je toch jouw deal willen wijzigen, geen
                probleem daar heb je 14 dagen de tijd voor.
              </p>
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
              <p className="px-4">
                <b>Tip:</b> Mits niet verhuist, zeggen wij jouw provider of
                leverancier op en kan jij beginnen met deze op maat germaakte
                deal!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TvInternetStep3Rightbar;
