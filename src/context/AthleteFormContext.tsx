import React, { createContext, useContext, useState } from "react";

interface AthleteValues {
  athlete: string;
  bday: string;
  weight: string;
  height: string;
  sex: string;
  about_athlete: string;
}

const defaultValues: AthleteValues = {
  athlete: "",
  bday: "",
  weight: "",
  height: "",
  sex: "",
  about_athlete: "",
};

const AthleteFormContext = createContext<{
  values: AthleteValues;
  updateValues: (v: Partial<AthleteValues>) => void;
} | null>(null);

export const AthleteFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [values, setValues] = useState(defaultValues);

  const updateValues = (v: Partial<AthleteValues>) => {
    setValues((prev) => ({
      ...prev,
      ...v,
    }));
  };

  return (
    <AthleteFormContext.Provider value={{ values, updateValues }}>
      {children}
    </AthleteFormContext.Provider>
  );
};

export const useAthleteForm = () => {
  const ctx = useContext(AthleteFormContext);
  if (!ctx) {
    throw new Error("useAthleteForm must be used within AthleteFormProvider");
  }
  return ctx;
};

