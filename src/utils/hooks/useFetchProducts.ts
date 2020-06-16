import { useState, useEffect } from "react";
import { api } from "../services/api";
import { TypeOfProdutos } from "../../types/data";

export const useFetchProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [catalogOfProducts, setCatalogOfProducts] = useState<TypeOfProdutos[]>(
    []
  );

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await api.get("catalog");
        console.log(response);
        const productsTyped: TypeOfProdutos[] = response.data;
        setCatalogOfProducts(productsTyped);
        setIsLoading(false);
      } catch (err) {}
    };
    loadProducts();
  }, []);

  return {
    getProducts: {
      isLoading,
      catalogOfProducts,
    },
  };
};
