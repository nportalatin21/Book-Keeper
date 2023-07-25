import './Home.css';
//import bookpg from '../../assets/img/book.jpg';
import { Link } from 'react-router-dom';
import AddBook from '../Books/AddBook';

const Home = () => {
  return (
    <div className='Container'>
      <video autoPlay='autoplay' loop='loop' muted className='Video'>
        {/* <source src={videoSource} type='video/mp4' /> */}
        Your browser does not support the video tag.
      </video>
      <div className='Content'>
        <div className='SubContent'>
          <h1>Book Keeper</h1>
          <p>Manage your Books with Ease</p>
          <Link to='/register' className='btn btn-outline-dark'>
            Get started
          </Link>
          {/* <img src={bookpg} alt='profile' /> */}
          <AddBook />
        </div>
      </div>
    </div>
  );
};

export default Home;