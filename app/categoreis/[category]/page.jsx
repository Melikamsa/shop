// "use client";
// // import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";

// function Category() {
//   const params = useParams();
//   const [categoryData, setCategoryData] = useState([]);

//   useEffect(() => {
//     fetch("https://6638e1b44253a866a24f88d2.mockapi.io/products")
//       .then((Response) => Response.json())
//       .then((Result) => setCategoryData(Result))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <>
//       <div>
//         {console.log(
//           categoryData.filter((data) => {
//             data.category === params.category;
//           })
//         )}
//       </div>
//     </>
//   );
// }

// export default Category;
