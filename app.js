// ══════════════════════════════════════
//  JAVA LEARNING TRACKER — BEAST UI JS
// ══════════════════════════════════════

// ── Data ──
const days = [
  {
    day: 1,
    title: "Java Intro, JDK/JVM, Hello World",
    timePlanned: "1 Hour",
    timeCompleted: "30 min",
    status: "completed",
    topics: [
      "Introduction to Java",
      "What is JDK, JRE, JVM",
      "Installing Java",
      "First Hello World Program",
    ],
    notes: "Understood Java structure. Learned compile & run process.",
    files: [
      {
        name: "hello.java",
        code: `class hello {\n    public static void main(String[] args) \n    {\n        System.out.println("Hello World");\n    }\n}`,
      },
    ],
  },
  {
    day: 2,
    title: "Variables, Data Types, Strings, IF/ELSE",
    timePlanned: "1 Hour",
    timeCompleted: "1 Hour",
    status: "inprogress",
    topics: [
      "Variables & Data Types",
      "Sum of Two Numbers (Scanner)",
      "Sum of Two Strings (Concatenation)",
      "String Comparison (== vs .equals())",
      "IF & ELSE Statements",
      "Q&A Practice Problems",
    ],
    notes: "Practiced Scanner input, string operations, and conditionals.",
    files: [
      {
        name: "sum.java — Numbers",
        code: `import java.util.Scanner;\n\nclass sum {\n    public static void main(String[] args) {\n        System.out.println("Add Two Numbers");\n        Scanner add = new Scanner(System.in);\n        System.out.println("Enter Your First Num :");\n        int a = add.nextInt();\n        System.out.println("Enter your second Num :");\n        int b = add.nextInt();\n        int c = a + b;\n        System.out.println("The sum is :" + c);\n    }\n}`,
      },
      {
        name: "sum.java — Strings",
        code: `import java.util.Scanner;\n\nclass sum {\n    public static void main(String[] args) {\n        System.out.println("Add Two Strings");\n        Scanner add = new Scanner(System.in);\n        System.out.println("Enter Your First String :");\n        String a = add.nextLine();\n        System.out.println("Enter your second String :");\n        String b = add.nextLine();\n        String c = a + b;\n        System.out.println("The sum is :" + c);\n    }\n}`,
      },
      {
        name: "compare_string.java",
        code: `import java.util.Scanner;\n\nclass compare_string {\n    public static void main(String args[]) {\n        String a = "Hello";\n        String b = "Hello";\n        String c = new String("Hello");\n        String d = new String("Hello");\n\n        System.out.println(a == b);       // true  (same pool)\n        System.out.println(c == d);       // false (different objects)\n        System.out.println(a.equals(b));  // true  (same content)\n        System.out.println(c.equals(d)); // true  (same content)\n    }\n}`,
      },
      {
        name: "e1.java — IF/ELSE",
        code: `import java.util.Scanner;\n\nclass ifelse {\n    public static void main(String args[]) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println("Enter your age");\n        int age = sc.nextInt();\n        if (age >= 18) {\n            System.out.println("You are eligible to vote");\n        } else {\n            System.out.println("You are not eligible to vote");\n        }\n    }\n}`,
      },
      {
        name: "q1.java — Name & Age",
        code: `import java.util.Scanner;\n\nclass q1 {\n    public static void main(String args[]) {\n        System.out.println("Enter your name and age");\n        Scanner sc = new Scanner(System.in);\n        String name = sc.nextLine();\n        int age = sc.nextInt();\n        System.out.println("My name is " + name);\n        System.out.println("My age is " + age);\n    }\n}`,
      },
      {
        name: "q2.java — Name, Age, Place",
        code: `import java.util.Scanner;\n\nclass q2 {\n    public static void main(String args[]) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println("Enter your name, age and place");\n        String name = sc.nextLine();\n        int age = sc.nextInt();\n        sc.nextLine();\n        String place = sc.nextLine();\n        System.out.println("My name is " + name);\n        System.out.println("My age is " + age);\n        System.out.println("I live in " + place);\n    }\n}`,
      },
      {
        name: "q3.java — Math",
        code: `import java.util.Scanner;\n\nclass q3 {\n    public static void main(String args[]) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        int c = sc.nextInt();\n        int d = a * b * c;\n        int e = a + b + c;\n        System.out.print(d / e);\n    }\n}`,
      },
      {
        name: "q4.java — Formatted Output",
        code: `import java.util.Scanner;\n\nclass q4 {\n    public static void main(String args[]) {\n        Scanner sc = new Scanner(System.in);\n        String a = sc.nextLine();\n        double b = sc.nextDouble();\n        sc.nextLine();\n        String c = sc.nextLine();\n        System.out.println("My name is " + a);\n        System.out.println("My score is " + (b / 10) + "/10");\n        System.out.println("My Department is " + c);\n    }\n}`,
      },
    ],
  },
  {
    day: 3, title: "Operators & Scanner", timePlanned: "1 Hour", timeCompleted: "—",
    status: "pending", topics: ["Operators", "User Input (Scanner)"], notes: "", files: [],
  },
  {
    day: 4, title: "Conditional Statements", timePlanned: "1 Hour", timeCompleted: "—",
    status: "pending", topics: ["if, else, switch"], notes: "", files: [],
  },
  {
    day: 5, title: "Loops", timePlanned: "1 Hour", timeCompleted: "—",
    status: "pending", topics: ["for loop", "while loop", "do-while loop"], notes: "", files: [],
  },
  {
    day: 6, title: "Arrays & Strings", timePlanned: "1 Hour", timeCompleted: "—",
    status: "pending", topics: ["Arrays", "Strings"], notes: "", files: [],
  },
  {
    day: 7, title: "Methods", timePlanned: "1 Hour", timeCompleted: "—",
    status: "pending", topics: ["Methods", "Functions"], notes: "", files: [],
  },
  {
    day: 8, title: "OOP Concepts", timePlanned: "1 Hour", timeCompleted: "—",
    status: "pending", topics: ["OOP Basics", "Classes & Objects"], notes: "", files: [],
  },
];

const roadmapData = [
  { hour: 1, label: "Java Basics & Setup", done: true },
  { hour: 2, label: "Variables & Data Types", current: true },
  { hour: 3, label: "Operators & Input" },
  { hour: 4, label: "Condition Statements" },
  { hour: 5, label: "Loops" },
  { hour: 6, label: "Arrays & Strings" },
  { hour: 7, label: "Methods" },
  { hour: 8, label: "OOP Concepts" },
];

// ── State ──
let activeDay = 0;

// ══ Syntax Highlighter (simple) ══
function highlight(code) {
  const esc = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return esc
    // comments
    .replace(/(\/\/.*)/g, '<span class="cmt">$1</span>')
    // strings
    .replace(/("(?:[^"\\]|\\.)*")/g, '<span class="str">$1</span>')
    // keywords
    .replace(/\b(import|class|public|static|void|int|double|float|long|String|boolean|char|new|if|else|return|for|while|do|switch|case|break|default)\b/g, '<span class="kw">$1</span>')
    // class names after 'class '
    .replace(/\bclass\b <span class="kw">(\w+)<\/span>/g, 'class <span class="cls">$1</span>')
    // numbers
    .replace(/\b(\d+\.?\d*)\b/g, '<span class="num">$1</span>')
    // method calls
    .replace(/(\w+)\(/g, '<span class="fn">$1</span>(');
}

function addLineNumbers(html) {
  return html.split('\n').map((line, i) =>
    `<span class="line-num">${i + 1}</span>${line}`
  ).join('\n');
}

// ══ Render: Tabs ══
function renderTabs() {
  const el = document.getElementById("dayTabs");
  el.innerHTML = days.map((d, i) =>
    `<button class="day-tab ${i === activeDay ? 'active' : ''}" data-i="${i}">
       <span class="status-dot status-${d.status}"></span>${d.day < 10 ? '0' : ''}${d.day}
     </button>`
  ).join('');

  el.querySelectorAll('.day-tab').forEach(btn =>
    btn.addEventListener('click', () => {
      activeDay = +btn.dataset.i;
      renderTabs();
      renderDayContent();
    })
  );
}

// ══ Render: Day Content ══
function renderDayContent() {
  const d = days[activeDay];
  const el = document.getElementById("dayContent");

  const badge = d.status === 'completed' ? ['badge-completed', 'Completed']
              : d.status === 'inprogress' ? ['badge-inprogress', 'In Progress']
              : ['badge-pending', 'Pending'];

  const filesHTML = d.files.length ? `
    <div class="code-files">
      <div class="code-files-label">Code Files (${d.files.length})</div>
      ${d.files.map((f, fi) => `
        <div class="file-item">
          <div class="file-header" data-file="${fi}">
            <span class="file-name-wrap">
              <span class="file-icon">J</span>
              ${f.name}
            </span>
            <span class="arrow" id="arrow-${fi}">&#9654;</span>
          </div>
          <pre class="file-code" id="code-${fi}">${addLineNumbers(highlight(f.code))}</pre>
        </div>
      `).join('')}
    </div>` : '';

  el.innerHTML = `
    <div class="card">
      <div class="day-header">
        <h3>Day ${d.day < 10 ? '0' : ''}${d.day} &mdash; ${d.title}</h3>
        <span class="day-badge ${badge[0]}">${badge[1]}</span>
      </div>
      <div class="day-meta">
        <span class="meta-chip"><span class="meta-icon">&#128338;</span> ${d.timePlanned}</span>
        <span class="meta-chip"><span class="meta-icon">&#9989;</span> ${d.timeCompleted}</span>
        <span class="meta-chip"><span class="meta-icon">&#128221;</span> ${d.topics.length} topics</span>
      </div>
      <ul class="topics-list">
        ${d.topics.map(t => `<li><span class="topic-bullet"></span>${t}</li>`).join('')}
      </ul>
      ${d.notes ? `<div class="day-notes">${d.notes}</div>` : ''}
      ${filesHTML}
    </div>
  `;

  // toggle code
  el.querySelectorAll('.file-header').forEach(hdr => {
    hdr.addEventListener('click', () => {
      const idx = hdr.dataset.file;
      document.getElementById(`code-${idx}`).classList.toggle('show');
      document.getElementById(`arrow-${idx}`).classList.toggle('open');
    });
  });
}

// ══ Render: Roadmap ══
function renderRoadmap() {
  const el = document.getElementById("roadmap");
  el.innerHTML = roadmapData.map(r => {
    const cls = r.done ? 'done' : r.current ? 'current' : '';
    const check = r.done ? '<span class="rm-check">&#10003;</span>' : '';
    return `
      <div class="rm-item ${cls}">
        <div class="rm-dot"></div>
        <div class="rm-card">
          <div class="rm-hour">Hour ${r.hour}</div>
          <div class="rm-label">${r.label}</div>
        </div>
        ${check}
      </div>`;
  }).join('');
}

// ══ Animated Counter ══
function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = +el.dataset.target;
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(target * ease);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
  // animate stat bar
  document.querySelectorAll('.stat-bar-fill').forEach(bar => {
    setTimeout(() => bar.classList.add('animate'), 300);
  });
}

// ══ Scroll Reveal ══
function initReveal() {
  const sections = document.querySelectorAll('.section, .stats-strip');
  sections.forEach(s => s.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(s => observer.observe(s));
}

// ══ Hero grid canvas ══
function initHeroGrid() {
  const canvas = document.getElementById('heroGrid');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, cols, rows;
  const gap = 40;
  const dots = [];

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
    cols = Math.ceil(w / gap) + 1;
    rows = Math.ceil(h / gap) + 1;
    dots.length = 0;
    for (let r = 0; r < rows; r++)
      for (let c = 0; c < cols; c++)
        dots.push({ x: c * gap, y: r * gap, base: 0.15, a: 0.15 });
  }

  let mx = -1000, my = -1000;
  canvas.parentElement.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mx = e.clientX - rect.left;
    my = e.clientY - rect.top;
  });
  canvas.parentElement.addEventListener('mouseleave', () => { mx = my = -1000; });

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const rad = 160;
    dots.forEach(d => {
      const dx = d.x - mx, dy = d.y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const target = dist < rad ? 0.15 + 0.55 * (1 - dist / rad) : 0.15;
      d.a += (target - d.a) * 0.08;
      ctx.beginPath();
      ctx.arc(d.x, d.y, 1.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(249,115,22,${d.a})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  draw();
}

// ══ Init ══
document.addEventListener('DOMContentLoaded', () => {
  renderTabs();
  renderDayContent();
  renderRoadmap();
  animateCounters();
  initReveal();
  initHeroGrid();
});
