
import './App.css';
import Playlist from './component/Playlist/Playlist';
import Header from './component/Header/Header';
import { useRef, useState } from 'react';


function App() {

  const songsList = [
    {
      id: 1,
      name: "אלוף העולם",
      by: "Hanan Ben Ari",
      img: "./1.jpg"
    },
    {
      id: 2,
      name: "איזון",
      by: "Hanan Ben Ari",
      img: "./2.jpg"
    },
    {
      id: 3,
      name: "הנסיון הזה",
      by: "Ishay Ribo",
      img: "./3.jpg"
    },
    {
      id: 4,
      name: "סיבת הסיבות",
      by: "Ishay Ribo",
      img: "./4.jpg"
    },
    {
      id: 5,
      name: "זוכר אני",
      by: "Ishay Ribo",
      img: "./5.jpg"
    },
  ]

  const [songsArr, setSongsArr] = useState(songsList);

  const removeFromList = (id) => {
    console.log("remove");
    setSongsArr(songsArr.filter((song) => song.id !== id));
    console.log(songsArr);
  }

  const idRef = useRef(songsList.length)

  const addSong = (nameSong) => {
    idRef.current++

    setSongsArr([...songsArr,
    {
      id: idRef.current,
      name: ` ${nameSong}`,
      by: `artist ${idRef.current}`,
    }
    ])

  }
  console.log(songsArr);

  return (
    <div className="App">
      <Header addsong={addSong} />
      <Playlist list={songsArr} remove={removeFromList} />
    </div>
  );
}

export default App;
