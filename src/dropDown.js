function dropDown(menuButton, hiddenDiv) {
  menuButton.addEventListener("click", () => {
    if (hiddenDiv.style.display === "none") {
      hiddenDiv.style.display = "block";
    } else if (hiddenDiv.style.display === "block") {
      hiddenDiv.style.display = "none";
    }
  });
}

export { dropDown };
