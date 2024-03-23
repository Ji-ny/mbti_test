
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.scss';
import mainImage from './images/mainImage.png'

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

  const [page, setPage] = useState(0); // 페이지 번호 상태
  
  // 질문 & 답변 리스트 생성
  const questionList = [
    {
      q: ['입시가 끝나고, 드디어 울산대학교 새내기가 되었다! 나의 기분은?'],
      a:[ // 답변
        {type:"I", text:"설레면서도 잘 지낼 수 있을까 걱정된다."},
        {type:"E", text:"새로운 친구들을 만날 생각에 너무 기대된다."}]
    },

    {
      q: ['수업을 듣기 위해 강의실에 왔다. 옆자리 사람에게 말을 걸어볼까? '],
      a:[ // 답변
        {type:"I", text:"(먼저 말 걸어주기를 기다린다.)"},
        {type:"E", text:"안녕하세요? 혹시 이름이 뭐에요?"}]
    },

    {
      q: ['새신발(새터)에 왔다! OT때 인사했던 친구가 지나가는데..?!'],
      a:[ // 답변
        {type:"I", text:"인사 해야말까 고민하다가 그냥 지나간다."},
        {type:"E", text:"OO아 안녕!?"}]
    },

    {
      q: ['대학교 입학식 전날! 나의 심정은?'],
      a:[ // 답변
        {type:"S", text:"내일 첫날이니까, 빨리 자야겠다."},
        {type:"N", text:"너무 떨린다. 입학식을 시뮬레이션해본다."}]
    },

    {
      q: ['밤새 술을 마셔서 밖에 보니 해가 뜨고 있다. 어떡하지?'],
      a:[ // 답변
        {type:"S", text:"이게 대학생활이지."},
        {type:"N", text:"해를 보면서 감상에 젖는다."}]
    },

    {
      q: ['예쁜(잘생긴) 이성 친구가 말을 걸어온다! 내 심정은?'],
      a:[ // 답변
        {type:"S", text:"말을 걸어줘서 기분이 좋다."},
        {type:"N", text:"그 친구와 결혼까지 생각한다."}]
    },

    {
      q: ['친구가 시험 공부를 제대로 못했다고 한다. 뭐라고 대답할까?'],
      a:[ // 답변
        {type:"F", text:"헐 어떡해ㅠㅠ 그래도 시험 잘 칠거야!"},
        {type:"T", text:"어쩌다 공부 많이 못했어?"}]
    },

    {
      q: ['친구가 "나 우리과가 잘 안 맞는것 같아,,, 전과할까?" 라고 말한다'],
      a:[ // 답변
        {type:"F", text:"어디가 안 맞는 것 같아?"},
        {type:"T", text:"어느과로 하게?"}]
    },

    {
      q: ['친구가 과CC를 한다고 알려준다! 나의 반응은?'],
      a:[ // 답변
        {type:"F", text:"진짜?! 축하해!"},
        {type:"T", text:"진짜?! 누구랑?"}]
    },

    {
      q: ['대학교 친구들과 경주 여행을 가기로 했다. 일정을 잡아야 하는데..'],
      a:[ // 답변
        {type:"P", text:"숙소만 얼른 잡고 나머지는 가서 생각하자"},
        {type:"J", text:"숙소와 일정 계획까지 모두 정리한다."}]
    },

    {
      q: ['수강신청 전날! 들을 교양을 찾아야 한다.'],
      a:[ // 답변
        {type:"P", text:"대충 별점 높은 교양을 아무거나 잡는다."},
        {type:"J", text:"강의평을 세세히 보고, 여러 교양을 알아본다."}]
    },

    {
      q: ['지금 과제가 쌓여있다. 어떻게 할까?'],
      a:[ // 답변
        {type:"P", text:"과제 마감 전날에 몰아서 한다."},
        {type:"J", text:"미리미리 과제를 해놓는다."}]
    },

    {
      q: ['테스트 종료! 결과를 보러 가시겠습니까? '],
      a:[ // 답변
        {type:"", text:"결과 보러 가기"},
      ]
    },
    
    
  ];

  const [mbtiList, setMbtiList ] = useState([
    {name:"I", count:0}, {name:"E", count:0}, {name:"S", count:0}, {name:"N", count:0},
    {name:"F", count:0}, {name:"T", count:0}, {name:"P", count:0}, {name:"J", count:0},
  ]);

  // 답변을 클릭했을 때 실행할 함수. (MTTI 타입 / 질문 idx)
  const handleCkAnswer = (type, idx) => {
    let ls = mbtiList;
    for(let i = 0; i < ls.length; i++){
      if (ls[i].name === type){ //mbtiList의 name이, type과 같을 경우
        ls[i].count +=1; // count값을 1 늘려준다.
      }
    }

    setMbtiList(ls); //mbtiList를 업데이트 시킨다.
    setPage(page+1); // 페이지도 1 업데이트 시킨다.

    //결과페이지 | idx가 질문리스트 길이만큼 됐다면
    if(idx+1 === questionList.length){
      // console.log("결과보기")
      setMbti();
      
    }
  }
  
  // 최종 mbti 결과를 담을 상태
  const [mbtiContents, setMbtiContents] = useState([]);

  // mbti 설정해주는 함수
  function setMbti(){
    
    //각 mbti의 특성
    let mc = [
      {mbti:"ISTP",contents:['백과사전형','',''],   goods:['A','B'], bads:['B']},
      {mbti:"ISFP",contents:['성인군자형','',''],   goods:['A','B'], bads:['B','B','B','B','B','B','B','B','B','B','B','B','B']}, //default
      {mbti:"ISTJ",contents:['과학자형','',''],     goods:['A','B'], bads:['B']},
      {mbti:"ISFJ",contents:['권력형','',''],       goods:['A','B'], bads:['B']},
      {mbti:"INFJ",contents:['예언자형','',''],     goods:['A','B'], bads:['B']},
      {mbti:"INTJ",contents:['과학자형','',''],     goods:['A','B'], bads:['B']},
      {mbti:"INFP",contents:['잔다르크형','',''],   goods:['A','B'], bads:['B']},
      {mbti:"INTP",contents:['아이디어형','',''],   goods:['A','B'], bads:['B']},
      {mbti:"ESFP",contents:['사교형','',''],       goods:['A','B'], bads:['B']},
      {mbti:"ESTP",contents:['활동가형','',''],     goods:['A','B'], bads:['B']},
      {mbti:"ESFJ",contents:['친선도모형','',''],   goods:['A','B'], bads:['B']},
      {mbti:"ESTJ",contents:['사업가형','',''],     goods:['A','B'], bads:['B']},
      {mbti:"ENTP",contents:['발명가형','',''],     goods:['A','B'], bads:['B']},
      {mbti:"ENFP",contents:['스파크형','',''],     goods:['A','B'], bads:['B']},
      {mbti:"ENFJ",contents:['언변능숙형','',''],   goods:['A','B'], bads:['B']},
      {mbti:"ENTJ",contents:['지도자형','',''],     goods:['A','B'], bads:['B']},
    ]

    // I와 E를 구분한다.
    let IorE= // data : mbtiList를 데표하는 변수.
      mbtiList.find(function(data){return data.name === "I"}).count >
      mbtiList.find(function(data){return data.name === "E"}).count ? "I" : "E";

    //구분한다.
    let NorS= // data : mbtiList를 데표하는 변수.
      mbtiList.find(function(data){return data.name === "N"}).count >
      mbtiList.find(function(data){return data.name === "S"}).count ? "N" : "S";

          //구분한다.
    let ForT= // data : mbtiList를 데표하는 변수.
      mbtiList.find(function(data){return data.name === "F"}).count >
      mbtiList.find(function(data){return data.name === "T"}).count ? "F" : "T";

                //구분한다.
    let JorP= // data : mbtiList를 데표하는 변수.
    mbtiList.find(function(data){return data.name === "J"}).count >
    mbtiList.find(function(data){return data.name === "P"}).count ? "J" : "P";
    
  
    // 아래 변수에, 찾은 MBTI를 모두 합쳐준다.
    let mbti = IorE+ NorS + ForT + JorP;
    console.log("결과:mbti",mbti);

    // 도출되는 mbti와 mc배열안에 있는 mbti 배열을 찾아서 값이 일치하는 것만 찬는다.
    setMbtiContents(mc.filter((val)=>val.mbti === mbti)[0]); 
    
  
  }


  // 공유 버튼 나타나개 하는 창 띄우기
  const handleShare  = async () => { // 비동기를 동기처럼 사용하자.
    // 공유하기에 띄울 데이터 
    const shareData = {
      title: "MbtiTest", // 제목
      text: "울산대학교 새내기 mbti test 결과보기!", // 공유할때 같이 가는 내용
      url: "https://ji-ny.github.io/mbti_test/", // 사이트
    };

    // 공유기능!
    const url = window.location.href; // 현재 ㅇurl 정보!
    try{
      await navigator.share(shareData);
      console.log("공유하기 성공");
    } catch{
      // console.log("공유하기 실패");
      await navigator.clipboard.writeText(url);
      alert("클립보드에 링크가 복사되었습니다.");
    }
  }

  return (
    <div className="mbtiLayout">
      {/* 페이지에 따라 나타내는 상태가 다르게 한다. */}
      {page===0?
        <div className='startPageLayout'>
          <div className='startLogo'>
            <div>울산대학교</div>
            <div>새내기 유형 테스트</div>
            <img src={mainImage} alt="사진"/>
          </div>
          <div onClick={()=> setPage(1)} className='startButton' >테스트 시작하기</div>
          <div className='startIntro'> 현재까지 N명의 <br></br>새내기가 참여했어요😊</div>
        </div>
        : page <= questionList.length? // 현재 페이지가 질문 길이보다 작다면,
        <div className='questionLayout'>
          <div className='mbtiTitle'> 
            <div>새내기 MBTI 테스트</div>  
            {/* 프로그래스 바 */}
            <div className='progress_bar'> 
            {/*  현재 페이지 (1/13%) */}
              <span style={{width:`${(page / 13) * 100}%`}} className='progress_bar_inner'> </span>
            </div>
            <div>{`${page} / ${questionList.length}`}</div> 
            
          </div>

          
          {questionList.map((val,idx)=> //질문 리스트 받기
            <div className='questionList' key={idx} style={{display:page===idx+1? "flex" : "none"}}>
              {console.log(mbtiList)}
              <div className='questionItemLayout'>
                {/* 내용 */}
                <div className="chatListLayout">
                  {val.q.map((qval, qidx)=>
                    <div key={qidx} className='chatBox'> 
                    
                      <div>Q{page}.</div> {/* 질문 번호 */}
                      <div> {qval} </div> {/* 질문 내용 */}
                    </div>
                  )}
                </div>
              </div>
              {/* 답변 */}
              <div className='answerItemLayout'>
                
                {/* 답변 내용 */}
                {val.a.map((aval,aidx) => 
                  <div key={aidx} className="answerBox" onClick={() => handleCkAnswer(aval.type, idx )}>
                    {aval.text}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        : // 현재 페이지가 질문 길이보다 크다면, (결과페이지)
          <div className='resultLayout'>
            <div className='result_title_Layout'>
              <div>나의 새내기 유형은?</div>
              <div>{mbtiContents.contents[0]}</div> 
              <div>{mbtiContents.mbti}</div>
              <img src={mainImage} alt="사진"/>
            </div>

            <div className='result_example'>
              <div>{mbtiContents.mbti}는요,</div>
              {mbtiContents.contents.map((val,idx)=> 
                      <div key={idx}>
                        <div>{val ? val : "어떤어떤 유형이에요."}</div>  {/* 유형 설명 있다면 띄우기 */}
                      </div>
              )}
                
            </div>

            <hr/>
            
            <div className="result_mbtis">
              <div className="mbti_item">
                <div>잘 맞아요😊</div>
                {/* 좋은 mbti 모음 */}
                {mbtiContents.goods.map((val,idx)=>
                  <div className="mbtis" key={idx}>
                      <li>
                        {val ? val : "CUTE"} {/* MBTI 내용 없다면 띄우기 */}
                      </li>
                  </div>
                )}
                
              </div>

              <div className="mbti_item">
                <div>그저 그래요🤔</div>
                {/* 별로인 mbti 모음 */}
                {mbtiContents.bads.map((val,idx)=>
                  <div className="mbtis" key={idx}>
                      <li>
                        {val ? val : "CUTE"} {/* MBTI 내용 없다면 띄우기 */}
                      </li>
                  </div>
                )}
              </div>
            </div>
            
            <hr/>

            <div className='result_btn_Layout'>
              
              <div onClick={()=> window.location.reload()}>
                
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_27_4"  maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                  <rect x="0.5" y="0.5" width="24" height="24" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_27_4)">
                  <path d="M12.5 22.5C11.25 22.5 10.0792 22.2625 8.9875 21.7875C7.89583 21.3125 6.94583 20.6708 6.1375 19.8625C5.32917 19.0542 4.6875 18.1042 4.2125 17.0125C3.7375 15.9208 3.5 14.75 3.5 13.5H5.5C5.5 15.45 6.17917 17.1042 7.5375 18.4625C8.89583 19.8208 10.55 20.5 12.5 20.5C14.45 20.5 16.1042 19.8208 17.4625 18.4625C18.8208 17.1042 19.5 15.45 19.5 13.5C19.5 11.55 18.8208 9.89583 17.4625 8.5375C16.1042 7.17917 14.45 6.5 12.5 6.5H12.35L13.9 8.05L12.5 9.5L8.5 5.5L12.5 1.5L13.9 2.95L12.35 4.5H12.5C13.75 4.5 14.9208 4.7375 16.0125 5.2125C17.1042 5.6875 18.0542 6.32917 18.8625 7.1375C19.6708 7.94583 20.3125 8.89583 20.7875 9.9875C21.2625 11.0792 21.5 12.25 21.5 13.5C21.5 14.75 21.2625 15.9208 20.7875 17.0125C20.3125 18.1042 19.6708 19.0542 18.8625 19.8625C18.0542 20.6708 17.1042 21.3125 16.0125 21.7875C14.9208 22.2625 13.75 22.5 12.5 22.5Z" fill="#C0FFF6"/>
                  </g>
                </svg>

                다시하기
              </div> 
              <div onClick={handleShare}> 
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_27_11" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                  <rect x="0.5" y="0.5" width="24" height="24" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_27_11)">
                  <path d="M6.5 23.5C5.95 23.5 5.47917 23.3042 5.0875 22.9125C4.69583 22.5208 4.5 22.05 4.5 21.5V10.5C4.5 9.95 4.69583 9.47917 5.0875 9.0875C5.47917 8.69583 5.95 8.5 6.5 8.5H9.5V10.5H6.5V21.5H18.5V10.5H15.5V8.5H18.5C19.05 8.5 19.5208 8.69583 19.9125 9.0875C20.3042 9.47917 20.5 9.95 20.5 10.5V21.5C20.5 22.05 20.3042 22.5208 19.9125 22.9125C19.5208 23.3042 19.05 23.5 18.5 23.5H6.5ZM11.5 16.5V5.325L9.9 6.925L8.5 5.5L12.5 1.5L16.5 5.5L15.1 6.925L13.5 5.325V16.5H11.5Z" fill="#C0FFF6"/>
                  </g>
                </svg>
                공유하기 
              </div>
            </div>

          </div>
          
      }
    </div>
  );
}

export default App;
