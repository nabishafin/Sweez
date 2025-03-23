import React from 'react';
import Marquee from 'react-fast-marquee'; // Import the Marquee component

function OurClients() {
    const clients = [
        { name: 'Pinterest', icon: null, image: 'https://i.ibb.co.com/v4ySJCbD/Pinterest-Logo.png' },
        { name: 'Behance', icon: null, image: 'https://i.ibb.co.com/GQZfyxRr/Behance.png' },
        { name: 'IWC', icon: null, image: 'https://i.ibb.co.com/W4qDKmrT/iwc.png' },
        { name: 'SPACEX', icon: null, image: 'https://i.ibb.co.com/cXcTmMVw/spece-logo.png' },
        { name: 'Dropbox', icon: null, image: 'https://i.ibb.co.com/GQsPP1f4/Dropbox.png' },
        { name: 'Plant', icon: null, image: 'https://i.ibb.co.com/LX44b1Wt/plant.png' },
        { name: 'Pinterest', icon: null, image: 'https://i.ibb.co.com/v4ySJCbD/Pinterest-Logo.png' },
        { name: 'Behance', icon: null, image: 'https://i.ibb.co.com/GQZfyxRr/Behance.png' },
        { name: 'IWC', icon: null, image: 'https://i.ibb.co.com/W4qDKmrT/iwc.png' },
        { name: 'SPACEX', icon: null, image: 'https://i.ibb.co.com/cXcTmMVw/spece-logo.png' },
        { name: 'Dropbox', icon: null, image: 'https://i.ibb.co.com/GQsPP1f4/Dropbox.png' },
        { name: 'Plant', icon: null, image: 'https://i.ibb.co.com/LX44b1Wt/plant.png' },
    ];

    return (
        <section className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-16 border-t border-b border-gray-200 dark:border-gray-700 shadow-lg ">
            <div className="container mx-auto text-center px-4 ">
                {/* Section Heading */}
                <h5 className="text-sm md:text-base text-blue-500 dark:text-blue-400 uppercase tracking-widest mb-2">
                    OUR CLIENTS
                </h5>

                {/* Title */}
                <p className="text-2xl md:text-3xl font-bold mb-4 dark:text-white py-10">
                    Trusted by over <span className="text-blue-500">786+</span> clients.
                </p>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-8 text-sm md:text-base max-w-2xl mx-auto">
                    Our clients are our top priority, and we are committed to providing them with the highest level of service.
                </p>

                {/* Client Logos Marquee */}
                <Marquee
                    gradient={true} // Gradient effect enable
                    gradientColor={[255, 255, 255]} // Gradient color (RGB)
                    gradientWidth={100} // Gradient width
                    speed={80} // Speed of the marquee
                    direction="right" // Direction of the marquee
                    pauseOnHover={true} // Pause on hover
                    style={{ padding: '20px 0' }} // Custom style for the marquee wrapper
                >
                    <div className="flex items-center space-x-8">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-700 p-4 md:p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                {client.icon ? (
                                    <span className="text-3xl md:text-4xl text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors" aria-label={client.name}>
                                        {client.icon}
                                    </span>
                                ) : client.image ? (
                                    <img
                                        src={client.image}
                                        alt={client.name}
                                        className="max-h-10 md:max-h-12 hover:opacity-80 transition-opacity"
                                        loading="lazy"
                                    />
                                ) : (
                                    <span className="text-gray-700 dark:text-gray-200 font-medium">{client.name}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
}

export default OurClients;