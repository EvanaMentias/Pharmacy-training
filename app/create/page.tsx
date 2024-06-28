"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const Create = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.price || !formData.description) {
      setError("Please fill in all details");

      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: `{
        "title":"${formData.title}",
        "price": ${formData.price},
        "description": "${formData.description}"
    
        }`,
      });

      if (!response.ok) {
        throw new Error("Failed to create new produ");
      }
      router.push("/shop");
    } catch (error) {
      setError("Something went wrong, please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="pt-64 bg-[url('/background.svg')] bg-cover w-full">
        <div className="pb-36">
          <div className="max-w-7xl mx-auto text-slate-800 bg-white  rounded-3xl pb-20 ">
            <header className="p-6 border-b flex justify-between bg-sky-200 rounded-3xl">
              <Link
                className=" text-2xl font-bold text-neeviBlue"
                href={"/shop"}
              >
                Super Health shop
              </Link>

              <Link
                className="bg-slate-100 grid place-items-center py-2 px-4 rounded-full font-bold shadow-md text-neeviBlue"
                href={"/shop"}
              >
                Back to products
              </Link>
            </header>
            <div className="mx-4">
              <h2 className="text-2xl text-neeviBlue font-bold my-8">
                Add New Product
              </h2>
              <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input
                  className="py-1 px-4 border rounded-md"
                  name="title"
                  placeholder="Product name "
                  type="text"
                  value={formData.title}
                  onChange={handleInputChange}
                />
                <input
                  className="py-1 px-4 border rounded-md"
                  name="price"
                  placeholder="Price "
                  type="number"
                  value={formData.price}
                  onChange={handleInputChange}
                />
                <textarea
                  className=" py-1 px-4 border rounded-md resize-none"
                  name="description"
                  placeholder="Description"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                />
                <button
                  className="bg-neeviBlue text-white mt-8 px-4 py-3 rounded-lg cursor-pointer"
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? "Adding..." : "Add to products"}
                </button>
              </form>
              {error && <p className="mtb-4 text-red-500">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
