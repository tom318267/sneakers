import React from "react";
import Layout from "../../components/Layout";
import ProductGallery from "../../components/ProductGallery";
import ProductInfo from "../../components/ProductInfo";

const ProductPage = () => {
  return (
    <Layout>
      <div className="flex flex-col h-full sm:h-screen sm:flex-row sm:justify-center sm:items-center">
        <ProductGallery />
        <ProductInfo />
      </div>
    </Layout>
  );
};

export default ProductPage;
