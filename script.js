

//your JS code here. If required.
const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

async function fetchData(callback) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    callback(data.title);
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("btn").addEventListener("click", async function() {
  fetchData(function(title) {
    document.getElementById("output").innerHTML = title;
  });
});

