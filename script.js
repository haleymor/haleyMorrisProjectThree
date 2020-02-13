const myApp = {};
myApp.logos = [
    {
    logo: "assets/atari.png",
    choices: {
        a: "Mitsubishi",
        b: "Atari",
        c: "Oracle",
        d: "Omega"
    },
    correctAnswer: "b",
    altText: "Red logo with three lines forming a shape similar to an upside down tree trunk"
    },
    {
    logo: "assets/linux.png",
    choices: {
        a: "Linux",
        b: "Emperor",
        c: "Club Penguin",
        d: "Penguin Books"
    },
    correctAnswer: "a",
    altText: "Logo consisting of a cartoon penguin sitting up"
    },
    {
    logo: "assets/lufthansa.png",
    choices: {
        a: "Emporio Armani",
        b: "Pelikan",
        c: "Stablio",
        d: "Lufthansa"
    },
    correctAnswer: "d",
    altText: "Navy blue logo of a bird flying upwards within a circle"
    },
    {
    logo: "assets/rolex.png",
    choices: {
        a: "Hallmark",
        b: "Pandora",
        c: "Crown Royale",
        d: "Rolex"
    },
    correctAnswer: "d",
    altText: "Logo consisting of a gold crown with five prongs each with small circles on the top"
    },
    {
    logo: "assets/toblerone.png",
    choices: {
        a: "Paramount",
        b: "Toblerone",
        c: "Prudential",
        d: "Summit"
    },
    correctAnswer: "b",
    altText: "Gold logo that is the peak of a mountain"
    },
    {
    logo: "assets/bp.png",
    choices: {
        a: "Starbucks",
        b: "Sunlife Financial",
        c: "Burger King",
        d: "British Petroleum"
    },
    correctAnswer: "d",
    altText: "Flower shaped logo with white center, yellow inner petals, light green middle petals and dark green outer petals"
    },
    {
    logo: "assets/ecko.png",
    choices: {
        a: "Ecko",
        b: "WWF",
        c: "Obey",
        d: "Diesel"
    },
    correctAnswer: "a",
    altText: "Red logo consisting of a rhino surronded by a horizontal oval broken up into four equal sections"
    },
    {
    logo: "assets/unilever.png",
    choices: {
        a: "Unitech",
        b: "Unicef",
        c: "Unilever",
        d: "Universal Studios"
    },
    correctAnswer: "c",
    altText: "Blue logo in U shape. The U is filled with small images of plants, animals and shapes"
    },
];

// creates a new array populated with the results of calling currentQuestion on every element in the calling array.
const quizQuestions = myApp.logos.map(function(currentQuestion, index) {
    const question = `
        <div class="imgLogo">
            <img src="${currentQuestion.logo}" alt="${currentQuestion.altText}">
        </div>
        <div class="choices">
            <div class="choice1 choice">
                <input type="radio" data-index="${index}" name="selectedQuestion" id="aChoice" value="a">
                <label for="aChoice">${currentQuestion.choices.a}</label>
            </div>
            <div class="choice2 choice">
                <input type="radio" data-index="${index}" name="selectedQuestion" id="bChoice" value="b">
                <label for="bChoice">${currentQuestion.choices.b}</label>
            </div>
            <div class="choice3 choice">
                <input type="radio" data-index="${index}" name="selectedQuestion" id="cChoice" value="c">
                <label for="cChoice">${currentQuestion.choices.c}</label>
            </div>
            <div class="choice4 choice">
                <input type="radio" data-index="${index}" name="selectedQuestion" id="dChoice" value="d">
                <label for="dChoice">${currentQuestion.choices.d}</label>
            </div>
        </div>`;
    return question;
});

let score = 0;

myApp.init = function() {
    // on page load have event listener that listens for click on button
    $(".button").on("click", function() {
    // when click event is fired have html for logo 1 be added to the page
    $(".card").html(quizQuestions[0]);
    });
  // then listen for change event on radio button
    $(".card").on("change", "input", function() {
    // only one radio button can be selected at one time
    $(".selectedQuestion")
        .not(this)
        .prop("checked", false);
    // store users choice as letter
    const userChoice = $(this).val();
    // store current question index in order to update current question variable
    const currentQuestionIndex = $(this).data("index");
    // starting score should be zero
    // let score = 0;
    //compare if userChoice is equal to correctAnswer
    // if correct
    if (userChoice === myApp.logos[currentQuestionIndex].correctAnswer) {
      // if last question is correct score++ & show results
        if (currentQuestionIndex === 7) {
        score++;
        $(".card").html(`
                    <h2>Your score is ${score} / 8 </h2>
                    <button class="button resultsButton">
                        Try Again
                        <div class="button__horizontal"></div>
                        <div class="button__vertical"></div>
                    </button>`);
        // if not last question is correct score++ and next question
        } else {
        score++;
        $(".card").html(quizQuestions[currentQuestionIndex + 1]);
        }
      //if incorrect
    } else {
      // if last question is incorrect show results
        if (currentQuestionIndex === 7) {
        $(".card").html(`
                    <h2>Your score is ${score} / 8 </h2>
                    <button class="button resultsButton">
                        Try Again
                        <div class="button__horizontal"></div>
                        <div class="button__vertical"></div>
                    </button>`);
        // if not last question go to next question
        } else {
        $(".card").html(quizQuestions[currentQuestionIndex + 1]);
        }
    }
    });

  // listen for click on try again button to restart entire game
    $(".card").on("click", ".resultsButton", function() {
        location.reload();
    });
};

$(function() {
    myApp.init();
});
