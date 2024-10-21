import Link from "next/link";
import CategoryElectronics from "~/components/categories/electronics";
import { GetCategoriesElectronics } from "~/lib/fetch-data";
import { ProductsProps } from "~/lib/type";

export default async function ElectronicsPage() {
  const electronics = await GetCategoriesElectronics();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
      {electronics.map((electronic: ProductsProps) => {
        return (
          <Link key={electronic.id} href={`/products/${electronic.id}`}>
            <CategoryElectronics
              title={electronic.title}
              image={electronic.image}
              price={electronic.price}
              rating={electronic.rating}
            />
          </Link>
        );
      })}
    </div>
  );
}
