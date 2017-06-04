var questions = {
    question1: {
        question: "Who does Harry Potter save during the Tri-Wizard-Cup on the water challenge that he was not supposed to?",
        answer1: "Hermione",
        answer2: "Cho",
        answer3: "Gabrielle",
    },
    question2: {
        question: "What is the first spell Harry Potter learns in his charms class?",
        answer1: "Levitation Charm",
        answer2: "Alohomora Charm",
        answer3: "Immobulus Charm",
    },
    question3: {
        question: "How old was Harry Potter when he found out he was a wizard?",
        answer1: "Eleven",
        answer2: "Thirteen",
        answer3: "Nine",
    },
    question4: {
        question: "What is the name of Harry Potter's owl?",
        answer1: "Errol",
        answer2: "Crookshanks",
        answer3: "Hedwig",
    },
    question5: {
        question: "Which of the Hogwarts founders created the Chamber of Secrets?",
        answer1: "Rowena Ravenclaw",
        answer2: "Salazar Slytherin",
        answer3: "Neville Longbottom",
    },
    question6: {
        question: "Which of these objects is not a component of the Deathly Hallows?",
        answer1: "Elder Wand",
        answer2: "Cloak of Insvisibility",
        answer3: "Sorcerer's Stone",
    },
    question7: {
        question: "What is the form of Hermione's patronus?",
        answer1: "Rabbit",
        answer2: "Otter",
        answer3: "Doe",
    },
}

var time, right = 0, wrong = 0;
var answer1, answer2, answer3, answer4, answer5, answer6, answer7;

var audio = new Audio("https://media.githubusercontent.com/media/jazztazz1991/trivia4/master/assets/audio/hpShort.mp3");

function runGame(){
    $("#questions").html("You will have 30 seconds to answer each question.");
    $("#start").on("click", function(){
        audio.play();
        q1Funct();
        $("#start").toggleClass("hide");
    });
}

runGame();

function q1Funct(){
   $("#form1").toggleClass("hide");
   $("#nextZone").toggleClass("hide");
    $("#questions").html(questions.question1.question);
        $("#ans1").html(questions.question1.answer1);
        $("#ans2").html(questions.question1.answer2);
        $("#ans3").html(questions.question1.answer3);
        $("#nextZone").html("<button id='next1'>next</button>");
    checkAnswer1();
    var timer1 = setTimeout(q2Funct, 30000);
    $("#next1").on("click", function(){
        q2Funct();
        clearTimeout(timer1);
    })
    
}
function q2Funct(){
    $("#form1").toggleClass("hide");
    $("#form2").toggleClass("hide");
    $("#questions").html(questions.question2.question);
        $("#ans21").html(questions.question2.answer1);
        $("#ans22").html(questions.question2.answer2);
        $("#ans23").html(questions.question2.answer3);
        $("#nextZone").html("<button id='next2'>next</button>");
    checkAnswer2();
    var timer2 = setTimeout(q3Funct, 30000);
    $("#next2").on("click", function(){
        q3Funct();
        clearTimeout(timer2);
    })
}

function q3Funct(){
    $("#form2").toggleClass("hide");
    $("#form3").toggleClass("hide");
    $("#questions").html(questions.question3.question);
        $("#ans31").html(questions.question3.answer1);
        $("#ans32").html(questions.question3.answer2);
        $("#ans33").html(questions.question3.answer3);
        $("#nextZone").html("<button id='next3'>next</button>");
    checkAnswer3();
    var timer3 = setTimeout(q4Funct, 30000);
    $("#next3").on("click", function(){
        q4Funct();
        clearTimeout(timer3);
    })
}
function q4Funct(){
    $("#form3").toggleClass("hide");
    $("#form4").toggleClass("hide");
    $("#questions").html(questions.question4.question);
        $("#ans41").html(questions.question4.answer1);
        $("#ans42").html(questions.question4.answer2);
        $("#ans43").html(questions.question4.answer3);
        $("#nextZone").html("<button id='next4'>next</button>");
    checkAnswer4();
    var timer4 = setTimeout(q5Funct, 30000);
    $("#next4").on("click", function(){
        q5Funct();
        clearTimeout(timer4);
    })
}
function q5Funct(){
    $("#form4").toggleClass("hide");
    $("#form5").toggleClass("hide");
    $("#questions").html(questions.question5.question);
        $("#ans51").html(questions.question5.answer1);
        $("#ans52").html(questions.question5.answer2);
        $("#ans53").html(questions.question5.answer3);
        $("#nextZone").html("<button id='next5'>next</button>");
    checkAnswer5();
    var timer5 = setTimeout(q6Funct, 30000);
    $("#next5").on("click", function(){
        q6Funct();
        clearTimeout(timer5);
    })
}
function q6Funct(){
    $("#form5").toggleClass("hide");
    $("#form6").toggleClass("hide");
    $("#questions").html(questions.question6.question);
        $("#ans61").html(questions.question6.answer1);
        $("#ans62").html(questions.question6.answer2);
        $("#ans63").html(questions.question6.answer3);
        $("#nextZone").html("<button id='next6'>next</button>");
    checkAnswer6();
    var timer6 = setTimeout(q7Funct, 30000);
    $("#next6").on("click", function(){
        q7Funct();
        clearTimeout(timer6);
    })
}
function q7Funct(){
    $("#form6").toggleClass("hide");
    $("#form7").toggleClass("hide");
    $("#questions").html(questions.question7.question);
        $("#ans71").html(questions.question7.answer1);
        $("#ans72").html(questions.question7.answer2);
        $("#ans73").html(questions.question7.answer3);
        $("#nextZone").html("<button id='next7'>next</button>");
    checkAnswer7();
    var timer7 = setTimeout(end, 30000);
    $("#next7").on("click", function(){
        end();
        clearTimeout(timer7);
    })
}
function end(){
    $("#form7").toggleClass("hide");
    $("#nextZone").toggleClass("hide");
    $("#questions").html("Game Over!Lets see how you did!");
    correct();
}

function checkAnswer1(){
        $(".a1").on("click",function(){
            answer1 = "a";
        })
        $(".a2").on("click",function(){
            answer1 = "b";
        })
        $(".a3").on("click",function(){
            answer1 = "c";
        })
}
function checkAnswer2(){
        $(".b1").on("click",function(){
            answer2 = "a";
        })
        $(".b2").on("click",function(){
            answer2 = "b";
        })
        $(".b3").on("click",function(){
            answer2 = "c";
        })
}

function checkAnswer3(){
        $(".c1").on("click",function(){
            answer3 = "a";
        })
        $(".c2").on("click",function(){
            answer3 = "b";
        })
        $(".c3").on("click",function(){
            answer3 = "c";
        })
}
function checkAnswer4(){
        $(".d1").on("click",function(){
            answer4 = "a";
        })
        $(".d2").on("click",function(){
            answer4 = "b";
        })
        $(".d3").on("click",function(){
            answer4 = "c";
        })
}
function checkAnswer5(){
        $(".e1").on("click",function(){
            answer5 = "a";
        })
        $(".e2").on("click",function(){
            answer5 = "b";
        })
        $(".e3").on("click",function(){
            answer5 = "c";
        })
}
function checkAnswer6(){
        $(".f1").on("click",function(){
            answer6 = "a";
        })
        $(".f2").on("click",function(){
            answer6 = "b";
        })
        $(".f3").on("click",function(){
            answer6 = "c";
        })
}
function checkAnswer7(){
        $(".g1").on("click",function(){
            answer7 = "a";
        })
        $(".g2").on("click",function(){
            answer7 = "b";
        })
        $(".g3").on("click",function(){
            answer7 = "c";
        })
}

function correct(){
    if(answer1 == "c"){
        right++;
    }
    else if(answer1 != "c")
        wrong++;
    
    if(answer2 == "a"){
        right++;
    }
    else if(answer2 != "a")
        wrong++;
    
    if(answer3 == "a"){
        right++;
    }
    else if(answer3 != "a")
        wrong++;
    if(answer4 == "c"){
        right++;
    }
    else if(answer4 != "c")
        wrong++;
    if(answer5 == "b"){
        right++;
    }
    else if(answer5 != "b")
        wrong++;
    if(answer6 == "c"){
        right++;
    }
    else if(answer6 != "c")
        wrong++;
    if(answer7 == "b"){
        right++;
    }
    else if(answer7 != "b")
        wrong++;
    $("#questions").append("<br>Correct: " + right);
    $("#questions").append("<br>Incorrect: " + wrong);
    
    if( right > wrong ){
        $("#gif").html("<img src='assets/images/wicked.gif' >");
    }
    else{
        $("#gif").html("<img src='assets/images/judging.gif' >");
    }
    
}
