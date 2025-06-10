import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../../validations/productSchema";
import { getProductById, updateProduct } from "../../api/productApi";
import FormCommon from "../../components/FormCommon";
import { toast } from "react-toastify";

const ProductUpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(productSchema) });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        reset(data); // đổ dữ liệu vào form
      } catch (error) {
        toast.error("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, reset]);

  const onSubmit = async (formData) => {
    try {
      await updateProduct(id, formData);
      toast.success("Update success");
      navigate("/admin/products");
    } catch (error) {
      toast.error("Update failed");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <FormCommon handleSubmit={handleSubmit(onSubmit)}>
      <h2>Update Product</h2>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input className="form-control" {...register("title")} />
        {errors.title && <p className="text-danger">{errors.title.message}</p>}
      </div>
      <div className="mb-3">
        <label className="form-label">Brand</label>
        <input className="form-control" {...register("brand")} />
        {errors.brand && <p className="text-danger">{errors.brand.message}</p>}
      </div>
      <div className="mb-3">
        <select className="form-select" {...register("capacity")}>
          <option value="">Capacity</option>
          <option value="110">110ml</option>
          <option value="150">150ml</option>
        </select>
        {errors.capacity && (
          <p className="text-danger">{errors.capacity.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          className="form-control"
          type="number"
          {...register("price", { valueAsNumber: true })}
        />
        {errors.price && <p className="text-danger">{errors.price.message}</p>}
      </div>
      <div className="mb-3">
        <label className="form-label">Quantity</label>
        <input
          className="form-control"
          type="number"
          {...register("quantity", { valueAsNumber: true })}
        />
        {errors.quantity && (
          <p className="text-danger">{errors.quantity.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input className="form-control" {...register("description")} />
      </div>
      <button className="btn btn-primary">Update</button>
    </FormCommon>
  );
};

export default ProductUpdatePage;
