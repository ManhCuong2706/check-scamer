import { initScam, Scamer } from 'Models';
import { createContext, ReactNode, useState } from 'react';

// Create interface props

export interface ScamDetailProviderProps {
  children: ReactNode;
}

// Create Context
const ScamDetailContext = createContext<any>(initScam);
// Create provider function
const ScamDetailProvider = ({ children }: ScamDetailProviderProps) => {
  const [scamData, setScamData] = useState<Scamer[]>([]);

  // Set data when submit

  const onSubmit = (data: Scamer[]) => {
    console.log(data);
    setScamData(data);
  };
  console.log(scamData);

  // Value of provider
  const ctx = {
    scamData,
    onSubmit,
  };

  return (
    <ScamDetailContext.Provider value={ctx}>{children}</ScamDetailContext.Provider>
  );
};

export { ScamDetailProvider, ScamDetailContext };
