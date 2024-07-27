// +++++++++++++++++++++++++++++ Activity 4 : Using Third-Party Modules  +++++++++++++++++++++++++++++

// Task 6 : Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
import _ from "lodash";

let str = "Ritik Shekhar Parida";

console.log(_.kebabCase(str));

// Task 7 : Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
import axios from "axios";

async function fetchUserData(username) {
  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(url);
    console.log("User Data:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchUserData("RitikRocky2002");
