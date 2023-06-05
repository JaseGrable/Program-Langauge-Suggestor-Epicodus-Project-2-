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
        answerInputs.forEach(function (input) {
            input.addEventListener('change', function () {
                const selectedValue = input.value;

                if (selectedValue === 'yes') {
                    showResultPython();
                } else {
                    showQuestion2();
                    result.classList.add('hidden');
                }
            });
        });
    }

    function showQuestion2() {
        question2.classList.remove('hidden');

        const answerInputs = question2.querySelectorAll('input[type="radio"]');
        answerInputs.forEach(function (input) {
            input.addEventListener('change', function () {
                const selectedValue = input.value;

                if (selectedValue === 'yes') {
                    showResultJava();
                } else {
                    showQuestion3();
                    result.classList.add('hidden');
                }
            });
        });
    }

    function showQuestion3() {
        question3.classList.remove('hidden');

        const answerInputs = question3.querySelectorAll('input[type="radio"]');
        answerInputs.forEach(function (input) {
            input.addEventListener('change', function () {
                const selectedValue = input.value;

                if (selectedValue === 'yes') {
                    showResultC();
                } else {
                    showQuestion4();
                    result.classList.add('hidden');
                }
            });
        });
    }

    function showQuestion4() {
        question4.classList.remove('hidden');

        const answerInputs = question4.querySelectorAll('input[type="radio"]');
        answerInputs.forEach(function (input) {
            input.addEventListener('change', function () {
                const selectedValue = input.value;

                if (selectedValue === 'yes') {
                    showResultJava();
                } else {
                    showQuestion5();
                    result.classList.add('hidden');
                }
            });
        });
    }

    function showQuestion5() {
        question5.classList.remove('hidden');

        const answerInputs = question5.querySelectorAll('input[type="radio"]');
        answerInputs.forEach(function (input) {
            input.addEventListener('change', function () {
                const selectedValue = input.value;

                if (selectedValue === 'yes') {
                    showResultC();
                } else {
                    showResultRetry();

                }
            });
        });
    }

    function showResultPython() {
        resultSection.classList.remove('hidden');
        resultPython.classList.remove('hidden');
        refreshButton.classList.remove('hidden');
    }

    function showResultJava() {
        resultSection.classList.remove('hidden');
        resultJava.classList.remove('hidden');
        refreshButton.classList.remove('hidden');
    }

    function showResultC() {
        resultSection.classList.remove('hidden');
        resultC.classList.remove('hidden');
        refreshButton.classList.remove('hidden');
    }

    function showResultRetry() {
        resultSection.classList.remove('hidden');
        resultRetry.classList.remove('hidden');
        refreshButton.classList.remove('hidden');
    }

    function resetForm() {
        questionForm.reset();
        resultSection.classList.add('hidden');
        resultPython.classList.add('hidden');
        resultJava.classList.add('hidden');
        resultC.classList.add('hidden');
        resultRetry.classList.add('hidden');
        refreshButton.classList.add('hidden');
        showQuestion1();
    }

    refreshButton.addEventListener('click', resetForm);

    resetForm();
};