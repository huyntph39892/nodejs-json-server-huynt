import React from "react";
import { Link } from "react-router-dom";
import useFetchList from "../../hooks/useFetchList";
import { deleteProduct } from "../../api/productApi";
import { toast } from "react-toastify";

const ProductListPage = () => {
  const [list, loading, error, refetch] = useFetchList();

  const handleDelete = async (id) => {
    if (!confirm("Xoa nhe?")) return;
    try {
      await deleteProduct(id);
      toast.success("Deleted successfully");
      refetch();
    } catch (error) {
      toast.success("Delete failed");
      console.error(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">Error: {error}</p>;

  return (
    <div>
      <h1>Product Management</h1>
      <Link to="add" className="btn btn-primary mb-3">
        Add Product
      </Link>
      <table className="table table-bordered table-striped text-center">
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Image</th>
            <th>Brand</th>
            <th>Capacity</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <Link
                  className="text-decoration-none text-black"
                  to={`${item.id}`}
                >
                  {item.title}
                </Link>
              </td>
              <td>{item.image}</td>
              <td>{item.brand}</td>
              <td>{item.capacity}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.description}</td>
              <td>
                <button
                  className="btn btn-danger me-2"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
                <button className="btn btn-warning me-2">
                  <Link
                    className="text-decoration-none text-white"
                    to={`edit/${item.id}`}
                  >
                    Update
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListPage;
