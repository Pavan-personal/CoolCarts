// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// export default function data() {
//   const filterFactor = useSelector((state) => state.filter)
//   const [info, setInfo] = useState([]);
//   useEffect(() => {
//     async function getData() {
//       fetch("https://fakestoreapi.com/products")
//         .then((result) => result.json())
//         .then((result) => {
//           filterFactor === "All Categories"
//             ? ""
//             : (result = result.filter((item) => {
//                 item.category == filterFactor
//               }))
//               setInfo(result)
//             })
//     }
//     getData()
//   }, [filterFactor])
  
//   return info;
// }
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Data() {
  const filterFactor = useSelector((state) => state.filter);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        
        let filteredResult = result;
        if (filterFactor !== "All categories") {
          filteredResult = result.filter((item) => item.category === filterFactor);
        }
        setInfo(filteredResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, [filterFactor]);
  
  return info;
}
