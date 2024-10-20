export async function GetAllProducts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const data = await response.json();
  return data;
}

export async function GetAllCategories() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/categories`
  );
  const data = await response.json();
  return data;
}

export async function GetCategoriesElectronics() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/category/electronics`
  );
  const data = await response.json();
  return data;
}

export async function GetCategoriesJewelery() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/category/jewelery`
  );
  const data = await response.json();
  return data;
}
