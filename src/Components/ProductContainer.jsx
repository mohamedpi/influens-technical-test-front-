import React,{useState,useEffect} from "react"
import { connect } from "react-redux";
import axios from "axios"
import "./ProductContainer.scss"
import ProductCard from "./ProductCard"
import Loader from "react-loader-spinner";


function ProdcutContainer(props)
{
  const [data,setData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>{
      const fetchData = async ()=>{
        setIsLoading(true);
      const result = await axios("http://localhost:5000/display_products");
      setData(result.data.response)
      setIsLoading(false);
    }
    fetchData()
  },[data])
   return(
      <div className="products_container"> 
      
   
        {data
        .filter((product) =>
        (  product.title.toLowerCase().includes(props.filtredTitle.toLowerCase()) 
        )
        )
        .map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
   )
}
const mapStateProps = (state) => ({
    filtredTitle: state.filtredTitle,
    productList:state.productList,
  });


export default connect(mapStateProps)(ProdcutContainer)