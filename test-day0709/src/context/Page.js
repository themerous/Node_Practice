import React from 'react';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

const Page = () => {
    return (
        <div className='page'>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Page;