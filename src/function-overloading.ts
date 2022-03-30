{
  // we have two function arguments possible:
  /**
function search(
  term: string,
  tags?: string[]
): Promise<Result[]>

function search(
  term: string
  callback: (results: Result[]) => void,
  tags?: string[]
): void
*/

  // We do this by adding the types directly in the implementation

  function search(
    term: string,
    p2?: string[] | ((results: Result[]) => void),
    p3?: string[]
  ) {
    // We only have a callback if 'p2' is a function
    const callback =
      typeof p2 === "function"
        ? p2
        : undefined;
    // We have tags if p2 is defined and an array, or if p3
    // is defined and an array
    const tags =
      typeof p2 !== "undefined" &&
      Array.isArray(p2)
        ? p2
        : typeof p3 !== "undefined" &&
          Array.isArray(p3)
        ? p3
        : undefined;
    let queryString = `?query=${term}`;
    if (tags && tags.length) {
      // tags at this point has to be an array
      queryString += `&tags=${tags.join()}`;
    }
    // The actual fetching of results!
    const results = fetch(
      `/search${queryString}`
    ).then((response) =>
      response.json()
    );
    // callback is either undefined or a function, as
    // seen above
    if (callback) {
      // Now it's definitely a function! So let's then()
      // the results and call the callback!
      // We don't return anything. This is equivalent to
      // void
      return void results.then(
        (res) => callback(res)
      );
    } else {
      // Otherwise, we have to return a promise with
      // results as described in the first function
      // overload
      return results;
    }
  }

  search();
}