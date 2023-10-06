let searchButton = document.querySelector("#search")
let progressBar = document.querySelector(".percentage")

// Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
  console.log("button pressed")
  sendApiRequest()
})

// An asynchronous function to fetch data from the API.
async function sendApiRequest() {
  let API_KEY = "L44NaFEzb3vdjuv72fp38V48kPZU5ER0oumLKBBx"
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
  console.log(response)

  if (response.status === 200) {
    let data = await response.json()
    console.log(data)
    useApiData(data)
  } else {
    console.error("Failed to fetch data from the API.")
  }
}

// Function that updates the progress bar with a percentage value.
function updateProgressBar(percentage) {
  progressBar.textContent = `${percentage}%`
  progressBar.style.width = `${percentage}%`
}

// Function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data.
function useApiData(data) {
  document.querySelector("#content").innerHTML += data.description
  document.querySelector("#content").innerHTML += `<img src="${data.url}">`

  // Update the progress bar to 100% when the data has been processed.
  updateProgressBar(100)
}
