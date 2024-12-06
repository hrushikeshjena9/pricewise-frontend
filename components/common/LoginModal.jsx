import Link from "next/link";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import { PostData } from "../../utils/ApiCalls";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import Image from "next/image";

function LoginModal({ cb = () => {} }) {
  const closeModalBtn = useRef();
  const dismissModalRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("Particulier");
  const onSubmit = async (data) => {
    const credentials = {
      email: data.username,
      password: data.password,
    };
    toast.loading("Submitting data, please wait...");
    try {
      const res = await PostData(
        "login",
        { ...credentials },
        "",
        "Bearer NOPLAN@12345!"
      );
      if (res.success !== true) {
        console.log("error");
      } else {
        const result = await signIn("credentials", {
          redirect: false,
          email: data.username,
          password: data.password,
        });
        if (result.error) {
          console.error(result?.error);
        } else {
          localStorage.setItem("userData", JSON.stringify(res.data.user));
          localStorage.setItem("token", res.data.token);
          cb();
          dismissModalRef.current.click();
        }
      }
      toast.success("Successfully logged in");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error);
    }
    toast.dismiss();
  };
  return (
    <div
      className="modal fade modal-lg loginModal"
      id="loginModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              <span>AI Klant </span> Please login to continue
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={closeModalBtn}
            />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col text-center position-relative">
                <Image
                  width={200}
                  height={200}
                  alt="aa"
                  src="/images/logo.png"
                  className="loginlogo"
                />
              </div>
              <div className="col">
                <h3 className="text-center">
                  <span>Log</span>in
                </h3>
              </div>
              <div className="col text-end">
                <Image
                  width={200}
                  height={200}
                  alt="aa"
                  src="/images/secure.jpg"
                  className="secureicon"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Gebruikersnaam:
                    </label>
                    <div
                      className="d-flex align-items-center"
                      style={{ width: "91%" }}
                    >
                      <div id="inputGroup" className="input-group">
                        <input
                          type="text"
                          className={
                            errors.username
                              ? "form-control me-2 errorBox"
                              : "form-control me-2"
                          }
                          {...register("username", { required: true })}
                          id="username"
                          name="username"
                          placeholder="Bijv. Energise"
                        />

                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {accountType ? accountType : ""}
                          </button>

                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <li onClick={() => setAccountType("Particulier")}>
                              <a
                                className="dropdown-item"
                                data-value="Personal"
                              >
                                <i className="fas fa-user" /> Particulier
                              </a>
                            </li>
                            <li onClick={() => setAccountType("Zakelijk")}>
                              <a
                                className="dropdown-item"
                                data-value="Business"
                              >
                                <i className="fas fa-user-tie" /> Zakelijk
                              </a>
                            </li>
                            <li onClick={() => setAccountType("Grootzakelijk")}>
                              <a
                                className="dropdown-item"
                                data-value="Large Business"
                              >
                                <i className="fas fa-building" /> Grootzakelijk
                              </a>
                            </li>
                            <li onClick={() => setAccountType("Personeel")}>
                              <a
                                className="dropdown-item"
                                data-value="Employees"
                              >
                                <i class="fas fa-users"></i> Personeel
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <span>
                        {accountType === "Particulier" && (
                          <span id="defaultIcon">
                            <i className="fas fa-user" /> Particulier
                          </span>
                        )}
                        {accountType === "Zakelijk" && (
                          <span id="defaultIcon">
                            <i className="fas fa-user-tie" /> Zakelijk
                          </span>
                        )}
                        {accountType === "Grootzakelijk" && (
                          <span id="defaultIcon">
                            <i className="fas fa-building" /> Grootzakelijk
                          </span>
                        )}
                        {accountType === "Personeel" && (
                          <span id="defaultIcon">
                            <i class="fas fa-users"></i> Personeel
                          </span>
                        )}
                      </span> */}
                    </div>
                    {errors.username && (
                      <p className="errorMsg">
                        <i className="fas fa-exclamation-triangle"></i> This
                        field is required
                      </p>
                    )}
                    <div className="text-end forgetpw">
                      <a href="#">Gebruikersnaam kwijt?</a>
                    </div>
                  </div>
                  <div className="mb-3 position-relative">
                    <label htmlFor="password" className="form-label">
                      Wachtwoord:
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Typ..."
                      className={
                        errors.password
                          ? "form-control passwrd errorBox"
                          : "form-control passwrd"
                      }
                      id="password"
                      name="password"
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <p className="errorMsg">
                        <i className="fas fa-exclamation-triangle"></i> This
                        field is required
                      </p>
                    )}
                    {showPassword ? (
                      <div className=" position-absolute toggle-password">
                        <i
                          className="fas fa-eye-slash me-2"
                          onClick={() => setShowPassword(!showPassword)}
                        ></i>
                        <span>Toon wachtwoord</span>
                      </div>
                    ) : (
                      <div className=" position-absolute toggle-password">
                      <i
                        className="fas fa-eye me-2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        
                      </i>
                      <span>Toon wachtwoord</span>
                      </div>
                    )}
                    <div className="forgetpassword">
                      <div className="row">
                        <div className="col-lg-8">
                          <p className="mb-0 d-inline-block">
                            Heb jij nog geen account?{" "}
                            <Link
                              onClick={() => closeModalBtn.current.click()}
                              href="/register"
                            >
                              Registreer nu gratis
                            </Link>
                          </p>
                        </div>
                        <div className="col-lg-4">
                          <Link href="/forgot-password" className="d-block">
                            Wachtwoord vergeten?
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-check ps-0">
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                      Onthoud mijn account
                    </label>
                  </div>
                  <div className="mb-3 form-check ps-0">
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      id="stayloggedin"
                    />
                    <label className="form-check-label" htmlFor="stayloggedin">
                      Aangemeld blijven
                    </label>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-login">
                      Aanmelden
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <Link
              onClick={() => closeModalBtn.current.click()}
              href="/guest-checkout"
            >
              Doorgaan zonder registratie
            </Link>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              ref={dismissModalRef}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
