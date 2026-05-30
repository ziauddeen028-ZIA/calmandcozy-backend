import { motion } from 'framer-motion';
import { FiPackage } from 'react-icons/fi';

export default function Orders() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="bg-gray-50 p-6 rounded-full inline-flex mb-6">
          <FiPackage className="h-12 w-12 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">No orders yet</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          When you place an order, it will appear here. Start shopping to find your next favorite item!
        </p>
        <a 
          href="/shop" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-brand-600 hover:bg-brand-700 transition-colors"
        >
          Start Shopping
        </a>
      </motion.div>
    </div>
  );
}
