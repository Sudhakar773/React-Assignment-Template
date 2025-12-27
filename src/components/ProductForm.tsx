import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import type { Product } from "../Product";

interface Props {
  addOrEditProduct: (product: Product) => void;
  editProduct: Product | null;
}

const ProductForm: React.FC<Props> = ({ addOrEditProduct, editProduct }) => {
  const formik = useFormik<Product>({
    initialValues: {
      id: 0,
      name: "",
      price: "null" as unknown as number,
      category: "",
      stock: "null" as unknown as number,
      description: "",
      createdAt: new Date().toISOString(),
      isActive: false,
      tags: [],
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      price: Yup.number()
        .positive("Price must be greater than 0")
        .required("Price is required"),
      category: Yup.string().required("Category is required"),
      stock: Yup.number()
        .min(0, "Stock cannot be negative")
        .required("Stock is required")
    }),

    onSubmit: (values, { resetForm }) => {
      addOrEditProduct(values);
      resetForm();
    },
  });

  useEffect(() => {
    if (editProduct) {
      formik.setValues(editProduct);
    }
  }, [editProduct]);

  return (
    <form onSubmit={formik.handleSubmit} className="mb-4">
      <div className="row g-2 align-items-start">

        <div className="col-sm-3 col-md-2 col-lg-2">
          <input
            type="text"
            name="name"
            className={`form-control ${formik.touched.name && formik.errors.name ? "is-invalid" : ""
              }`}
            placeholder="Name*"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="invalid-feedback">{formik.errors.name}</div>
        </div>

        <div className="col-sm-3 col-md-2 col-lg-2">
          <input
            type="number"
            name="price"
            className={`form-control ${formik.touched.price && formik.errors.price ? "is-invalid" : ""
              }`}
            placeholder="Price*"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="invalid-feedback">{formik.errors.price}</div>
        </div>

        <div className="col-sm-3 col-md-2 col-lg-2">
          <input
            type="text"
            name="category"
            className={`form-control ${formik.touched.category && formik.errors.category ? "is-invalid" : ""
              }`}
            placeholder="Category*"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="invalid-feedback">{formik.errors.category}</div>
        </div>

        <div className="col-sm-3 col-md-2 col-lg-2">
          <input
            type="number"
            name="stock"
            className={`form-control ${formik.touched.stock && formik.errors.stock ? "is-invalid" : ""
              }`}
            placeholder="Stock*"
            value={formik.values.stock}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="invalid-feedback">{formik.errors.stock}</div>
        </div>
        <div className="form-check mt-3" style={{ maxWidth: "100px" }}>
          <input
            type="checkbox"
            className="form-check-input"
            id="isActive"
            name="isActive"
            checked={formik.values.isActive}
            onChange={formik.handleChange}
          />
          <label className="form-check-label" htmlFor="isActive">
            Status
          </label>
        </div>
        <div className="col-sm-4 col-md-3 col-lg-3">
          <input
            type="text"
            name="tags"
            className="form-control"
            placeholder="Tags (comma separated)"
            value={formik.values.tags.join(",")}
            onChange={(e) =>
              formik.setFieldValue(
                "tags",
                e.target.value.split(",").map((tag) => tag.trim())
              )
            }
          />
        </div>
        <div className="col-sm-3 col-md-2 col-lg-2">
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </div>


        <div className="col-sm-1 col-md-1 col-lg-1">
          <button type="submit" className="btn btn-primary">
            {editProduct ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;

