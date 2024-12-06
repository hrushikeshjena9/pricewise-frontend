import React, { useEffect, useState } from "react";
import TabingProduct from "./TabingProduct";
import NewArrivals from "./NewArrivals";
import ShopCategory from "./ShopCategory";
import ExclusiveDealsShop from "./ExclusiveDealsShop";
import FaqShopPage from "./FaqShopPage";
import SameHeightDiv from "../common/SameHeightDiv";
import TopFilter from "./TopFilter";
import { PostData } from "../../utils/ApiCalls";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/router";
import NotifyModal from "../common/NotifyModal";
import { useCartStore } from "../../providers/cartProvider";
import CartModal from "../common/CartModal";
const ShopProducts = ({
  show,
  setShow,
  data,
  setFilters,
  filters,
  categories,
}) => {
  const { data: session } = useSession();
  const cartStore = useCartStore((s) => s);
  const router = useRouter();
  const [recentlyAddedProduct, setRecentlyAddedProduct] = useState();
  const [message, setMessage] = useState();
  const [compareProducts, setCompareProducts] = useState([]);
  const [email, setEmail] = useState();
  const [selectedProductId, setSelectedProductId] = useState();
  console.log(recentlyAddedProduct);
  

  const [wishList, setWishlist] = useState([]);
  const [sync, setSync] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      const data = JSON.parse(localStorage.getItem("userData"));
      const token = localStorage.getItem("token");
      const userId = data ? data.id : "";
      try {
        const res = await PostData(
          "wishlist-products",
          { user_id: userId },
          "",
          `Bearer ${token}`
        );
        setWishlist(res.wishlistProducts);
        // toast.success(res.message);
        // setSync(!sync);
        // setMessage(res.message);
        // setTimeout(() => {
        //   setMessage();
        // }, 3000);
      } catch (error) {
        console.log(error);
        // toast.error(error?.response?.data?.error);
      }
    };
    if (session) fetch();
  }, [session, sync]);

  const addToWishlist = async (product_id) => {
    if (!session) return;
    const data = JSON.parse(localStorage.getItem("userData"));
    const token = localStorage.getItem("token");
    const userId = data ? data.id : "";
    try {
      const res = await PostData(
        "add-to-wishlist",
        { user_id: userId, product_id: product_id },
        "",
        `Bearer ${token}`
      );
      toast.success(res.message);
      setSync(!sync);
      // setMessage(res.message);
      // setTimeout(() => {
      //   setMessage();
      // }, 3000);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  const addToCart = async (product) => {
    if (!session) {
      cartStore.addToCart(product);
    } else {
      const data = JSON.parse(localStorage.getItem("userData"));
      const token = localStorage.getItem("token");
      const userId = data ? data.id : "";

      try {
        const res = await PostData(
          "add-to-cart",
          { user_id: userId, product_id: product.product_id },
          "",
          `Bearer ${token}`
        );
        toast.success(res.message);
        setSync(!sync);
        setMessage(res.message);
        setTimeout(() => {
          setMessage();
        }, 3000);
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.error);
      }
    }
  };
  const notifyProduct = async (product_id, email) => {
    if (!session) return;
    const data = JSON.parse(localStorage.getItem("userData"));
    const token = localStorage.getItem("token");
    const userId = data ? data.id : "";
    try {
      const res = await PostData(
        "product-notification-request",
        { user_id: userId, product_id: product_id, email },
        "",
        `Bearer ${token}`
      );
      toast.success(res.message);
      setEmail("");
      setSelectedProductId();
      // setSync(!sync);
      // setMessage(res.message);
      // setTimeout(() => {
      //   setMessage();
      // }, 3000);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error);
    }
  };
  const specialRequest = (slug) => {
    if (!session) return;
    router.push(`/shop/special-request/${slug}`);
  };

  return (
    <>
      <div className="container">
        <SameHeightDiv />
        <TopFilter
          show={show}
          setShow={setShow}
          setFilters={setFilters}
          filters={filters}
          categories={categories}
        />
      </div>
      <TabingProduct
        wishList={wishList}
        data={data.finalProducts}
        setSync={setSync}
        sync={sync}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        specialRequest={specialRequest}
        setMessage={setMessage}
        message={message}
        setSelectedProductId={setSelectedProductId}
        setRecentlyAddedProduct={setRecentlyAddedProduct}
        recentlyAddedProduct={recentlyAddedProduct}
      />
      <NewArrivals
        data={data.newArrivals}
        wishList={wishList}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        specialRequest={specialRequest}
        setMessage={setMessage}
        message={message}
        setSelectedProductId={setSelectedProductId}
        setRecentlyAddedProduct={setRecentlyAddedProduct}
        recentlyAddedProduct={recentlyAddedProduct}
      />
      <ExclusiveDealsShop data={data.deals} />
      <ShopCategory data={data.catWithProduct} />
      <FaqShopPage />
      <NotifyModal
        notifyProduct={notifyProduct}
        setEmail={setEmail}
        email={email}
        selectedProductId={selectedProductId}
      />
      <CartModal
        // sync={sync}
        // setSync={setSync}
        // setMessage={setMessage}
        // message={message}
        item={recentlyAddedProduct}
      />
    </>
  );
};

export default ShopProducts;
