"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ✅ Schema kiểm tra form
const schema = yup.object({
  productName: yup.string().required("Vui lòng nhập tên sản phẩm").max(100, "Tối đa 100 ký tự"),
  quantity: yup
    .number()
    .typeError("Số lượng phải là số")
    .positive("Số lượng phải lớn hơn 0")
    .required("Vui lòng nhập số lượng dự kiến mua"),
  address: yup.string().required("Vui lòng nhập địa chỉ giao hàng").max(100, "Tối đa 300 ký tự"),
  image: yup
    .mixed<FileList>()
    .nullable() // cho phép null
    .test("fileSize", "Ảnh quá lớn (tối đa 2MB)", (value) => {
      if (!value || value.length === 0) return true; // không có ảnh → hợp lệ
      return value[0].size <= 2 * 1024 * 1024;
    }),
});

export interface FormValues {
  productName: string;
  quantity: number;
  address: string;
  image: FileList;
}

interface ReusableFormProps {
  onSubmit: (data: FormValues) => Promise<void> | void;
  submitLabel?: string;
}

const ReusableForm: React.FC<ReusableFormProps> = ({
  onSubmit,
  submitLabel = "Gửi",
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(schema) as any,
  });

  // ✅ Lắng nghe thay đổi ảnh để preview
  const imageFile = watch("image");
  React.useEffect(() => {
    if (imageFile && imageFile.length > 0) {
      const file = imageFile[0];
      const url = URL.createObjectURL(file);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPreview(null);
    }
  }, [imageFile]);

  const handleFormSubmit = async (data: FormValues) => {
    await onSubmit(data);
    reset();
    setPreview(null);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="p-4 bg-white rounded-xl shadow-md w-full max-w-xs space-y-3"
    >
      <div>
        <input
          {...register("productName")}
          placeholder="Tên sản phẩm hoặc ảnh"
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-blue-500"
        />
        {errors.productName && (
          <p className="text-red-500 text-xs mt-1">
            {errors.productName.message}
          </p>
        )}
      </div>

      <div>
        <input
          {...register("quantity")}
          placeholder="Số lượng dự kiến mua"
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-blue-500"
        />
        {errors.quantity && (
          <p className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("address")}
          placeholder="Địa chỉ giao hàng (tỉnh/thành)"
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-blue-500"
        />
        {errors.address && (
          <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
        )}
      </div>

      {/* 🖼 Upload ảnh */}
      <div>
        <input
          type="file"
          accept="image/*"
          {...register("image")}
          className="w-full border rounded-md px-3 py-2 text-sm bg-gray-50 cursor-pointer"
        />
        {errors.image && (
          <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>
        )}
      </div>

      {/* 🖼 Preview ảnh */}
      {preview && (
        <div className="mt-2 flex justify-center">
          <img
            src={preview}
            alt="Preview"
            className="max-h-40 rounded-md border object-contain"
          />
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-semibold py-2 rounded-md transition ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {isSubmitting ? "Đang gửi..." : submitLabel}
      </button>
    </form>
  );
};

export default ReusableForm;
