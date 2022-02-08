
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

  // const callServer = async () => {
  //   let req = await fetch("http://localhost:3001/songs",{
  //     method: "GET",
  //     headers: {
  //       'content-type': "application/json",
  //       authorization: `bearer ${localStorage.getItem("accesToken")}`
  //     }
  //   })
  // }

  // const songsList = [
  //   {
  //     id: 1,
  //     name: "The Middle (Lyrics) ft. Maren Morris",
  //     by: "Zedd, Grey",
  //     url: "https://youtu.be/xQzS3JnZQZM"
  //   },
  //   {
  //     id: 2,
  //     name: " Stay (Official Music Video)",
  //     by: "Zedd, Alessia Cara",
  //     url: "https://youtu.be/yWEK4v9AVKQ"
  //   },
  //   {
  //     id: 3,
  //     name: "Perfect Strangers ft. JP Cooper (Official Video)",
  //     by: "Jonas Blue",
  //     url: "https://youtu.be/Ey_hgKCCYU4"
  //   },
  //   {
  //     id: 4,
  //     name: "Mama ft. William Singe (Official Video)",
  //     by: "Jonas Blue",
  //     url: "https://youtu.be/qPTfXwPf_HM"
  //   },
  //   {
  //     id: 5,
  //     name: "Girls Like You (Lyrics)",
  //     by: "Maroon 5, Cardi B - ",
  //     url: "https://youtu.be/QVgDlH4t0s8"
  //   },
  // ]


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

    <div className='parallax'>
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