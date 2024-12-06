import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSnackBarContext } from "../../context/snackbarContext/SnackbarContext";

let loadingToastId = null;
function SnackBar() {
  const { type, message, setType, loading } = useSnackBarContext();
  const renderToast = (type) => {
    switch (type) {
      case "success":
        toast.success(message, {
          position: "top-right",
          theme: "dark",
        });
        break;
      case "error":
        toast.error(message, {
          position: "top-right",
          theme: "dark",
        });
        break;
      case "loading":
        loadingToastId = toast.loading("Please wait...");
        break;
      case "updatesuccess":
        if (loadingToastId) {
          toast.update(loadingToastId, {
            render: message,
            type: "success",
            isLoading: false,
            autoClose: 3000,
            theme: "dark",
          });
        }
        break;
      case "updateerror":
        if (loadingToastId) {
          toast.update(loadingToastId, {
            render: message,
            type: "error",
            isLoading: false,
            autoClose: 3000,
            theme: "dark",
          });
        }
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    renderToast(type);
    setType("");
  }, [type]);
  return (
    <>
      <ToastContainer />
      {loading && (
        <div className="loaderParent">
          <div className="loaderContainer">
            <div className="loaderUma">
              <svg viewBox="0 0 80 80">
                <circle r="32" cy="40" cx="40" id="test"></circle>
              </svg>
            </div>

            <div className="loaderUma triangle">
              <svg viewBox="0 0 86 80">
                <polygon points="43 8 79 72 7 72"></polygon>
              </svg>
            </div>

            <div className="loaderUma">
              <svg viewBox="0 0 80 80">
                <rect height="64" width="64" y="8" x="8"></rect>
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SnackBar;
