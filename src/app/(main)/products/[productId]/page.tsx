import Link from "next/link";
import AllProducts from "~/components/products/all-products";
import { GetProductDetails } from "~/lib/fetch-data";

export default async function first({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  const product = await GetProductDetails(params.productId);
  return (
    <Link key={product.id} href={`/products/${product.id}`}>
      <AllProducts
        title={product.title}
        image={product.image}
        description={product.description}
        price={product.price}
        rating={product.rating}
      />
    </Link>
  );
}
