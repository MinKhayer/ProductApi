import { useEffect, useState } from "react";
import {Link, useNavigate } from 'react-router-dom';
import "./Home.css";

function Home() {
  let [productData, setProductData] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {

    let jwttoken = sessionStorage.getItem('jwttoken');
    if(jwttoken === '' || jwttoken === null)
    {
      navigate('/signin');
    }

    fetch("https://www.pqstec.com/InvoiceApps/values/GetProductListAll", {
      headers: {
        'Authorization': 'Bearer ' + jwttoken
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setProductData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

 
  let loadProduct = (id)=>
  {
      navigate("/product/"+id);
  }

  return (
    <div class="container">
      <div class="row">
        {productData &&
          productData.map((item) => (
            <div class="col-lg-4 col-md-6 col-sm-6" key={item.Id}>
              <div class="category mb-30">
                <div class="job">
                  <span class="colors1 mb-4">
                    Category: {item.CategoryName}
                  </span>
                  <p>Name: {item.Name}</p>
                  <ul class="place">
                    <li>
                      <p>
                        <i class="fas fa-map-marker-alt pe-2"></i> Color:{" "}
                        {item.ColorName}
                      </p>
                    </li>
                    <li>
                      <p class="ps-5">
                        <i class="fas fa-map-marker-alt pe-2"></i>BrandName:{" "}
                        {item.BrandName}
                      </p>
                    </li>
                  </ul>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="left">
                      <p>Price: {item.Price}</p>
                    </div>
                    <span class="time">
                      Total Purchase: {item.TotalPurchase}
                    </span>
                  </div>
                  <a onClick={()=>{loadProduct(item.Id)}} className="btn btn-secondary">Buy</a>
                </div>
               
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
