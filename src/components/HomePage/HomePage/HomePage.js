import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import Blog from '../Blog/Blog';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import NavBarTwo from '../NavBarTwo/NavBarTwo';
import VisitorsCount from '../VisitorsCount/VisitorsCount';

const HomePage = () => {
    return (
        <div>
           <NavBarTwo/>
           <BannerSection/>
           <FAQ/>
           <Blog/>
           <VisitorsCount/>
           <Footer/>
        </div>
    );
};

export default HomePage;