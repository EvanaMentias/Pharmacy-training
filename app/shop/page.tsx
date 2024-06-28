"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}
const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: { products: Product[] } = await response.json();

        setProducts(data.products);
      } catch (error) {
        setError("Failed to load product, please try again");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const handleDelete = async (id: number) => {
    try {
      await fetch(`api/products/${id}`, { method: "DELETE" });
      setProducts((prevProducts) => prevProducts?.filter((i) => i.id !== id));
    } catch (error) {
      setError("Failed to delete product.");
    }
  };

  return (
    <div>
      {error && <p className="py-4 text-red-500">{error}</p>}
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
                href={"/create"}
              >
                Add New
              </Link>
            </header>

            <div className="flex flex-col">
              {isLoading ? (
                <p>Loading Products...</p>
              ) : products?.length > 0 ? (
                <div>
                  {products?.map((product) => (
                    <div
                      key={product.id}
                      className="p-4 my-2 rounded-md border-b leading-8"
                    >
                      <div className="font-bold text-2xl">{product.title}</div>
                      <div>
                        <span className="font-bold">price</span> : ${" "}
                        {product.price}
                      </div>
                      <div>
                        <span className="font-bold">Description</span> :
                        {product.description}
                      </div>
                      <div className="flex gap-4 mt-4 justify-end">
                        <Link
                          className="bg-slate-200 px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest"
                          href={`/edit/${product.id}`}
                        >
                          Edit
                        </Link>
                        <div>
                          <Button
                            className="bg-red-500 text-white px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest"
                            onPress={onOpen}
                          >
                            Delete
                          </Button>
                          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                            <ModalContent>
                              {(onClose) => (
                                <>
                                  <ModalHeader className="flex flex-col gap-1">
                                    Attention!!
                                  </ModalHeader>
                                  <ModalBody>
                                    <p>
                                      Are you sure that you want to delete this
                                      product?!
                                    </p>
                                  </ModalBody>
                                  <ModalFooter>
                                    <Button
                                      color="danger"
                                      variant="light"
                                      onPress={onClose}
                                    >
                                      Cancle
                                    </Button>
                                    <Button
                                      color="primary"
                                      onPress={() => {
                                        handleDelete(product.id);
                                        onClose();
                                      }}
                                    >
                                      Delete
                                    </Button>
                                  </ModalFooter>
                                </>
                              )}
                            </ModalContent>
                          </Modal>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="m-5 text-xl">No Products found!!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
