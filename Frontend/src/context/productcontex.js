import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";
// import productData from "../assets/Data.json";
const AppContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

// const productData = await axios.get("http://localhost:5000/api/product/getall");
// console.log(productData);
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const productData = axios
  const [productData, setProductData] = useState([]);

  const getProducts = async (data) => {
    dispatch({ type: "SET_LOADING" });
    try {
      console.log(productData);
      dispatch({ type: "SET_API_DATA", payload: data });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product

  /*  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  }; */

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(
          "http://localhost:5000/api/product/getall"
        );
        console.log(data.data);
        setProductData(data.data);
        getProducts(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
