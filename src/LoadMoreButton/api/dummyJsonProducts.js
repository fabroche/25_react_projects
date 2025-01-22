
const url = 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'

export async function fetchProducts() {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    const products = await response.json();
    return products.products;
}