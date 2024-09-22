import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: `Our web development service encompasses everything from creating fast, responsive websites to 
                  building complex web applications. We utilize cutting-edge technologies like React, Next.js, 
                  and Node.js to ensure that your site is secure, scalable, and optimized for SEO. Whether you 
                  need an eCommerce platform, a personal portfolio, or a bespoke web solution, we’ll make sure 
                  your vision becomes a reality.`,
  },
  {
    title: 'Mobile App Development',
    description: `We craft intuitive, high-performing mobile apps for both iOS and Android platforms. Using tools 
                  like React Native and Flutter, our team ensures that your mobile app provides seamless functionality 
                  and an engaging user experience. Whether you're building a startup application or extending your 
                  existing service to mobile, we've got you covered.`,
  },
  {
    title: 'UI/UX Design',
    description: `Our design-first approach ensures that your users have an intuitive and enjoyable experience across 
                  all devices. We combine research, wireframing, and high-fidelity design to create stunning interfaces 
                  that increase user engagement and conversions. From website redesigns to mobile app interfaces, we 
                  deliver designs that truly connect with your audience.`,
  },
  {
    title: 'Digital Marketing & SEO',
    description: `With our data-driven digital marketing strategies, we help your business stand out in a crowded 
                  market. Our services include SEO, PPC advertising, social media management, and content marketing. 
                  We tailor campaigns to your needs, driving traffic to your website and increasing your online visibility.`,
  },
  {
    title: 'Cloud Solutions',
    description: `We offer comprehensive cloud computing solutions, including cloud migration, management, and consulting. 
                  Whether you're looking to move to AWS, Azure, or Google Cloud, our experts ensure a smooth transition, 
                  optimizing for security, scalability, and performance.`,
  },
  {
    title: 'E-commerce Solutions',
    description: `Looking to sell online? Our e-commerce solutions range from building Shopify or WooCommerce stores 
                  to fully custom platforms tailored to your brand. We'll handle everything from product management 
                  to payment gateways, ensuring a seamless experience for both you and your customers.`,
  },
  {
    title: 'DevOps & Automation',
    description: `Streamline your software development lifecycle with our DevOps services. From CI/CD pipelines to 
                  infrastructure automation, we help you speed up deployment times, increase reliability, and reduce 
                  downtime with modern tools like Docker, Kubernetes, and Jenkins.`,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Services = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16 text-center">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-lg mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore a range of professional services designed to meet your business needs. We ensure every solution we 
          provide is tailored to help you achieve your goals.
        </motion.p>
      </div>

      {/* Services List */}
      <div className="py-16 container mx-auto px-6 md:px-12 lg:px-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              {service.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
