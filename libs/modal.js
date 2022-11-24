/* Modal */
const btnProceed = document.getElementById("btnProceed");
const onboarding = document.getElementById("onboardingModal");

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.addEventListener("click", () => {
  modal.style.display = "block";
});

btnProceed.addEventListener('click', () => {
  onboarding.style.display = "none";
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});