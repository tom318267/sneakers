import Layout from "../components/Layout";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col h-screen sm:flex-row sm:justify-center sm:items-center">
        <ProductGallery />
        <ProductInfo />
      </div>
    </Layout>
  );
}
