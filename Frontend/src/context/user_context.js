import { useState } from "react";
import { createContext, useContext, useReducer, useEffect } from "react";

const UserContext = createContext();

const initialState = {
  userId: localStorage.getItem("userId"),
};

export const UserProvider = ({ children }) => {
  //const [state, dispatch] = useReducer(userReducer, initialState);
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [profile, setProfile] = useState("");

  return (
    <UserContext.Provider value={{ userId, setUserId, profile, setProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
