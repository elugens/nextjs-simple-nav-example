// pages/index.js

import Layout from '../components/Layout';

const PageNotFound = () => {
  console.log('page not found');
  return (
    <Layout>
      <div className='text-center'>
        <p className='h-screen text-3xl font-extrabold  py-60'>404 PAGE</p>
      </div>
    </Layout>
  );
};

export default PageNotFound;
