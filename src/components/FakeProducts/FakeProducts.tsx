import axios from "axios";
import { useState, useEffect } from "react";
import { FakeProductsTypes } from "../../types/FakeProducts.types";

export const FakeProducts = () => {
    // State to store the fetched data
    const [data, setData] = useState<FakeProductsTypes[]>([]);
  
    // Function to fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    // Call fetchData on component mount
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
        <>
        <div>
            <h2>Posts:</h2>
            <ul>
            {data.map((post) => (
                <li key={post.id}><input type="text" value={post.title} data-testid={post.title} /></li>
            ))}
            </ul>
        </div>
        </>
    );
  };