document.getElementById("searchbtn").addEventListener("input", search);
let catgry = document.getElementById("category");
catgry.addEventListener("change", function () {
  category(catgry.value);
});

// <======= SCRIPT FOR NAV BAR SEARCH ============>
let searchvalue = document.getElementById("searchitem");
function search() {
  let search = document.getElementById("searchbtn").value;
  if (search != "") {
    let xhr = new XMLHttpRequest();
    let output = "<ul>";
    xhr.open("GET", "backend/search.php?search=" + search, true);
    xhr.onload = function () {
      if ((this.status = 200)) {
        let data = JSON.parse(this.responseText);
        if (typeof data == "string") {
          data = JSON.parse(data);
        }
        for (const key in data) {
          output += "<li>" + data[key].name + "</li>";
        }
        output += "</ul>";
        // console.log(output);
      }
      searchvalue.innerHTML = output;
    };
    xhr.send();
  } else {
    output = "";
  }
}
// <========= SCRIPT FOR NAV BAR SEARCH ENDS ============>

// <======== SCRIPT FOR CATEGORY FILTER =========>
function category(value) {
  let display = document.getElementById("filteroutput");
  let xhr = new XMLHttpRequest();
  let output = "";
  output = `<div class="my-4"><div class="container d-flex justify-content-between"><h2>Book</h2></div><div class="row justify-content-center">`;
  switch (value) {
    case "book":
      output = `<div class="my-4"><div class="container d-flex justify-content-between"><h2>Book</h2></div><div class="row justify-content-center">`;
      xhr.open("GET", "backend/book.php", true);
      xhr.onload = function () {
        if (this.status == 200) {
          let data = JSON.parse(this.responseText);
          if (typeof data == "string") {
            data = JSON.parse(data);
          }
          for (const key in data) {
            output += `<div class="card m-2" style="width: 18rem">
              <img src="${data[key].img}" height="150px" width="100%" style="object-fit: cover;" class="card-img-top" alt="..." />
              <div class="card-body">
                  <h5 class="card-title">${data[key].name}</h5>
                  <ul class="card-text">
                      <li>Price : $${data[key].price}</li>
                      <li>Author : ${data[key].author}</li>
                      <li>Type : ${data[key].type}</li>
                  </ul>

              </div>
              <div class="card-footer">
                  <a href="product.php?id=${data[key].id}" class="btn btn-primary">View details</a>
              </div>
          </div>`;
          }
        }
        output += `</div></div>`;
        display.innerHTML = output;
      };
      xhr.send();
      break;
    case "perfume":
      output = `<div class="my-4"><div class="container d-flex justify-content-between"><h2>Perfume</h2></div><div class="row justify-content-center">`;
      xhr.open("GET", "backend/perfume.php", true);
      xhr.onload = function () {
        if ((this.status = 200)) {
          let data = this.responseXML;
          console.log(data);
          //   console.log(data.length);
          //   for (let i=0;i<Object.keys(data).length;i++) {
              /*output+=`<div class="card m-2" style="width: 18rem">
              <img src="${data.getElementsByTagName('img')[i].childNodes[0].nodeValue}" height="150px" width="100%" style="object-fit: cover;" class="card-img-top" alt="..." />
              <div class="card-body">
                  <h5 class="card-title">${data.getElementsByTagName('name')[i].childNodes[0].nodeValue}</h5>
                  <ul class="card-text">
                      <li>Price : $${data.getElementsByTagName('price')[i].childNodes[0].nodeValue}</li>
                      <li>Author : ${data.getElementsByTagName('author')[i].childNodes[0].nodeValue}</li>
                      <li>Type : ${data.getElementsByTagName('type')[i].childNodes[0].nodeValue}</li>
                  </ul>

              </div>
              <div class="card-footer">
                  <a href="product.php?id=${data.getElementsByTagName('id')[i].childNodes[0].nodeValue}" class="btn btn-primary">View details</a>
              </div>*/
          // </div>`
        }
        // }
        // output += `</div></div>`;
        // console.log(output);
        // display.innerHTML = output;
      };
      xhr.send();
      break;
    case "electronic1":
      break;
    case "electronic2":
      break;
  }
}

// search.addEventListener('input', (e) => {
//   const userInput = search.value;
// }

//   const newUrl = `/search?q=${userInput}`;
//   history.pushState({}, '', newUrl);

//   displaySearchResuts(userInput);
// });

// async function displaySearchResuts(query) {
//   try {
//     const res = await fetch(`/search?q=${query}`);
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error.message());
//   }
// }
