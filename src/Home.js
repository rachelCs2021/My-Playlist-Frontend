
import './Home.css';
import Header from './component/Header/Header';
import SideBar from './component/SideBar/SideBar';
import RecomendSong from './component/RocommendedSongs/RecomendSong';

const Home = () => {

  return (

    <div className='parallax'>
      <Header />
      <SideBar />
      <RecomendSong />
    </div>

  );
}

export default Home;


// const API_KEY = "AIzaSyCoueDKXZfKPCcQsQrZKkIRcSjFtyyj2hc";