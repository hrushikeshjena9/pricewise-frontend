import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PostData } from "../../utils/ApiCalls";
import { toast } from 'sonner';
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import SunAnimation from "../../components/common/SunAnimation";

function Login() {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState('Particulier');
  const router = useRouter();
  const className = 'login-bxwrp';

  const onSubmit = async (data) => {
    const credentials = {
      email: data.username,
      password: data.password
    }
    toast.loading('Submitting data, please wait...');
    try {
      const res = await PostData('login', { ...credentials }, "", "Bearer NOPLAN@12345!");
      if (res.success !== true) {
        console.log("error");
      } else {
        const result = await signIn("credentials", {
          redirect: false,
          email: data.username,
          password: data.password,
        });
        console.log(res);
        if (result.error) {
          console.error(result?.error);
        } else {
          localStorage.setItem("userData", JSON.stringify(res.data.user));
          localStorage.setItem("token", res.data.token);
          router.push("/dashboard");
        }
      }
      toast.success('Successfully logged in');
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error);
    }
    toast.dismiss();
  };

  return (
    <>
      <section>
        <div className="signtitle-bx">
          <div className="container-fluid">
            <h2>
              Hartelijk Welkom <span>Energiser</span>
            </h2>
            <h5>
              Log in of word <b>gratis</b> lid, voor <span>exclusieve</span>{" "}
              deals &amp; stapelgekke kortingen!
            </h5>
          </div>
        </div>
        <div className="login-wrp">
          <SunAnimation className={className} />
          <div className="container">
            <div className="login-bx">
              <div className="row">
                <div className="col text-center position-relative">
                  <Image width={200} height={200} alt="aa" src="/images/logo.png" className="loginlogo" />
                </div>
                <div className="col">
                  <h3 className="text-center">
                    <span>Log</span>in
                  </h3>
                </div>
                <div className="col text-end">
                  <Image width={200} height={200} alt="aa" src="/images/secure.jpg" className="secureicon" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Gebruikersnaam:</label>
                      <div className="d-flex align-items-center">
                        <div id="inputGroup" className="input-group">
                          <input
                            type="text"
                            className={errors.username ? "form-control me-2 errorBox" : 'form-control me-2'}
                            id="username"
                            name="username"
                            placeholder="Bijv. Energise"
                            {...register('username', { required: true })}
                          />
                          
                          <div className="dropdown">
                            
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {accountType ? accountType : ''}
                            </button>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <li onClick={() => setAccountType('Particulier')}>
                                <a className="dropdown-item" data-value="Personal">
                                  <i className="fas fa-user" /> Particulier
                                </a>
                              </li>
                              <li onClick={() => setAccountType('Zakelijk')}>
                                <a className="dropdown-item" data-value="Business">
                                  <i className="fas fa-user-tie" /> Zakelijk 
                                </a>
                              </li>
                              <li onClick={() => setAccountType('Grootzakelijk')}>
                                <a className="dropdown-item" data-value="Large Business">
                                  <i className="fas fa-building" /> Grootzakelijk
                                </a>
                              </li>
                              <li onClick={() => setAccountType('Personeel')}>
                                <a className="dropdown-item" data-value="Employees">
                                 <i class="fas fa-users"></i> Personeel
                                </a>
                              </li>
                            </ul>
                          </div>

                        </div>
                        <span>
                          {accountType === 'Particulier' &&
                            <span id="defaultIcon">
                              <i className="fas fa-user" /> Particulier
                            </span>
                          }
                          {accountType === 'Zakelijk' &&
                            <span id="defaultIcon">
                              <i className="fas fa-user-tie" /> Zakelijk
                            </span>
                          }
                          {accountType === 'Grootzakelijk' &&
                            <span id="defaultIcon">
                              <i className="fas fa-building" /> Grootzakelijk
                            </span>
                          }
                         {accountType === 'Personeel' &&
                            <span id="defaultIcon">
                              <i class="fas fa-users"></i> Personeel
                            </span>
                          }
                        </span>
                      </div>
                      {errors.username && <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i> This field is required</p>}
                      <div className="text-end forgetpw">
                        <a href="#">Gebruikersnaam kwijt?</a>
                      </div>
                    </div>
                    <div className="mb-3 position-relative">
                      <label htmlFor="password" className="form-label">Wachtwoord:</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Typ..."
                        className={errors.password ? "form-control passwrd errorBox" : 'form-control passwrd'}
                        id="password"
                        name="password"
                        {...register('password', { required: true })}
                      />
                      {errors.password && <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i> This field is required</p>}
                      {showPassword ?
                        <i className="fas fa-eye-slash toggle-password position-absolute" onClick={() => setShowPassword(!showPassword)}>
                          <span>Toon wachtwoord</span>
                        </i>
                        :
                        <i className="fas fa-eye toggle-password position-absolute" onClick={() => setShowPassword(!showPassword)}>
                          <span>Toon wachtwoord</span>
                        </i>
                      }
                      <div className="forgetpassword">
                        <div className="row">
                          <div className="col-lg-8">
                            <p className="mb-0 d-inline-block">
                              Heb jij nog geen account?{" "}
                              <Link href="/register">Registreer nu gratis.</Link>
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
                      <input type="checkbox" className="form-check-input me-2" id="remember" />
                      <label className="form-check-label" htmlFor="remember">Onthoud mijn account</label>
                    </div>
                    <div className="mb-3 form-check ps-0">
                      <input type="checkbox" className="form-check-input me-2" id="stayloggedin" />
                      <label className="form-check-label" htmlFor="stayloggedin">Aangemeld blijven</label>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-login">Aanmelden</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
