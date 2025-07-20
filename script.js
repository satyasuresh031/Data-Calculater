
const span = document.querySelector(".date_span");
const startInput = document.getElementById("start_date");
const endInput = document.getElementById("end_date");

// Default end date to today
endInput.valueAsDate = new Date();

function calculateElapse() {
  const start = startInput.valueAsDate;
  const end = endInput.valueAsDate;

  if (start && end) {
    const msPerDay = 24 * 60 * 60 * 1000;
    const diff = Math.floor((end - start) / msPerDay);
    span.textContent = `${diff} day(s)`;
  } else {
    span.textContent = "";
  }
}

startInput.addEventListener("change", calculateElapse);
endInput.addEventListener("change", calculateElapse);
