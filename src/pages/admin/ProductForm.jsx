import React from "react";
import { useForm } from "react-hook-form";
import { createProduct } from "../../api/productApi";
import FormCommon from "../../components/FormCommon";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../../validations/productSchema";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(productSchema) });

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      await createProduct(data);
      reset();
      toast.success("Add success!");
      navigate("/admin/products");
    } catch (error) {
      toast.error("Error adding product");
      console.error(error);
    }
  };

  return (
    <FormCommon handleSubmit={handleSubmit(onSubmit)}>
      <h2>Add Product</h2>
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
        <label className="form-label">Image</label>
        <input type="file" className="form-control" {...register("image")} />
        {errors.image && <p className="text-danger">{errors.image.message}</p>}
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
      <button className="btn btn-primary">Add Product</button>{" "}
      <Link className="btn btn-secondary" to={"/admin/products"}>
        Cancel
      </Link>
    </FormCommon>
  );
};

export default ProductForm;
