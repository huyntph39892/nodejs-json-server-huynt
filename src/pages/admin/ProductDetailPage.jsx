import { Link, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { getProductById } from "../../api/productApi";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        alert("Không tìm thấy sản phẩm");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Đang tải...</p>;
  if (!product) return <p>Không tìm thấy sản phẩm</p>;
  return (
    <div className="p-3">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-primary">
        <Link
          to={"/admin/products"}
          className="text-white text-decoration-none"
        >
          Back
        </Link>
      </button>
    </div>
  );
};

export default ProductDetailPage;
