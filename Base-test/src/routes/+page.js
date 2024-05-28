

export async function load({ fetch }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const people = await res.json();
    return { people };
  }