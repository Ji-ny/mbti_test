
import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  /** 현재 뷰포트 높이의 1%를 계산한다. */
  const setVh = () => {
    const vh = window.innerHeight * 0.01; //window.innerHeight : 뷰포트의 높이를 가져온다. | 뷰포트 높이를 100분의 1로 나누어서 사용하는 것 (1%)
    document.documentElement.style.setProperty('--vh', `${vh}px`); // css 변수를 만들어준다.
  }

  // 첫 렌더링시, 뷰포트 사이즈 계산 후 적용
  useEffect(()=> {
    setVh();
    
    // 사이즈가 변경될 때, 다시 뷰포트 높이를 구한다.
    function onResize(){
      setVh();
    }
                            // 이벤트 유형 , 이벤트가 발생할때 실행하는 함수.
    window.addEventListener('resize', onResize);
  },[]);

  const [page, setPage] = useState(0); // 페이지 상태

  return (
    <div className="mbtiLayout">
      {/* 페이지에 따라 나타내는 상태가 다르게 한다. */}
      {page===0?
        <div className='startPageLayout'>
          <div className='startLogo'>
            <div>MBTI</div>
            <div>▼</div>
          </div>
          <div onClick={()=> setPage(1)} className='startButton' >테스트 시작하기</div>
        </div>
        :
        <div>테스트 페이지

        </div>
      }
    </div>
  );
}

export default App;
