import ElectronicsPage from "./electronics/page";
import JeweleryPage from "./jewelery/page";

export default function CategoriesPage() {
  return (
    <div>
      <br />
      <div>
        <h1>Elecrtronic</h1>
        <ElectronicsPage />
      </div>
      <br />
      <div>
        <h1>Jewelery</h1>
        <JeweleryPage />
      </div>
    </div>
  );
}
