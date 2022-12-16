import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
const About = (props) => {
  // useSeartchParams: ?a=1&b=2 쿼리문자열을 읽고, 쓰기
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState();
  //웹브라우저 이동
  const navigate = useNavigate();
  // 컴포넌트가 마운트 또는 언마운트 또는 업데이트 체크용 훅
  // dependecies Array : 의존하는 배열
  // 1. [] 조차 없으면 무조건 업데이트한다.
  // 2. [] 만 있으면 마운트/언마운트 될 때만 작동한다.
  // 3. [a, b] 등으로 작성하면 a,b 가 변한다면 작동한다.
  useEffect(() => {
    // useSearchParams() 쿼리를 읽어온다.
    // ?page=1
    const strPage = searchParams.get("page");
    // "1"
    setPage(parseInt(strPage !== null ? strPage : "1"));
  }, [searchParams]);
  const goPrev = () => {
    if (page > 1) {
      navigate(window.location.pathname + "?page" + (page - 1));
    }
  };
  const goNext = () => {};
  return (
    <div className="card card-body">
      <h2>About {props.title} </h2>
      <div>
        <div className="m-2">현재 페이지 : {page}</div>
        <button className="btn btn-secondary m-1" onClick={goPrev}>
          Prev
        </button>
        <button className="btn btn-secondary m-1" onClick={goPrev}>
          Next
        </button>
      </div>
    </div>
  );
};

export default About;
