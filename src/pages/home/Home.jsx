import React from 'react';
import Banner from '../../components/ui/Banner';
import WhatWeDo from '../../components/ui/WhatWeDo';
import OurServices from '../../components/ui/OurServices';
import OurClients from '../../components/ui/OurClients';
import TechStacks from '../../components/ui/TechStacks';
import PartnerSection from '../../components/ui/PartnerSection';
import ContactSection from '../../components/ui/ContactSection';
import StatsSection from '../../components/ui/StatsSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <StatsSection />
            <WhatWeDo />
            <OurServices />
            <OurClients />
            {/* <TechStacks />  jodi Add korar proyjon lage */}
            <PartnerSection />
            <ContactSection />
        </div>
    );
};

export default Home;