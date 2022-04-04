import "./Home.css";
import Review from "./../Review/Review";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useReviews from './../../hooks/useReviews';

const Home = () => {
  const [reviews, setReviews] = useReviews();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="px-16">
      <div className="book-cover">
        <div className="my-auto">
          <h1 className="text-4xl font-extrabold mb-8 mt-4">
            A Game of Thrones
          </h1>
          <p>
            Here is the first volume in George R. R. Martin's magnificent cycle
            of novels that includes A Clash of Kings and A Storm of Swords. As a
            whole, this series comprises a genuine masterpiece of modern
            fantasy, bringing together the best the genre has to offer. Magic,
            mystery, intrigue, romance, and adventure fill these pages and
            transport us to a world unlike any we have ever experienced. Already
            hailed as a classic, George R. R. Martin's stunning series is
            destined to stand as one of the great achievements of imaginative
            fiction.
          </p>
          <button class="bg-slate-400 px-12 py-3 mt-4 rounded-full ...">
            <Link to="/aboutus">Learn More...</Link>
          </button>
        </div>
        <img src="cover-pic.jpg" alt="" />
      </div>
      <h1 className="mb-4 font-bold text-4xl">COMMUNITY REVIEWS</h1>
      <hr />
      {reviews.slice(0, 3).map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
      <button class="bg-slate-400 px-12 p-3 mb-4 rounded-full ...">
        <Link to="/reviews">See All...</Link>
      </button>
    </div>
  );
};

export default Home;
