import Image from "next/image";
import React, { useEffect, useState } from "react";

const CompareFilterLeft = ({
  obtainFilter,
  checkedItems,
  setCheckedItems,
  searchKeyword,
  setSearchKeyword,
}) => {
  const [isLandscapeSmallScreen, setIsLandscapeSmallScreen] = useState(false);

  const [showFirstBody, SetShowFirstBody] = useState(true);
  const [showSecondBody, setShowSecondBody] = useState(false);
  const [filters, setFilters] = useState();
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    setFilters(obtainFilter ? obtainFilter : []);
  }, [obtainFilter]);
  console.log(filters);

  const handleSendFirst = () => {
    SetShowFirstBody(false);
    setShowSecondBody(true);
  };
  const handleFilterValue = (itemId) => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 1000);
    return () => clearTimeout(handler);
  }, [search]);
  // useEffect(() => {
  //   if(searchKeyword) {
  //     setSearch(searchKeyword);
  //   }

  // },[searchKeyword]);
  useEffect(() => {
    // if (debouncedSearch !== "") {
    setSearchKeyword(debouncedSearch);
    // }
  }, [debouncedSearch, setSearchKeyword]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    // setSearchKeyword(e.target.value);
  };

  const checkOrientation = () => {
    const isLandscape =
      window.matchMedia("(orientation: landscape)").matches &&
      window.innerWidth <= 768;
    setIsLandscapeSmallScreen(isLandscape);
  };

  useEffect(() => {
    checkOrientation();

    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  return (
    <>
      <div className="col-lg-3 left-side-filter"
            style={{
              maxHeight: isLandscapeSmallScreen ? "516px" : "none",
              overflowY: "auto",
              overflowX: "hidden",
              transform: isLandscapeSmallScreen ? "rotate(90deg)" : "none",
            }}
      >
        <div className="protectionbx">
          <h5>
            <i className="fas fa-sliders-h"></i>
          </h5>
        </div>
        <div className="compareleft">
          <div className="support1">
            <div
              style={{
                position: "relative",
                display: "inline-block",
                width: "100%",
              }}
            >
              <i
                className="fas fa-search"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  color: "#000",
                  pointerEvents: "none",
                }}
              ></i>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={search}
                onChange={handleSearchChange}
                style={{
                  paddingLeft: "35px", 
                }}
              />
            </div>

            {filters && filters.length > 0 && (
              <>
                {filters[0].No_Parent?.map((item, i) => (
                  <div className="form-check" key={i}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`filter_${i}`}
                      // "aADSL"
                      onChange={() => handleFilterValue(item.id)}
                      checked={checkedItems.includes(item.id)}
                      value={item.id}
                    />
                    <label className="form-check-label" htmlFor={`filter_${i}`}>
                      {item.features}
                    </label>
                    {/* html for="ADSL" */}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        {filters && filters.length > 0 && (
          <>
            {filters.slice(1).map((group, i) => (
              <React.Fragment key={i}>
                {Object.entries(group).map(([groupName, items], j) => (
                  <React.Fragment key={groupName}>
                    <div className="protectionbx">
                      <h5>
                        <i className="fas fa-sliders-h"></i> {groupName}
                      </h5>
                    </div>
                    <div className="compareleft">
                      <div className="">
                        {items.map((item, k) => (
                          <div className="form-check" key={k}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              onChange={() => handleFilterValue(item.id)}
                              checked={checkedItems.includes(item.id)}
                              value={item.id}
                              id={`geen_${i}_${j}_${k}`}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`geen_${i}_${j}_${k}`}
                            >
                              {item.features}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </>
        )}

        <div className="support">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Aanbod op maat
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">Content for Aanbod op maat</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Aanvraag
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">Content for Aanvraag</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Unieke deals
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">Content for Unieke deals</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Duidelijkheid
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">Content for Duidelijkheid</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Service
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">Content for Service</div>
              </div>
            </div>
          </div>
        </div>

        <div className="emaildeal">
          <a href="#" data-bs-toggle="modal" data-bs-target="#emailModal">
            <Image
              width={60}
              height={60}
              alt="aa"
              src="/images/mail.png"
              className="img-fluid"
            />
            Mail mijn deals
          </a>
          {/* Modal */}
          <div
            className="modal fade"
            id="emailModal"
            tabIndex={-1}
            aria-labelledby="emailModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="emailModalLabel">
                    Mail mijn deals
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>

                {/* First Modal Body */}
                <div
                  className="modal-body"
                  style={{ display: showFirstBody ? "block" : "none" }}
                >
                  <h5>Let op deals kunnen per dag wijzigen! </h5>
                  <p>Wij versturen jouw deals uitsluitend per e-mail.</p>
                  <form>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Bijv. voorbeeld@outlook.com"
                        id="recipient-name"
                      />
                    </div>
                  </form>
                </div>

                {/* First Modal Footer */}
                <div
                  className="modal-footer"
                  style={{ display: showFirstBody ? "block" : "none" }}
                >
                  <button
                    type="button"
                    className="btn price-btn"
                    onClick={handleSendFirst}
                  >
                    Send
                  </button>
                </div>

                {/* Second Modal Body */}
                <div
                  className="modal-body"
                  style={{ display: showSecondBody ? "block" : "none" }}
                >
                  <h5>Verstuurd!</h5>
                  <p>
                    Jouw verrassend scherpe deals zijn verzonden. Het kan soms
                    voorkomen, dat jouw deals in de spam terecht komen.
                  </p>
                  <p>
                    Heb jij nog vragen hierover? Neem gerust{" "}
                    <a href="javascript:void(0);">contact</a> met ons op.
                  </p>
                  <p className="text-warning">
                    Let op de deals zijn vaak enkele dagen geldig voorkom daarom
                    een gemiste kans!
                  </p>
                  <a href="javascript:void(0);">
                    <i className="fas fa-shield-alt"></i>
                    <span>Privacy</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareFilterLeft;
