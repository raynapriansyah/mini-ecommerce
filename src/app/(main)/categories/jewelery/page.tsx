import Link from "next/link";
import CategoryJewelery from "~/components/categories/jewelery";
import { GetCategoriesJewelery } from "~/lib/fetch-data";
import { ProductsProps } from "~/lib/type";

export default async function JeweleryPage() {
  const jewelerys = await GetCategoriesJewelery();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
      {jewelerys.map((jewelery: ProductsProps) => {
        return (
          <Link key={jewelery.id} href={`/products/${jewelery.id}`}>
            <CategoryJewelery
              title={jewelery.title}
              image={jewelery.image}
              price={jewelery.price}
              rating={jewelery.rating}
            />
          </Link>
        );
      })}
    </div>
  );
}
