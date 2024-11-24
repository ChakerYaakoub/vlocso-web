// context/LoadingContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";
import Loader from "../components/Loader";

interface LoadingContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

// how to use it
// const { loading, setLoading } = useLoading();

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading ? <Loader /> : children}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
