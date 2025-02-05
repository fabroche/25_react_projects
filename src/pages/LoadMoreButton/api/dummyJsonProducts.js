const query = {
    limit: 20,
    skip: 20,
    select: {
        id: "id",
        title: "title",
        description: "description",
        price: "price",
        rating: "rating",
    }
}

const url = `https://dummyjson.com/products?limit=${query.limit}&skip=${query.skip}&select=${query.select.id},${query.select.title},${query.select.description},${query.select.price},${query.select.rating}`

export async function fetchProducts() {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    const products = await response.json();
    return products.products;
}