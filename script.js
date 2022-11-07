const quizData = [
    {
        question: "1. Milanovi je 98 let. Pavel má 87 let. O kolik let je Pavel mladší?",
        a: "13",
        b: "11",
        
        correct: "b",
    },
    {
      question: "2. Na dvoře jsou 2 slepice a 4 kozy. Kolik mají dokopy noh?",
      a: "18",
      b: "20",
      
      correct: "b",
  },
  {
    question: "3. Koľko trojíc může vytvořit 27 didlin.?",
    a: "10",
    b: "9",
    
    correct: "b",
},
{
  question: "4. Panenka stála 4 eurá. Autíčko bylo 3-krát dražší. Kolik eur stálo autíčko?",
  a: "12",
  b: "15",
  
  correct: "a",
},{
  question: "5. Adélce je 12 let. Její sestra Rozálie je o 8 let mladší. Kolik roků má Rozálie?",
  a: "5",
  b: "4",
  
  correct: "b",
},
{
question: "6. Adrián koupil 5 stavebnic za 50 euro. Kolik eur stála jedna stavebnice?",
a: "pravda",
b: "lež",

correct: "b",
},{
  question: "7. Babi je 60 let. Elenka je 10-krát mladší. Kolik je Elence?",
  a: "10",
  b: "6",
  
  correct: "b",
},
{
question: "8. Tři jízdenky stojí 6 eur. Kolik stojí 5 jízdenek?",
a: "10 eur",
b: "50 eur",

correct: "a",
},{
  question: "9. Nahřišti je 24 dětí. Čtvrtina z nich má modré oči. Kolik dětí má modré oči?",
  a: "9",
  b: "6",
  
  correct: "b",
},
{
question: "10. V autobuse cestovalo 5 holčiček. Pak nastoupili 2 kluci a vystoupili 3 holčičky. Kolik dětí zůstalo v autobuse?",
a: "4",
b: "5",

correct: "a",
},{
  question: "11. Maminka koupila tři kytice po 3 květech. Kolik zaplatila, když každý květ stál 2 eura?",
  a: "18",
  b: "20",
  
  correct: "a",
},
{
question: "12. Babi nachystala 48 švestek na koláč. Po rozpůlení švestek zjistila, že 7 švestek je červivých. Kolik švestek nebylo červivých?",
a: "41",
b: "42",

correct: "a",
},{
  question: "13. V pondělí prodali 37 autíček. Barbin prodali o 10 méně. Kolik barbin prodali?",
  a: "27",
  b: "47",
  
  correct: "a",
},
{
question: "14. Děti sbíralikaštany pro zvířatá na zimu. Holky nasbírali 23 kg. Kluci nasbírali o 2 kg více. Kolik kilogramů kaštanů nasbírali všechny děti spolu?",
a: "48",
b: "47",

correct: "a",
},{
  question: "15. Myslivec uvidel v kukuřičném poli 40 divočáků. Po chvíli k nim přišlo dalších 10. Později 30 mladých divočáků odběhlo. Kolik divočáků zůstalo v kukuřičném poli?",
  a: "20",
  b: "10",
  
  correct: "a",
},
{
question: "16. Klára dostala na narozeniny balíček ovoce: 5 jablek, 7 banánů a 10 mandarinek. Večer sněsla 6 mandarinek. Kolik kousků ovoce jí zůstalo na další den?",
a: "16",
b: "14",

correct: "a",
},{
  question: "17. V nádrži auta bylo 41 l benzínu. V průběhu jízdy spotřeboval 20 litrů. Na benzínové pumpě načerpal 8 l. Kolik litrů mu zůstalo v nádrži?",
  a: "29",
  b: "27",
  
  correct: "a",
},
{
question: "18. Kolik dní byl Jirkův děda v lázních, když jeho pobyt trval 6 týdnů?",
a: "40",
b: "42",

correct: "b",
},{
  question: "19. V restauraci je 8 stolů. Při každém jsou 4 židle. Kolik mají v restauraci židlí?",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "20. Kolik minut trvají 2 hodiny?",
a: "120",
b: "100",

correct: "a",
},
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })