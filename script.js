const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

// Button click event listener
document.getElementById("btn").addEventListener("click", () => fetching(showData));

async function fetching(callback) {
    try {
        // Fetch data from the API
        const fetchedData = await fetch(apiUrl);
        const data = await fetchedData.json();
        
        // Call the callback function with the result (title)
        callback(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Callback function to display the data
function showData(data) {
    let output = document.getElementById("output");
    
    // Display the title from the fetched data
    output.innerHTML = `Title: ${data.title}`;
}
