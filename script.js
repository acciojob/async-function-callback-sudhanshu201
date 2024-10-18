//your JS code here. If required.
const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

document.getElementById("btn").addEventListener("click", fetching)

async function fetching(){
	const fetchedData = await fetch(apiUrl)
	const data = await fetchedData.json()
    //console.log(data)
	
	document.getElementById("output").innerHTML=data.title
}


