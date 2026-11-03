/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 15, Task: 4
 */

function getUsers() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve([
        { id: 1, name: "Asha" },
        { id: 2, name: "Rohan" },
        { id: 3, name: "Meera" }
      ]);
    }, 100);
  });
}

async function showUsers() {
  let users = await getUsers();

  users.forEach(function (u) {
    console.log(u.name);
  });
}

showUsers();
