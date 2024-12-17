const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach(faqToggle => {
    faqToggle.addEventListener("click", () => {
     faqToggle.classList.toggle('activate');
     const faqAnswer = faqToggle.nextElementSibling;

     if (faqAnswer.style.maxHeight === "0px" || !faqAnswer.style.maxHeight) {
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
        faqAnswer.style.marginBottom = "20px";
     } else {
        faqAnswer.style.maxHeight = "0px";
        faqAnswer.style.marginBottom = "0";
     }
    });
  });