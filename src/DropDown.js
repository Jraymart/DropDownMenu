export default class Dropdown {
  constructor(dropDownSelector) {
    this.dropDown = document.querySelector(dropDownSelector);
    this.button = this.dropDown.querySelector(".drop-button");
    this.content = this.dropDown.querySelector(".drop-content");

    this.init();
  }
  init() {
    this.button.addEventListener("click", () => this.toggleDropDown());
    window.addEventListener("click", (event) =>
      this.closeDropDownOnClickOut(event)
    );
  }
  toggleDropDown() {
    this.content.style.display =
      this.content.style.display === "block" ? "none" : "block";
  }

  closeDropDownOnClickOut(event) {
    if (!this.dropDown.contains(event.target)) {
      this.content.style.display = "none";
    }
  }
}
