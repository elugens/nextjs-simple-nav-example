import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

// this is an implementation of a dynamic route
// List detail pattern

// You can see an more examples of nested
// dynamic routes and catchall routes on youtube

// source:
// https://www.youtube.com/watch?v=nfAxNTmme64&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=8
// https://www.youtube.com/watch?v=ZHn726VDoIY&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=9

function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <Layout>
      <head>
        <title>Product Number - {productId}</title>
      </head>
      <div className='flex items-center justify-center flex-grow h-screen text-3xl font-bold'>
        <h1>Details about product {productId}</h1>
      </div>
    </Layout>
  );
}

export default ProductDetail;
