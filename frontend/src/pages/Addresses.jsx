import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';

export default function Addresses() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="bg-gray-50 p-6 rounded-full inline-flex mb-6">
          <FiMapPin className="h-12 w-12 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Add your first address</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Save your addresses for a faster checkout experience.
        </p>
        <button 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-brand-600 hover:bg-brand-700 transition-colors"
        >
          Add Address
        </button>
      </motion.div>
    </div>
  );
}
