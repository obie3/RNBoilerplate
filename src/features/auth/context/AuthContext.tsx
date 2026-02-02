import React, { createContext, useContext, useState } from 'react';

const Ctx = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  return <Ctx.Provider value={{ user, setUser }}>{children}</Ctx.Provider>;
};

export const useAuth = () => useContext(Ctx);
