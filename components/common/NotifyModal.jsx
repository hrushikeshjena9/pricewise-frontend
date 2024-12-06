import React from "react";

function NotifyModal({setEmail,notifyProduct,selectedProductId,email}) {
    console.log('====================================');
    console.log(email);
    console.log('====================================');
  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade"
        id="notstock"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="notstockLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close cls-btn-cus"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>
              <h6 className="4">
                Stay tuned for any updates on this product&#x2032;s price!
              </h6>
              <div className="d-flex mb-4">
                <input
                  type="email"
                  className="form-control me-2 rounded-5"
                  placeholder="Please Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button
                  type="submit"
                  className="btn btn-add-pro"
                  onClick={(e) => notifyProduct(selectedProductId, email)}
                >
                  <i class="far fa-bell"></i> Notify
                </button>
              </div>
              <p className="small mb-0">
                Kindly notice that the email address will not be shared or
                published with anyone else.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotifyModal;
