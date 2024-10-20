import AllProducts from "~/components/products/all-products";
import { GetAllProducts } from "~/lib/fetch-data";
import { ProductsProps } from "~/lib/type";

export default async function Products() {
  const products = await GetAllProducts();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
      {products.map((product: ProductsProps) => {
        return (
          <div key={product.id}>
            <AllProducts
              title={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating}
            />
          </div>
        );
      })}
    </div>
  );
}
