

import { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import type { Product } from "../Product";
import productData from "../products.json";
import 'bootstrap/dist/css/bootstrap.min.css';


const ProductPage = () => {

   const [products, setProducts] = useState<Product[]>(
    productData as Product[]
  );
  const [editProduct, setEditProduct] = useState<Product | null>(null);

  const addOrEditProduct = (product: Product) => {
    if (product.id) {
      setProducts(products.map(p => p.id === product.id ? product : p));
    } else {
      product.id = Date.now();
      setProducts([...products, product]);
    }
    setEditProduct(null);
  };

  return (
    <div className="">
      <h3 className="text-center text-white mb-3 bg-primary p-2">Product Management</h3>
      <div className="p-4 bg-light">
        <ProductForm addOrEditProduct={addOrEditProduct} editProduct={editProduct} />
        <ProductList products={products} setEditProduct={setEditProduct} />

      </div>
    </div>
  //  <ThemeProvider>
  //     {/* EVERYTHING that uses useTheme MUST be inside */}
  //     <Header />
  //     <div style={{ display: "flex" }}>
  //       <Sidebar />
  //       <AppRoutes />
  //     </div>
  //   </ThemeProvider>
  );
};

export default ProductPage;
            