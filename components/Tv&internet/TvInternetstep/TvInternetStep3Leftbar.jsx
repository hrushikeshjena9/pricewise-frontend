import Image from "next/image";
import React, { useEffect, useState } from "react";
import { axiosGet } from "../../../utils/ApiCalls";
import InternetTvPackageSkeleton from "../../LoadingSkeletons/InternetTvPackageSkeleton";
const TvInternetStep3Leftbar = ({
  setShow,
  show,
  singleData,
  addedPackages,
  setAddedPackages,
}) => {
  const [meter, setMeter] = useState(0);
  const [singleInternetData, setSingleInternetData] = useState();
  const [internetPackages, setInternetPackages] = useState();
  const [tvPackages, setTvPackages] = useState()
  const [telephonePackages, setTelephonePackages] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (singleData) {
      setSingleInternetData(singleData);
    }
  }, [singleData]);
  useEffect(() => {
    const getTvPackage = async () => {
      setLoading(true)
      try {
        const res = await axiosGet(`get-tv-packages/${singleInternetData?.provider}`);
        const res2 = await axiosGet('get-tv-internet-options')
        // console.log(res.data);
        console.log(res2.data[0]);
        setTelephonePackages(res2?.data[0].telephone_options)
        setTvPackages(res2?.data[0].tv_options)
        setInternetPackages(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    };
    if (singleInternetData) getTvPackage();
  }, [singleInternetData]);

  const handleFilterValue = (item) => {
    if (addedPackages?.includes(item)) {
      setAddedPackages(addedPackages?.filter((id) => id !== item));
    } else {
      setAddedPackages([...addedPackages, item]);
    }
  };
  console.log("added", addedPackages);
  return (
    <>
      <div className="col-lg-8">
        <div className="row">
          <div className="col-12">
            <ul className="step-formholder">
              <li>
                <a className={show == 1 ? "active text-warning" : ""}>1</a>
              </li>
              <li>
                <a>2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="compare-toppart mt-2">
          <h2>Stel jouw deal vandaag veilig</h2>
          <div className="secure-wrp">
            <Image
              width={200}
              height={200}
              alt="aa"
              src="/images/secure.png"
              className="img-fluid secureimg"
            />
          </div>
          <p>Bekijk alle extra optie, zodat je niks mist in jouw pakket!</p>
          <p>
            <b>Tip:</b> Alle opties die maandelijks zijn aanpasbaar, dat is het
            proberen waard.
          </p>
        </div>
        <div className="profile-details Internettv-wrp">
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">
                <i className="fas fa-wifi"></i> Internet opties
              </h4>
            </div>
            <div className="card-body table-responsive">
              {loading ?
                <>
                  <InternetTvPackageSkeleton />
                  <InternetTvPackageSkeleton />
                </>
                :
                <>
                  {internetPackages?.map((item, i) => (
                    <table className="table add-internet-table" key={i}>
                      <td align="center">
                        <p className="small-title">Huren</p>
                        <i className="fas fa-2x fa-network-wired"></i>
                      </td>
                      <td>
                        <p>Kosten</p>
                        <p>(€{item?.package_price} pm)</p>
                      </td>
                      <td>
                        <p>
                          <i className="fas fa-info"></i> <b>{item?.package_name}</b>
                        </p>
                        <ul className="list-unstyled">
                          <li>
                            <a href="javascript:void(0);">Wifi versterker huren</a>
                          </li>
                          <li>Tot ... mb/s</li>
                          <li>G Netwerk</li>
                        </ul>
                      </td>
                      <td style={{ verticalAlign: "middle", textAlign: "center" }}>
                        <div className="form-check">
                          <input
                            className="form-check-input mt-2"
                            type="checkbox"
                            id="addTvPack"
                            onClick={() => handleFilterValue(item)}
                          />
                          <label className="form-check-label ms-2" for="addTvPack">
                            Tic here to add this package.
                          </label>
                        </div>
                      </td>
                    </table>
                  ))}
                </>}
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-header">
              <h4 className="mb-0">
                <i className="fas fa-tv"></i> Tv opties
              </h4>
            </div>
            <div className="card-body table-responsive">
              <div className="row">
                <div className="col-12">
                  <label className="form-label">
                    Wil je extra entertainment?
                  </label>
                </div>
                <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      id="radio1"
                      defaultValue="option1"
                      onClick={() => setMeter(0)}
                    />
                    <label
                      className="form-check-label form-label"
                      htmlFor="radio1"
                    >
                      Ja
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      id="radio2"
                      defaultValue="option2"
                      onClick={() => setMeter(1)}
                    />
                    <label
                      className="form-check-label form-label"
                      htmlFor="radio2"
                    >
                      Nee
                    </label>
                  </div>
                </div>
              </div>

              {meter == 0 ? (
                <>
                  {loading ?
                    <>
                      <InternetTvPackageSkeleton />
                      <InternetTvPackageSkeleton />
                    </>
                    :
                    <>
                      {tvPackages && tvPackages.length > 0 &&
                        <>
                          {tvPackages?.map((item, i) => (
                            <table className="table table-alacarte" key={i}>
                              <td align="center">
                                {/* <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/espncom.png"
                              className="img-fluid"
                            /> */}
                                <Image src={'/images/no-image.png'} width={1280} height={882} alt="aa" />
                              </td>
                              <td>
                                <p>Kosten</p>
                                <p>({item?.normal_cost}..pm ) eenmalig</p>
                              </td>
                              <td>
                                <div className="info-box">
                                  <p>
                                    <i className="fas fa-info"></i> <b>Pakket overzicht</b>
                                  </p>
                                  <ul className="list-unstyled">
                                    <li>
                                      <a href="javascript:void(0);">
                                        {item?.name}
                                      </a>
                                    </li>
                                    {/* <li>WTA tennis, MLB NFL & NHL</li>
                                <li>Eredivisie live & internationaal voetbal</li> */}
                                  </ul>
                                  <div className="col-12 p-0">
                                    <a
                                      href="Javscript:void(0):"
                                      className="text-warning add-tv"
                                      onClick={() => handleFilterValue(item)}
                                    >
                                      <i className="fas fa-plus"></i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </table>
                          ))}
                        </>
                      }
                      {/* <table className="table table-alacarte">
                    <td align="center">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/ziggosport.png"
                        className="img-fluid"
                      />
                    </td>
                    <td>
                      <p>Kosten</p>
                      <p>(€..pm ) eenmalig</p>
                    </td>
                    <td>
                      <div className="info-box">
                        <p>
                          <i className="fas fa-info"></i> <b>Pakket overzicht</b>
                        </p>
                        <ul className="list-unstyled">
                          <li>
                            <a href="javascript:void(0);">
                              7 kanalen vol met sport plezier
                            </a>
                          </li>
                          <li>Formule 1 racen & golf</li>
                          <li>De 3 grootste voetbal competities ter wereld</li>
                        </ul>
                        <div className="col-12 p-0">
                          <a
                            href="Javscript:void(0):"
                            className="text-warning add-tv"
                          >
                            <i className="fas fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </td>
                  </table>
                  <table className="table table-alacarte">
                    <td align="center">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/film.png"
                        className="img-fluid"
                      />
                    </td>
                    <td>
                      <p>Kosten</p>
                      <p>(€..pm ) eenmalig</p>
                    </td>
                    <td>
                      <div className="info-box">
                        <p>
                          <i className="fas fa-info"></i> <b>Pakket overzicht</b>
                        </p>
                        <ul className="list-unstyled">
                          <li>
                            <a href="javascript:void(0);">
                              Alle 4 ESPN kanalen
                            </a>
                          </li>
                          <li>Eredivisie live & internationaal voetbal.</li>
                          <li>
                            <b>WTA tennis, MLB NFL & NHL</b>
                          </li>
                        </ul>
                        <div className="col-12 p-0">
                          <a
                            href="Javscript:void(0):"
                            className="text-warning add-tv"
                          >
                            <i className="fas fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </td>
                  </table> */}
                      <a href="javascript:void(0):" className="btn text-dark">
                        Meer opties
                      </a>
                    </>}
                </>
              ) : (
                <></>
              )}

              {/* <div className="row">
                <div className="col-12">
                  <label className="form-label">
                    Wil je meerdere Tv aansluitingen?
                  </label>
                </div>
                <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      id="radio7"
                      defaultValue="option1"
                      onClick={() => setMeter(0)}
                    />
                    <label
                      className="form-check-label form-label"
                      htmlFor="radio7"
                    >
                      Ja
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      id="radio5"
                      defaultValue="option2"
                      onClick={() => setMeter(1)}
                    />
                    <label
                      className="form-check-label form-label"
                      htmlFor="radio5"
                    >
                      Nee
                    </label>
                  </div>
                </div>
              </div>

              {meter == 0 ? (
                <>
                  <table className="table add-internet-table">
                    <td align="center">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/playicon.png"
                        className="img-fluid"
                      />
                      <h6>Interactief</h6>
                    </td>
                    <td>
                      <p>Kosten</p>
                      <p>(€.. pm)</p>
                    </td>
                    <td>
                      <p>
                        <i className="fas fa-info"></i> <b>Pakket overzicht</b>
                      </p>
                      <ul className="list-unstyled">
                        <li>
                          <a href="javascript:void(0);">
                            Progammas opnemen & pauzeren
                          </a>
                        </li>
                        <li>... progammas te gelijk opnemen</li>
                        <li>Terugkijken ... dagen</li>
                      </ul>
                    </td>
                    <td>
                      <div className="row p-0 m-0">
                        <div className="col-12 p-0">
                          <label className="form-label">Aantal</label>
                        </div>
                      </div>

                      <input type="number" />
                    </td>
                  </table>
                  <table className="table add-internet-table">
                    <td align="center">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/tvicon.png"
                        className="img-fluid"
                      />
                      <h6>Standaard</h6>
                    </td>
                    <td>
                      <p>Kosten</p>
                      <p>(€.. pm)</p>
                    </td>
                    <td>
                      <p>
                        <i className="fas fa-info"></i> <b>Pakket overzicht</b>
                      </p>
                      <ul className="list-unstyled">
                        <li>
                          <a href="javascript:void(0);">Media box</a>
                        </li>
                        <li>Online tv kijken via app</li>
                        <li>TV Zenders</li>
                      </ul>
                    </td>
                    <td>
                      <div className="row p-0 m-0">
                        <div className="col-12 p-0">
                          <label className="form-label">Aantal</label>
                        </div>
                      </div>

                      <input type="number" />
                    </td>
                  </table>
                </>
              ) : (
                <></>
              )} */}
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-header">
              <h4 className="mb-0">
                <i className="fas fa-phone-volume"></i> Telefoon opties
              </h4>
            </div>
            <div className="card-body table-responsive">
              {loading ?
                <>
                  <InternetTvPackageSkeleton />
                  <InternetTvPackageSkeleton />
                </>
                :
                <>
                  {telephonePackages && telephonePackages.length > 0 &&
                    <>
                      {telephonePackages?.map((item, i) => (
                        <table className="table add-internet-table" key={i}>
                          <td align="center">
                            {/* <Image width={200} height={200} alt="aa" src="/images/netherland.jpg" className="img-fluid" /> */}
                            <Image src={'/images/no-image.png'} width={1280} height={882} alt="aa" />
                            <h6>Onbeperkt</h6>
                          </td>
                          <td>
                            <p>Kosten</p>
                            <p>({item?.normal_cost}.. pm)</p>
                          </td>
                          <td>
                            <p>
                              <i className="fas fa-info"></i> <b>Pakket overzicht</b>
                            </p>
                            <ul className="list-unstyled">
                              <li>
                                <a href="javascript:void(0);">
                                  {item?.name}
                                </a>
                              </li>
                              {/* <li>Naar vast & mobiel</li>
                          <li>Maandelijks aanpasbaar</li> */}
                            </ul>
                          </td>
                          <td style={{ verticalAlign: "middle", textAlign: "center" }}>
                            <div className="form-check">
                              <input
                                className="form-check-input mt-2"
                                type="checkbox"
                                id="addTvPack"
                                onClick={() => handleFilterValue(item)}
                              />
                              <label className="form-check-label ms-2" for="addTvPack">
                                Tic here to add this package.
                              </label>
                            </div>
                          </td>
                        </table>
                      ))}
                    </>
                  }
                  {/* <table className="table add-internet-table">
                <td align="center">
                  <Image
                    width={200}
                    height={200}
                    alt="aa"
                    src="/images/webicon.png"
                    className="img-fluid"
                  />
                  <h6>Onbeperkt</h6>
                </td>
                <td>
                  <p>Kosten</p>
                  <p>(€.. pm)</p>
                </td>
                <td>
                  <p>
                    <i className="fas fa-info"></i> <b>Pakket overzicht</b>
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <a href="javascript:void(0);">
                        Internationaal bellen in... tanden
                      </a>
                    </li>
                    <li>Naar vast & mobiel</li>
                    <li>Maandelijks aanpasbaar</li>
                  </ul>
                </td>
                <td>
                  <div className="row p-0 m-0">
                    <div className="col-12 p-0">
                      <label className="form-label">Aantal</label>
                    </div>
                  </div>

                  <input type="number" />
                </td>
              </table>
              <table className="table add-internet-table">
                <td align="center">
                  <Image
                    width={200}
                    height={200}
                    alt="aa"
                    src="/images/voip.png"
                    className="img-fluid"
                  />
                  <h6>Onbeperkt</h6>
                </td>
                <td>
                  <p>Kosten</p>
                  <p>(€.. pm)</p>
                </td>
                <td>
                  <p>
                    <i className="fas fa-info"></i> <b>Pakket overzicht</b>
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <a href="javascript:void(0);">Bellen over internet</a>
                    </li>
                    <li>... min</li>
                    <li>Apparaten</li>
                  </ul>
                </td>
                <td>
                  <div className="row p-0 m-0">
                    <div className="col-12 p-0">
                      <label className="form-label">Aantal</label>
                    </div>
                  </div>

                  <input type="number" />
                </td>
              </table> */}
                </>}
            </div>
          </div>

          <div className="text-center mt-4">
            <button className="btn button-customize" onClick={() => setShow(2)}>
              Volgende
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TvInternetStep3Leftbar;
