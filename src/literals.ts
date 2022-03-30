const result = {
  title: "A guide to @@start@@Ember@@end@@.js",
  url: "/a-guide-to-ember",
  description: "The framework @@start@@Ember@@end@@.js in a nutshell",
};

let markup = highlight`<li>${result.title}</li>`;

console.log(markup);

function highlight(strings: TemplateStringsArray, ...values: string[]) {
  let str = ""; // The result string
  strings.forEach((templ, i) => {
    // Fetch the expression from the same position
    // or assign an empty string
    let expr =
      values[i]?.replace("@@start@@", "<em>").replace("@@end@@", "</em>") ?? "";
    // Merge template and expression
    str += templ + expr;
  });
  return str;
}
