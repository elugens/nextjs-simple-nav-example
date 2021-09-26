// components/Layout.js
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className='flex flex-col h-screen'>
    <Header />
    <div className='bg-yellow-200'>{children}</div>
    <Footer />
  </div>
);

export default Layout;
