import React from "react";

const Verification = () => {
  return (
    <>
      <div className="card mt-4">
        <div className="card-header">
          <h4 className="mb-0">
            <i className="fas fa-user-check" /> Betaling
          </h4>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-sm-12">
              <div className="form-check">
                <div class="mb-3">
                  <label for="paymentMethod" class="form-label">
                    Kies jouw gewenste betaalmethode
                    <span class="text-danger">*</span>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      aria-label="Content Goes Here"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-original-title="Content Goes Here"
                    >
                      <i className="fas fa-info-circle text-success" />
                    </a>
                  </label>
                  <select id="paymentMethod" class="form-select" required>
                    <option selected disabled>
                      Selecteer een betaalmethode
                    </option>
                    <option value="creditcard">Creditcard</option>
                    <option value="paypal">PayPal</option>
                    <option value="banktransfer">Bankoverschrijving</option>
                  </select>
                </div>

                <input
                  className="form-check-input"
                  type="checkbox"
                  id="acceptConditions"
                  name="acceptConditions"
                />
                <label className="form-check-label" htmlFor="acceptConditions">
                  Ik accepteer alle voorwaarden.*
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="stayInformed"
                  name="stayInformed"
                />
                <label className="form-check-label" htmlFor="stayInformed">
                  Ik wil graag op de hoogte blijven van alle acties van Energise
                  Company.
                </label>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="remarks" class="form-label">
              Ik heb nog een opmerking:
            </label>
            <textarea
              id="remarks"
              class="form-control"
              rows="3"
              placeholder="Voeg hier je opmerking toe..."
            ></textarea>
          </div>
          <div className="row">
            <div className="col text-start">
              <button
                type="button"
                className="btn btn-light fw-bold px-3 py-2 rounded-5 border"
              >
                Controleer gegevens
              </button>
            </div>
            <div className="col text-end">
              <button type="button" className="border-0 price-btn">
                Aanvragen
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;
