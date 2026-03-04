import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'MD Candidate, Harvard',
      avatar: '👩‍⚕️',
      rating: 5,
      text: "Smartium completely transformed how I study. The lecture summaries saved me countless hours, and the flashcard system helped me retain information like never before.",
    },
    {
      name: 'Michael Rodriguez',
      role: 'MS3, Johns Hopkins',
      avatar: '👨‍⚕️',
      rating: 5,
      text: "The practice exams are incredibly well-designed. They mirror the actual board format perfectly. Scored 260+ on Step 1!",
    },
    {
      name: 'Emily Thompson',
      role: 'MS2, Stanford Medicine',
      avatar: '👩‍🔬',
      rating: 5,
      text: "As someone who was overwhelmed by the volume of material, Smartium was a lifesaver. I actually remember what I study now.",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-4"
          >
            Testimonials
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-navy-900">
            Loved by <span className="gradient-text-accent">Future Doctors</span>
          </h2>
          <p className="text-lg text-navy-500 max-w-xl mx-auto">
            See what medical students are saying about Smartium
          </p>
        </motion.div>

        {/* Main testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-4xl shadow-soft-lg border border-navy-100 p-8 md:p-10 relative"
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-6 text-primary-100">
              <Quote className="w-16 h-16" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
              ))}
            </div>

            {/* Quote text */}
            <p className="text-xl md:text-2xl text-navy-700 leading-relaxed mb-8 relative z-10">
              "{testimonials[activeIndex].text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-3xl shadow-soft"
              >
                {testimonials[activeIndex].avatar}
              </motion.div>
              <div>
                <div className="font-bold text-navy-800 text-lg">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-navy-500">
                  {testimonials[activeIndex].role}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 rounded-xl bg-white shadow-soft border border-navy-100 text-navy-500 hover:text-primary-600 hover:border-primary-200 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-primary-500'
                      : 'w-2 bg-navy-200 hover:bg-navy-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 rounded-xl bg-white shadow-soft border border-navy-100 text-navy-500 hover:text-primary-600 hover:border-primary-200 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
