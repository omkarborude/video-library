import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "./dataReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialValue = {
    videoList: [],
    searchValue: "",
    likedVideos: [],
    history: [],
    playlist: [],
    toastMsg: "",
    categoryFilter: "All videos",
    toast: {
      value: false,
      message: "",
    },
  };

  const [state, dispatch] = useReducer(dataReducer, initialValue);
  console.log(state);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
