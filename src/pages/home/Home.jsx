import React from 'react';
import Banner from '../../components/ui/Banner';
import WhatWeDo from '../../components/ui/WhatWeDo';
import OurServices from '../../components/ui/OurServices';
import OurClients from '../../components/ui/OurClients';

const Home = () => {
    return (
        <div>
            <Banner />
            <WhatWeDo />
            <OurServices />
            <OurClients />
        </div>
    );
};

export default Home;