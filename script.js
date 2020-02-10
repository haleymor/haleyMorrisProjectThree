const myApp = {};
myApp.logos = [
    {
        logo: "assets/atari.png",
        choices: {
            a: "Mitsubishi",
            b: "Atari",
            c: "Oracle",
            d: "Omega",
        },
        correctAnswer: "b"
    },
    {
        logo: 'assets/linux.png',
        choices: {
            a: 'Linux',
            b: 'Emperor',
            c: 'Club Penguin',
            d: 'Penguin Books',
        },
        correctAnswer: 'a'
    },
    {
        logo: 'assets/lufthansa.png',
        choices: {
            a: 'Emporio Armani',
            b: 'Pelikan',
            c: 'Stablio',
            d: 'Lufthansa',
        },
        correctAnswer: 'd'
    },
    {
        logo: 'assets/rolex.png',
        choices: {
            a: 'Hallmark',
            b: 'Pandora',
            c: 'Crown Royale',
            d: 'Rolex',
        },
        correctAnswer: 'd',
    },
    {
        logo: 'assets/toblerone.png',
        choices: {
            a: 'Paramount',
            b: 'Toblerone',
            c: 'Prudential',
            d: 'Summit Entertainment',
        },
        correctAnswer: 'b'
    },
];

// creates a new array populated with the results of calling currentQuestion on every element in the calling array.
const quizQuestions = myApp.logos.map(function(currentQuestion, index) {
    const question = `
        <div class="imgLogo">
            <img src="${currentQuestion.logo}" alt="">
        </div>
        <div class="choices">
            <div class="choice1">
                <input type="radio" data-index="${index}" name="achoice" class="selectedAnswer" value="a">
                <label for="a">${currentQuestion.choices.a}</label>
            </div>
            <div class="choice2">
                <input type="radio" data-index="${index}" name="bchoice" class="selectedAnswer" value="b">
                <label for="b">${currentQuestion.choices.b}</label>
            </div>
            <div class="choice3">
                <input type="radio" data-index="${index}" name="cChoice" class="selectedAnswer" value="c">
                <label for="$c">${currentQuestion.choices.c}</label>
            </div>
            <div class="choice4">
                <input type="radio" data-index="${index}" name="dChoice" class="selectedAnswer" value="d">
                <label for="d">${currentQuestion.choices.d}</label>
            </div>
        </div>`;
    return question;
});

let score = 0;

myApp.init = function () {
    // on page load have event listener that listens for click on button
    $('.button').on('click', function(e) {
        e.preventDefault();
        // when click event is fired have html for logo 1 be added to the page
        $('.card').html(quizQuestions[0]);
    });
    // then listen for change event on radio button
    $('.card').on('change', 'input', function() {
        // only one radio button can be selected at one time
        $('.selectedAnswer').not(this).prop('checked', false);
        // store users choice as letter 
        const userChoice = $(this).val();
        // store current question index in order to update current question variable
        const currentQuestionIndex = $(this).data('index');
        // starting score should be zero
        // let score = 0;
        //compare if userChoice is equal to correctAnswer
        if (userChoice === myApp.logos[currentQuestionIndex].correctAnswer && currentQuestionIndex <= 3) {
            //if correct add 1 to score and have next come up
            score++;
            $('.card').html(quizQuestions[currentQuestionIndex + 1]);
            console.log(score);
        } else if (userChoice !== myApp.logos[currentQuestionIndex].correctAnswer && currentQuestionIndex <= 3) {
            // if inccorrect just have next question come up
            $('.card').html(quizQuestions[currentQuestionIndex + 1]);
        } else
            $('.card').html(`<h2>Your score is ${score} / 5 </h2>`);
    });
};

$(function () {
    myApp.init();
});
//     update current question variable
        // implement an attribute on each radio button called dataQuestion, for first question this would be zero
        //then have correct answer be compared against userChoice directly 

// repeat above for next change event until go through all logos, if current question variable = 5 then display results by appending html
// listen for click on try again button to restart entire game(maybe stretch)