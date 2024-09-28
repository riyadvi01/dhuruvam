import React, { useState, useEffect } from "react";
import "./Products.css";

const Products = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [pricePerBaseUnit, setPricePerBaseUnit] = useState("");
  const [baseQuantity, setBaseQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [stockAvailability, setStockAvailability] = useState("");

  const [products, setProducts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      description,
      category,
      pricePerBaseUnit: parseFloat(pricePerBaseUnit),
      baseQuantity: parseFloat(baseQuantity),
      unit,
      stockAvailability: parseInt(stockAvailability, 10),
    };

    try {
      const response = await fetch("http://localhost:3000/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        const product = await response.json();
        // onProductAdded(product);
        setProducts([...products, product]);
        // Clear form
        setName("");
        setDescription("");
        setCategory("");
        setPricePerBaseUnit("");
        setBaseQuantity("");
        setUnit("");
        setStockAvailability("");
        alert("Product added successfully!");
      } else {
        console.error("Error adding product.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/product", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const productData = await response.json();
        setProducts(productData);
      } else {
        console.error("Error fetching products.");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const onDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/product/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Product deleted successfully!");
        // Remove the deleted product from the local state
        setProducts(products.filter((product) => product.id !== id));
      } else {
        console.error("Error deleting product.");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <section id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Products</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a className="active" href="#">
                    Home
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" className="btn-download">
              <i className="bx bxs-cloud-download"></i>
              <span className="text">Download PDF</span>
            </a>
          </div>

          <div className="table-data">
            <div className="order">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Description:</label>
                  <textarea
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Category:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Price per Base Unit:</label>
                  <input
                    type="number"
                    className="form-control"
                    step="0.01"
                    value={pricePerBaseUnit}
                    onChange={(e) => setPricePerBaseUnit(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Base Quantity:</label>
                  <input
                    type="number"
                    className="form-control"
                    value={baseQuantity}
                    onChange={(e) => setBaseQuantity(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Unit:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Stock Availability:</label>
                  <input
                    type="number"
                    className="form-control"
                    value={stockAvailability}
                    onChange={(e) => setStockAvailability(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
              </form>
            </div>
          </div>

          <div className="table-data">
            <div className="order">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Stock Availability</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.pricePerBaseUnit}</td>
                      <td>{product.baseQuantity}</td>
                      <td>{product.unit}</td>
                      <td>{product.stockAvailability}</td>
                      <td>
                        <button
                          style={{
                            background: "transparent",
                            border: "0",
                            color: "green",
                            fontSize: "20px",
                            cursor: "pointer",
                            paddingRight: "10px",
                          }}
                          type="button"
                        >
                          <i class="bx bxs-edit"></i>
                        </button>
                        <button
                          type="button"
                          onClick={() => onDelete(product.id)}
                          style={{
                            background: "transparent",
                            border: "0",
                            color: "red",
                            fontSize: "20px",
                            cursor: "pointer",
                          }}
                        >
                          <i class="bx bxs-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Products;
