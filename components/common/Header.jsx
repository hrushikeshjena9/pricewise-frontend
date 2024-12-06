import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NavLink } from "../../utils/NavLink";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { setHeader } from "../../store/slices/headerTypeSlice";
import { PostData, axiosGet } from "../../utils/ApiCalls";
import Link from "next/link";

function Header({ setHeaderType, headerType }) {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const headerType2 = useSelector((state) => state?.headerType?.headerType);
  const [userName, setUserName] = useState();
  const [mobileClass, setMobileClass] = useState("");
  const [show, setShow] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [subMenu1, setSubMenu1] = useState(false);
  const [subMenuSub1, setSubMenuSub1] = useState(false);
  const [subMenuSub2, setSubMenuSub2] = useState(false);
  const [pathname, setPathName] = useState();
  const [multiDropDown, setMultiDropDown] = useState(false);
  const [authToken, setAuthToken] = useState();
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }, 500);
  }, [router.pathname]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthToken(token ? token : "");
  }, []);
  useEffect(() => {
    setPathName(router.pathname);
  }, [router]);
  const size = useWindowSize();
  // console.log(authToken);
  const handleLogout = async () => {
    toast.loading("logging out, wait");
    try {
      const res = await PostData("logout", "", "", `Bearer ${authToken}`);
      console.log(res.message);
      toast.success(res.message);
    } catch (error) {
      console.log(error);
    }
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    signOut();
    toast.dismiss();
    router.push("/login");
  };
  useEffect(() => {
    if (size.width <= 768) {
      setMobileClass("small-screen");
      setShow(false);
      setSubMenuSub1(false);
      setSubMenuSub2(false);
    } else {
      setMobileClass("");
      setShow(true);
      setSubMenuSub1(true);
      setSubMenuSub2(true);
    }
  }, [size]);
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userData"));
    setUserName(userDetails ? userDetails.name : "");
  }, [session]);
  const handleHeaderType = (value) => {
    dispatch(setHeader(value));
  };
  useEffect(() => {
    if (headerType2) {
      setHeaderType(headerType2);
    }
  }, [headerType2]);
  const multiDropDownMouseOn = () => {
    setMultiDropDown(true);
  };
  const multiDropDownMouseOot = () => {
    setMultiDropDown(false);
  };
  return (
    <header className="header" id="myHeader">
      <div className="top-menu">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-7 col-md-8">
              <div className="top-menu-item">
                <ul>
                  <li
                    className={
                      pathname === "/" &&
                      !pathname.includes("/large-business") &&
                      !pathname.includes("/commercial")
                        ? "active"
                        : ""
                    }
                    onClick={() => handleHeaderType("personal")}
                  >
                    <NavLink href="/">Particulier</NavLink>
                  </li>
                  <li
                    className={pathname === "/business" ? "active" : ""}
                    onClick={() => handleHeaderType("business")}
                  >
                    <NavLink href="/commercial">Zakelijk</NavLink>
                  </li>
                  <li
                    className={pathname === "/large-business" ? "active" : ""}
                    onClick={() => handleHeaderType("largeBusiness")}
                  >
                    <NavLink href="/large-business">Grootzakelijk</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-5 col-md-4">
              <div className="top-mn-log">
                {session ? (
                  <>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        style={{ backgroundColor: "#57462e" }}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i
                          className="fas fa-user-tie"
                          style={{ marginRight: "8px" }}
                        ></i>
                        Welcome {userName}
                      </button>
                      <ul className="dropdown-menu" style={{ width: "200px" }}>
                        <li className="dropdown-items">
                          <NavLink className="dropdown-item" href="/dashboard">
                            <i className="fas fa-user"></i>
                            Profile
                          </NavLink>
                        </li>
                        {/* <hr /> */}
                        <li className="dropdown-items" onClick={handleLogout}>
                          <a className="dropdown-item">
                            <i className="fas fa-sign-out-alt"></i>Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <NavLink href="/login" className="btn-one">
                    Inloggen <i className="fas fa-user" />
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {headerType == "personal" && (
        <div className="bottom-menu">
          <div className="container">
            <div className="row">
              <div className="menu-flex-box">
                <div className="header-item item-left">
                  <div className="logo">
                    <NavLink href="/">
                      <Image
                        src="/images/logo.png"
                        alt="asddd"
                        height={200}
                        width={200}
                      />
                    </NavLink>
                  </div>
                </div>
                {/* menu start here */}

                <div className="mid-menu-flex">
                  <nav
                    id="cssmenu"
                    className={`mid-menu-navbar ${mobileClass}`}
                  >
                    <div
                      id="menu-button"
                      onClick={() => setShow(!show)}
                      className={show === true ? "menu-opened" : ""}
                    ></div>
                    <ul
                      className="all-navlinks"
                      style={{ display: show ? "block" : "" }}
                    >
                      <li>
                        <NavLink href="/double-meter">Energie</NavLink>
                      </li>
                      <li>
                        <NavLink href="/internet-tv">Internet &amp; Tv</NavLink>
                      </li>
                      <li>
                        <NavLink href="/smartphone">Smartphone</NavLink>
                      </li>
                      <li
                        className="has-sub"
                        onMouseOver={multiDropDownMouseOn}
                        onMouseOut={multiDropDownMouseOot}
                      >
                        <span
                          className={`${
                            subMenu1
                              ? "submenu-button submenu-opened"
                              : "submenu-button"
                          }`}
                          onClick={() => setSubMenu1(!subMenu1)}
                        ></span>
                        <NavLink href="#">Diensten</NavLink>
                        {/* ------ 1st dropdown------------- */}
                        <ul
                          style={{
                            display: subMenu1
                              ? "block"
                              : mobileClass != "small-screen" && !"none",
                          }}
                          className={`${subMenu1 ? "open" : ""}`}
                        >
                          <div
                            style={{
                              padding: "12px",
                              borderBottom: "1px solid #e8e8e8",
                            }}
                          >
                            <b>Andere diensten</b>
                            <span
                              className={`${
                                subMenuSub1
                                  ? "submenu-button submenu-opened"
                                  : "submenu-button"
                              }`}
                              onClick={() => setSubMenuSub1(!subMenuSub1)}
                            ></span>
                          </div>
                          {subMenuSub1 && (
                            <>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/cyber-security"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Cyberbeveiliging
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/insurance/farmhouse"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Boerderij
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/insurance/Legal_counsel"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Rechtsbijstand
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/insurance/glass"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Glas
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/insurance/Household_effects"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Huishoudelijke bezittingen
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/insurance/liability"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Betrouwbaarheid
                                </NavLink>
                              </li>
                              <li>
                                <NavLink className="nav-link" href="/events">
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Evenementen
                                </NavLink>
                              </li>
                              <li>
                                <NavLink className="nav-link" href="/loans">
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Lening
                                </NavLink>
                              </li>
                            </>
                          )}
                        </ul>
                        {/* ----------------------------- */}
                        {/* -----------2nd dropdown------------ */}
                        <ul
                          style={{
                            display: subMenu1
                              ? "block"
                              : mobileClass != "small-screen" && !"none",
                            left: multiDropDown && !mobileClass ? "285px" : "",
                          }}
                          className={`${subMenu1 ? "open" : ""}`}
                        >
                          <div
                            style={{
                              padding: "12px",
                              borderBottom: "1px solid #e8e8e8",
                            }}
                          >
                            <b>Verzekering</b>
                            <span
                              className={`${
                                subMenuSub2
                                  ? "submenu-button submenu-opened"
                                  : "submenu-button"
                              }`}
                              onClick={() => setSubMenuSub2(!subMenuSub2)}
                            ></span>
                          </div>
                          {subMenuSub2 && (
                            <>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/health-insurance"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Ziektekostenverzekering
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/home-insurance"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Woningverzekering
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/vehicle-insurance"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Auto verzekering
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/insurance/accident_insurance"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Ongevallenverzekering
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/insurance/death_risk"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Doodsrisico
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/insurance/travel_insurance"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Reisverzekering
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/insurance/funeral"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Begrafenis
                                </NavLink>
                              </li>
                            </>
                          )}
                        </ul>
                        {/* ------------------------------------ */}
                      </li>
                      <li>
                        <NavLink href="/shop">Shop</NavLink>
                      </li>
                      <li>
                        <NavLink href="/vacancy-personal/vacancy-overview">
                          {" "}
                          Vacatures <span>(3)</span>
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="btn-cont">
                  <ul>
                    <li className="sr-bx">
                      <a href="#">
                        <i className="far fa-search" />
                      </a>
                    </li>
                    <li className="sr-bx">
                      <Link href="/cart">
                        <i className="far fa-shopping-bag" /> <span>3</span>
                      </Link>
                    </li>
                    <li>
                      <a href="#" className="btn-three">
                        <i className="far fa-phone-alt" /> 031356400456
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {headerType == "business" && (
        <div className="bottom-menu">
          <div className="container">
            <div className="row">
              <div className="menu-flex-box">
                <div className="header-item item-left">
                  <div className="logo">
                    <NavLink href="/commercial">
                      <Image
                        src="/images/logo.png"
                        alt="asddd"
                        height={200}
                        width={200}
                      />
                    </NavLink>
                  </div>
                </div>
                {/* menu start here */}

                <div className="mid-menu-flex">
                  <nav
                    id="cssmenu"
                    className={`mid-menu-navbar ${mobileClass}`}
                  >
                    <div
                      id="menu-button"
                      onClick={() => setShow(!show)}
                      className={show === true ? "menu-opened" : ""}
                    ></div>
                    <ul
                      className="all-navlinks"
                      style={{ display: show ? "block" : "" }}
                    >
                      <li>
                        <NavLink href="/commercial/energie">Energie</NavLink>
                      </li>
                      <li>
                        <NavLink href="/commercial/internettv-telephone">
                          Internet &amp; Tv
                        </NavLink>
                      </li>
                      <li>
                        <NavLink href="/commercial/smartphone">
                          Smartphone
                        </NavLink>
                      </li>
                      <li
                        className="has-sub"
                        onMouseOver={multiDropDownMouseOn}
                        onMouseOut={multiDropDownMouseOot}
                      >
                        <span
                          className={`${
                            subMenu1
                              ? "submenu-button submenu-opened"
                              : "submenu-button"
                          }`}
                          onClick={() => setSubMenu1(!subMenu1)}
                        ></span>
                        <NavLink href="javascript:void(0);">Diensten</NavLink>
                        {/* ------ 1st dropdown------------- */}
                        <ul
                          style={{
                            display: subMenu1
                              ? "block"
                              : mobileClass != "small-screen" && !"none",
                          }}
                          className={`${subMenu1 ? "open" : ""}`}
                        >
                          <div
                            style={{
                              padding: "12px",
                              borderBottom: "1px solid #e8e8e8",
                            }}
                          >
                            <b>Andere diensten</b>
                            <span
                              className={`${
                                subMenuSub1
                                  ? "submenu-button submenu-opened"
                                  : "submenu-button"
                              }`}
                              onClick={() => setSubMenuSub1(!subMenuSub1)}
                            ></span>
                          </div>
                          {subMenuSub1 && (
                            <>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/commercial/insurance/building-insurance"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Gebouwenverzekering
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/commercial/insurance/cybersecurity"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Cyberbeveiliging
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/commercial/insurance/legal-counsel"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Rechtsbijstand
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/commercial/insurance/glassinsurance"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Glasverzekering
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/commercial/insurance/business-equipment-insurance"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Bedrijfsmiddelen
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/commercial/insurance/business-interruption-insurance"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Bedrijfsschade
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/commercial/insurance/directors-liability-insurance"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Bestuurdersaansprakelijkheid
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/commercial/insurance/corporateevents"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Evenementen
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/commercial/insurance/construction-all-risk-insurance"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Construction all risk
                                </NavLink>
                              </li>
                            </>
                          )}
                        </ul>
                        {/* ----------------------------- */}
                        {/* -----------2nd dropdown------------ */}
                        <ul
                          style={{
                            display: subMenu1
                              ? "block"
                              : mobileClass != "small-screen" && !"none",
                            left: multiDropDown && !mobileClass ? "285px" : "",
                          }}
                          className={`${subMenu1 ? "open" : ""}`}
                        >
                          <div
                            style={{
                              padding: "12px",
                              borderBottom: "1px solid #e8e8e8",
                            }}
                          >
                            <b>Verzekering</b>
                            <span
                              className={`${
                                subMenuSub2
                                  ? "submenu-button submenu-opened"
                                  : "submenu-button"
                              }`}
                              onClick={() => setSubMenuSub2(!subMenuSub2)}
                            ></span>
                          </div>
                          {subMenuSub2 && (
                            <>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/commercial/insurance/incapacitated"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Arbeidsongeschikt
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/commercial/insurance/vehicleInsurance"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Aanhangwagenverzekering
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/commercial/insurance/professional-liability-insurance"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Beroepsaansprakelijkheid
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/commercial/insurance/corporateliability"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Bedrijfsaansprakelijkheid
                                </NavLink>
                              </li>
                            </>
                          )}
                        </ul>
                        {/* ------------------------------------ */}
                      </li>
                      <li>
                        <NavLink href="/shop">Shop</NavLink>
                      </li>
                      <li>
                        <NavLink href="/commercial/commercial-vacancy/vacancy-overview">
                          {" "}
                          Vacatures <span>(3)</span>
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="btn-cont">
                  <ul>
                    <li className="sr-bx">
                      <a href="#">
                        <i className="far fa-search" />
                      </a>
                    </li>
                    <li className="sr-bx">
                    <Link href="/cart">
                        <i className="far fa-shopping-bag" /> <span>3</span>
                      </Link>
                    </li>
                    <li>
                      <a href="#" className="btn-three">
                        <i className="far fa-phone-alt" /> 031356400456
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {headerType == "largeBusiness" && (
        <div className="bottom-menu">
          <div className="container">
            <div className="row">
              <div className="menu-flex-box">
                <div className="header-item item-left">
                  <div className="logo">
                    <NavLink href="/large-business">
                      <Image
                        src="/images/logo.png"
                        alt="asddd"
                        height={200}
                        width={200}
                      />
                    </NavLink>
                  </div>
                </div>
                {/* menu start here */}

                <div className="mid-menu-flex">
                  <nav
                    id="cssmenu"
                    className={`mid-menu-navbar ${mobileClass}`}
                  >
                    <div
                      id="menu-button"
                      onClick={() => setShow(!show)}
                      className={show === true ? "menu-opened" : ""}
                    ></div>
                    <ul
                      className="all-navlinks"
                      style={{ display: show ? "block" : "" }}
                    >
                      <li>
                        <NavLink href="/large-business/energie/">
                          Energie
                        </NavLink>
                      </li>
                      <li>
                        <NavLink href="/large-business/internettvntelephone">
                          Internet &amp; Tv
                        </NavLink>
                      </li>
                      <li>
                        <NavLink href="/large-business/smartphone">
                          smartphone
                        </NavLink>
                      </li>
                      <li
                        className="has-sub"
                        onMouseOver={multiDropDownMouseOn}
                        onMouseOut={multiDropDownMouseOot}
                      >
                        <span
                          className={`${
                            subMenu1
                              ? "submenu-button submenu-opened"
                              : "submenu-button"
                          }`}
                          onClick={() => setSubMenu1(!subMenu1)}
                        ></span>
                        <NavLink href="#">Diensten</NavLink>
                        {/* ------ 1st dropdown------------- */}
                        <ul
                          style={{
                            display: subMenu1
                              ? "block"
                              : mobileClass != "small-screen" && !"none",
                          }}
                          className={`${subMenu1 ? "open" : ""}`}
                        >
                          <div
                            style={{
                              padding: "12px",
                              borderBottom: "1px solid #e8e8e8",
                            }}
                          >
                            <b>Andere diensten</b>
                            <span
                              className={`${
                                subMenuSub1
                                  ? "submenu-button submenu-opened"
                                  : "submenu-button"
                              }`}
                              onClick={() => setSubMenuSub1(!subMenuSub1)}
                            ></span>
                          </div>
                          {subMenuSub1 && (
                            <>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/large-business/Insurance/buildinginsurance"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Gebouwenverzekering
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/large-business/Insurance/businessdamage"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Bedrijfsschade
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/large-business/Insurance/commercialvehicles"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Bedrijsautoverzekering
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/large-business/Insurance/companyassets"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Bedrijfsmiddelen
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/large-business/Insurance/constructionallrisk"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Construction all risk
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/large-business/Insurance/corporateliability"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Bedrijfsaansprakelijkheid
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/large-business/Insurance/cybersecurity"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Cybersecurity
                                </NavLink>
                              </li>
                            </>
                          )}
                        </ul>
                        {/* ----------------------------- */}
                        {/* -----------2nd dropdown------------ */}
                        <ul
                          style={{
                            display: subMenu1
                              ? "block"
                              : mobileClass != "small-screen" && !"none",
                            left: multiDropDown && !mobileClass ? "285px" : "",
                          }}
                          className={`${subMenu1 ? "open" : ""}`}
                        >
                          <div
                            style={{
                              padding: "12px",
                              borderBottom: "1px solid #e8e8e8",
                            }}
                          >
                            <b>Verzekering</b>
                            <span
                              className={`${
                                subMenuSub2
                                  ? "submenu-button submenu-opened"
                                  : "submenu-button"
                              }`}
                              onClick={() => setSubMenuSub2(!subMenuSub2)}
                            ></span>
                          </div>
                          {subMenuSub2 && (
                            <>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/large-business/Insurance/directorsliability"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Bestuurdersaansprakelijkheid
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/large-business/Insurance/eventslarge"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Evenementen
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/large-business/Insurance/glassinsurance"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Glasverzekering
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/large-business/Insurance/Incapacitated"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Arbeidsongeschikt
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/large-business/Insurance/legal_counsel"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Rechtsbijstand
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  href="/large-business/Insurance/professionalliability"
                                >
                                  <i className="fas fa-chevron-double-right"></i>{" "}
                                  Beroepsaansprakelijkheid
                                </NavLink>
                              </li>
                            </>
                          )}
                        </ul>
                        {/* ------------------------------------ */}
                      </li>
                      <li>
                        <NavLink href="/shop">Shop</NavLink>
                      </li>
                      <li>
                        <NavLink href="/large-business/vacancies/vacancy-overview">
                          {" "}
                          Vacatures <span>(3)</span>
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="btn-cont">
                  <ul>
                    <li className="sr-bx">
                      <a href="#">
                        <i className="far fa-search" />
                      </a>
                    </li>
                    <li className="sr-bx">
                    <Link href="/cart">
                        <i className="far fa-shopping-bag" /> <span>3</span>
                      </Link>
                    </li>
                    <li>
                      <a href="#" className="btn-three">
                        <i className="far fa-phone-alt" /> 031356400456
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    if (window) handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default Header;
