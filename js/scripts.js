window.onload = function () {
    const questionForm = document.getElementById('questionForm');
    const question1 = document.getElementById('question1');
    const question2 = document.getElementById('question2');
    const question3 = document.getElementById('question3');
    const question4 = document.getElementById('question4');
    const question5 = document.getElementById('question5');
    const resultSection = document.getElementById('result');
    const resultPython = document.getElementById('pythonResult');
    const resultJava = document.getElementById('javaResult');
    const resultC = document.getElementById('cResult');
    const resultRetry = document.getElementById('resultRetry');
    const refreshButton = document.getElementById('refreshButton');

    function showQuestion1() {
        question1.classList.remove('hidden');

        const answerInputs = question1.querySelectorAll('input[type="radio"]');
        answerInputs.forEach(function (input)) {
            input.addEventListener('change', function () {
                const selectedValue = input.value;

                if (selectedValue === 'yes') {
                    showResultPython();
                } else {
                    showQuestion2();
                }
            })
        }
    }
}