import React, { useState, useEffect } from 'react';
import axios from 'axios';
import rr from './../assets/rr.jpeg';
import './restaurant.component.css';
import {  Star , Share} from 'react-bootstrap-icons';

export function RestaurantComponent() {
    
    const [rating, setRating] = useState(0); // Initialize rating state with default value 0
    const [review, setReview] = useState('');
    const [submittedReviews, setSubmittedReviews] = useState([]);
    const [username, setUsername] = useState('');
    const [editReviewId, setEditReviewId] = useState(null); // State to store the ID of the review being edited
    const [filterOption, setFilterOption] = useState('all'); // State for filtering option
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
    const [averageRating, setAverageRating] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);
    const [isWritingReview, setIsWritingReview] = useState(false);

    useEffect(() => {
        fetchReviews();
        // fetchUsername();
        fetchAverageRating();
        localStorage.removeItem('rating');
    }, []);

    // Fetch reviews associated with the currently logged-in user
// Fetch all ratings and reviews
const fetchReviews = async () => {
    try {
        const response = await axios.get('http://localhost:5000/get-ratings-reviews');
        setSubmittedReviews(response.data);
    } catch (error) {
        console.error('Error fetching reviews:', error);
    }
};



    // const fetchUsername = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:5000/get-username', {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //         setUsername(response.data.username);
    //     } catch (error) {
    //         console.error('Error fetching username:', error);
    //     }
    // };

     const handleRatingChange = (newRating) => {
        // Update state
        setRating(newRating);
        // Update local storage
        localStorage.setItem('rating', newRating.toString());
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleSubmitReview = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
    
            let response;
            if (editReviewId) {
                // If editReviewId is set, update the existing review
                response = await axios.put(`http://localhost:5000/update-rating-review/${editReviewId}`, { rating, review }, config);
            } else {
                // If editReviewId is not set, submit a new review
                response = await axios.post('http://localhost:5000/submit-rating-review', { rating, review }, config);
            }
    
            console.log(response.data);
            alert('Your review has been submitted');
            fetchReviews();
            setReview('');
            setRating(0);
            setEditReviewId(null); // Reset edit review ID
            fetchAverageRating(); // Fetch average rating after submitting or updating a review
        } catch (error) {
            console.error('Error submitting review:', error);
            alert(error.response?.data.error || 'Failed to submit review');
        }
    };
    
   // Allow users to edit only their own reviews
const handleEditReview = (reviewId, existingRating, existingReview) => {
    // Check if the review belongs to the current user
    const isUserReview = submittedReviews.some(review => review._id === reviewId);

    if (isUserReview) {
        setEditReviewId(reviewId); // Set the ID of the review being edited
        setRating(existingRating); // Populate rating field with existing rating
        setReview(existingReview); // Populate review field with existing review
    } else {
        alert('You can only edit your own reviews.');
    }
};

// Allow users to delete only their own reviews
const handleDeleteReview = async (reviewId) => {
    // Check if the review belongs to the current user
    const isUserReview = submittedReviews.some(review => review._id === reviewId);

    if (isUserReview) {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            await axios.delete(`http://localhost:5000/delete-rating-review/${reviewId}`, config);
            alert('Review deleted successfully');
            fetchReviews(); // Refresh reviews after deletion
            fetchAverageRating(); // Fetch average rating after deleting a review
        } catch (error) {
            console.error('Error deleting review:', error);
            alert(error.response?.data.error || 'Failed to delete review'); // Handle API error response
        }
    } else {
        alert('You can only delete your own reviews.');
    }
};

    const handleFilterChange = (event) => {
        setFilterOption(event.target.value);
    };

    // Filter reviews based on the selected filter option
const filteredReviews = submittedReviews.filter((review) => {
    switch (filterOption) {
        case 'positive':
            return review.rating >= 3;
        case 'negative':
            return review.rating < 3;
        case 'latest':
            const reviewDate = new Date(review.date);
            const currentDate = new Date();
            const daysDifference = Math.floor((currentDate - reviewDate) / (1000 * 60 * 60 * 24));
            return daysDifference >= 0 && daysDifference <= 5;
        default:
            return true;
    }
}).sort((a, b) => {
    if (filterOption === 'highToLow') {
        return b.rating - a.rating;
    } else if (filterOption === 'lowToHigh') {
        return a.rating - b.rating;
    } else {
        return 0;
    }
});



    const fetchAverageRating = async () => {
        try {
            const response = await axios.get('http://localhost:5000/get-average-rating', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setAverageRating(response.data.averageRating);
            setTotalReviews(response.data.totalReviews);
        } catch (error) {
            console.error('Error fetching average rating:', error);
        }
    };

    const handleReportReview = async (reviewId) => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
    
            await axios.post(`http://localhost:5000/report-review`, { reviewId }, config);
    
            alert('Review reported successfully');
        } catch (error) {
            console.error('Error reporting review:', error);
            alert(error.response?.data.error || 'Failed to report review');
        }
    }; 
    
    const toggleWriteReview = () => {
        setIsWritingReview(!isWritingReview);
    };


    return (
        <div>
        <div className='image-container'>
            <img src={rr} className="image" alt="Restaurant" />
        </div>
        <br />
        <div className='marginstart'>
        <h3>Tulips Restaurant&nbsp;
                    {averageRating !== null && (
                        <span style={{ fontSize: '0.6em', color: 'white', backgroundColor: 'green', padding: '5px', borderRadius: '5px' }}>
                            {averageRating.toFixed(1)} <span style={{ fontSize: '0.5em' }}>{totalReviews}  </span>
                        </span>
                    )}
                </h3>

            <h6 style={{ color: 'GrayText' }}>Address: Plot no 44, RTC X Road, Nallakunta , Hyderabad,Telangana 500020</h6>
                <h6 className='hospital_timings'>Open Now - Closes at 11:30 pm</h6>

<br></br>
                <div>
                    <h4>Reviews & Ratings </h4>
                    {averageRating !== null && (
                        <div>
                            <span style={{ fontSize: '1em', color: 'white', backgroundColor: 'green', padding: '5px', borderRadius: '5px' }}>
                                {averageRating.toFixed(1)}
                            </span>
                            <span style={{ fontSize: '1.0em', marginLeft: '10px', marginBottom: '25px' }}>
                                {totalReviews} Ratings
                            </span> <br></br>

                            <span style={{ fontSize: '0.8em', marginLeft: '48px' }}>
                                Rating index based on {totalReviews} ratings across the web
                            </span>
                        </div>
                    )}


            <br></br>
            <label className='colors'>Start your Rating</label>
                
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        style={{
                            color: star <= rating ? 'gold' : 'gray',
                            cursor: 'pointer'
                         
                        }}
                        onClick={() => handleRatingChange(star)}
                    >
                         <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '40px' }}></Star></span>  &nbsp;&nbsp; &nbsp;&nbsp;
                               
                                
                                                   </span>
            ))}
       <br></br> <br></br>
        {isWritingReview ? (
                    <div>
                        <label>Write a review</label>
                        <br></br>
                        <textarea
                            value={review}
                            onChange={handleReviewChange}
                            rows={4}
                            cols={30}
                            placeholder="Write your review here..."
                        />
                        <br />
                        <button onClick={handleSubmitReview}>{editReviewId ? 'Update' : 'Submit'}</button>
                    </div>
                ) : (
                    <div className='color'>
                        <button className='color' onClick={toggleWriteReview}>Write a Review</button> &nbsp;&nbsp;&nbsp;

                        <button className='color' ><Share size={10} style={{ marginRight: '5px' }} />Share</button>
                    </div>
                )}
        <br />
     
        <br></br>
        <div>
    <label>Filter</label>
    <select value={filterOption} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="positive">Positive</option>
        <option value="negative">Negative</option>
        <option value="highToLow">High to Low</option>
        <option value="lowToHigh">Low to High</option>
        <option value="latest">Latest</option>
    </select>
</div>

        <br></br>
        {filteredReviews.length > 0 && (
    <div>
        <h3>Total Reviews:</h3>
        {filteredReviews.map((reviewData, index) => (
            <div key={index}>
                {/* Display the username */}
                <p style={{ fontWeight: 'bold', color: 'black' }}>{reviewData.userName}</p>
                {reviewData.rating > 0 && (
                    <p>
                        Rating: {' '}
                        {[...Array(reviewData.rating)].map((_, i) => (
                            <span key={i} style={{ color: 'gold' }}>★</span>
                        ))}
                    </p>
                )}

                {reviewData.review && <p>Review: {reviewData.review}</p>}
                {/* Edit and delete buttons/icons */}
                <button className="edit-but" onClick={() => handleEditReview(reviewData._id, reviewData.rating, reviewData.review)}>Edit</button> &nbsp;
                <button className="delete-but" onClick={() => handleDeleteReview(reviewData._id)}>Delete</button> &nbsp;
                <button className="report-but" onClick={() => handleReportReview(reviewData._id)}>Report</button>
                <hr style={{ border: '1px solid #dddddd', margin: '20px 0' }} />

            </div>
                ))}
            </div>
        )}
         </div>
    </div>
    </div>
);
}
