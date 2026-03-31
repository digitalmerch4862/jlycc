import { motion } from 'motion/react';
import { Shield, BookOpen, Globe, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Video Embed */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-gray-100 border-4 border-gray-50 hover:border-jly-red transition-colors duration-500"
            >
              <iframe 
                src="https://www.youtube.com/embed/GiURvSANcmw?start=2580" 
                title="JLYCC Video" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full border-none"
              ></iframe>
            </motion.div>
            <div className="absolute -bottom-6 -left-6 bg-jly-blue text-white p-6 rounded-lg shadow-2xl border-l-4 border-jly-red hidden md:block z-10">
              <p className="font-heading font-black text-4xl">1983</p>
              <p className="text-sm font-bold tracking-widest uppercase text-gray-300 mt-1">Established</p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-jly-red font-bold tracking-widest text-sm mb-2">ABOUT THE MINISTRY</h2>
            <h3 className="text-4xl md:text-5xl font-black text-jly-blue mb-6 leading-tight">
              A LEGACY OF SPIRITUAL AUTHORITY
            </h3>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Jesus Loves You Ministries, Inc. is a registered non-stock, non-profit Christian Corporation dedicated to religious Christian activities. Since our founding on February 23, 1983, we have been committed to building a legacy of spiritual authority and leadership training for kingdom impact.
            </p>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We emphasize rigorous spiritual formation combined with practical leadership. We don't just educate; we forge nation influencers and spiritual generals equipped to take on the darkest territories.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-jly-blue/5 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-jly-red" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-jly-blue mb-1">Non-Profit Ministry</h4>
                  <p className="text-sm text-gray-500">SEC Registered No. 0000110444</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-jly-blue/5 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-jly-red" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-jly-blue mb-1">Biblical Truth</h4>
                  <p className="text-sm text-gray-500">Uncompromising theological depth</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-jly-blue/5 flex items-center justify-center flex-shrink-0">
                  <Globe className="text-jly-red" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-jly-blue mb-1">Global Mission</h4>
                  <p className="text-sm text-gray-500">Training international students</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-jly-blue/5 flex items-center justify-center flex-shrink-0">
                  <Award className="text-jly-red" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-jly-blue mb-1">Excellence</h4>
                  <p className="text-sm text-gray-500">Military-grade spiritual discipline</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
