import { motion } from 'framer-motion';

export default function PolicyLayout({ title, lastUpdated, children }) {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto bg-white shadow-xl shadow-gray-200/40 rounded-3xl overflow-hidden border border-gray-100"
      >
        <div className="px-6 py-12 sm:px-12 md:py-16 md:px-20">
          <div className="text-center mb-12 md:mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4"
            >
              {title}
            </motion.h1>
            {lastUpdated && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-sm font-medium text-gray-500 uppercase tracking-widest"
              >
                Last Updated: {lastUpdated}
              </motion.p>
            )}
          </div>
          <div className="text-gray-600 space-y-8 leading-relaxed text-base md:text-lg">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
