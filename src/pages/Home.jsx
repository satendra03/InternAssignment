import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductGrid from "../components/ProductGrid";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;


  // Inject AdSense Script
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8361685811256075";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  // Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <header className="py-6 shadow-md flex items-center justify-between px-6">
    <h1 className="text-3xl font-bold">ShopSmart</h1>
    <Link
        to="/cart"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
    >
        Cart
    </Link>
</header>

      <main className="px-6 py-4">
        <SearchBar onSearch={handleSearch} />
        <ProductGrid products={paginatedProducts} />

        {/* Google Ad Section */}
        <div className="flex justify-center my-6">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-8361685811256075"
            data-ad-slot="YOUR_AD_SLOT_ID" // Replace with your ad slot ID
            data-ad-format="auto"
          ></ins>
        </div>

        
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className={`px-4 py-2 rounded-lg text-white ${
              currentPage === 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className={`px-4 py-2 rounded-lg text-white ${
              currentPage === totalPages
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
