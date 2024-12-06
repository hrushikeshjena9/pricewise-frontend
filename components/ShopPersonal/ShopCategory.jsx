import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const ReactOwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
const ShopCategory = ({ data }) => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    loop: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],

    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <>
      <div className="sp-ct">
        <div className="container">
          <div className="cat-ti-shop">
            <h2>Browse By Category</h2>
          </div>
          <ReactOwlCarousel className="owl-theme" {...options}>
            {data && data.map((deal, i) => (
              <div key={i} className="shop-cat-bx">
                <div className="shop-cat-img">
                  <Image
                    src={deal.image}
                    width={285}
                    height={190}
                    alt="category"
                  />
                </div>
                <div className="cat-name">{deal.title}</div>
                <ul>
                  {deal.brands.map((brand, j) => (
                    <li key={j}>
                      <Link href={`/shop/brands/${brand.slug}`}>
                        <i class="fas fa-circle"></i> {brand.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}            
          </ReactOwlCarousel>
        </div>
      </div>
    </>
  );
};

export default ShopCategory;
