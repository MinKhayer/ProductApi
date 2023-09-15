import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';



function Order()
{
    let {productId} = useParams();
    let [productData, setProductData] = useState({});


  useEffect(() => {
    
    fetch("https://www.pqstec.com/InvoiceApps/values/GetProductListAll")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
      
        for(let i = 0; i < data.length; i++)
        {
            if(data[i].id === productId)
            {data = data[i]; break}      
        };
        //setProductData(data);
        console.log(data)
        const userData = {
          

      };
      fetch("https://localhost:7291/api/Order/AddOrder", {
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify(data)
      }).then((res)=>{
          alert('Account successfully Created!');
          //navigate('/');
      }).catch((err)=>{
          console.log(err.message);
      });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  console.log(productData);


    return (

        <p>Order Product</p>
    );
}

export default Order;