export async function getProducts() {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const json = await res.json();

  // The products array is in json.data
  const products = json.data;

  return products;
}
