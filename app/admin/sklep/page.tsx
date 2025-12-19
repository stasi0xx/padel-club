import { getProducts, deleteProduct, saveProduct } from "@/app/actions/shop-actions";
import { ShopManager } from "./ShopManager"; // Client component

export default async function AdminShopPage() {
    const products = await getProducts();

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">Zarządzanie Sklepem</h1>

            {/* Przekazujemy logikę i dane do komponentu klienta */}
            <ShopManager products={products} deleteAction={deleteProduct} saveAction={saveProduct} />
        </div>
    );
}