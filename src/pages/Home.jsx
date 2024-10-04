import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCode, FaMobileAlt, FaPalette, FaBullhorn, FaLightbulb, FaUsers, FaTrophy, FaQuoteLeft } from 'react-icons/fa';


const features = [
    {
      title: "Cutting-Edge Technology",
      description: "We utilize the latest technologies and tools to provide innovative solutions that keep you ahead of the curve.",
      image: 'CuttingEdge.jpg',
    },
    {
      title: "Seamless User Experience",
      description: "Our products are designed with the end-user in mind, ensuring an intuitive and seamless experience across all platforms.",
      image: '/UI.jpg',
    },
    {
      title: "24/7 Customer Support",
      description: "We provide round-the-clock support to ensure that your business never misses a beat, no matter the time or place.",
      image: '/Customer_care.png',
    },
  ];

const testimonials = [
    {
        name: "Jose Alejandro",
        role: "CEO, Example Corp",
        feedback: "Orion QA exceeded our highest expectations. From the initial consultation to project delivery, the team’s professionalism and dedication were evident. Their ability to truly understand our needs and deliver a tailored solution set them apart from the competition. We couldn’t have asked for a better partner.",
        image: "/client3.jpg", // You can replace it with a real image or avatar from a URL.
    },
    {
        name: "Mary Shallet",
        role: "CTO, Tech Innovators",
        feedback: "The level of service we received was exceptional. Orion QA didn’t just complete the project—they became an integral part of our team. Their commitment to our success was unmatched, and they went the extra mile at every turn to ensure we achieved our goals. Truly outstanding.",
        image: "/client1.png",
    },
    {
        name: "Adrián Meza",
        role: "Marketing Head, Creative Solutions",
        feedback: "Orion QA’s innovative approach transformed our business. Their keen attention to detail and forward-thinking strategies allowed us to scale at a pace we never thought possible. If you’re looking for a partner who delivers real impact, Orion QA is the answer.",
        image: "/client2.jpg",
    },
    {
        name: "Mily Gavidia Villacres",
        role: "Marketing Head, Creative Solutions",
        feedback: "Working with Orion QA was a game changer for us. Their technical expertise and proactive approach to solving challenges made a significant impact on our project’s success. They consistently delivered high-quality work, ahead of schedule, and with unmatched precision.",
        image: "/client4.jpg",
    },
];

const Home = () => {

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            title: "Welcome to Orion",
            subtitle: "Empowering Innovation and Excellence.",
            description: "At Orion, we drive innovation and deliver excellence in every project. Join us in transforming ideas into reality.",
            image: "/bg1.png",
            details: "Our vision is to create impactful solutions that resonate with our clients' goals.",
            path:"/about"
        },
        {
            title: "Discover Our Services",
            subtitle: "Tailored solutions for your needs.",
            description: "Explore our wide range of services designed to meet your unique needs and propel your business forward.",
            image: "/bg2.jpg",
            details: "From design to launch, we provide comprehensive support at every stage.",
            path:"/Services"
        },
        {
            title: "Join Our Community",
            subtitle: "Be part of something great.",
            description: "Connect with like-minded individuals and be part of a thriving community focused on growth and success.",
            image: "/team.jpg",
            details: "Engage with experts and enthusiasts who share your passion.",
            path:"/about"
        },
        {
            title: "Your Success is Our Goal",
            subtitle: "Committed to your growth.",
            description: "Our dedicated team is here to ensure your projects succeed and your vision becomes reality.",
            image: "/Goal.jpg",
            details: "With a focus on results, we aim to exceed your expectations.",
            path:"/about"
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const services = [
        {
            title: "Web Development",
            description: "Building responsive and modern websites tailored to your needs.",
            icon: <FaCode className="w-16 h-16 mb-4 mx-auto text-blue-500" />,
        },
        {
            title: "Mobile Development",
            description: "Creating seamless mobile applications for iOS and Android.",
            icon: <FaMobileAlt className="w-16 h-16 mb-4 mx-auto text-green-500" />,
        },
        {
            title: "UI/UX Design",
            description: "Designing intuitive interfaces for a better user experience.",
            icon: <FaPalette className="w-16 h-16 mb-4 mx-auto text-purple-500" />,
        },
        {
            title: "Digital Marketing",
            description: "Strategies to enhance your online presence and engagement.",
            icon: <FaBullhorn className="w-16 h-16 mb-4 mx-auto text-red-500" />,
        },
    ];

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 10000); // Auto slide every 5 seconds
        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div>
            <div className="relative md:h-[82vh] h-[90vh] overflow-hidden flex">
                {/* Full Width Carousel Images */}
                <motion.div
                    className="w-full h-full absolute"
                    key={currentIndex} // Ensure it re-renders on index change
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }} // Add exit animation
                    transition={{ duration: 0.8 }} // Smooth transition
                >
                    <motion.img
                        src={slides[currentIndex].image}
                        alt={slides[currentIndex].title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Slanted Background */}
                <div className="absolute inset-0 bg-gray-600 border-x-4 transform skew-x-[-20deg] translate-x-[50%] h-full"></div>

                {/* Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Text Content */}
                <div className="relative z-10 flex flex-col items-start justify-center h-full ml-2 p-8 text-white w-2/3">
                    <motion.h1
                        className="text-5xl font-bold"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }} // Exit animation for smoother transition
                        transition={{ duration: 0.5 }}
                    >
                        {slides[currentIndex].title}
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }} // Exit animation
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {slides[currentIndex].subtitle}
                    </motion.p>
                    <motion.p
                        className="mt-2 text-sm w-[70%]"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }} // Exit animation
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {slides[currentIndex].description}
                    </motion.p>
                    <motion.p
                        className="mt-2 text-sm w-[70%] opacity-75"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }} // Exit animation
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        {slides[currentIndex].details}
                    </motion.p>
                   <a href={slides[currentIndex].path}>
                   <motion.button
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition duration-300"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }} // Exit animation
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        Learn More
                    </motion.button>
                    </a>
                </div>

                {/* Stylish Breakdown List on the Right */}
                <div className="relative z-10 flex md:flex-col text-xl bg-white/5 pl-5 justify-start md:w-[50%] items-end h-full py-12">
                    <div className="flex flex-col w-full items-start space-y-8">
                        {['Vision', 'Design', 'Community', 'Our Goal'].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center w-full border-b space-x-3 cursor-pointer"
                                onClick={() => goToSlide(index)} // Clickable item to navigate
                            >
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                <motion.div
                                    className="text-white w-full"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }} // Exit animation
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <h4 className="font-semibold">{item}</h4>
                                    <p className="text-sm opacity-70">Description of {item.toLowerCase()} process.</p>
                                </motion.div>
                                {/* Show line based on currentIndex */}
                                {index < 4 && currentIndex === index && (
                                    <div className="h-16 w-2 bg-white opacity-70"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="absolute bottom-4 left-[35%] transform -translate-x-1/2 flex space-x-4 z-10">
                    {/*<button
                        onClick={prevSlide}
                        className="bg-gray-800/65 text-white p-3 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
                    >
                        Prev
                    </button>
                    <button
                        onClick={nextSlide}
                        className="bg-gray-800/65 text-white p-3 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
                    >
                        Next
                    </button>*/}
                </div>

                {/* Dots for Slide Indicator */}
                <div className="absolute bottom-20 left-[35%] transform -translate-x-1/2 flex space-x-2 z-10">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer transition duration-300 ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                        />
                    ))}
                </div>
            </div>
            <div className="py-28 px-12 bg-white text-start">
                <div className="container mx-auto">
                    <h2 className="text-5xl font-bold mb-6">About Us</h2>
                    <p className="text-lg text-gray-700  mx-auto mb-12">
                        Orion is a forward-thinking company dedicated to driving innovation and excellence. Our mission is to empower businesses and individuals through cutting-edge solutions, groundbreaking technology, and exceptional service.
                        We believe that by working together, we can achieve extraordinary results.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
                            <FaLightbulb className="text-red-500 text-4xl mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
                            <p className="text-gray-600">
                                We constantly seek out new and inventive ways to solve challenges, harnessing the latest technologies to bring your vision to life.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
                            <FaUsers className="text-green-500 text-4xl mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-2">Collaboration</h3>
                            <p className="text-gray-600">
                                Our team works hand-in-hand with our clients to ensure that every project reflects their unique needs and values.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
                            <FaTrophy className="text-blue-500 text-4xl mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-2">Excellence</h3>
                            <p className="text-gray-600">
                                We strive for perfection in everything we do, delivering top-tier results that exceed expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="py-20 bg-gray-100">
                    <div className="container px-5 mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-16">Our Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                    <a href="/Services">{service.icon}
                                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                    <p className="text-gray-700">{service.description}</p></a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section>
            <div className="py-24 bg-red-800/85 px-5 text-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl font-bold text-center mb-12">Key Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img src={feature.image} alt={feature.title} className="mb-6 rounded-lg shadow-lg w-full h-64 object-cover" />
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
            </section>
            <section>
                <div className="py-16 bg-gray-50 text-center">
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>

                        <div className="relative w-full md:w-2/3 lg:w-1/2 mx-auto">
                            {/* Testimonial Quote */}
                            <motion.div
                                key={currentTestimonial}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-8 rounded-lg shadow-lg"
                            >
                                <FaQuoteLeft className="text-3xl text-gray-300 mb-4" />
                                <p className="text-lg italic text-gray-700 mb-4">
                                    "{testimonials[currentTestimonial].feedback}"
                                </p>
                                <div className="flex justify-center items-center space-x-4">
                                    <img
                                        src={testimonials[currentTestimonial].image}
                                        alt={testimonials[currentTestimonial].name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div className="text-left">
                                        <h4 className="text-xl font-semibold">
                                            {testimonials[currentTestimonial].name}
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            {testimonials[currentTestimonial].role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Navigation Arrows */}
                            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                                <button onClick={prevTestimonial} className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-300">
                                    &lt;
                                </button>
                            </div>
                            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                                <button onClick={nextTestimonial} className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-300">
                                    &gt;
                                </button>
                            </div>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {testimonials.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full cursor-pointer transition duration-300 ${currentTestimonial === index ? 'bg-blue-500' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
