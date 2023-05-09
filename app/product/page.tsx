const getProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    return res.json();
};

type Product = {
    id: number;
    title: string;
    price: number;
};

export default async function ProductList() {
    const products: Product[] = await getProducts();

    return (
        <div>
            <h1>Product List</h1>
            {products.map((product, index) => (
                <p key={product.id}>{product.title}</p>
            ))}
        </div>
    );
}
