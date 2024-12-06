import React, { useEffect, useState } from "react";
import ShopProducts from "../../../components/ShopPersonal/products";
import LeftFilterShop from "../../../components/ShopPersonal/LeftFilterShop";
import BannerTopShop from "../../../components/ShopPersonal/BannerTopShop";
import { PostData } from "../../../utils/ApiCalls";

const Index = ({ data, categories }) => {
  const [show, setShow] = useState(false);
  const [shopProducts, setShopProducts] = useState(data);
  const [filters, setFilters] = useState({
    category_id: null,
    search: null,
    filter: null,
    color_id: null,
    product_type: null,
  });
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await PostData("shop-products", { ...filters });
        setShopProducts(data);
      } catch (error) {}
    };
    fetch();
  }, [filters]);

  return (
    <>
      <div className="container-fluid p-0">
        <BannerTopShop banners={shopProducts.promotion} />
      </div>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12 position-relative">
            <LeftFilterShop
              show={show}
              setShow={setShow}
              setFilters={setFilters}
              filters={filters}
            />
            <ShopProducts
              show={show}
              setShow={setShow}
              data={shopProducts}
              setFilters={setFilters}
              filters={filters}
              categories={categories}
            />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Index;

export async function getServerSideProps() {
  try {
    const data = await PostData("shop-products");
    const categories = await PostData("category-filter");
    // const data2 = await PostData("get-energy-deals");

    return {
      props: { data, categories },
    };
  } catch (error) {
    console.error("Error fetching data shop page:", error);
    return {
      props: { data: {}, data2: {} },
    };
  }
}
