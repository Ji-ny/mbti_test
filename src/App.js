
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

  const [page, setPage] = useState(0); // 페이지 번호 상태
  
  // 질문 & 답변 리스트 생성
  const questionList = [
    {
      q: ['안녕? 반가워!','처음 보는 얼굴이네?'],
      a:[ // 답변
        {type:"I", text:"엉, 안녕?"},
        {type:"E", text:"안녕! 나는 OO이야, 넌 이름이 뭐야?"}]
    },

    {
      q: ['질문'],
      a:[ // 답변
        {type:"I", text:"답변"},
        {type:"E", text:"답변"}]
    },

    {
      q: ['질문'],
      a:[ // 답변
        {type:"I", text:"답변"},
        {type:"E", text:"답변"}]
    },

    {
      q: ['질문'],
      a:[ // 답변
        {type:"S", text:"답변"},
        {type:"N", text:"답변"}]
    },

    {
      q: ['질문'],
      a:[ // 답변
        {type:"S", text:"답변"},
        {type:"N", text:"답변"}]
    },

    {
      q: ['질문'],
      a:[ // 답변
        {type:"S", text:"답변"},
        {type:"N", text:"답변"}]
    },

    {
      q: ['질문'],
      a:[ // 답변
        {type:"F", text:"답변"},
        {type:"T", text:"답변"}]
    },

    {
      q: ['질문'],
      a:[ // 답변
        {type:"F", text:"답변"},
        {type:"T", text:"답변"}]
    },

    {
      q: ['질문'],
      a:[ // 답변
        {type:"F", text:"답변"},
        {type:"T", text:"답변"}]
    },

    {
      q: ['질문'],
      a:[ // 답변
        {type:"P", text:"답변"},
        {type:"J", text:"답변"}]
    },

    {
      q: ['질문'],
      a:[ // 답변
        {type:"P", text:"답변"},
        {type:"J", text:"답변"}]
    },

    {
      q: ['질문'],
      a:[ // 답변
        {type:"P", text:"답변"},
        {type:"J", text:"답변"}]
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
      {mbti:"ISTP",contents:['백과사전형','','']},
      {mbti:"ISFP",contents:['성인군자형','','']},
      {mbti:"ISTJ",contents:['과학자형','','']},
      {mbti:"ISFJ",contents:['권력형','','']},
      {mbti:"INFJ",contents:['예언자형','','']},
      {mbti:"INTJ",contents:['과학자형','','']},
      {mbti:"INFP",contents:['잔다르크형','','']},
      {mbti:"INTP",contents:['아이디어형','','']},
      {mbti:"ESFP",contents:['사교형','','']},
      {mbti:"ESTP",contents:['활동가형','','']},
      {mbti:"ESFJ",contents:['친선도모형','','']},
      {mbti:"ESTJ",contents:['사업가형','','']},
      {mbti:"ENTP",contents:['발명가형','','']},
      {mbti:"ENFP",contents:['스파크형','','']},
      {mbti:"ENFJ",contents:['언변능숙형','','']},
      {mbti:"ENTJ",contents:['지도자형','','']},
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
        : page <= questionList.length? // 현재 페이지가 질문 길이보다 작다면,
        <div className='questionLayout'>
          <div className='mbtiTitle'> 
            <div>MBTI 테스트</div>  
            <div>{`${page} / ${questionList.length}`}</div> 
          </div>

          
          {questionList.map((val,idx)=> //질문 리스트 받기
            <div className='questionList' key={idx} style={{display:page===idx+1? "flex" : "none"}}>
              {console.log(mbtiList)}
              <div className='questionItemLayout'>
                <div className='profileImg'>
                  <div/><div/>
                </div>
                <div className="chatListLayout">
                  {val.q.map((qval, qidx)=>
                    <div key={qidx} className='chatBox'> 
                    {/* 채팅 내용 */}
                      <div>◀</div> <div> {qval} </div>
                    </div>
                  )}
                </div>
              </div>
              <div className='answerItemLayout'>
                <div className="aChatBox">
                  <div>+</div> <div>#</div>
                </div>
                
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
          <div className='questionLayout'>
            <div className='mbtiTitle'> 
              <div>MBTI 테스트</div>  
              <div onClick={()=> window.location.reload()}>다시하기</div> 
            </div>

            <div className='questionList'style={{display:"flex"}}>
              <div className='questionItemLayout'>
                <div className='profileImg'>
                  <div/><div/>
                </div>
                <div className="chatListLayout">
                    <div className='chatBox'> 
                      <div>◀</div> <div> 당신의 MBTI는 {mbtiContents.mbti} 입니다.  </div>
                    </div>

                    <div className='chatBox'>
                      <div>◀</div> <div>{mbtiContents.mbti}는요</div>
                    </div>

                    {mbtiContents.contents.map((val,idx)=> 
                      <div  className='chatBox' key={idx}>
                        <div>◀</div> <div>{val}</div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  );
}

export default App;
