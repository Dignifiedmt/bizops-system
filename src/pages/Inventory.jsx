import React, {useState} from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";
import "../style/Inventory.css";

const Inventory = () => {
    const [products] = useState([
        {
            name: "Eco-Friendly Bamboo Toothbrush",
            sku: "BTB-001",
            category: "Personal Care",
            stock: 150,
            reorder: 50,
            status: "In Stock",
        },
        {
            name: "Organic Cotton T-Shirt",
            sku: "OCT-002",
            category: "Apparel",
            stock: 75,
            reorder: 25,
            status: "Low Stock",
        },
        {
            name: "Recycled Paper Notebook",
            sku: "RPN-003",
            category: "Stationery",
            stock: 200,
            reorder: 75,
            status: "In Stock",
        },
        {
            name: "Stainless Steel Water Bottle",
            sku: "SSWB-004",
            category: "Accessories",
            stock: 100,
            reorder: 30,
            status: "In Stock",
        },
        {
            name: "Natural Soy Candle",
            sku: "NSC-005",
            category: "Home Goods",
            stock: 50,
            reorder: 15,
            status: "Low Stock",
        },
        {
            name: "Reusable Shopping Bag",
            sku: "RSB-006",
            category: "Accessories",
            stock: 120,
            reorder: 40,
            status: "In Stock",
        },
        {
            name: "Bamboo Cutting Board",
            sku: "BCB-007",
            category: "Kitchenware",
            stock: 80,
            reorder: 20,
            status: "In Stock",
        },
        {name: "Organic Baby Onesie", sku: "OBO-008", category: "Apparel", stock: 60, reorder: 10, status: "Low Stock"},
        {
            name: "Eco-Friendly Cleaning Kit",
            sku: "EFCK-009",
            category: "Home Goods",
            stock: 40,
            reorder: 5,
            status: "Low Stock",
        },
        {
            name: "Sustainable Pet Toy",
            sku: "SPT-010",
            category: "Pet Supplies",
            stock: 90,
            reorder: 25,
            status: "In Stock",
        },
    ]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editProduct, setEditProduct] = useState(null);
    const [formData, setFormData] = useState({name: "", sku: "", category: "", stock: "", reorder: ""});

    const handleAddProduct = () => {
        setEditProduct(null);
        setFormData({name: "", sku: "", category: "", stock: "", reorder: ""});
        setModalOpen(true);
    };

    const handleEditProduct = (product) => {
        setEditProduct(product);
        setFormData({...product});
        setModalOpen(true);
    };

    const handleSave = () => {
        // Logic to save or update product (e.g., update state or API call)
        console.log("Saving:", {...formData, stock: parseInt(formData.stock), reorder: parseInt(formData.reorder)});
        setModalOpen(false);
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    return (
        <div className="app-container">
            <Header showNav={false} />
            <div className="dashboard-container">
                <SideNav userType="admin" />
                <div className="layout-container">
                    <main className="main-content">
                        <div className="inventory-header">
                            <div>
                                <h2 className="inventory-title">Inventory Management</h2>
                                <p className="inventory-subtitle">
                                    Manage your product catalog, track stock levels, and set up low stock alerts.
                                </p>
                            </div>
                        </div>
                        <div className="search-container">
                            <span className="search-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24px"
                                    height="24px"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                                </svg>
                            </span>
                            <input type="text" className="search-input" placeholder="Search for products" />
                        </div>
                        <div className="inventory-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>SKU</th>
                                        <th>Category</th>
                                        <th>Stock Level</th>
                                        <th>Reorder Point</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product, index) => (
                                        <tr key={index}>
                                            <td>{product.name}</td>
                                            <td>{product.sku}</td>
                                            <td>{product.category}</td>
                                            <td>{product.stock}</td>
                                            <td>{product.reorder}</td>
                                            <td>
                                                <button
                                                    className={`status-btn ${
                                                        product.status === "Low Stock" ? "low-stock" : ""
                                                    }`}
                                                >
                                                    {product.status}
                                                </button>
                                            </td>
                                            <td>
                                                <span className="action-btn" onClick={() => handleEditProduct(product)}>
                                                    Edit
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="add-product-btn" onClick={handleAddProduct}>
                                Add New Product
                            </button>
                        </div>
                        {modalOpen && (
                            <div className="modal active">
                                <div className="modal-content">
                                    <h2 className="modal-title">{editProduct ? "Edit Product" : "Add New Product"}</h2>
                                    <div className="form-group">
                                        <label className="form-label">Product Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-input"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">SKU</label>
                                        <input
                                            type="text"
                                            name="sku"
                                            className="form-input"
                                            value={formData.sku}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Category</label>
                                        <input
                                            type="text"
                                            name="category"
                                            className="form-input"
                                            value={formData.category}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Stock Level</label>
                                        <input
                                            type="number"
                                            name="stock"
                                            className="form-input"
                                            value={formData.stock}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Reorder Point</label>
                                        <input
                                            type="number"
                                            name="reorder"
                                            className="form-input"
                                            value={formData.reorder}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="modal-actions">
                                        <button className="modal-btn cancel" onClick={() => setModalOpen(false)}>
                                            Cancel
                                        </button>
                                        <button className="modal-btn save" onClick={handleSave}>
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Inventory;
