import Layout from '../../components/Layout';
import Link from 'next/link';

function ProductList({ productId = 20 }) {
  return (
    <Layout>
      <head>
        <title>Product List Page</title>
      </head>
      <div className='flex flex-col items-center justify-center h-screen text-3xl font-bold'>
        <Link href='/product/1'>
          <a>Product 1</a>
        </Link>
        <Link href='/product/2'>
          <a>Product 2</a>
        </Link>
        {/* the replace keyword changes browser history to the originating page */}
        <Link href='/product/3' replace>
          <a>Product 3</a>
        </Link>
        {/* dynamic binding using default prop above awesome */}
        <Link href={`/product/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      </div>
    </Layout>
  );
}

export default ProductList;
