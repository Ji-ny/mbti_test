
import { useEffect, useState } from 'react';
import './App.scss';
import mainImage from './images/main.png';
import istpImage from "./images/istp.jpg";
import isfpImage from "./images/isfp.jpg";
import istjImage from "./images/istj.jpg";
import isfjImage from "./images/isfj.jpg";
import infjImage from "./images/infj.jpg";
import intjImage from "./images/intj.jpg";
import infpImage from "./images/infp.jpg";
import intpImage from "./images/intp.jpg";
import esfpImage from "./images/esfp.jpg";
import estpImage from "./images/estp.jpg";
import esfjImage from "./images/esfj.jpg";
import estjImage from "./images/estj.jpg";
import entpImage from "./images/entp.jpg";
import enfpImage from "./images/enfp.jpg";
import enfjImage from "./images/enfj.jpg";
import entjImage from "./images/entj.jpg";


function App() {


  // ---------- 참여한 사람 수 증가 --------------------------------------//
  const [number, setNumber] = useState(0); // 초기 값은 0으로 설정
  let max = 100000;
  
  
  useEffect(() => {
    let now = max; // 현재 값 초기화
    const handle = setInterval(() => {
      setNumber(Math.ceil(max - now)); // 현재 값 설정
  
      // 목표에 도달하면 정지
      if (now < 1) {
        clearInterval(handle); // setInterval 정지
      }
  
      // 증가되는 값이 계속하여 작아짐
      const step = now / 10;
  
      // 값을 적용시키면서 다음 차례에 영향을 끼침
      now -= step; // 현재 값 업데이트
    }, 50);
  
    // useEffect에서 반환한 함수는 cleanup 함수로서 clearInterval을 호출하여 메모리 누수를 방지합니다.
    return () => clearInterval(handle); // cleanup 함수
  }, []); // 의존성 배열 비워서 한 번만 실행되도록 함

    // ------------------------------ --------------------------------------//
  
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
  
  useEffect(()=>{ console.log("으아ㅏ아")},[page]);
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
        {type:"F", text:"어느 과로 하게? 어디가 안맞아ㅠㅠ"},
        {type:"T", text:"어느과로 하게? 전과하는 법 알아봤어?"}]
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


  const mbtis = [
    {   mbti:"ISTP", 
        name: ['자유로운 영혼의 새내기'], 
        contents:['벼락치기 진짜 잘해요.','논리적이고 뛰어난 적응력을 가지고 있어요.','처음엔 낯을 가리지만 친해지면 장난도 잘 쳐요.'],   
        goods:['ESFJ', 'ENTJ'], //ENFP, ENTJ
        bads:['INFP, ENFP, INFJ, ENFJ'],
        image:istpImage,
      },    // 백과사전형
        
        

    {   mbti:"ISFP", 
        name: ['감성적인 새내기'], 
        contents:['타인 배려를 잘하지만 눈치를 많이 봐요.','순하고 정이 많아요.','상대방의 이야기를 잘 들어줘요.'],   
        goods:['ENFJ','ESFJ','ESTJ'], //INFJ, INTJ
        bads:['INFP', 'ENFP', 'INFJ'],
        image:isfpImage,
      }, //default    // 성인군자형

    {   mbti:"ISTJ", 
        name: ['목표를 향해 노력하는 새내기'], 
        contents:['책임감이 높고, 신중해요.','한번 시작한 일을 끝까지 해내요.','약속 어기는건 싫어요.'],     
        goods:['ESFP', 'ESTP'], 
        bads:['INFP', 'ENFP', 'INFJ', 'ENFJ'],
        image:istjImage,
      },    // 과학자형

    {   mbti:"ISFJ", 
        name: ['친절하고 섬세한 새내기'], 
        contents:['나서는건 싫어하지만 관심받는건 좋아요.','성실하고 온화해요.','눈치가 빠르고 센스있어요.'],       
        goods:['ESFP','ESTP'], 
        bads:['INFP', 'ENFP', 'INFJ', 'ENFJ'],
        image:isfjImage,
      },    // 권력형

    {   mbti:"INFJ", 
        name: ['따뜻하고 통찰력있는 새내기'], 
        contents:['혼자 쉬는 시간이 필요해요.','인간관계에 통찰력이 뛰어나서, 눈치가 빨라요.','계획적인걸 좋아해요.'],     
        goods:['ENFP','ENTP'], 
        bads:['ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'],
        image:infjImage,
      },    // 예언자형

    {   mbti:"INTJ", 
        name: ['미래를 준비하는 새내기'], 
        contents:['자립심이 강해요.','효율적이에요.','도움이 필요한 사람에게는 차별없이 잘 도와줘요.'],     
        goods:['ENFP','ENTP'], 
        bads:['INFP', 'INFJ', 'ENFJ', 'INTJ', 'ENTJ', 'INTP'],
        image:intjImage,
      },    // 과학자형

    {   mbti:"INFP", 
        name: ['창의적인 새내기'],
        contents:['공감을 잘해줘요','자주 우울하지만, 티를 안내요.','따뜻한 마음씨를 가져, 사람들과 잘 어울려요.'],   
        goods:['ENFJ','ENTJ'],  // * ENFJ, ENTJ
        bads:['ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'],
        image:infpImage,
      }, // * ISFP, ESFP, ISTP, ESTP, ISFJ, ESFJ, ISTJ, ESTJ
        // 잔다르크형

    {   mbti:"INTP", 
        name: ['지적인 호기심을 가진 새내기'], 
        contents:['신중하고, 논리적이에요.','감정기복이 적어요.','친해진 사람에게는 정말 잘해줘요.'],   
        goods:['ENTJ','ESTJ'], 
        bads:[''],
        image:intpImage,
      },    // 아이디어형

    {   mbti:"ESFP", 
        name: ['즐거움을 전하는 새내기'], 
        contents:['자존감이 높아요.','정이 많아서 거절을 잘 못해요.','평화로운게 좋아요.'],       
        goods:['ISFJ','ISTJ'], 
        bads:['INFP', 'ENFP', 'INFJ', 'ENFJ'],
        image:esfpImage,
      },    // 사교형

    {   mbti:"ESTP", 
        name: ['모험을 즐기는 새내기'], 
        contents:['친화력 최강!','직설적인 말투로 오해받을때가 있지만, 절대 나쁜 의도가 아니에요.','재미있는 이야기로 모임을 주도해요.'],    
        goods:['ISFJ','ISTJ'], 
        bads:['INFP', 'ENFP', 'INFJ', 'ENFJ'],
        image:estpImage,
      },    // 활동가형

    {   mbti:"ESFJ", 
        name: ['쾌활한 인간 관계를 갖춘 새내기'], 
        contents:['약속은 무조건 지켜요.','주변 사람을 잘 챙겨줘요.','분위기 파악을 잘 해요.'],   
        goods:['ISFP','ISTP'], 
        bads:['INFP','ENFP','INFJ','ENFJ'],
        image:esfjImage,
      },    // 친선도모형

    {   mbti:"ESTJ", 
        name: ['리더십 갖춘 새내기'], 
        contents:['리더십이 있고 체계적이에요.','호불호가 확실해요.','공정하고 논리적이에요.'],     
        goods:['ISFP','ISTP'], 
        bads:['INFP', 'ENFP', 'INFJ', 'ENFJ'],
        image:estjImage,
      },    // 사업가형

    {   mbti:"ENTP", 
        name: ['아이디어 넘치는 새내기'], 
        contents:['토론이나 논쟁은 이겨야해요.','아이디어가 많아요.','자기주장이 강해요.'],     
        goods:['INFJ','INTJ'], 
        bads:[''],
        image:entpImage,
      },    // 발명가형

    {   mbti:"ENFP", 
        name: ['열정최고 새내기'], 
        contents:['사교적이고 에너지가 넘쳐요.','쉽게 질려해요.','호기심이 많아요.'],     
        goods:['INFJ','INTJ'],
        bads:['ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ','ISTJ', 'ESTJ'],
        image:enfpImage,
      }, //['ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ','ISTJ', 'ESTJ']  
          // 스파크형

    {   mbti:"ENFJ", 
        name: ['사람을 이끄는 새내기'], 
        contents:['타인을 사로잡는 카리스마와 매력이 있어요.','사람들과 커뮤니케이션을 잘해요.','공과 사를 확실히 구분해요.'],  
        goods:['INFP','ISFP'], 
        bads:['ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'],
        image:enfjImage,
      },    // 언변능숙형

    {   mbti:"ENTJ", 
        name: ['목표를 향해 달려가는 새내기'], 
        contents:['리더 역할을 잘해요.','어딜 가든 누구와 친해질 수 있지만, 굳이 친해지진 않아요.','솔직하면서 단호해요.'],    
        goods:['INFP','INTP'], 
        bads:[''],
        image:entjImage,
      },    // 지도자형

  ];



  // mbti 설정해주는 함수
  function setMbti(){
    
    //각 mbti의 특성
    // 여기 image로 결과가 나타난다.
    let mc = [
      {   mbti:"ISTP", 
          name: ['자유로운 영혼의 새내기'], 
          contents:['벼락치기 진짜 잘해요.','논리적이고 뛰어난 적응력을 가지고 있어요.','처음엔 낯을 가리지만 친해지면 장난도 잘 쳐요.'],   
          goods:['ESFJ', 'ENTJ'], //ENFP, ENTJ
          bads:['INFP, ENFP, INFJ, ENFJ'],
          image:istpImage,
        },    // 백과사전형

      {   mbti:"ISFP", 
          name: ['감성적인 새내기'], 
          contents:['타인 배려를 잘하지만 눈치를 많이 봐요.','순하고 정이 많아요.','상대방의 이야기를 잘 들어줘요.'],   
          goods:['ENFJ','ESFJ','ESTJ'], //INFJ, INTJ
          bads:['INFP', 'ENFP', 'INFJ'],
          image:isfpImage,
        }, //default    // 성인군자형

      {   mbti:"ISTJ", 
          name: ['목표를 향해 노력하는 새내기'], 
          contents:['책임감이 높고, 신중해요.','한번 시작한 일을 끝까지 해내요.','약속 어기는건 싫어요.'],     
          goods:['ESFP', 'ESTP'], 
          bads:['INFP', 'ENFP', 'INFJ', 'ENFJ'],
          image:istjImage,
        },    // 과학자형

      {   mbti:"ISFJ", 
          name: ['친절하고 섬세한 새내기'], 
          contents:['나서는건 싫어하지만 관심받는건 좋아요.','성실하고 온화해요.','눈치가 빠르고 센스있어요.'],       
          goods:['ESFP','ESTP'], 
          bads:['INFP', 'ENFP', 'INFJ', 'ENFJ'],
          image:isfjImage,
        },    // 권력형

      {   mbti:"INFJ", 
          name: ['따뜻하고 통찰력있는 새내기'], 
          contents:['혼자 쉬는 시간이 필요해요.','인간관계에 통찰력이 뛰어나서, 눈치가 빨라요.','계획적인걸 좋아해요.'],     
          goods:['ENFP','ENTP'], 
          bads:['ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'],
          image:infjImage,
        },    // 예언자형

      {   mbti:"INTJ", 
          name: ['미래를 준비하는 새내기'], 
          contents:['자립심이 강해요.','효율적이에요.','도움이 필요한 사람에게는 차별없이 잘 도와줘요.'],     
          goods:['ENFP','ENTP'], 
          bads:['INFP', 'INFJ', 'ENFJ', 'INTJ', 'ENTJ', 'INTP'],
          image:intjImage,
        },    // 과학자형

      {   mbti:"INFP", 
          name: ['창의적인 새내기'],
          contents:['공감을 잘해줘요','자주 우울하지만, 티를 안내요.','따뜻한 마음씨를 가져, 사람들과 잘 어울려요.'],   
          goods:['ENFJ','ENTJ'],  // * ENFJ, ENTJ
          bads:['ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'],
          image:infpImage,
        }, // * ISFP, ESFP, ISTP, ESTP, ISFJ, ESFJ, ISTJ, ESTJ
          // 잔다르크형

      {   mbti:"INTP", 
          name: ['지적인 호기심을 가진 새내기'], 
          contents:['신중하고, 논리적이에요.','감정기복이 적어요.','친해진 사람에게는 정말 잘해줘요.'],   
          goods:['ENTJ','ESTJ'], 
          bads:[''],
          image:intpImage,
        },    // 아이디어형

      {   mbti:"ESFP", 
          name: ['즐거움을 전하는 새내기'], 
          contents:['자존감이 높아요.','정이 많아서 거절을 잘 못해요.','평화로운게 좋아요.'],       
          goods:['ISFJ','ISTJ'], 
          bads:['INFP', 'ENFP', 'INFJ', 'ENFJ'],
          image:esfpImage,
        },    // 사교형

      {   mbti:"ESTP", 
          name: ['모험을 즐기는 새내기'], 
          contents:['친화력 최강!','직설적인 말투로 오해받을때가 있지만, 절대 나쁜 의도가 아니에요.','재미있는 이야기로 모임을 주도해요.'],    
          goods:['ISFJ','ISTJ'], 
          bads:['INFP', 'ENFP', 'INFJ', 'ENFJ'],
          image:estpImage,
        },    // 활동가형

      {   mbti:"ESFJ", 
          name: ['쾌활한 인간 관계 새내기'], 
          contents:['약속은 무조건 지켜요.','주변 사람을 잘 챙겨줘요.','분위기 파악을 잘 해요.'],   
          goods:['ISFP','ISTP'], 
          bads:['INFP','ENFP','INFJ','ENFJ'],
          image:esfjImage,
        },    // 친선도모형

      {   mbti:"ESTJ", 
          name: ['리더십 갖춘 새내기'], 
          contents:['리더십이 있고 체계적이에요.','호불호가 확실해요.','공정하고 논리적이에요.'],     
          goods:['ISFP','ISTP'], 
          bads:['INFP', 'ENFP', 'INFJ', 'ENFJ'],
          image:estjImage,
        },    // 사업가형

      {   mbti:"ENTP", 
          name: ['아이디어 넘치는 새내기'], 
          contents:['토론이나 논쟁은 이겨야해요.','아이디어가 많아요.','자기주장이 강해요.'],     
          goods:['INFJ','INTJ'], 
          bads:[''],
          image:entpImage,
        },    // 발명가형

      {   mbti:"ENFP", 
          name: ['열정최고 새내기'], 
          contents:['사교적이고 에너지가 넘쳐요.','쉽게 질려해요.','호기심이 많아요.'],     
          goods:['INFJ','INTJ'],
          bads:['ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ','ISTJ', 'ESTJ'],
          image:enfpImage,
        }, //['ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ','ISTJ', 'ESTJ']  
            // 스파크형

      {   mbti:"ENFJ", 
          name: ['사람을 이끄는 새내기'], 
          contents:['타인을 사로잡는 카리스마와 매력이 있어요.','사람들과 커뮤니케이션을 잘해요.','공과 사를 확실히 구분해요.'],  
          goods:['INFP','ISFP'], 
          bads:['ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'],
          image:enfjImage,
        },    // 언변능숙형

      {   mbti:"ENTJ", 
          name: ['목표를 향해 달려가는 새내기'], 
          contents:['리더 역할을 잘해요.','어딜 가든 누구와 친해질 수 있지만, 굳이 친해지진 않아요.','솔직하면서 단호해요.'],    
          goods:['INFP','INTP'], 
          bads:[''],
          image:entjImage,
        },    // 지도자형

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
          <div className='startIntro'> 현재까지<span style={{color:"#00A664", fontWeight:"bold"}}> {number} </span>명의 <br></br>새내기가 참여했어요😊</div>
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
              <div>{mbtiContents.name}</div> 
              <div>{mbtiContents.mbti}</div>
              <img src={mbtiContents.image} alt="사진"/>
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
                {/* 좋은 mbti 모음  // ! find 수정하기 */}
                {mbtiContents.goods.map((val,idx)=> // ISTP,, 등 차례대로 꺼내진다.
                  <div className="mbtis" key={idx}>  
                      <li className='mbtis-li'>
                      {mbtis.find(item => item.mbti === val)?.name || "CUTE"}
                      </li>
                  </div>
                )}
                
              </div>

              <div className="mbti_item">
                <div>힝구리에요🤔</div>
                {/* 별로인 mbti 모음 */}
                {mbtiContents.bads.map((val,idx)=>
                  <div className="mbtis" key={idx}>
                      <li className='mbtis-li'>
                      {mbtis.find(item => item.mbti === val)?.name || "CUTE"}{/* MBTI 내용 없다면 띄우기 */}
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
