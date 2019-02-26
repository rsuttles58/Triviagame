//***************VARIABLES************//

var qSet = [{
    question: "What county has the largest population?",
    opA: "Davidson",
    opB: "Knox",
    opC: "Shelby",
    opD: "Montgomery",
    answer: "C",
    support: "Shelby County had a population of 927,644 as of the 2010 census."
},
{
    question: "The Civil War 'Battle Above The Clouds' was fought in which county?",
    opA: "Anderson",
    opB: "Cheatham",
    opC: "Hamilton",
    opD: "Marion",
    answer: "C",
    support: "The 'Battle Above the Clouds' was fought on Lookout Mountain in Chattanooga/Hamilton County"
},
{
    question: "Jack Daniels Distillery is located in Lynchburg, Tennessee in which county?",
    opA: "Cumberland",
    opB: "Tipton",
    opC: "Sequatchie",
    opD: "Moore",
    answer: "D",
    support: "Jack Daniels is the largest employer in Moore County."
},
{
    question: "One of Nissan's largest manufacturing facilities is located in which county?",
    opA: "Putnam",
    opB: "Rutherford",
    opC: "Haywood",
    opD: "Hawkins",
    answer: "B",
    support: "Nissan employs over 8,000 people in Rutherford County."
},
{
    question: "The national Cornbread Festival occurs annually in which county?",
    opA: "Robertson",
    opB: "Marion",
    opC: "Grundy",
    opD: "Grainger",
    answer: "B",
    support: "Supported by local cast-iron skillet manufacturer Lodge Manufacturing, the cornbread festival occurs in Marion County."
},
{
    question: "All Twix bars and most M&Ms are made at a facility in which county?",
    opA: "McMinn",
    opB: "Lake",
    opC: "Sumner",
    opD: "Bradley",
    answer: "D",
    support: "You can smell chocolate all over Cleveland (Bradley County)."
},
{
    question: "If you went for a stroll down Beele Street, which county would you be in?",
    opA: "Shelby",
    opB: "Unicoi",
    opC: "Hardeman",
    opD: "Lauderdale",
    answer: "A",
    support: "Memphis is famous for blues music. (Shelby County)"
},
{
    question: "Which county is consistently in Forbes' Richest Counties in America list?",
    opA: "Coffee",
    opB: "Knox",
    opC: "Cocke",
    opD: "Williamson",
    answer: "B",
    support: "Franklin and Brentwood both reside in Williamson County."
},
{
    question: "If you catch a race at Bristol Motor Speedway you are in which county?",
    opA: "Sullivan",
    opB: "Campbell",
    opC: "Grainger",
    opD: "Hawkins",
    answer: "A",
    support: "The Bristol track has been open since 1961."
}];

var correct = 0;
var incorrect = 0;
// var score = (correct / 10) * 100
var start = $("#startQ");
var question = $("#question");
var timer = $("#timer");
var time = 30;
var optionA = $("#optionA");
var optionB = $("#optionB");
var optionC = $("#optionC");
var optionD = $("#optionD");
var clockRunning = false;
var responseCorrect = "That is correct!";
var responseFalse = "Incorrect.";
var followUp = $("#support");
var i = 0;
var button = $(".option");
var trans;

//***************FUNCTIONS***************//

function renderQuestion() {
    question.text(qSet[i].question);
    optionA.html(qSet[i].opA);
    optionB.html(qSet[i].opB);
    optionC.html(qSet[i].opC);
    optionD.html(qSet[i].opD);
    question.show();
    optionA.show();
    optionB.show();
    optionC.show();
    optionD.show();
}

function transition() {
    trans = setTimeout(renderQuestion, 3000);
    i++;
    renderQuestion();
    begin();
  }
//***************TIMERFUNCTIONS***************//
function begin() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
}
function stop() {
    clearInterval(intervalId);
    clockRunning = false;
}

//class activity rip-off.  Wasn't sure how to rebuild.
function count() {
    time = 30;
    time--;
    var converted = timeConverter(time);
    console.log(converted);
    $("#timer").text(converted);
    if(converted === "00:00"){
        stop();
    }
}

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

// function setTimeout
//***************STARTFUNCTION***************//
start.click(function(){
    start.hide();
    renderQuestion();
    count();
    timer.show();
    begin();
})

button.click(function(){
    var choice= $(this).attr("data-value");
    if (choice === qSet[i].answer){
        followUp.text("Correct!" + qSet[i].support);
        stop();
        correct++;
        transition();

    } else {
        followUp.text("Incorrect."+ qSet[i].support);
        followUp.hide();
        stop();
        incorrect++;
        transition();
    }
});
