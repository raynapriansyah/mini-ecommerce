import CategoryElectronics from "~/components/categories/electronics";
import { GetCategoriesElectronics } from "~/lib/fetch-data";
import { ProductsProps } from "~/lib/type";

export default async function ElectronicsPage() {
  const electronics = await GetCategoriesElectronics();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
      {electronics.map((electronics: ProductsProps) => {
        return (
          <div key={electronics.id}>
            <CategoryElectronics
              title={electronics.title}
              image={electronics.image}
              price={electronics.price}
              rating={electronics.rating}
            />
          </div>
        );
      })}
    </div>
  );
}
