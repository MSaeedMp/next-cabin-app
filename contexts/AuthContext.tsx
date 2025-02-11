import { createContext, useState } from "react";

type AuthContextType = {
  showAuth: boolean;
  setShowAuth: React.Dispatch<React.SetStateAction<boolean>>;
  closeAuth: () => void;
  openAuth: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [showAuth, setShowAuth] = useState(false);
  const closeAuth = () => setShowAuth(false);
  const openAuth = () => setShowAuth(true);

  const value = {
    showAuth,
    setShowAuth,
    closeAuth,
    openAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
