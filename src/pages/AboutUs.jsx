import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'John Doe', role: 'CEO & Founder', image: 'https://placekitten.com/300/300', bio: 'With 15+ years of industry experience, John leads the team with passion and vision.' },
  { name: 'Jane Smith', role: 'Chief Marketing Officer', image: 'https://placekitten.com/300/301', bio: 'Jane’s innovative marketing strategies have driven 200% growth in customer engagement.' },
  { name: 'Sarah Lee', role: 'Lead Developer', image: 'https://placekitten.com/300/302', bio: 'Sarah leads the technical team and has developed state-of-the-art software solutions.' },
  { name: 'David Brown', role: 'UI/UX Designer', image: 'https://placekitten.com/300/303', bio: 'David crafts intuitive and elegant designs, ensuring smooth user experiences.' },
];

const testimonials = [
  { name: 'Client A', feedback: 'This company delivered beyond our expectations. The team was extremely professional and attentive to our needs.' },
  { name: 'Client B', feedback: 'Outstanding service! The team went above and beyond to make sure our project was a success.' },
  { name: 'Client C', feedback: 'Their innovative approach and attention to detail helped us scale our business like never before.' },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-500 text-white py-24 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden">
        <motion.h1
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-xl max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our journey is driven by a passion for innovation and a commitment to delivering outstanding services to our clients.
        </motion.p>
      </div>

      {/* Company History Section */}
      <div className="py-20 container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl font-bold mb-4" variants={fadeIn}>
            Our Story
          </motion.h2>
          <motion.p className="text-gray-600 max-w-2xl mx-auto mb-8" variants={fadeIn}>
            From a small startup to an industry leader, our story is one of growth, passion, and dedication.
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          <motion.div className="flex flex-col md:flex-row items-center" variants={fadeIn}>
            <div className="md:w-1/3">
              <img src="https://placekitten.com/600/400" alt="Company Origins" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-2/3 md:ml-8 mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold">Founded in 2010</h3>
              <p className="text-gray-600">
                What started as a small team in a garage has grown into a global enterprise, delivering cutting-edge solutions across multiple industries.
              </p>
            </div>
          </motion.div>

          <motion.div className="flex flex-col md:flex-row items-center" variants={fadeIn}>
            <div className="md:w-1/3">
              <img src="https://placekitten.com/602/402" alt="First Major Project" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-2/3 md:ml-8 mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold">First Major Project - 2015</h3>
              <p className="text-gray-600">
                In 2015, we delivered our first major project, which transformed our business and allowed us to expand our offerings globally.
              </p>
            </div>
          </motion.div>

          <motion.div className="flex flex-col md:flex-row items-center" variants={fadeIn}>
            <div className="md:w-1/3">
              <img src="https://placekitten.com/602/402" alt="Current Growth" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-2/3 md:ml-8 mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold">Leading the Industry in 2023</h3>
              <p className="text-gray-600">
                Today, we are a leader in our field, trusted by clients worldwide for our innovative solutions and unmatched expertise.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission, Vision, and Values Section */}
      <div className="py-24 container mx-auto px-6 md:px-12 lg:px-20 bg-gray-50">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl font-bold mb-4" variants={fadeIn}>
            Our Mission, Vision & Values
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="text-center p-6 bg-white rounded-lg shadow-lg" variants={fadeIn}>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To create innovative solutions that empower businesses to achieve their full potential.
            </p>
          </motion.div>

          <motion.div className="text-center p-6 bg-white rounded-lg shadow-lg" variants={fadeIn}>
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the go-to partner for businesses looking to leverage technology to gain a competitive edge.
            </p>
          </motion.div>

          <motion.div className="text-center p-6 bg-white rounded-lg shadow-lg" variants={fadeIn}>
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <p className="text-gray-600">
              Innovation, Integrity, and Excellence drive everything we do, ensuring the highest standards in every project.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 container mx-auto px-6 md:px-12 lg:px-20 bg-gray-50 rounded-lg shadow-md">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              <h4 className="text-right text-gray-800 font-bold mt-4">- {testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-red-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
        <p className="mb-8">Get in touch with us today and let’s turn your vision into reality.</p>
        <a href="/contact" className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
