const results = await search("Ember"); // Yass!

async function search(query: string, tags?: string[]) {
  let queryString = `?query=${query}`;
  if (tags && tags.length) {
    queryString += `&tags=${tags.join()}`;
  }
  const response = await fetch(`/search${queryString}`);
  const results = await response.json();
  // The return type becomes Promise<Result[]>
  return results as Result[];
}

export { results };
