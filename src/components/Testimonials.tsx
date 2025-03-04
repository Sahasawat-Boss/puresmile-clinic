"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image"; // ✅ Import Next.js Image Component
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "Nathan Johnson",
        image: "/pics/testimonials/profile-ai3.webp",
        review: "The best dental experience I've had! The staff at PureSmile Clinic were both friendly and professional",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Smithree",
        image: "/pics/testimonials/profile-ai8.webp",
        review: "I was nervous about my root canal, but they made me feel comfortable. The procedure was painless, and the result was fantastic!",
        rating: 4.5
    },
    {
        id: 3,
        name: "Sophia Martinez",
        image: "/pics/testimonials/profile-ai4.webp",
        review: "Great service. I love my new smile! Highly recommend PureSmile Clinic.",
        rating: 4
    }
];

// ⭐️ Function to render stars based on rating
const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<FaStar key={i} className="text-orange-400" />);
        } else if (i - 0.5 === rating) {
            stars.push(<FaStarHalfAlt key={i} className="text-orange-400" />);
        } else {
            stars.push(<FaRegStar key={i} className="text-orange-400" />);
        }
    }
    return stars;
};

const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.35, once: false });

    return (
        <section ref={ref} className="py-16 px-6 md:px-16 bg-sky-50">
            <div className="max-w-6xl mx-auto text-center">
                {/* Title & Description */}
                <motion.h3 className="text-sky-700 font-bold uppercase text-sm"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}>
                    Testimonials
                </motion.h3>
                <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}>
                    What people have said about us
                </motion.h2>
                <motion.p className="text-gray-600 mt-3 md:w-3/4 mx-auto"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}>
                    Hear from our happy patients about their experiences at PureSmile Clinic.
                </motion.p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-14 mt-10 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <motion.div key={testimonial.id} className="relative bg-white p-6 rounded-3xl shadow-lg text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: index * 0.2 }}>

                        {/* Profile Image - ✅ Updated with Next.js Image */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-white rounded-full overflow-hidden shadow-md">
                            <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="rounded-full object-cover" />
                        </div>

                        {/* Name & Review */}
                        <div className="mt-10">
                            <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-gray-600 text-sm mt-2">{testimonial.review}</p>
                        </div>

                        {/* Star Rating */}
                        <div className="flex justify-center gap-1 mt-4">{renderStars(testimonial.rating)}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
