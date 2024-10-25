import DetailProduct from "~/components/products/detail-product";
import { GetProductDetails } from "~/lib/fetch-data";

export default async function DetailProducts({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  const product = await GetProductDetails(params.productId);
  return (
    <DetailProduct
      title={product.title}
      image={product.image}
      price={product.price}
      rating={product.rating}
      description={product.description}
    />
  );
}
