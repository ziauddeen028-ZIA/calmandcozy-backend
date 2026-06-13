import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import toast from 'react-hot-toast';
import api from '../lib/api';

export default function ProductReviews({ productId, onStatsCalculated }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [customerName, setCustomerName] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchReviews = async () => {
    try {
      const response = await api.get(
        `/reviews?filters[product][documentId][$eq]=${productId}&filters[approved][$eq]=true&sort=createdAt:desc`
      );
      const fetchedReviews = response.data.data;
      setReviews(fetchedReviews);
      
      // Calculate stats
      if (fetchedReviews.length > 0) {
        const total = fetchedReviews.reduce((sum, r) => sum + r.rating, 0);
        const avg = (total / fetchedReviews.length).toFixed(1);
        if (onStatsCalculated) {
          onStatsCalculated(avg, fetchedReviews.length);
        }
      } else {
        if (onStatsCalculated) {
          onStatsCalculated(0, 0);
        }
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchReviews();
    }
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!customerName.trim()) return toast.error('Please enter your name');
    if (rating === 0) return toast.error('Please select a rating');
    if (!reviewText.trim()) return toast.error('Please enter your review');

    setIsSubmitting(true);
    try {
      await api.post('/reviews', {
        data: {
          customerName,
          rating,
          reviewText,
          product: productId,
          // Note: approved is false by default in Strapi
        }
      });
      toast.success('Review submitted successfully');
      setCustomerName('');
      setRating(0);
      setReviewText('');
      fetchReviews();
    } catch (error) {
      console.error('Error submitting review:', error);
      toast.error('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (count) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <FiStar
            key={star}
            className={`w-4 h-4 ${
              star <= count ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="mt-16 border-t border-gray-100 pt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Review Form */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Write a Review</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all outline-none"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <div className="flex gap-1" onMouseLeave={() => setHoverRating(0)}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      className="focus:outline-none transition-transform hover:scale-110"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                    >
                      <FiStar
                        className={`w-6 h-6 ${
                          star <= (hoverRating || rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Review</label>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all outline-none resize-none"
                  rows="4"
                  placeholder="Share your thoughts about this product..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </div>
        </div>

        {/* Reviews List */}
        <div className="lg:col-span-2">
          {loading ? (
            <div className="text-gray-500">Loading reviews...</div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-gray-500 text-lg">No reviews yet.</p>
              <p className="text-gray-400 mt-1">Be the first to review this product!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {reviews.map((review) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={review.documentId || review.id}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-gray-900">{review.customerName}</h4>
                      <div className="mt-1">{renderStars(review.rating)}</div>
                    </div>
                    <span className="text-sm text-gray-400">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                    {review.reviewText}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
