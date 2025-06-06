import React from "react";
import { useForm } from "react-hook-form";
import { createProduct } from "../../api/productApi";
import FormCommon from "../../components/FormCommon";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../../validations/productSchema";
import { toast } from "react-toastify";
import { Link } from "react-router";

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(productSchema) });

  const onSubmit = async (data) => {
    try {
      await createProduct(data);
      reset("/admin/products");
      toast.success("Add success!");
    } catch (error) {
      toast.success("Error adding product");
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
        <label className="form-label">Price</label>
        <input
          className="form-control"
          type="number"
          {...register("price", { valueAsNumber: true })}
        />
        {errors.price && <p className="text-danger">{errors.price.message}</p>}
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
