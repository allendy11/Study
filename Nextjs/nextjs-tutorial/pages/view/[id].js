import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Item from "../../src/components/Item";
import Loader from "../../src/components/Loader";
const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getData() {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
      setItem(res.data);
      // setIsLoading(false);
    });
  }

  useEffect(() => {
    if (id > 0) {
      getData();
    }
  }, [id]);
  return (
    <div>
      {isLoading ? (
        <div
          style={{
            padding: "300px 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <Item item={item} />
      )}
    </div>
  );
};

export default Post;

/*
Nextjs 모든 페이지 사전 렌더링 (Pre-rendering)
더 좋은 퍼포먼스
검색엔진 최적화(SE0)
1.정적 생성
2. Server Side Rendering (SSR, Dynamic Rendering)

차이점은 언제 html 파일을 생성하는가

[정적 생성]
- 프로젝트가 빌드하는 시점에 html파일들이 생성
- 모든 요청에 재상용
- 퍼포먼스 이유로, 넥스트 js는 정적 생성을 권고
- 정적 생성된 페이지들은 CDN에 캐시
- getStaticProps / getStaticPaths

[서버사이드 렌더링]
- 매 요청마다 html 을 생성
- 항상 최신 상태 유지
- getServerSideProps
*/
