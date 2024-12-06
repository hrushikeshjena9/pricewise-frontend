import React, { useState, useEffect } from "react";
import { NavLink } from "../../utils/NavLink";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const ButtonMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [multiDropDown, setMultiDropDown] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowMenu(false);
  }, [router]);
  const [userName, setUserName] = useState();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    signOut();
    router.push("/login");
  };
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userData"));
    setUserName(userDetails ? userDetails.name : "");
  }, [session]);

  return (
    <>
      <div
        className={`scroll-navbar ${isScrolled ? "scrolled" : ""}`}
        id="myHeader"
        style={{
          width: showMenu ? "100%" : "",
          padding: showMenu ? "10px" : "10px",
          backgroundColor: showMenu ? "#f0f0f0" : "transparent",
          boxShadow: showMenu
            ? "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 0px -1px"
            : "unset",
        }}
      >
        <button
          onClick={() => setShowMenu(!showMenu)}
          className={`show-menu ${isScrolled ? "scrolled" : ""}`}
          data-bs-toggle="tooltip"
          data-bs-html="true"
          title={showMenu ? "Close menu" : "Open menu"}
        >
          {showMenu ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
        {showMenu && (
          <>
            <div className="menu-box">
              <ul>
                <li>
                  <NavLink href="/double-meter">Energie</NavLink>
                </li>
                <li>
                  <NavLink href="/internet-tv">Interner & Tv</NavLink>
                </li>
                {/* <li className='has-sub-menu'>
                                    <NavLink href="#">Verzekering <i className="fal fa-chevron-down" style={{ fontSize: "11px", fontWeight: '600' }}></i></NavLink>
                                    <ul className="dropdown">
                                        <li>
                                            <NavLink className="nav-link" href="/health-insurance">
                                                <i className="fas fa-chevron-double-right"></i> Ziektekostenverzekering
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className="nav-link"
                                                href="/home-insurance"
                                            >
                                                <i className="fas fa-chevron-double-right"></i>  Woningverzekering
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className="nav-link"
                                                href="/vehicle-insurance"
                                            >
                                                <i className="fas fa-chevron-double-right"></i>  Auto verzekering
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className="nav-link"
                                                href="/insurance/accident_insurance"
                                            >
                                                <i className="fas fa-chevron-double-right"></i> Ongevallenverzekering
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className="nav-link"
                                                href="/insurance/death_risk"
                                            >
                                                <i className="fas fa-chevron-double-right"></i> Doodsrisico
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className="nav-link"
                                                href="/insurance/travel_insurance"
                                            >
                                                <i className="fas fa-chevron-double-right"></i> Reisverzekering
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className="nav-link"
                                                href="/insurance/funeral"
                                            >
                                                <i className="fas fa-chevron-double-right"></i> Begrafenis
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li> */}
                <li
                  className="has-sub-menu"
                  onMouseOver={() => setMultiDropDown(true)}
                  onMouseOut={() => setMultiDropDown(false)}
                >
                  <NavLink href="#">
                    Diensten{" "}
                    <i
                      className="fal fa-chevron-down"
                      style={{ fontSize: "11px", fontWeight: "600" }}
                    ></i>
                  </NavLink>
                  <ul className="dropdown">
                    <div
                      style={{
                        padding: "12px",
                        borderBottom: "1px solid #e8e8e8",
                      }}
                    >
                      <b>Andere diensten</b>
                    </div>
                    <li>
                      <NavLink className="nav-link" href="/cyber-security">
                        <i className="fas fa-chevron-double-right"></i>{" "}
                        Cyberbeveiliging
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" href="/insurance/farmhouse">
                        <i className="fas fa-chevron-double-right"></i>{" "}
                        Boerderij
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" href="/insurance/glass">
                        <i className="fas fa-chevron-double-right"></i> Glas
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
                      <NavLink className="nav-link" href="/insurance/liability">
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
                        <i className="fas fa-chevron-double-right"></i> Lening
                      </NavLink>
                    </li>
                  </ul>
                  <ul
                    className="dropdown"
                    style={{ left: multiDropDown ? "280px" : "" }}
                  >
                    <div
                      style={{
                        padding: "12px",
                        borderBottom: "1px solid #e8e8e8",
                      }}
                    >
                      <b>Verzekering</b>
                    </div>
                    <li>
                      <NavLink className="nav-link" href="/health-insurance">
                        <i className="fas fa-chevron-double-right"></i>{" "}
                        Ziektekostenverzekering
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" href="/home-insurance">
                        <i className="fas fa-chevron-double-right"></i>{" "}
                        Woningverzekering
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" href="/vehicle-insurance">
                        <i className="fas fa-chevron-double-right"></i> Auto
                        verzekering
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
                      <NavLink className="nav-link" href="/insurance/funeral">
                        <i className="fas fa-chevron-double-right"></i>{" "}
                        Begrafenis
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink href="#">Shop</NavLink>
                </li>
                <li>
                  <NavLink href="#">Vacatures</NavLink>
                </li>
              </ul>
            </div>

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
                      <li
                        className="dropdown-items"
                        style={{ borderBottom: "1px solid black" }}
                      >
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
          </>
        )}
      </div>
    </>
  );
};

export default ButtonMenu;
