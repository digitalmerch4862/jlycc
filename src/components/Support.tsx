import { motion } from 'motion/react';
import { Heart, Globe, BookOpen } from 'lucide-react';

export default function Support() {
  return (
    <section id="donate" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-jly-red font-bold tracking-widest text-sm mb-2">PARTNER WITH US</h2>
          <h3 className="text-4xl md:text-5xl font-black text-jly-blue mb-6">
            SUPPORT OUR NON-PROFIT MISSION
          </h3>
          <p className="text-gray-600 text-lg">
            Jesus Loves You Ministries, Inc. operates as a registered non-profit organization. We rely on the faithful partnership of believers to fund scholarships, expand our facilities, and send missionaries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl text-center border border-gray-100"
          >
            <div className="w-16 h-16 bg-jly-blue/10 text-jly-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen size={32} />
            </div>
            <h4 className="text-xl font-bold text-jly-blue mb-3">Scholarship Fund</h4>
            <p className="text-gray-600 mb-6">Sponsor a student's theological education and living expenses during their training.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-50 p-8 rounded-xl text-center border border-gray-100"
          >
            <div className="w-16 h-16 bg-jly-red/10 text-jly-red rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe size={32} />
            </div>
            <h4 className="text-xl font-bold text-jly-blue mb-3">Global Missions</h4>
            <p className="text-gray-600 mb-6">Fund church planting initiatives and missionary deployments across the globe.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-xl text-center border border-gray-100"
          >
            <div className="w-16 h-16 bg-jly-blue/10 text-jly-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={32} />
            </div>
            <h4 className="text-xl font-bold text-jly-blue mb-3">General Ministry</h4>
            <p className="text-gray-600 mb-6">Support the day-to-day operations and expansion of Jesus Loves You Ministries.</p>
          </motion.div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-jly-red hover:bg-jly-red-dark text-white px-8 py-4 rounded font-heading font-bold text-lg tracking-wider transition-all hover:scale-105 shadow-lg"
          >
            <Heart size={20} />
            MAKE A DONATION
          </a>
          <p className="mt-4 text-sm text-gray-500">All donations are directed to our SEC-registered non-profit (No. 0000110444).</p>
        </div>
      </div>
    </section>
  );
}
