import React from 'react';

const ProductPage = () => {
    return <div>ProductPage</div>;
};

export default ProductPage;

// import { React } from 'react';
// import Product from '../components/Product/Product';
// import MyContext from '../MyContext';
// import Product from '../components/Product/Product';

// const ProductPage = () => {
//     const { productIdPage } = MyContext;
//     const singleProductFetch = async () => {
//         const productApi =
//             'https://fakestoreapi.com/products/' + { productIdPage };
//         try {
//             const response = await fetch(productApi);
//             const productData = await response.json();
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     useEffect(() => {
//         singleProductFetch();
//     }, []);

// return;
// <div>Not yet</div>;
// <>
//     <Product />
// </>;
// };

// export default ProductPage;
