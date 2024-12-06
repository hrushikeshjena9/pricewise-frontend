import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Dealbox({ data }) {
  const [topDeals, setTopDeals] = useState([])
  useEffect(() => {
    if (data) {
      setTopDeals(data.data)
    }
  }, [data])
  console.log(topDeals);

  


  return (
    <div className="dealbx">
      <div className="card">
        <div className="card-header">
          <h3>
            Top 4 energie <span>deals</span>
          </h3>
        </div>
        <div className="card-body table-responsive">
          <table className="table text-nowrap">
            <tbody>
              {topDeals && topDeals.length > 0 ?
                <>
                  {topDeals?.slice(0, 4).map((item, i) => (
                    <tr key={i}>
                      <td>
                      <div className='deal-num'>
                        <h6>{i+1}</h6>
                        <Image width={200} height={200} alt="aa"
                          src={(item?.image ? item?.image : '/images/no-image.png')}
                        />
                        </div>
                      </td>
                      <td>
                        <div className="infobx">
                          <i className="bx bx-info-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Korting of loyaliteitsbonus via Gaslicht.com. Deze korting wordt doorgaans aan het eind van de looptijd op de jaarafrekening verrekend of aan u uitbetaald. Voor meer details zie de actievoorwaarden."/>
                          <h6>Prijs:</h6>
                          <p>
                            <span>€ {(item?.total).toFixed(2)}</span> P.j
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="infobx">
                          <i className="bx bx-info-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Tooltip on bottom" />
                          <h6>Besparing:</h6>
                          <p>
                            <span>€ {item?.cashback}</span>
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="infobx">
                          <i className="bx bx-info-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Tooltip on bottom" />
                          <h6>Prijs:</h6>
                          <p>
                            <span>€ {((item?.total) / 12).toFixed(2)}</span> P.m
                          </p>
                        </div>
                      </td>
                      <td>
                        <Link className="btn reqbtn w-100" href="/double-meter">
                          Aanvragen
                        </Link>
                      </td>
                    </tr>
                  ))}
                </>
                :
                <>
                  <tr>
                    <td>
                      {/* <Image src={'/images/no-image.png'} width={1280} height={882} alt="aa" /> */}
                      <h4>No data found</h4>
                    </td>
                  </tr>
                </>
              }

            </tbody>
          </table>


          <div className="row d-none">
            <div className="col-lg-3 pe-0">
              <Image width={200} height={200} alt="aa"
                src="/images/coronaenergy.png"

              />
            </div>
            <div className="col-lg-2 pe-0">
              <div className="infobx">
                <i className="bx bx-info-circle" />
                <h6>Prijs:</h6>
                <p>
                  <span>€ 200</span> P.j
                </p>
              </div>
            </div>
            <div className="col-lg-2 pe-0">
              <div className="infobx">
                <i className="bx bx-info-circle" />
                <h6>Besparing:</h6>
                <p>
                  <span>€ 200</span> P.j
                </p>
              </div>
            </div>
            <div className="col-lg-2 pe-0">
              <div className="infobx">
                <i className="bx bx-info-circle" />
                <h6>Actie:</h6>
                <p>
                  <span>€ 200</span> P.j
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <a className="btn reqbtn w-100" href="javascript:void(0);">
                Aanvragen
              </a>
            </div>
          </div>
          <div className="row d-none">
            <div className="col-lg-3 pe-0">
              <Image width={200} height={200} alt="aa"
                src="/images/opusenergy.png"

              />
            </div>
            <div className="col-lg-2 pe-0">
              <div className="infobx">
                <i className="bx bx-info-circle" />
                <h6>Prijs:</h6>
                <p>
                  <span>€ 200</span> P.j
                </p>
              </div>
            </div>
            <div className="col-lg-2 pe-0">
              <div className="infobx">
                <i className="bx bx-info-circle" />
                <h6>Besparing:</h6>
                <p>
                  <span>€ 200</span> P.j
                </p>
              </div>
            </div>
            <div className="col-lg-2 pe-0">
              <div className="infobx">
                <i className="bx bx-info-circle" />
                <h6>Actie:</h6>
                <p>
                  <span>€ 200</span> P.j
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <a className="btn reqbtn w-100" href="javascript:void(0);">
                Aanvragen
              </a>
            </div>
          </div>
          <div className="row d-none">
            <div className="col-lg-3 pe-0">
              <Image width={200} height={200} alt="aa"
                src="/images/ovoenergy.png"

              />
            </div>
            <div className="col-lg-2 pe-0">
              <div className="infobx">
                <i className="bx bx-info-circle" />
                <h6>Prijs:</h6>
                <p>
                  <span>€ 200</span> P.j
                </p>
              </div>
            </div>
            <div className="col-lg-2 pe-0">
              <div className="infobx">
                <i className="bx bx-info-circle" />
                <h6>Besparing:</h6>
                <p>
                  <span>€ 200</span> P.j
                </p>
              </div>
            </div>
            <div className="col-lg-2 pe-0">
              <div className="infobx">
                <i className="bx bx-info-circle" />
                <h6>Actie:</h6>
                <p>
                  <span>€ 200</span> P.j
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <a className="btn reqbtn w-100" href="javascript:void(0);">
                Aanvragen
              </a>
            </div>
          </div>
          <div className="row d-none">
            <div className="col-lg-3 pe-0">
              <Image width={200} height={200} alt="aa"
                src="/images/gaenergy.png"

              />
            </div>
            <div className="col-lg-2 pe-0">
              <div className="infobx">
                <i className="bx bx-info-circle" />
                <h6>Prijs:</h6>
                <p>
                  <span>€ 200</span> P.j
                </p>
              </div>
            </div>
            <div className="col-lg-2 pe-0">
              <div className="infobx">
                <i className="bx bx-info-circle" />
                <h6>Besparing:</h6>
                <p>
                  <span>€ 200</span> P.j
                </p>
              </div>
            </div>
            <div className="col-lg-2 pe-0">
              <div className="infobx">
                <i className="bx bx-info-circle" />
                <h6>Actie:</h6>
                <p>
                  <span>€ 200</span> P.j
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <a className="btn reqbtn w-100" href="javascript:void(0);">
                Aanvragen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dealbox;
