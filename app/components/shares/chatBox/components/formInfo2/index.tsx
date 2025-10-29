"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ✅ Schema kiểm tra form
const schema = yup.object({
    name: yup.string().required("Yêu cầu nhập tên!").max(100, "Tối đa 100 ký tự"),
    message: yup.string().required("Nội dung trống!").max(300, "Tối đa 300 ký tự"),
});

export interface FormValues {
  name: string;
  message: string;
}

interface ReusableFormProps {
  onSubmit: (data: FormValues) => Promise<void> | void;
  submitLabel?: string;
}

const ReusableForm2: React.FC<ReusableFormProps> = ({
  onSubmit,
  submitLabel = "Gửi",
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (data: FormValues) => {
    await onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="p-4 bg-white rounded-xl shadow-md w-full max-w-xs space-y-3"
    >
      <div>
        <input
          {...register("name")}
          placeholder="Tên bạn / cty"
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-blue-500"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">
            {errors.name.message}
          </p>
        )}
      </div>
      <div>
        <input
          {...register("message")}
          placeholder="Tên bạn / cty"
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-blue-500"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

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

export default ReusableForm2;
