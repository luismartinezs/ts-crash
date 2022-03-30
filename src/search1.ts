// A helper type with the results we expect
// from calling the back end
type Result = {
  title: string;
  url: string;
  abstract: string;
};
/**
 * The search function takes a query it sends
 * to the back end, as well as a couple of tags
 * as a string array, to get filtered results
 */
// declare function search(query: string, tags?: string[]): Result[];
function search(query: string, tags?: string[]): Promise<Result[]> {
  let queryString = `?query=${query}`;
  if (tags && tags.length) {
    queryString += `&tags=${tags.join()}`;
  }
  return fetch(`/search${queryString}`).then((response) => response.json());
}
search("Ember"); // Yes!
search("Ember", ["JavaScript"]); // Also yes!
search("Ember", ["JavaScript", "CSS"]); // Yes yes!
type SearchFn = typeof search; // overing over SearchFn we see the function type annotation

type AssembleFn = (includeTags: boolean) => string;
type Query = {
  query: string;
  tags?: string[];
  // assemble: (includeTags: boolean) => string; // function type annotation
  assemble: AssembleFn; // usually much more readable to have function type annotation separately
};

declare function displaySearch(
  inputId: string,
  outputId: string,
  search: SearchFn
): void;

displaySearch("searchField", "result", function (query, tags) {
  return Promise.resolve([
    {
      title: `The ${query} test book`,
      url: `/${query}-design-patterns`,
      abstract: `A practical book on ${query}`,
    },
  ]);
});
// argument types don't determine argument names
const testSearch: SearchFn = function (term, options) {
  return Promise.resolve([
    {
      title: `The ${term} test book`,
      url: `/${term}-design-patterns`,
      abstract: `A practical book on ${term}`,
    },
  ]);
};
// we can drop arguments entirely
// This is a valid search Function
// Notice it is an anonymous function expression
const dummyContentSearchFn: SearchFn = function () {
  return Promise.resolve([
    {
      title: "Form Design Patterns",
      url: "/form-design-patterns",
      abstract: "A practical book on accessible forms",
    },
  ]);
};
dummyContentSearchFn(); // but this bugs
dummyContentSearchFn("ember", ["javascript"], "something else"); // this also bugs
// with function declaration, it works differently
function dummyContentSearchFn2() {
  return Promise.resolve([
    {
      title: "Form Design Patterns",
      url: "/form-design-patterns",
      abstract: "A practical book on accessible forms",
    },
  ]);
}
dummyContentSearchFn2("Ember"); // Nope!
dummyContentSearchFn2("Ember", ["JavaScript"]); // Nope!
// Good!
dummyContentSearchFn2();
// the above effect is called SUBSTITUTABILITY, and I don't understand it
// something to do with the types of the return values staying the same