import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect } from "react";
// import {  } from "react";

const SongDetail = (props) => {
  // usePrams()
  // URI 에서 전송된 파라메터를 객체로 읽는다.
  // 리턴된 결과 비구조화 한다.
  // 파라메터는 문자열로 온다.
  const { id } = useParams();
  // useNaviate() : 강제로 화면 이동
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [musician, setMusician] = useState("");
  const [link, setLink] = useState("");
  const YOUTUBE_LINK = "https://m.youtube.com/watch?v=";
  useEffect(() => {
    // props.songs 배열에서 useParams 의 id를 비교
    const result = props.songs.find((item) => {
      // 목록의 id 는 숫자이다.
      // useParams() 결과의 id는 문자열이다.
      return item.id === parseInt(id ? id : "", 10);
    });
    if (result) {
      setTitle(result.title ? result.title : "No Title");
      setMusician(result.musician ? result.musician : "No Musician");
      setLink(result.youtube_link ? YOUTUBE_LINK + result.youtube_link : "");
    } else {
      navigate("/songs");
    }
  }, []);
  return (
    <div className="mt-5">
      <h2>{title}</h2>
      <p>Original Musician : {musician}</p>
      <p>
        <a href={link} target="_blank">
          View Youtube
        </a>
      </p>
      <Link to="/songs">Return Song List</Link>
    </div>
  );
};

export default SongDetail;
