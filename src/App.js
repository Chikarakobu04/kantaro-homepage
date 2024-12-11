import React, { useState } from 'react';
import './App.css';
import photo1 from "./kantaro-yakyu.jpg"
import photo2 from "./kantaro-spiders.png"
import photo3 from "./kantaro-disney.jpg"

//関数生成 
function Intoroduction(){
  return(
    <h1>立木寛太郎のホームページです。</h1>
  )
}

// メインパート
function App() {
  // 写真データの配列
  const photos = [photo1, photo2, photo3];
  // 状態を管理するフック
  const [currentPhoto, setCurrentPhoto] = useState(null);
  // ランダムな写真を選ぶ関数
  const showRandomPhoto = () => {
    const randomIndex = Math.floor(Math.random() * photos.length);
    setCurrentPhoto(photos[randomIndex]);
  };

 return(
  <div className='App'>

  <div class="intro">
  <Intoroduction/>
  {/* 写真を読み込み */}
  <img src={currentPhoto} alt='Random' className='photo'/>
  </div>

  <button onClick={showRandomPhoto}>立木寛太郎生成</button>
  </div>
 );
}

export default App;
