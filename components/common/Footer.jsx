import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="footer-title">
                <h4>Hulp</h4>
                <div className="ffoter-list">
                  <ul>
                    <li>
                      <Link href="/faq">Veelgestelde vragen</Link>
                    </li>
                    <li>
                      <a href="#">(Over)stappenplan</a>
                    </li>
                    <li>
                      <a href="#">Klantenservice</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="footer-title">
                <h4>Over ons</h4>
                <div className="ffoter-list">
                  <ul>
                    <li>
                      <a href="#">Vacatures</a>
                    </li>
                    <li>
                      <Link href="/partner-worden">Partner </Link>
                    </li>
                    <li>
                      <Link href="/over-ons">Over </Link>
                    </li>
                    <li>
                      <a href="#">Energise exclusives</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="footer-title">
                <h4>Diensten</h4>
                <div className="ffoter-list">
                  <ul>
                    <li>
                      <Link href="/internet-tv">Internet tv telefonie</Link>
                    </li>
                    <li>
                      <Link href="/double-meter">Energie</Link>
                    </li>
                    <li>
                      <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link href="/dashboard/order-overview">Order Overview</Link>
                    </li>
                    <li>
                      <Link href="/dashboard/work-finance">Work Finance</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="footer-title">
                <h4>Nieuwsbrief</h4>
                <input
                  type="text"
                  className="form-control"
                  placeholder="example@gmail.com"
                />
                <p className="mt-3">
                  Hiermee ben jij altijd op de hoogte van al onze nieuw Geen
                  zorgen wij geven or privacy.
                </p>
                <div className="social-media">
                  <h4>Social media</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-snapchat-ghost" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="copy-right-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copy-right-txt">
                <p>Copyright © 2024 Energise. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copy-right-list">
                <ul>
                  <li>
                    <a href="#">Disclaimer</a>
                  </li>
                  <li>
                    <a href="#">Algemene voorwaarden</a>
                  </li>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
