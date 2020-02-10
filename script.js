const logoQuiz = {};
const logos = [
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

const quizQuestions = logos.map(function(currentQuestion) {
    const question = `
        <div class="imgLogo">
            <img src="${currentQuestion.logo}" alt="">
        </div>
        <div class="choices">
            <div class="choice1">
                <input type="radio" name="aChoice" class="selectedAnswer" value="a">
                <label for="a">${currentQuestion.choices.a}</label>
            </div>
            <div class="choice2">
                <input type="radio" name="bChoice" class="selectedAnswer" value="b">
                <label for="b">${currentQuestion.choices.b}</label>
            </div>
            <div class="choice3">
                <input type="radio" name="cChoice" class="selectedAnswer" value="c">
                <label for="$c">${currentQuestion.choices.c}</label>
            </div>
            <div class="choice4">
                <input type="radio" name="dChoice" class="selectedAnswer" value="d">
                <label for="d">${currentQuestion.choices.d}</label>
            </div>
        </div>`;
    return question;
});


logoQuiz.init = function () {
    // on page load have event listener that listens for click on button
    $('a').on('click', function(e) {
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
        // starting score should be zero
        let score = 0;
        for (let i = 0; i < logos.length; i++)
            //compare if userChoice is equal to correctAnswer
            if (userChoice === logos[i].correctAnswer) {
                //if correct add 1 to score and have question 2 come up
                score++;
                $('.card').html(logos[i++]);
            } else {
                // if inccorrect just have question 2 come up
                $('.card').html(logos[i++]);
            }
        console.log(score);
    });
};


$(function () {
    logoQuiz.init();
});
//     update current question variable
// repeat above for next change event until go through all logos, if current question variable = 5 then display results by appending html
// listen for click on try again button to restart entire game(maybe stretch)