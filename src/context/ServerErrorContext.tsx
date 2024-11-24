// context/ServerErrorContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";
import ServerError500 from "../components/ServerError500/ServerError500";

interface ServerErrorContextType {
  error: string | null;
  setError: (error: string | null) => void;
}

// how to use it
// const { error, setError } = useServerError();

const ServerErrorContext = createContext<ServerErrorContextType | undefined>(
  undefined
);

export const ServerErrorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [error, setError] = useState<string | null>(null);

  return (
    <ServerErrorContext.Provider value={{ error, setError }}>
      {error && <ServerError500 />}
      {children}
    </ServerErrorContext.Provider>
  );
};

export const useServerError = (): ServerErrorContextType => {
  const context = useContext(ServerErrorContext);
  if (context === undefined) {
    throw new Error("useServerError must be used within a ServerErrorProvider");
  }
  return context;
};
