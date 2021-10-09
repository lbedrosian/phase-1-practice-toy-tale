let addToy = false;
const toyMenu = document.getElementById("toy-collection");
const toyImg = document.getElementById("toy-url");
const toyName = document.getElementById("toy-name");

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
/* Each card should have the following child elements:

    h2 tag with the toy's name
    img tag with the src of the toy's image attribute and the class name "toy-avatar"
    p tag with how many likes that toy has
    button tag with a class "like-btn" and an id attribute set to the toy's id number

After all of that, the toy card should look something like this:

  <div class="card">
    <h2>Woody</h2>
    <img src="[toy_image_url]" class="toy-avatar" />
    <p>4 Likes </p>
    <button class="like-btn" id="[toy_id]">Like <3</button>
  </div>
 
*/

fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(data => getAllToys(data))

function getAllToys(data) {
  for (i = 0; i < data.length; i++) {
const toy = document.createElement('div');
  toy.setAttribute("class", "card");
const h2 = document.createElement("h2");
  h2.innerText = `${data[i].name}`
const img = document.createElement("img");
  img.setAttribute("class", "toy-avatar");
  img.setAttribute("src", `${data[i].image}`);
const p = document.createElement('p');
  p.innerText = `${data[i].likes} Likes`;
const button = document.createElement('button');
  likeButton.setAttribute('class', 'like-btn');
  likeButton.setAttribute('id' `${data[i].id}`);
  likeButton.innerText = "Like";
  toysMenu.append(toy);
  toy.append(h2, img, p, likeButton);
}}

/* Use fetch() to make a "POST" request to create a new toy, 
then add it to the DOM */
function postToys() {
fetch('http://localhost:3000/toys', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json"
    },
  body: JSON.stringify({
    "name": `${toyName.value}`,
    "image": `${toyImg.value}`,
    "likes": 0
    })
  })
  .then(resp => resp.json())
  .then(data => renderToy(data))
}
function renderToy(data) {
    toyMenu.append(data);
  }
  
const submitToy = document.getElementById('submit-form');
  submitToy.addEventListener('submit', (event) => {
    postToys();
    event.target.reset()
  })

/* Use fetch() to make a "PATCH" request that updates an existing toy,
 then render the updated information to the DOM */

  toysMenu.addEventListener('click', (e) => {
    if (e.target.className === 'like-btn') {
 
    }
  })
function updateLikes(id) {
   fetch(`http://localhost:3000/toys/${id}`)
 
 }
 
 
 
 
 
 
 
 
