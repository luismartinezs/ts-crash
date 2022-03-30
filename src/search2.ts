function displaySearch(
  inputId: string,
  outputId: string,
  search: SearchFn
): void {
  document.getElementById(inputId)?.addEventListener("change", function () {
    this.parentElement?.classList.add("active");
    if (this instanceof HTMLInputElement) {
      // From here on, this is
      // of type HTMLInputElement
      const searchTerm = this.value; // Works!
      search(searchTerm).then((results) => {
        // TODO in another lesson
      });
    }
  });
}
// extracting the function callback, we can still type `this`, like so:
// this is a special ts argument, and must be the first one
// it gets removed after compiling to js
// now this function can't be called unless the context is of type HTMLElement
function inputChangeHandler(this: HTMLElement) {
  this.parentElement?.classList.add("active");
}
