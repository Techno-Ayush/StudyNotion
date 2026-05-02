export default function GetAvgRating(ratingArr) {
  // Check if the ratingArr is defined and has no elements, return 0 if true
  if (ratingArr?.length === 0) return 0;

  // Calculate the total sum of ratings using the reduce function
  const totalReviewCount = ratingArr?.reduce((acc, curr) => {
    acc += curr.rating;
    return acc;
  }, 0);

  // Calculate the average rating with rounding to one decimal place
  const multiplier = Math.pow(10, 1);
  const avgReviewCount =
    Math.round((totalReviewCount / ratingArr?.length) * multiplier) / multiplier;

  // Return the calculated average rating
  return avgReviewCount;
}
