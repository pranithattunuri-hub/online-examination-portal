// DOM Elements
const loginSelection = document.getElementById('loginSelection');
const teacherLoginSection = document.getElementById('teacherLoginSection');
const teacherDashboard = document.getElementById('teacherDashboard');
const studentLoginSection = document.getElementById('studentLoginSection');
const examSection = document.getElementById('examSection');
const studentLoginForm = document.getElementById('studentLoginForm');
const teacherLoginForm = document.getElementById('teacherLoginForm');
const examForm = document.getElementById('examForm');
const studentNameDisplay = document.getElementById('studentNameDisplay');
const rollNumberDisplay = document.getElementById('rollNumberDisplay');
const timeRemaining = document.getElementById('timeRemaining');
const submitExamBtn = document.getElementById('submitExam');
const clearAnswersBtn = document.getElementById('clearAnswers');
const examSettingsForm = document.getElementById('examSettingsForm');
const questionForm = document.getElementById('questionForm');

// Additional DOM Elements
const showQuestionPaperBtn = document.getElementById('showQuestionPaper');
const questionPaperView = document.getElementById('questionPaperView');
const questionsList = document.getElementById('questionsList');
const addQuestionBtn = document.getElementById('addQuestion');
const questionsContainer = document.getElementById('questionsContainer');

// Exam Settings
let examSettings = {
    timeLimit: 30,
    passingScore: 40
};

// Questions Array
let questions = [
    {
        question: "What does CPU stand for?",
        options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Processor Utility"],
        correct: 1
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "HTML", "Java", "C++"],
        correct: 1
    },
    {
        question: "What does RAM stand for?",
        options: ["Random Access Memory", "Readable Access Memory", "Rapid Action Module", "Run Access Machine"],
        correct: 0
    },
    {
        question: "Which of the following is an output device?",
        options: ["Keyboard", "Scanner", "Mouse", "Monitor"],
        correct: 3
    },
    {
        question: "What does HTTP stand for?",
        options: ["HyperText Transfer Protocol", "High Text Transmission Program", "Hyper Terminal Transfer Process", "High Transfer Text Protocol"],
        correct: 0
    },
    {
        question: "Which company developed the Windows operating system?",
        options: ["Apple", "Microsoft", "Google", "IBM"],
        correct: 1
    },
    {
        question: "What is the shortcut key to copy text in most computers?",
        options: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + Z"],
        correct: 0
    },
    {
        question: "Which of these is not a programming language?",
        options: ["Java", "HTML", "Python", "Windows"],
        correct: 3
    },
    {
        question: "What device is used to connect a computer to a network?",
        options: ["Printer", "Router", "Monitor", "Joystick"],
        correct: 1
    },
    {
        question: "What kind of storage device is a USB flash drive?",
        options: ["Magnetic", "Optical", "Solid-State", "Cloud"],
        correct: 2
    }
];

// Results Storage
let examResults = [];

// Teacher Credentials
const TEACHER_USERNAME = 'archana';
const TEACHER_PASSWORD = 'teacher';

// Variables
let examTime;
let timerInterval;

// Show/Hide Functions
function showTeacherLogin() {
    loginSelection.classList.add('hidden');
    teacherLoginSection.classList.remove('hidden');
}

function showStudentLogin() {
    loginSelection.classList.add('hidden');
    studentLoginSection.classList.remove('hidden');
}

// Teacher Login Handler
teacherLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('teacherUsername').value;
    const password = document.getElementById('teacherPassword').value;

    if (username === TEACHER_USERNAME && password === TEACHER_PASSWORD) {
        teacherLoginSection.classList.add('hidden');
        teacherDashboard.classList.remove('hidden');
        updateResultsDisplay();
    } else {
        alert('Invalid credentials!');
    }
});

// Exam Settings Handler
examSettingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    examSettings.timeLimit = parseInt(document.getElementById('timeLimit').value);
    examSettings.passingScore = parseInt(document.getElementById('passingScore').value);
    alert('Exam settings updated successfully!');
});

// Question Manager Handler
questionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const questionEntries = document.querySelectorAll('.question-entry');
    const newQuestions = Array.from(questionEntries).map(entry => {
        return {
            question: entry.querySelector('.question-text').value,
            options: Array.from(entry.querySelectorAll('.option-input')).map(input => input.value),
            correct: parseInt(entry.querySelector('.correct-option').value) - 1
        };
    });

    // Add new questions to the existing array
    questions.push(...newQuestions);

    questionForm.reset();
    questionsContainer.innerHTML = '';
    questionsContainer.appendChild(createQuestionTemplate());
    alert('Questions saved successfully!');
});

// Student Login Handler
studentLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const studentName = document.getElementById('studentName').value;
    const rollNumber = document.getElementById('rollNumber').value;

    studentNameDisplay.textContent = `Student: ${studentName}`;
    rollNumberDisplay.textContent = `Roll Number: ${rollNumber}`;

    studentLoginSection.classList.add('hidden');
    examSection.classList.remove('hidden');

    examTime = examSettings.timeLimit * 60;
    startTimer();
    loadQuestions();
});

// Load Questions
function loadQuestions() {
    examForm.innerHTML = '';
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <h3>Question ${index + 1}</h3>
            <p>${q.question}</p>
            <div class="options">
                ${q.options.map((option, optIndex) => `
                    <label class="option">
                        <input type="radio" name="q${index}" value="${optIndex}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
        examForm.appendChild(questionDiv);
    });
}

// Timer Function
function startTimer() {
    timerInterval = setInterval(() => {
        const minutes = Math.floor(examTime / 60);
        const seconds = examTime % 60;
        timeRemaining.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (examTime <= 0) {
            clearInterval(timerInterval);
            submitExam();
        }

        examTime--;
    }, 1000);
}

// Submit Exam
submitExamBtn.addEventListener('click', submitExam);

function submitExam() {
    clearInterval(timerInterval);

    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });

    const percentage = (score / questions.length) * 100;
    const passed = percentage >= examSettings.passingScore;

    // Save result
    examResults.push({
        name: document.getElementById('studentName').value,
        rollNumber: document.getElementById('rollNumber').value,
        score: percentage,
        passed: passed
    });

    alert(`Exam completed!\nYour score: ${score}/${questions.length} (${percentage.toFixed(1)}%)\n${passed ? 'PASSED' : 'FAILED'}`);

    updateResultsDisplay();
    resetExam();
}

// Update Results Display
function updateResultsDisplay() {
    const totalStudents = examResults.length;
    const passedStudents = examResults.filter(result => result.passed);
    const passPercentage = totalStudents > 0 ? (passedStudents.length / totalStudents * 100).toFixed(1) : 0;

    // Sort results by score
    const sortedResults = [...examResults].sort((a, b) => b.score - a.score);

    // Update top scorer
    if (sortedResults.length > 0) {
        document.getElementById('topScorer').innerHTML = createStudentResultHTML(sortedResults[0]);
    }

    // Update passed students list
    const passedList = document.getElementById('passedList');
    passedList.innerHTML = sortedResults
        .filter(result => result.passed)
        .map(createStudentResultHTML)
        .join('');

    // Update failed students list
    const failedList = document.getElementById('failedList');
    failedList.innerHTML = sortedResults
        .filter(result => !result.passed)
        .map(createStudentResultHTML)
        .join('');

    // Update statistics
    document.getElementById('totalStudents').textContent = totalStudents;
    document.getElementById('passPercentage').textContent = `${passPercentage}%`;
}

function createStudentResultHTML(result) {
    return `
        <div class="student-result">
            <strong>${result.name}</strong> (${result.rollNumber})<br>
            Score: ${result.score.toFixed(1)}%
        </div>
    `;
}

// Clear Answers
clearAnswersBtn.addEventListener('click', () => {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => radio.checked = false);
});

// Reset Exam
function resetExam() {
    examForm.innerHTML = '';
    studentLoginForm.reset();
    examSection.classList.add('hidden');
    loginSelection.classList.remove('hidden');
    examTime = examSettings.timeLimit * 60;
    timeRemaining.textContent = `${examSettings.timeLimit}:00`;
}

// Show/Hide Question Paper
showQuestionPaperBtn.addEventListener('click', () => {
    const isHidden = questionPaperView.classList.contains('hidden');
    questionPaperView.classList.toggle('hidden');
    showQuestionPaperBtn.textContent = isHidden ? 'Hide Question Paper' : 'Show Question Paper';
    if (!isHidden) return;

    // Update question paper view
    questionsList.innerHTML = questions.map((q, index) => `
        <div class="question-paper-item" data-index="${index}">
            <h4>Question ${index + 1}</h4>
            <p>${q.question}</p>
            <div class="options">
                ${q.options.map((opt, i) => `
                    <div class="${i === q.correct ? 'correct' : ''}">
                        ${i + 1}. ${opt}
                    </div>
                `).join('')}
            </div>
            <button type="button" class="edit-question-btn" onclick="editQuestion(${index})">
                Edit Question
            </button>
        </div>
    `).join('');
});

// Add Question Template
function createQuestionTemplate() {
    const questionEntry = document.createElement('div');
    questionEntry.className = 'question-entry';
    questionEntry.innerHTML = `
        <div class="form-group">
            <label>Question:</label>
            <textarea class="question-text" required></textarea>
        </div>
        <div class="form-group">
            <label>Options:</label>
            <input type="text" class="option-input" placeholder="Option 1" required>
            <input type="text" class="option-input" placeholder="Option 2" required>
            <input type="text" class="option-input" placeholder="Option 3" required>
            <input type="text" class="option-input" placeholder="Option 4" required>
        </div>
        <div class="form-group">
            <label>Correct Option (1-4):</label>
            <input type="number" class="correct-option" min="1" max="4" required>
        </div>
        <button type="button" class="delete-question">Delete Question</button>
    `;
    return questionEntry;
}

// Add New Question Field
addQuestionBtn.addEventListener('click', () => {
    questionsContainer.appendChild(createQuestionTemplate());
});

// Delete Question
questionsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-question')) {
        const questionEntry = e.target.closest('.question-entry');
        if (questionsContainer.children.length > 1) {
            questionEntry.remove();
        } else {
            alert('You must have at least one question!');
        }
    }
});

// Edit Question
function editQuestion(index) {
    const question = questions[index];
    const questionEntry = createQuestionTemplate();

    // Fill in the values
    questionEntry.querySelector('.question-text').value = question.question;
    const optionInputs = questionEntry.querySelectorAll('.option-input');
    question.options.forEach((opt, i) => optionInputs[i].value = opt);
    questionEntry.querySelector('.correct-option').value = question.correct + 1;

    // Replace existing question in the form
    questionsContainer.innerHTML = '';
    questionsContainer.appendChild(questionEntry);

    // Remove the question from the array
    questions.splice(index, 1);

    // Hide question paper view
    questionPaperView.classList.add('hidden');
    showQuestionPaperBtn.textContent = 'Show Question Paper';

    // Scroll to form
    questionEntry.scrollIntoView({ behavior: 'smooth' });
}