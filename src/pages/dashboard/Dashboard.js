import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/product/productList/ProductList";
//import ProductSummary from "../../components/product/productSummary/ProductSummary";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { getProducts } from "../../redux/features/product/productSlice";
import ProductSummary from "../../components/product/productSummary/ProductSummary";

const Dashboard = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  // Bringing single state from Redux   Vs
  const isLoggedIn = useSelector(selectIsLoggedIn)
  // distructure all state properties from rudux state
  const {products, isLoading, isError, message} = useSelector((state)=> state.product)

  useEffect(()=>{
    if(isLoggedIn === true){
      dispatch(getProducts())
    }

   
    
    if(isError){
      console.log(message);
      
    }
  },[isLoggedIn, isError, message, dispatch])

  return (
    <div>
     <h2>Welcome To Dashboard</h2>
     <ProductSummary products={products} />
     <ProductList products={products} isLoading={isLoading} />
    </div>
  );
};

export default Dashboard;
