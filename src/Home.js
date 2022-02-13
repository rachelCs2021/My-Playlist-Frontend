
import './Home.css';
// import Playlist from './component/Playlist/Playlist';
import Header from './component/Header/Header';
import Search from './component/Search-song/Search';
// import RecomendSong from './component/RocommendedSongs/RecomendSong';
import { useState } from 'react';
import SideBar from './component/SideBar/SideBar';
import RecomendSong from './component/RocommendedSongs/RecomendSong';
// import Context from './Context/Context';
// import Play from './component/play-video/Play';

const Home = () => {

  const [urlSong, setUrlSong] = useState()
  // const [songsArr, setSongsArr] = useState(songsList);

  // const removeFromList = (id) => {
  //   console.log("remove");
  //   setSongsArr(songsArr.filter((song) => song.id !== id));
  //   console.log(songsArr);
  // }


  // const idRef = useRef(songsList.length)

  // const showSong = (id) => {
  //   console.log(id);
  //   setUrlSong(songsList.find(song => song.id === id).url)
  // }

  const handleUrl = (url) => {
    setUrlSong(`https://youtu.be/${url}`)
  }

  // const serchSong = (value) => {
  //   setSongsArr(songsArr.filter(song => song.name === value))
  // }

  return (

    <div className='parallax5'>
      {/* <Context.Provider
        value={{
          urlSong,
          showSong,
          songsArr
        }}> */}
      <Header />
      <SideBar />
      {/* <Search onClick={handleUrl} /> */}
      <RecomendSong />
      {/* <Playlist list={songsArr} onClickPlayer={showSong} /> */}
      {/* <Play url={urlSong} /> */}
      {/* </Context.Provider> */}
    </div>

  );
}

export default Home;


// const API_KEY = "AIzaSyCoueDKXZfKPCcQsQrZKkIRcSjFtyyj2hc";