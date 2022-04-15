const container2 = document.getElementsByClassName("container2")[0];
const container3 = document.getElementsByClassName("container3")[0];
const checkIconElement = document.getElementById("check-icon");
const xIconElement = document.getElementById("x-icon");
const newNoteButtonElement = document.getElementById("newNoteButton");
const noteTextElement = document.getElementById("note-text");
let i = 0;

newNoteButtonElement.addEventListener("click", (e) => {
  typeNote();
});

function typeNote() {
  if (container3.style.display == "none") {
    container3.style.display = "block";
  } else {
    container3.style.display = "none";
  }
}

checkIconElement.addEventListener("click", (e) => {
  createNote();
});

xIconElement.addEventListener("click", (e) => {
    closeWindow();
  });
  
  function closeWindow() {
    container3.style.display = "none";
  }

function createNote() {
  let newNote = noteTextElement.value;
  let html = `
    <div class="note">
    <h1>${newNote}</h1>
    </div>`;

  if (newNote.length) {
    container2.innerHTML += html.trim();
  }
  let notes = document.getElementsByClassName("note");
  const allNote = Array.from(notes);

  allNote
    .filter(
      (note) => note.style.background === "" || note.style.background === null
    )
    .forEach((note) => {
      console.log(note.style.background);
      note.style.background = color();
      note.style.margin = margin();
      note.style.transform = rotate();

      note.addEventListener("mouseenter", (e) => {
        note.style.transform = "scale(1.1)";
        note.style.transition = "all 0.3s ease-in";
      });

      note.addEventListener("mouseleave", (e) => {
        note.style.transform = "scale(1)";
        note.style.transition = "all 0.3s ease-in";
      });

      note.addEventListener("dblclick", (e) => {
        note.remove();
      });
      noteTextElement.value = "";
    });
}

function margin() {
  let random_margin = ["-5px", "4px", "8px", "10px", "15px", "20px"];
  return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate() {
  let random_rotate = [
    "rotate(3deg)",
    "rotate(-4deg)",
    "rotate(-10deg)",
    "rotate(3deg)",
    "rotate(-5deg)",
    "rotate(10deg)",
  ];
  return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color() {
  let random_color = [
    "#fcba03",
    "#bcfc53",
    "#f58eeb",
    "#ff6380",
    "#ddff63",
    "#92f9fc",
  ];
  if (i > random_color.length - 1) {
    i = 0;
  }
  return random_color[i++];
}
