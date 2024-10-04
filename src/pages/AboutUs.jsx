import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Marco Antonio Sanche', role: 'CEO & Founder', image: '/1.svg', bio: 'With 15+ years of industry experience, Marco leads the team with passion and vision.' },
  { name: 'Sandy Anderson Ketron', role: 'Chief Marketing Officer', image: '/2.svg', bio: 'Sandy’s innovative marketing strategies have driven 200% growth in customer engagement.' },
  { name: 'Ronnie Borden', role: 'UI/UX Designer', image: '/4.svg', bio: 'Ronnie crafts intuitive and elegant designs, ensuring smooth user experiences.' },
  { name: 'Donna Baker', role: 'Lead Developer', image: '/3.svg', bio: 'Donna leads the technical team and has developed state-of-the-art software solutions.' },
];

const testimonials = [
  { name: 'Jose Alejandro', feedback: 'Orion QA exceeded our highest expectations. From the initial consultation to project delivery, the team’s professionalism and dedication were evident. Their ability to truly understand our needs and deliver a tailored solution set them apart from the competition. We couldn’t have asked for a better partner.' },
  { name: 'Mary Shallet', feedback: 'The level of service we received was exceptional. Orion QA didn’t just complete the project—they became an integral part of our team. Their commitment to our success was unmatched, and they went the extra mile at every turn to ensure we achieved our goals. Truly outstanding.' },
  { name: 'Adrián Meza', feedback: 'Orion QA’s innovative approach transformed our business. Their keen attention to detail and forward-thinking strategies allowed us to scale at a pace we never thought possible. If you’re looking for a partner who delivers real impact, Orion QA is the answer.' },
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
      <div
        className="relative bg-gradient-to-r from-gray-900 to-gray-500 text-white py-24 px-6 md:px-12 lg:px-20 text-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/team.jpg')" }}
      >
        {/* Gray overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>

        {/* Content */}
        <motion.h1
          className="relative text-5xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="relative text-xl max-w-3xl mx-auto mb-10"
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
          <motion.p className="text-gray-600 max-w-5xl mx-auto mb-8" variants={fadeIn}>
            From a small startup to an industry leader, our journey has been fueled by growth, passion, and dedication. We began with a simple idea and a handful of driven individuals determined to make a difference. Through hard work, innovation, and a commitment to excellence, we steadily expanded our vision and capabilities.

            As we grew, so did our team, our expertise, and the industries we serve. Each challenge became an opportunity to learn and evolve, helping us refine our approach and deliver even more impactful solutions. Today, we’re proud to stand as a leader in our field, trusted by clients around the world for our cutting-edge technology and unwavering dedication.

            But our story is far from over. We continue to embrace change, push boundaries, and stay true to the values that brought us here—always looking ahead to new possibilities and greater heights.
          </motion.p>
        </motion.div>

        <div className="space-y-12 pt-10">
          <motion.div className="flex flex-col md:flex-row items-center" variants={fadeIn}>
            <div className="md:w-1/3">
              <img src="/Team2.png" alt="Company Origins" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-2/3 md:ml-8 mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold">Founded in 2010</h3>
              <p className="text-gray-600">
                Founded in 2010, what began as a small team in a garage has grown into a global enterprise. We deliver innovative solutions across multiple industries, helping businesses thrive through cutting-edge technology and personalized service. Our commitment to excellence and continuous improvement has made us a trusted partner worldwide. We remain driven by our passion for innovation and our dedication to our clients' success.
              </p>
            </div>
          </motion.div>

          <motion.div className="flex flex-col md:flex-row items-center" variants={fadeIn}>
            <div className="md:w-1/3">
              <img src="/Project.jpg" alt="First Major Project" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-2/3 md:ml-8 mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold">First Major Project - 2015</h3>
              <p className="text-gray-600">
                In 2015, we delivered our first major project, a turning point that transformed our business. This milestone not only showcased our ability to execute at scale but also opened the door for global expansion. The success of this project solidified our reputation as a reliable and innovative solutions provider, allowing us to broaden our offerings and reach new markets worldwide. It marked the beginning of our journey from a local player to an international leader in the industry.
              </p>
            </div>
          </motion.div>

          <motion.div className="flex flex-col md:flex-row items-center" variants={fadeIn}>
            <div className="md:w-1/3">
              <img src="/Lead.jpg" alt="Current Growth" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-2/3 md:ml-8 mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold">Leading the Industry in 2023</h3>
              <p className="text-gray-600">
                Today, we are recognized as a leader in our field, trusted by clients worldwide for delivering innovative solutions and unmatched expertise. Our commitment to pushing boundaries and consistently exceeding expectations has earned us a reputation for excellence. As we continue to grow, we remain focused on staying at the forefront of industry advancements and maintaining the trust of our global clients.
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
                className="w-full object-cover"
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
