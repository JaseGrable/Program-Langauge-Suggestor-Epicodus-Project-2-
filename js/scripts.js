window.onload = function () {
    const questionForm = document.getElementById('questionForm');
    const questions = questionForm.getElementsByClassName('question');
    const resultSection = document.getElementById('result');

    // Function to show questions one by one
    function showNextQuestion(index) {
        // Check if there are questions remaining to show
        if (index < questions.length) {
            // Hide all questions
            for (let i = 0; i < questions.length; i++) {
                questions[i].classList.add('hidden');
            }

            // Show the next question
            questions[index].classList.remove('hidden');

            // Create event listener for the current question's answer inputs
            const answerInputs = questions[index].querySelectorAll('input[type="radio"]');
            for (let i = 0; i < answerInputs.length; i++) {
                answerInputs[i].addEventListener('change', function () {
                    if (answerInputs[i].value === 'yes') {
                        // 'Yes' is selected, show results section and end
                        resultSection.classList.remove('hidden');
                    } else {
                        // 'No' is selected, show next question
                        showNextQuestion(index + 1);
                    }
                });
            }
        }
    }

    // Start the question process
    showNextQuestion(0);
};