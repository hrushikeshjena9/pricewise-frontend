import Image from 'next/image'
import React, { useState } from 'react'

const LeftFilterShop = ({show,setShow,setFilters}) => {
  return (
    <>
      {show && 
         <>
         <div className='shoplft-wrp'>
          <div className='shop-left-filter'>
            <div className='left-title-filter'>
              <div className='row'>
                  <div className='col-12 d-flex'>
                   <h2>Verfijn jouw <span>voorkeuren</span></h2>
                   <button className='filter-btn-shop btn-catf-close' onClick={() => setShow(!show)}>
                            {show ? <i class='bx bx-x bx-flashing' ></i>: <i class='bx bx-x bx-flashing' ></i>}
                        </button>
                  </div>
              </div>
            </div>
            <div className="accordion">
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
                    <i class="fas fa-cog fa-2x green-cyan"></i> <span className='fw-bold'>Algemeen</span>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smartphone-acc-bx"
                >
                  <div className="accordion-body">
                    <div className='fil-drop'>
                      <label className='fw-medium'>Klanten</label>
                      <select className='form-select'>
                        <option value="1">Particulier</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                    <div className='fil-drop'>
                      <label className='fw-medium'>Catorgorieen</label>
                      <select className='form-select'>
                        <option value="1">Geen voorkeur</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                    <div className='fil-drop'>
                      <label className='fw-medium'>Product</label>
                      <select className='form-select'>
                        <option value="1">Geen voorkeur</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                    <div className='fil-drop'>
                      <label className='fw-medium'>Model</label>
                      <select className='form-select'>
                        <option value="1">Geen voorkeur</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                    <div className='fil-drop'>
                      <label className='fw-medium'>Afmetingen</label>
                      <select className='form-select'>
                        <option value="1">Geen voorkeur</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                    <div className='fil-drop'>
                      <label className='fw-medium'>Kleuren</label>
                      <select className='form-select'>
                        <option value="1">Geen voorkeur</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                    <div className='fil-drop'>
                      <label className='fw-medium'>Themas</label>
                      <select className='form-select'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                    <div className='fil-drop'>
                      <label className='fw-medium'>Merken</label>
                      <select className='form-select'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsetwo"
                    aria-expanded="false"
                    aria-controls="collapsetwo"
                  >
                    <i class="fas fa-euro-sign fa-2x green-cyan"></i> <span className='fw-bold'>Budget</span>
                  </button>
                </h2>
                <div
                  id="collapsetwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smartphone-acc-bx"
                >
                  <div className="accordion-body">
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <label className="form-label labeltitle">Budget</label>
                      </div>
                      <div className="col-12 col-lg-6">
                        <input
                          type="number"
                          className="form-control "
                          id="numberInput2"
                          min={1}
                          defaultValue={10}
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="range"
                          className="form-range"
                          id="customRange2"
                          min={1}
                          max={100}
                          defaultValue={10}
                        />
                        <label htmlFor="customRange1" className="form-label">
                          <div className="cus-num">
                            <span>€0</span>
                            <span>€300</span>
                          </div>
                        </label>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsethe"
                    aria-expanded="false"
                    aria-controls="collapsethe"
                  >
                    <i className="fas fa-filter fa-2x green-cyan"></i> <span className='fw-bold'>Filters</span>
                  </button>
                </h2>
                <div
                  id="collapsethe"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smartphone-acc-bx">
                  <div className="accordion-body">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="klantenscore"
                        defaultValue="true"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="klantenscore"
                      >
                        Klantenscore (..)
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="a"
                        defaultValue="true"
                      />
                      <label className="form-check-label mt-1" htmlFor="a">
                        Monteur (..)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="a"
                        defaultValue="true"
                      />
                      <label className="form-check-label mt-1" htmlFor="a">
                        Gratis retourneren (..)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="a"
                        defaultValue="true"
                      />
                      <label className="form-check-label mt-1" htmlFor="a">
                        Garantie (..)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="a"
                        defaultValue="true"
                      />
                      <label className="form-check-label mt-1" htmlFor="a">
                        Aanbiedingen (..)
                      </label>
                    </div>
                    <div className="form-check">
                      <ul className="list-unstyled">
                        <li className="d-flex">
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                          <span className="classAPlusPlus">A</span>
                        </li>
                        <li className="d-flex">
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                          <span className="classAPlus">B</span>
                        </li>
                        <li className="d-flex">
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                          <span className="classA">C</span>
                        </li>
                        <li className="d-flex">
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                          <span className="classB">D</span>
                        </li>
                        <li className="d-flex">
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                          <span className="classC">E</span>
                        </li>
                        <li className="d-flex">
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                          <span className="classD">F</span>
                        </li>
                        <li className="d-flex">
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                          <span className="classE">G</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
         </>
      }
    </>
  )
}

export default LeftFilterShop