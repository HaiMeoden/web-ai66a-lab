function renderUsers(users) {
  let tableBody = document.querySelector("#user-table tbody");
  // show users on UI
  users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td> 
      <td>${user.phone}</td>
      <td>${user.email.toLowerCase()}</td>
      <td>${user.website}</td>
      <td>${user.address.street + "-" + user.address.city}</td>`;

    tableBody.appendChild(row);
  });
}

// function fetchUsers() {
  
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {return response.json();})
//     .then((users) => {
//       renderUsers(users);
//     });
// }

// rewrite the fetchUsers function using async/await
async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    renderUsers(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}
