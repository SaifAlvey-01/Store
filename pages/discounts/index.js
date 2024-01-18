import React from "react";
import Layout from "../../components/Layout";
import Discounts from "../../components/discounts/initial-pages/discounts";
import { useDispatch, useSelector } from "react-redux";
import { setShowDiscountCoupons } from "../../redux/slices/discountsSlices/discountCouponsSlice";

export default function DiscountsPage() {
  const dispatch = useDispatch();
  const showDiscountCoupons = useSelector((state) => state.showDiscountCoupons);

  const backText = showDiscountCoupons ? "Discount Coupons" : undefined;

  return (
    <Layout backText={backText} showDiscountCoupons={showDiscountCoupons}>
      <Discounts
        setShowDiscountCoupons={(value) =>
          dispatch(setShowDiscountCoupons(value))
        }
        showDiscountCoupons={showDiscountCoupons}
      />
    </Layout>
  );
}
