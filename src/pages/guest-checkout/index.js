import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCartStore } from "../../../providers/cartProvider";

const Index = () => {
  const cartState = useCartStore((state) => state);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const totalCartPrice = cartState.cart.reduce((total, item) => {
      const itemTotal = item.qty * parseFloat(item.product_details.sell_price);
      return total + itemTotal;
    }, 0);
    setTotalPrice(totalCartPrice);
  }, [cartState]);

  return (
    <div className="container mt-5">
      <div className="business-tab-wrp position-relative">
        <h3>Stel jouw deal vandaag veilig</h3>
        <p>
          Vul de resterende gegevens in die de aanbieder nodig heeft, zodat wij
          alles vlekkenloos kunnen regelen en jij snel hier van kan profiteren.
        </p>
        <Image
          src="/images/secure.png"
          width={80}
          height={80}
          alt="secure"
          className="protect-img"
        />
        <h4>Bezorggegevens</h4>
        <h6>Bezorging</h6>
        <hr />
        <p>Leverings- en factuuradres</p>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="particulier-tab"
              data-bs-toggle="tab"
              data-bs-target="#particulier"
              type="button"
              role="tab"
              aria-controls="particulier"
              aria-selected="true"
            >
              Particulier
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="zakelijk-tab"
              data-bs-toggle="tab"
              data-bs-target="#zakelijk"
              type="button"
              role="tab"
              aria-controls="zakelijk"
              aria-selected="false"
            >
              Zakelijk
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="grootzakelijk-tab"
              data-bs-toggle="tab"
              data-bs-target="#grootzakelijk"
              type="button"
              role="tab"
              aria-controls="grootzakelijk"
              aria-selected="false"
            >
              Grootzakelijk
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="particulier"
            role="tabpanel"
            aria-labelledby="particulier-tab"
          >
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="mt-5">
                  {/* Radio Buttons */}
                  <div className="mb-3">
                    <label className="form-check-label d-block mb-2">
                      Aanhef:
                    </label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="aanhef"
                        id="meneer"
                        defaultValue="Meneer"
                      />
                      <label className="form-check-label" htmlFor="meneer">
                        Meneer
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="aanhef"
                        id="mevrouw"
                        defaultValue="Mevrouw"
                      />
                      <label className="form-check-label" htmlFor="mevrouw">
                        Mevrouw
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="aanhef"
                        id="liever-niet"
                        defaultValue="Dat zeg ik liever niet"
                      />
                      <label className="form-check-label" htmlFor="liever-niet">
                        Dat zeg ik liever niet
                      </label>
                    </div>
                  </div>
                  {/* Full Width Input Fields */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Voornaam"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Achternaam"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Telefoonnummer"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="E-mailadres"
                    />
                  </div>
                  {/* Two Column Input Fields */}
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Postcode"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Plaats"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Huisnummer"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Straat"
                      />
                    </div>
                  </div>
                  {/* Full Width Input Field */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Aanvullende adresgegevens"
                    />
                  </div>
                  {/* Checkbox */}
                  <div className="form-check mb-3 ps-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="afwijkend-factuuradres"
                    />
                    <label
                      className="form-check-label fw-bold"
                      htmlFor="afwijkend-factuuradres"
                    >
                      Afwijkend factuuradres
                    </label>
                  </div>
                  {/* Additional Address Fields (Two Column) */}
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Postcode"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Plaats"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Huisnummer"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Straat"
                      />
                    </div>
                  </div>
                  {/* Full Width Input Field */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Aanvullende adresgegevens"
                    />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p>
                        <i class="fas fa-circle green-cyan small"></i> Verwachte
                        bezorgdatum: 30-08-24
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <p>Gratis</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="total-price-bx">
                  <h5 className="mb-0 fw-bold">Samenvatting</h5>
                  <p className="small">
                    Bestellingen vanaf €50 worden gratis bezorgd.
                  </p>
                  <hr />
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <div
                        className="accordion-button"
                        style={{ backgroundColor: "transparent" }}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <div className="col-6">
                          <p className="fw-bold m-0">Subtotaal</p>
                        </div>
                        <div className="col-6 text-end">
                          <p className="fw-bold m-0 me-4">€ {totalPrice}</p>
                        </div>
                      </div>

                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <div className="row">
                            <div className="col-6">
                              <p className="d-flex m-0">
                                Verzendkosten
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Content Goes Here"
                                >
                                  <i className="fas green-cyan fa-info-circle ms-2"></i>
                                </a>
                              </p>
                            </div>
                            <div className="col-6 text-end">
                              <p className="m-0">Gratis</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-bold">
                        Total{" "}
                        <span className="fw-normal d-block">incl. BTW</span>
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <p className="fw-bold">€ {totalPrice}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link href={"/checkout"} className="pro-add btn text-black">
                      Bestellen
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="zakelijk"
            role="tabpanel"
            aria-labelledby="zakelijk-tab"
          >
            <div className="row">
              <div className="col-8">
                <div className="mt-5">
                  {/* Radio Buttons */}
                  <div className="mb-3">
                    <label className="form-check-label d-block mb-2">
                      Aanhef:
                    </label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="aanhef"
                        id="meneer"
                        defaultValue="Meneer"
                      />
                      <label className="form-check-label" htmlFor="meneer">
                        Meneer
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="aanhef"
                        id="mevrouw"
                        defaultValue="Mevrouw"
                      />
                      <label className="form-check-label" htmlFor="mevrouw">
                        Mevrouw
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="aanhef"
                        id="liever-niet"
                        defaultValue="Dat zeg ik liever niet"
                      />
                      <label className="form-check-label" htmlFor="liever-niet">
                        Dat zeg ik liever niet
                      </label>
                    </div>
                  </div>
                  {/* Full Width Input Fields */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Voornaam"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Achternaam"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Telefoonnummer"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="E-mailadres"
                    />
                  </div>
                  {/* Two Column Input Fields */}
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Postcode"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Plaats"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Huisnummer"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Straat"
                      />
                    </div>
                  </div>
                  {/* Full Width Input Field */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Aanvullende adresgegevens"
                    />
                  </div>
                  <h5>Bedrijfsgegevens</h5>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bedrijfsnaam"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Btw-nummer"
                    />
                  </div>
                  {/* Checkbox */}
                  <div className="form-check mb-3 ps-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="afwijkend-factuuradres"
                    />
                    <label
                      className="form-check-label fw-bold"
                      htmlFor="afwijkend-factuuradres"
                    >
                      Afwijkend factuuradres
                    </label>
                  </div>
                  {/* Additional Address Fields (Two Column) */}
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Postcode"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Plaats"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Huisnummer"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Straat"
                      />
                    </div>
                  </div>
                  {/* Full Width Input Field */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Aanvullende adresgegevens"
                    />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p>
                        <i class="fas fa-circle green-cyan small"></i> Verwachte
                        bezorgdatum: 30-08-24
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <p>Gratis</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="total-price-bx">
                  <h5 className="mb-0 fw-bold">Samenvatting</h5>
                  <p className="small">
                    Bestellingen vanaf €50 worden gratis bezorgd.
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-bold">Subtotal</p>
                    </div>
                    <div className="col-6 text-end">
                      <p className="fw-bold">€ {totalPrice}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p>
                        Verzendkosten
                        <a href="#">
                          <i className="fas green-cyan fa-info-circle ms-2"></i>
                        </a>
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <p>Gratis</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-bold">
                        Total{" "}
                        <span className="fw-normal d-block">incl. BTW</span>
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <p className="fw-bold">€ {totalPrice}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link href={"/checkout"} className="pro-add btn">
                      Bestellen
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="grootzakelijk"
            role="tabpanel"
            aria-labelledby="grootzakelijk-tab"
          >
            <div className="row">
              <div className="col-8">
                <div className="mt-5">
                  {/* Radio Buttons */}
                  <div className="mb-3">
                    <label className="form-check-label d-block mb-2">
                      Aanhef:
                    </label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="aanhef"
                        id="meneer"
                        defaultValue="Meneer"
                      />
                      <label className="form-check-label" htmlFor="meneer">
                        Meneer
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="aanhef"
                        id="mevrouw"
                        defaultValue="Mevrouw"
                      />
                      <label className="form-check-label" htmlFor="mevrouw">
                        Mevrouw
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="aanhef"
                        id="liever-niet"
                        defaultValue="Dat zeg ik liever niet"
                      />
                      <label className="form-check-label" htmlFor="liever-niet">
                        Dat zeg ik liever niet
                      </label>
                    </div>
                  </div>
                  {/* Full Width Input Fields */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Voornaam"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Achternaam"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Telefoonnummer"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="E-mailadres"
                    />
                  </div>
                  {/* Two Column Input Fields */}
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Postcode"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Plaats"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Huisnummer"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Straat"
                      />
                    </div>
                  </div>
                  {/* Full Width Input Field */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Aanvullende adresgegevens"
                    />
                  </div>
                  <h5>Bedrijfsgegevens</h5>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bedrijfsnaam"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Btw-nummer"
                    />
                  </div>
                  {/* Checkbox */}
                  <div className="form-check mb-3 ps-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="afwijkend-factuuradres"
                    />
                    <label
                      className="form-check-label fw-bold"
                      htmlFor="afwijkend-factuuradres"
                    >
                      Afwijkend factuuradres
                    </label>
                  </div>

                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#smartphone"
                    className="d-flex align-items-baseline"
                  >
                    <Image
                      src="/images/add-location-point.png"
                      width={22}
                      height={22}
                      alt="map"
                    />
                    <p className="d-flex">
                      <span className="link-underline-dark">
                        Meerdere Vestigingen toevoegen.
                      </span>
                      <sup>
                        <i className="fas font-14 fa-info-circle green-cyan" />
                      </sup>
                    </p>
                  </a>

                  {/* Additional Address Fields (Two Column) */}
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Postcode"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Plaats"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Huisnummer"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Straat"
                      />
                    </div>
                  </div>
                  {/* Full Width Input Field */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Aanvullende adresgegevens"
                    />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p>
                        <i class="fas fa-circle green-cyan small"></i> Verwachte
                        bezorgdatum: 30-08-24
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <p>Gratis</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="total-price-bx">
                  <h5 className="mb-0 fw-bold">Samenvatting</h5>
                  <p className="small">
                    Bestellingen vanaf €50 worden gratis bezorgd.
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-bold">Subtotal</p>
                    </div>
                    <div className="col-6 text-end">
                      <p className="fw-bold">€ {totalPrice}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p>
                        Verzendkosten
                        <a href="#">
                          <i className="fas green-cyan fa-info-circle ms-2"></i>
                        </a>
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <p>Gratis</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-bold">
                        Total{" "}
                        <span className="fw-normal d-block">incl. BTW</span>
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <p className="fw-bold">€ {totalPrice}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link href={"/checkout"} className="pro-add btn">
                      Bestellen
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
