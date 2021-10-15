import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="Home w-1/8 h-screen">
        <div className="overlay">
          <div className="flex flex-col w-4/5 mx-auto pt-44 font-bold px-8 justify-center">
            <h1 className="text-white text-6xl">
              Go faster, go stronger,{" "}
              <span className="bold-words">never stop.</span>
            </h1>
            <p className="text-white py-4 font-thin">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              impedit dolorem repudiandae id rerum earum ullam aliquid.
            </p>
            <button className="bg-orange w-[150px] py-2 text-sm text-white rounded-full font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
