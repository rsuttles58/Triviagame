//***************VARIABLES************//

var qSet = [{
    question: "What county has the largest population?",
    opA: "Davidson",
    opB: "Knox",
    opC: "Shelby",
    opD: "Montgomery",
    answer: "C"
},
{
    question: "The Civil War 'Battle Above The Clouds' was fought in which county?",
    opA: "Anderson",
    opB: "Cheatham",
    opC: "Hamilton",
    opD: "Marion",
    answer: "C"
},
{
    question: "Jack Daniels Distillery is located in Lynchburg, Tennessee in which county?",
    opA: "Cumberland",
    opB: "Tipton",
    opC: "Sequatchie",
    opD: "Moore",
    answer: "D"
},
{
    question: "One of Nissan's largest manufacturing facilities is located in which county?",
    opA: "Putnam",
    opB: "Rutherford",
    opC: "Haywood",
    opD: "Hawkins",
    answer: "B"
},
{
    question: "The national Cornbread Festival occurs annually in which county?",
    opA: "Robertson",
    opB: "Marion",
    opC: "Grundy",
    opD: "Grainger",
    answer: "B"
},
{
    question: "All Twix bars and most M&Ms are made at a facility in which county?",
    opA: "McMinn",
    opB: "Lake",
    opC: "Sumner",
    opD: "Bradley",
    answer: "D"
},
{
    question: "If you went for a stroll down Beele Street, which county would you be in?",
    opA: "Shelby",
    opB: "Unicoi",
    opC: "Hardeman",
    opD: "Lauderdale",
    answer: "A"
},
{
    question: "Which county is consistently in Forbes' Richest Counties in America list?",
    opA: "Coffee",
    opB: "Knox",
    opC: "Cocke",
    opD: "Williamson",
    answer: "B"
},
{
    question: "If you catch a race at Bristol Motor Speedway you are in which county?",
    opA: "Sullivan",
    opB: "Campbell",
    opC: "Grainger",
    opD: "Hawkins",
    answer: "A"
}
]

var correct = 0;
var incorrect = 0;
var start = $("#startQ");
var question = $("#question");
var timer = $("#timer");
var time = 30;
var optionA = $("#optionA");
var optionB = $("#optionB");
var optionC = $("#optionC");
var optionD = $("#optionD");
var clockRunning = false;

//***************FUNCTIONS***************//

function renderQuestion() {
    question.text(qSet[0].question);
    optionA.html(qSet[0].opA);
    optionB.html(qSet[0].opB);
    optionC.html(qSet[0].opC);
    optionD.html(qSet[0].opD);
    question.show();
    optionA.show();
    optionB.show();
    optionC.show();
    optionD.show();
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

//***************STARTFUNCTION***************//
start.click(function () {
    start.hide();
    renderQuestion();
    count();
    timer.show();
    begin();
})

