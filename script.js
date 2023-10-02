const textElement = document.getElementById("typing-text");
const text = textElement.innerText;
const textLength = text.length;
let currentIndex = 0;
let reverseAnimation = false;
function typeText() {
  if (!reverseAnimation) {
    textElement.innerText = text.substring(0, currentIndex);
    currentIndex++;
    if (currentIndex <= textLength) {
      setTimeout(typeText, 100); 
    } else {
      setTimeout(reverseText, 1000); 
    }
  } else {
    textElement.innerText = text.substring(0, currentIndex);
    currentIndex--;
    if (currentIndex >= 0) {
      setTimeout(reverseText, 100);
    } else {
      currentIndex = 0;
      reverseAnimation = false;
      setTimeout(typeText, 1000); 
    }
  }
}
function reverseText() {
  reverseAnimation = true;
  typeText();
}
typeText(); 
const overlayElements = document.querySelectorAll(".overlay");
overlayElements.forEach((element, index) => {
  element.addEventListener("mouseover", () => {
    element.textContent = `</ Project ${index + 1}/>`;
  });
  element.addEventListener("mouseout", () => {
    element.textContent = `Project ${index + 1}`;
  });
});
