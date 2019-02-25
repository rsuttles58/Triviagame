//***************VARIABLES************//

var qSet = [{question: "What county has the largest population?",
            optionA: "Davidson",
            optionB: "Knox",
            optionC: "Shelby",
            optionD: "Montgomery",
            answer: "A"},
            {question: "The Civil War 'Battle Above The Clouds' was fought in which county?",
            optionA: "Anderson",
            optionB: "Cheatham",
            optionC: "Hamilton",
            optionD: "Marion",
            answer: "C"},
            {question: "Jack Daniels Distillery is located in Lynchburg, Tennessee in which county?",
            optionA: "Cumberland",
            optionB: "Tipton",
            optionC: "Sequatchie",
            optionD: "Moore",
            answer: "D"},
            {question: "One of Nissan's largest manufacturing facilities is located in which county?",
            optionA: "Putnam",
            optionB: "Rutherford",
            optionC: "Haywood",
            optionD: "Hawkins",
            answer: "B"},
            {question: "The national Cornbread Festival occurs annual in which county?",
            optionA: "Robertson",
            optionB: "Marion",
            optionC: "Grundy",
            optionD: "Grainger",
            answer: "B"},
            {question: "All Twix bars and most M&Ms are made at a facility in which county?",
            optionA: "McMinn",
            optionB: "Lake",
            optionC: "Sumner",
            optionD: "Bradley",
            answer: "D"},
            {question: "If you went for a stroll down Beele Street, which county would you be in?",
            optionA: "Shelby",
            optionB: "Unicoi",
            optionC: "Hardeman",
            optionD: "Lauderdale",
            answer: "A"},
            {question: "Which county is consistently in Forbes' Richest Counties in America list?",
            optionA: "Coffee",
            optionB: "Knox",
            optionC: "Cocke",
            optionD: "Williamson",
            answer: "B"},
            {question: "If you catch a race at Bristol Motor Speedway you are in which county?",
            optionA: "Sullivan",
            optionB: "Campbell",
            optionC: "Grainger",
            optionD: "Hawkins",
            answer: "D"}
        ]

var correct = 0;
var incorrect = 0;
var start = $("#startQ");
var question = $("#question");

//***************FUNCTIONS***************//

function renderQuestion(){
    question.text(qSet[0].question);
    
}















start.click(function(){
    start.hide();
    renderQuestion();
})

