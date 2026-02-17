// =========================================================================
// SHARED SCRIPT.JS - CLEAN VERSION FOR CSE/ECE/EEE/CIVIL/MECH
// =========================================================================

const CURRENT_DEPT = window.DEPARTMENT || 'default';

const QUESTIONS_DEFAULT = [
  { q: 'What does CPU stand for?', o: ['Central Process Unit', 'Central Processing Unit', 'Computer Personal Unit', 'Central Processor Utility'], correct: 1 },
  { q: 'Which language is primarily used for web development?', o: ['Python', 'HTML', 'Java', 'C++'], correct: 1 },
  { q: 'What does RAM stand for?', o: ['Random Access Memory', 'Readable Access Memory', 'Rapid Action Module', 'Run Access Machine'], correct: 0 },
  { q: 'Which of the following is an output device?', o: ['Keyboard', 'Scanner', 'Mouse', 'Monitor'], correct: 3 },
  { q: 'What does HTTP stand for?', o: ['HyperText Transfer Protocol', 'High Text Transmission Program', 'Hyper Terminal Transfer Process', 'High Transfer Text Protocol'], correct: 0 },
  { q: 'Which company developed the Windows OS?', o: ['Apple', 'Microsoft', 'Google', 'IBM'], correct: 1 },
  { q: 'What is the shortcut key to copy?', o: ['Ctrl + C', 'Ctrl + X', 'Ctrl + V', 'Ctrl + Z'], correct: 0 },
  { q: 'Which is not a programming language?', o: ['Java', 'HTML', 'Python', 'Windows'], correct: 3 },
  { q: 'Device used to connect a computer to a network?', o: ['Printer', 'Router', 'Monitor', 'Joystick'], correct: 1 },
  { q: 'USB flash drive is what type of device?', o: ['Magnetic', 'Optical', 'Solid-State', 'Cloud'], correct: 2 },
  { q: 'CD flash drive stores mostly?', o: ['Save DB', 'music', 'Server', 'Cloud'], correct: 1 }
];

const QUESTIONS_CSE = [
  { q: 'Which data structure uses FIFO?', o: ['Stack', 'Queue', 'Tree', 'Graph'], correct: 1 },
  { q: 'Which language is used for Android app development?', o: ['Python', 'Kotlin', 'Swift', 'C'], correct: 1 },
  { q: 'Time complexity of binary search?', o: ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'], correct: 1 },
  { q: 'HTML stands for?', o: ['Hyper Transfer Markup Language', 'HyperText Markup Language', 'HighText Machine Language', 'None'], correct: 1 },
  { q: 'Which of these is a backend framework?', o: ['React', 'Angular', 'Vue', 'Django'], correct: 3 },
  { q: 'In databases, SQL stands for?', o: ['Sequential Query Language', 'Structured Query Language', 'Standard Query Language', 'None'], correct: 1 },
  { q: 'OOP stands for?', o: ['Objective Oriented Programming', 'Object Oriented Programming', 'Open Output Programming', 'None'], correct: 1 },
  { q: 'Which one is a NoSQL DB?', o: ['MySQL', 'MongoDB', 'PostgreSQL', 'Oracle'], correct: 1 },
  { q: 'CSS is used for?', o: ['Structure', 'Logic', 'Styling', 'Database'], correct: 2 },
  { q: 'Which of these is not an operating system?', o: ['Linux', 'Windows', 'Oracle', 'macOS'], correct: 2 }
];

const QUESTIONS_ECE = [
  { q: 'Ohm’s Law is?', o: ['V=IR', 'I=VR', 'R=VI', 'None'], correct: 0 },
  { q: 'Which is a digital device?', o: ['Transistor', 'Resistor', 'Microprocessor', 'Inductor'], correct: 2 },
  { q: 'Basic unit of capacitance?', o: ['Volt', 'Ohm', 'Farad', 'Watt'], correct: 2 },
  { q: 'A diode allows current to flow in?', o: ['Both directions', 'No direction', 'One direction', 'Random direction'], correct: 2 },
  { q: 'Which modulation is used in FM radio?', o: ['Amplitude', 'Frequency', 'Phase', 'Pulse'], correct: 1 },
  { q: 'Carrier signal is used in?', o: ['Modulation', 'Demodulation', 'Both', 'None'], correct: 2 },
  { q: 'Which of these is a logic gate?', o: ['AND', 'NAND', 'XOR', 'All'], correct: 3 },
  { q: 'The unit of inductance is?', o: ['Farad', 'Henry', 'Ohm', 'Watt'], correct: 1 },
  { q: 'Basic component of microcontroller?', o: ['ADC', 'Processor', 'Capacitor', 'Amplifier'], correct: 1 },
  { q: 'Which is a sensor?', o: ['Arduino', 'LDR', 'IC', 'LED'], correct: 1 }
];

const QUESTIONS_EEE = [
  { q: 'Which law governs electromagnetic induction?', o: ['Faraday’s Law', 'Ohm’s Law', 'Lenz Law', 'Kirchhoff’s Law'], correct: 0 },
  { q: 'Unit of electrical resistance?', o: ['Watt', 'Ampere', 'Volt', 'Ohm'], correct: 3 },
  { q: 'AC stands for?', o: ['Alternating Current', 'Applied Current', 'Active Current', 'None'], correct: 0 },
  { q: 'A transformer works on?', o: ['AC', 'DC', 'Both', 'None'], correct: 0 },
  { q: 'Which is not a power generation source?', o: ['Wind', 'Hydro', 'Coal', 'TV'], correct: 3 },
  { q: 'DC motor converts?', o: ['Electrical to Mechanical', 'Mechanical to Electrical', 'Thermal to Electrical', 'None'], correct: 0 },
  { q: 'Which is used for energy storage?', o: ['Inductor', 'Capacitor', 'Resistor', 'Relay'], correct: 1 },
  { q: 'SI unit of power?', o: ['Joule', 'Watt', 'Ampere', 'Volt'], correct: 1 },
  { q: 'Which is a switchgear?', o: ['MCB', 'GCB', 'VCB', 'All'], correct: 3 },
  { q: 'Which one is a conductor?', o: ['Plastic', 'Rubber', 'Copper', 'Wood'], correct: 2 }
];

const QUESTIONS_CIVIL = [
  { q: 'Unit of force?', o: ['Newton', 'Joule', 'Pascal', 'Watt'], correct: 0 },
  { q: 'Which is a construction material?', o: ['Lime', 'Cement', 'Clay', 'All'], correct: 3 },
  { q: 'Slump test is for?', o: ['Bricks', 'Cement', 'Concrete', 'Soil'], correct: 2 },
  { q: 'Which is a type of foundation?', o: ['Pile', 'Raft', 'Mat', 'All'], correct: 3 },
  { q: 'Brick size in mm?', o: ['190x90x90', '200x100x100', '250x125x75', 'None'], correct: 0 },
  { q: 'Which beam resists bending?', o: ['T-Beam', 'L-Beam', 'Cantilever', 'All'], correct: 3 },
  { q: 'Which soil is best for foundation?', o: ['Clay', 'Silt', 'Gravel', 'Peat'], correct: 2 },
  { q: 'Unit of pressure?', o: ['Joule', 'Pascal', 'Watt', 'Newton'], correct: 1 },
  { q: 'Which test checks cement strength?', o: ['Tensile', 'Compressive', 'Shear', 'All'], correct: 1 },
  { q: 'Main ingredient in concrete?', o: ['Lime', 'Cement', 'Gypsum', 'Sand'], correct: 1 }
];

const QUESTIONS_MECH = [
  { q: 'Thermodynamics is study of?', o: ['Electricity', 'Heat', 'Sound', 'Light'], correct: 1 },
  { q: 'Which engine uses spark plug?', o: ['Diesel', 'Petrol', 'Steam', 'Jet'], correct: 1 },
  { q: 'SI unit of pressure?', o: ['Joule', 'Pascal', 'Watt', 'Newton'], correct: 1 },
  { q: 'CNC stands for?', o: ['Central Numeric Control', 'Computer Numerical Control', 'Coded Node Control', 'None'], correct: 1 },
  { q: 'Which is not a welding method?', o: ['MIG', 'TIG', 'ARC', 'RIP'], correct: 3 },
  { q: 'Main part of lathe machine?', o: ['Chuck', 'Platen', 'Motor', 'Gears'], correct: 0 },
  { q: 'Cooling system in car?', o: ['Oil', 'Coolant', 'Air', 'Fuel'], correct: 1 },
  { q: 'Torque is?', o: ['Force x Distance', 'Speed x Time', 'Mass x Acceleration', 'None'], correct: 0 },
  { q: 'Best fuel for IC engine?', o: ['Coal', 'Gasoline', 'Kerosene', 'Wood'], correct: 1 },
  { q: 'Type of heat transfer?', o: ['Conduction', 'Convection', 'Radiation', 'All'], correct: 3 }
];


const QUESTION_BANK = {
  default: QUESTIONS_DEFAULT,
  cse: QUESTIONS_CSE,
  ece: QUESTIONS_ECE,
  eee: QUESTIONS_EEE,
  civil: QUESTIONS_CIVIL,
  mech: QUESTIONS_MECH
};

let questions = [...QUESTION_BANK[CURRENT_DEPT]];
let examSettings = { timeLimit: 30, passingScore: 40 };
let examResults = [];
let timerHandle = null;
let examTime = 0;

const $ = id => document.getElementById(id);
const hide = el => el?.classList.add('hidden');
const show = el => el?.classList.remove('hidden');

const TEACHER_USERNAME = 'DRK College';
const TEACHER_PASSWORD = 'drkn7';

// Login Navigation
window.showFacultyLogin = () => { hide($('loginSelection')); show($('facultyLoginSection')); };
window.showStudentLogin = () => { hide($('loginSelection')); show($('studentLoginSection')); };

// Faculty Login
$('facultyLoginForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const user = $('facultyUsername').value.trim();
  const pass = $('facultyPassword').value.trim();
  const dept = $('facultyDept')?.value || CURRENT_DEPT;

  if (!dept) return alert('Select department');
  if (user !== TEACHER_USERNAME || pass !== TEACHER_PASSWORD) return alert('Invalid credentials');

  sessionStorage.setItem('loggedIn', 'true');
  sessionStorage.setItem('dept', dept);

  if (dept === CURRENT_DEPT || dept === 'default') {
    hide($('facultyLoginSection')); show($('facultyDashboard'));
    updateResults();
  } else {
    window.location.href = `${dept}.html`;
  }
});

// Auto-login to dashboard
(function autoDashboard() {
  if (sessionStorage.getItem('loggedIn') === 'true' && sessionStorage.getItem('dept') === CURRENT_DEPT) {
    hide($('loginSelection'));
    hide($('facultyLoginSection'));
    show($('facultyDashboard'));
    updateResults();
  }
})();

// Student Login
$('studentLoginForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const dept = $('studentDept')?.value;
  if (!dept) return alert('Please select a department');

  selectedDept = dept;
  questions = [...QUESTION_BANK[selectedDept]];

  $('studentNameDisplay').textContent = 'Student: ' + $('studentName').value.trim();
  $('rollNumberDisplay').textContent = 'Roll No: ' + $('rollNumber').value.trim();

  hide($('studentLoginSection')); show($('examSection'));
  examTime = examSettings.timeLimit * 60;
  startTimer(); loadQuestions();
});

// Exam Settings
$('examSettingsForm')?.addEventListener('submit', e => {
  e.preventDefault();
  examSettings.timeLimit = parseInt($('timeLimit').value, 10);
  examSettings.passingScore = parseInt($('passingScore').value, 10);
  alert('Settings saved');
});

// Question Manager
const questionForm = $('questionForm');
const questionsCont = $('questionsContainer');

function createQuestionTemplate() {
  const div = document.createElement('div');
  div.className = 'question-entry';
  div.innerHTML = `
    <div class="form-group"><label>Question:</label><textarea class="question-text" required></textarea></div>
    <div class="form-group"><label>Options:</label>
      <input type="text" class="option-input" required>
      <input type="text" class="option-input" required>
      <input type="text" class="option-input" required>
      <input type="text" class="option-input" required>
    </div>
    <div class="form-group"><label>Correct Option (1-4):</label><input type="number" class="correct-option" min="1" max="4" required></div>
    <button type="button" class="delete-question">Delete Question</button>`;
  return div;
}

questionsCont?.appendChild(createQuestionTemplate());
$('addQuestion')?.addEventListener('click', () => questionsCont.appendChild(createQuestionTemplate()));

questionsCont?.addEventListener('click', e => {
  if (e.target.classList.contains('delete-question')) {
    const entry = e.target.closest('.question-entry');
    if (questionsCont.children.length > 1) entry.remove();
    else alert('At least one question required');
  }
});

questionForm?.addEventListener('submit', e => {
  e.preventDefault();
  const newQs = Array.from(document.querySelectorAll('.question-entry')).map(entry => ({
    q: entry.querySelector('.question-text').value.trim(),
    o: Array.from(entry.querySelectorAll('.option-input')).map(i => i.value.trim()),
    correct: parseInt(entry.querySelector('.correct-option').value, 10) - 1
  }));
  questions.push(...newQs);
  questionForm.reset();
  questionsCont.innerHTML = '';
  questionsCont.appendChild(createQuestionTemplate());
  alert('Questions saved');
});

$('showQuestionPaper')?.addEventListener('click', () => {
  const view = $('questionPaperView');
  const toggle = view.classList.toggle('hidden');
  $('showQuestionPaper').textContent = toggle ? 'Show Question Paper' : 'Hide Question Paper';
  if (!toggle) {
    $('questionsList').innerHTML = questions.map((q, i) => `
      <div class="question-paper-item">
        <h4>Question ${i + 1}</h4>
        <p>${q.q}</p>
        <div class="options">${q.o.map((opt, idx) => `<div class="${idx === q.correct ? 'correct' : ''}">${idx + 1}. ${opt}</div>`).join('')}</div>
      </div>`).join('');
  }
});

// Student Login
$('studentLoginForm')?.addEventListener('submit', e => {
  e.preventDefault();
  $('studentNameDisplay').textContent = 'Student: ' + $('studentName').value.trim();
  $('rollNumberDisplay').textContent = 'Roll No: ' + $('rollNumber').value.trim();
  hide($('studentLoginSection')); show($('examSection'));
  examTime = examSettings.timeLimit * 60;
  startTimer(); loadQuestions();
});

function loadQuestions() {
  $('examForm').innerHTML = questions.map((q, i) => `
    <div class="question"><h3>Question ${i + 1}</h3><p>${q.q}</p>
    <div class="options">${q.o.map((opt, idx) => `<label class="option"><input type="radio" name="q${i}" value="${idx}">${opt}</label>`).join('')}</div>
    </div>`).join('');
}

function startTimer() {
  clearInterval(timerHandle);
  timerHandle = setInterval(() => {
    const m = Math.floor(examTime / 60), s = examTime % 60;
    $('timeRemaining').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    if (examTime-- <= 0) { clearInterval(timerHandle); submitExam(); }
  }, 1000);
}

$('submitExam')?.addEventListener('click', submitExam);

function submitExam() {
  clearInterval(timerHandle);

  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name='q${i}']:checked`);
    if (selected && parseInt(selected.value, 10) === q.correct) score++;
  });

  const pct = (score / questions.length) * 100;
  const passed = pct >= examSettings.passingScore;

  const student = {
    name: $('studentName').value.trim(),
    roll: $('rollNumber').value.trim(),
    score: pct,
    passed,
    total: questions.length,
    correct: score
  };

  // Store in localStorage for dept-level history
  const deptKey = `results_${selectedDept}`;
  const existing = JSON.parse(localStorage.getItem(deptKey) || '[]');
  existing.push(student);
  localStorage.setItem(deptKey, JSON.stringify(existing));

  // Store current result to sessionStorage
  sessionStorage.setItem('latestResult', JSON.stringify(student));

  // Redirect to results page
  window.location.href = 'student_result.html';
}


function updateResults() {
  const total = examResults.length;
  const passed = examResults.filter(r => r.passed);
  const failed = examResults.filter(r => !r.passed);
  const top = [...examResults].sort((a, b) => b.score - a.score)[0];
  $('topScorer').innerHTML = top ? `<div class="student-result"><strong>${top.name}</strong> (${top.roll})<br>Score: ${top.score.toFixed(1)}%</div>` : '';
  $('passedList').innerHTML = passed.map(r => `<div class="student-result"><strong>${r.name}</strong> (${r.roll})<br>Score: ${r.score.toFixed(1)}%</div>`).join('');
  $('failedList').innerHTML = failed.map(r => `<div class="student-result"><strong>${r.name}</strong> (${r.roll})<br>Score: ${r.score.toFixed(1)}%</div>`).join('');
  $('totalStudents').textContent = total;
  $('passPercentage').textContent = total ? ((passed.length / total) * 100).toFixed(1) + '%' : '0%';
}

$('clearAnswers')?.addEventListener('click', () => {
  document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
});

function resetExam() {
  $('examForm').innerHTML = '';
  $('studentLoginForm')?.reset();
  hide($('examSection')); show($('loginSelection'));
  examTime = examSettings.timeLimit * 60;
  $('timeRemaining').textContent = `${examSettings.timeLimit}:00`;
}
