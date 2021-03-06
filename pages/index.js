// pages/index.js

import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <head>
      <title>Home Page</title>
    </head>
    <div className='flex items-center justify-center flex-grow h-screen'>
      <p className='text-4xl font-extrabold'>Home Page</p>
    </div>
  </Layout>
);

export default Index;
