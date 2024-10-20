import ElectronicsPage from "./categories/electronics/page";
import JeweleryPage from "./categories/jewelery/page";

export default function Home() {
  return (
    <div>
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
