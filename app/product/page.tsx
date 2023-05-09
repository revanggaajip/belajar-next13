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
            <div className="mt-4 p-6">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
