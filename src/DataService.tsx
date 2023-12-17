export async function getAllItems() {
  const response = await fetch(
    `http://localhost:9090/getAllItems`
  );
  const data = await response.json();

  return data;
}