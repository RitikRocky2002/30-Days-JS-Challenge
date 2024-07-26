// +++++++++++++++++++++++++++++ Activity 4: Fetching Data from an APi +++++++++++++++++++++++++++++

// Task 6 : Use the fetch API to get data from a public API and log the response data to the console using promises
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((data) => {
    console.log("Name :", data.name);
    console.log("Email :", data.email);
    console.log("Phone :", data.phone);
  })
  .catch((error) => console.log(error));

// Task 7 : Use the fetch API to get data from a public API and log the response data to the console using async/await

async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    console.log("Name :", data.name);
    console.log("Email :", data.email);
    console.log("Phone :", data.phone);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
