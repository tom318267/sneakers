import { useContext } from "react";
import Layout from "../../components/Layout";
import CartContext from "../../context/CartContext";
import { DATA } from "../../data";

const ProductsPage = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <Layout>
      <div className="bg-white font-kumbh">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-center text-gray-900">
            Most Popular
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {DATA.map((product) => (
              <div
                key={product.id}
                className="group item-container relative p-8"
              >
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg sm:text-sm text-black font-bold">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-lg sm:text-sm text-gray-500">
                      {product.brand}
                    </p>
                  </div>
                  <p className="text-lg sm:text-sm text-black font-bold">
                    ${product.price}
                  </p>
                </div>
                <button
                  className="relative z-50 bg-black text-white text-sm py-2 px-4 rounded-full float-right hover:shadow-xl active:scale-90 transition duration-150"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
