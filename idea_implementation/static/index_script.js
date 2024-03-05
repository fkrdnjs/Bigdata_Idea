let joblist = {
    "의료": 1,
    "마케팅": 1,
    "IT": 1,
    "컨설팅": 1,
};

function calculateResult() {
    const answer1 = document.querySelector('input[name="answer1"]:checked');
    const answer2 = document.querySelector('input[name="answer2"]:checked');
    const answer3 = document.querySelector('input[name="answer3"]:checked');
    const answer4 = document.querySelector('input[name="answer4"]:checked');
    const answer5 = document.querySelector('input[name="answer5"]:checked');
    const answer6 = document.querySelector('input[name="answer6"]:checked');
    const answer7 = document.querySelector('input[name="answer7"]:checked');
    const answer8 = document.querySelector('input[name="answer8"]:checked');

    if (answer1 && answer2 && answer3 && answer4 && answer5 && answer6 && answer7 && answer8) {
        
        calculateScores(answer1.value, answer2.value, answer3.value, answer4.value,
            answer5.value, answer6.value, answer7.value, answer8.value);

        const highestjob = findHighestJob();
        
        localStorage.setItem('highestjob', highestjob);
        window.location.href = "C:/Users/Neverland/Desktop/final/templates/result.html";

    } else {
        alert("답변을 선택하세요.");
    }
}

function calculateScores(answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8){
    if (answer1 === "true") {
        joblist['의료'] += 1;
        joblist['컨설팅'] += 1;
    }
    else{
        joblist['마케팅'] -= 1;
        joblist['IT'] -= 1;
    }

    if (answer2 === "true") {
        joblist['IT'] += 2;
        joblist['의료'] += 1;
        joblist['마케팅'] += 1;
    }
    else{
        joblist['마케팅'] -= 1;
        joblist['IT'] -= 3;
        joblist['컨설팅'] -= 1;
    }

    if (answer3 === "true") {
        joblist['컨설팅'] += 1;
    }
    else{
        joblist['컨설팅'] -= 1;
    }

    if (answer4 === "true") {
        joblist['IT'] += 2;
        joblist['의료'] += 1;
        joblist['마케팅'] += 1;
    }
    else{
        joblist['마케팅'] -= 1;
        joblist['IT'] -= 5;
        joblist['컨설팅'] -= 1;
    }

    if (answer5 === "true") {
        joblist['IT'] += 1;
        joblist['마케팅'] += 1;
        joblist['컨설팅'] += 1;
    }
    else{
        joblist['마케팅'] -= 2;
        joblist['컨설팅'] -= 2;
    }

    if (answer6 === "true") {
        joblist['의료'] += 1;
    }
    else{
        joblist['IT'] -= 2;
        joblist['컨설팅'] -= 1;
    }

    if (answer7 === "true") {
        joblist['IT'] += 1;
        joblist['의료'] += 1;
        joblist['컨설팅'] += 2;
        joblist['마케팅'] += 1;
    }
    else{
        joblist['컨설팅'] -= 3;
        joblist['마케팅'] -= 1;
    }

    if (answer8 === "true") {

    }
    else{
        joblist['의료'] -= 20;
    }


}

function findHighestJob() {
    let highestjob = "";
    let highestscore = 0;

    for (const job in joblist) {

        if (joblist[job] >= highestscore) {
            highestscore = joblist[job];
            highestjob = job;
        }
    }

    return highestjob;
}
