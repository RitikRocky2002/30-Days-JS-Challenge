// +++++++++++++++++++++++++++++ Activity 5 : Graceful Error Handling in Fetch   +++++++++++++++++++++++++++++

// Task 8 : Use the fetch API to request data from an invalid URL handle the error using .catch(). Log an appropriate error message to the console

fetch("www.adsf.com")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) =>
    console.log("Data cannot be fetched as the url is invalid!")
  );

// Task 9 : Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message

async function fetchData() {
  try {
    const response = await fetch("www.adsf.com");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Invalid URL!");
  }
}

fetchData();
