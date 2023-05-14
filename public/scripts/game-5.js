let QnA = [
    {
        "question": "Do you think Ghost was Friendly ?",
        "option1": "Yes",
        "option2": "No",
    },
    {
        "question": "Do you think Ghost was about to kill Ben  ?",
        "option1": "Yes",
        "option2": "No",
    },
    {
        "question": "Do you believe ghost was there to help  You and Your friend ?",
        "option1": "Yes",
        "option2": "No",
    },
    {
        "question": "Do you believe in his judgement ?",
        "option1": "Yes",
        "option2": "No",
    },
    {
        "question": "Do u think here Maths was helpful ?",
        "option1": "Yes",
        "option2": "No",
    },
    {
        "question": "Can we determine, if Ben was about to release ?",
        "option1": "Yes",
        "option2": "No",
    },
    {
        "question": "What do you think , If U failed to answer correctly , Ben has been released ?",
        "option1": "Yes",
        "option2": "No",
    },
    {
        "question": `Due to the friendly nature of the Ghost , what would you like to do ? 
        <br> <br>

        <span span class= "text-bg" style="color: rgb(6, 6, 6);" > Hit "Submit" </span>: Go With you friend to Home telling the story 

         <br><br> or <br><br>
         
         <span class="text-bg" style="color: rgb(6, 6, 6);"> Hit "End Test"</span>: Follow the Ghost for the more adventure ! `,
        "option1": "Yes",
        "option2": "No",
    }
]
let qIndex = -1
let ans1, ans2, ques, res;
window.onload = () => {
    res = []
    // for (let i = 0; i < QnA.length; ++i) {
    //     res.push("no")
    // }
    ques = document.getElementById("question")
    ans1 = document.getElementById("ans1")
    ans2 = document.getElementById("ans2")
    nextQ()

    hideLoader()

    ans1.onclick = () => {
        res.push(QnA[qIndex]["option1"])
        nextQ()
        console.log(ans1);
    }
    ans2.onclick = () => {
        res.push(QnA[qIndex]["option2"])
        nextQ()
        console.log(ans2);
    }

    document.getElementById("ans-btn").onclick = async () => {
        await submitFunc("yes")
    }
    document.getElementById("end-test-btn-1").onclick = async () => {
        await submitFunc("no")
    }
   
}
const submitFunc = async (num) => {
    showBtnLoader()

    let temp = [...res, num]
    console.log(temp);

    if (temp.length < 8) {
        errorMsg("Cannot submit as of now, answer all Questions")
        return
    }
    let response = await postData("/checkAnswer", { answer: temp })
    // console.log(temp);
    successMsg("accepted")
    successMsg("redirecting to next game")
    window.location = "/game"
}
const nextQ = () => {
    qIndex++
    ques.innerHTML = QnA[qIndex]["question"]
    if (qIndex == QnA.length - 1) {
        ans1.style.display = "none"
        ans2.style.display = "none"
        return
    }
    ans1.innerText = QnA[qIndex]["option1"]
    ans2.innerText = QnA[qIndex]["option2"]
}