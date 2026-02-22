import React from 'react';
import { Star } from 'lucide-react'; // যদি lucide-react ইনস্টল করা থাকে (না থাকলে ইমোজি বা SVG দিয়ে করব)

export const ReviewsCard = ({ review }) => {
  const {
    userName,
    review: reviewText,
    ratings,
    user_photoURL,
    date,
  } = review;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={20}
          className={i <= Math.floor(ratings) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-gray-100">

      <div className="p-6 flex items-center gap-4 border-b border-gray-100">
        <img
          src={user_photoURL}
          alt={userName}
          className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
        />
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{userName}</h3>
          <div className="flex items-center gap-1 mt-1">
            {renderStars()}
            <span className="ml-2 text-sm text-gray-500">({ratings})</span>
          </div>
        </div>
      </div>

   
      <div className="p-6">
        <p className="text-gray-700 leading-relaxed italic">
          "{reviewText}"
        </p>
      </div>

  
      <div className="px-6 pb-6 text-right">
        <span className="text-sm text-gray-500">{formattedDate}</span>
      </div>
    </div>
  );
};