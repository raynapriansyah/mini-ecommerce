import AllProducts from "~/components/products/all-products";
import { GetAllProducts } from "~/lib/fetch-data";

type ProductsProps = {
  id: number;
  title: string;
};

export default async function Products() {
  const products = await GetAllProducts();

  return (
    <div>
      {products.map((product: ProductsProps) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
          </div>
        );
      })}
      <AllProducts />
    </div>
  );
}
