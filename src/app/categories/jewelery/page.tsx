import CategoryJewelery from "~/components/categories/jewelery";
import { GetCategoriesJewelery } from "~/lib/fetch-data";
import { ProductsProps } from "~/lib/type";

export default async function JeweleryPage() {
  const jewelerys = await GetCategoriesJewelery();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
      {jewelerys.map((jewelerys: ProductsProps) => {
        return (
          <div key={jewelerys.id}>
            <CategoryJewelery
              title={jewelerys.title}
              image={jewelerys.image}
              price={jewelerys.price}
              rating={jewelerys.rating}
            />
          </div>
        );
      })}
    </div>
  );
}
