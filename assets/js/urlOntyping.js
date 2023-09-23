document.getElementById('searchbtn').addEventListener('input', search);
let catgry = document.getElementById('category');
catgry.addEventListener('change', function () {
  category(catgry.value);
});

// <======= SCRIPT FOR NAV BAR SEARCH ============>
let searchvalue = document.getElementById('searchitem');
// function search() {
//   let search = document.getElementById('searchbtn').value;
//   if (search != '') {
//     let xhr = new XMLHttpRequest();
//     // let output = '<ul>';
//     xhr.open('GET', 'backend/search.php?search=' + search, true);
//     xhr.onload = function () {
//       if ((this.status = 200)) {
//         let data = JSON.parse(this.responseText);
//         if (typeof data == 'string') {
//           data = JSON.parse(data);
//         }
//         for (const key in data) {
//           output += `<li><a class='search-list' href="product.php?id=${
//             data[key].id
//           }">${data[key].name !== '' && truncate(data[key].name, 15)}</a></li>`;
//         }
//         // output += '</ul>';
//         // console.log(output);
//       }
//       searchvalue.innerHTML = output;
//     };
//     xhr.send();
//   } else {
//     output = '';
//   }
// }
// using fetch request instead of xhr
async function search() {
  let search = document.getElementById('searchbtn').value;
  if (search != '') {
    let res = await fetch('backend/search.php?search=' + search);
    let data = await res.json();
    let output = '<ul class="searchitem">';
    if (typeof data == 'string') {
      data = JSON.parse(data);
    }
    for (const key in data) {
      output += `<li class='search-list'><a title="${
        data[key].name
      }"  href="product.php?id=${data[key].id}">${
        data[key].name !== '' && truncate(data[key].name, 23)
      }</a></li>`;
    }
    output += '</ul>';
    searchvalue.innerHTML = output;
  } else {
    searchvalue.innerHTML = '';
  }
}
// <========= SCRIPT FOR NAV BAR SEARCH ENDS ============>

// <======== SCRIPT FOR CATEGORY FILTER =========>
function category(value) {
  let display = document.getElementById('filteroutput');
  let xhr = new XMLHttpRequest();
  let output = '';
  output = `<div class="my-4"><div class="container d-flex justify-content-between"><h2>Book</h2></div><div class="row justify-content-center">`;
  switch (value) {
    case 'book':
      output = `<div class="my-4"><div class="container d-flex justify-content-between"><h2>Book</h2></div><div class="row justify-content-center">`;
      xhr.open('GET', 'backend/book.php', true);
      xhr.onload = function () {
        if (this.status == 200) {
          let data = JSON.parse(this.responseText);
          if (typeof data == 'string') {
            data = JSON.parse(data);
          }
          for (const key in data) {
            output += `<div class="card m-2" style="width: 18rem">
              <img src="${
                data[key].img
              }" height="150px" width="100%" style="object-fit: cover;" class="card-img-top" alt="..." />
              <div class="card-body">
                  <h5 title="${data[key].name}" class="card-title">${truncate(
              data[key].name,
              30
            )}</h5>
                 

              </div>
              <div class="card-footer">
                  <a href="product.php?id=${
                    data[key].id
                  }" class="btn btn-primary">View details</a>
              </div>
          </div>`;
          }
        }
        output += `</div></div>`;
        display.innerHTML = output;
      };
      xhr.send();
      break;
    case 'perfume':
      output = `<div class="my-4"><div class="container d-flex justify-content-between"><h2>Perfume</h2></div><div class="row justify-content-center">`;
      xhr.open('GET', 'backend/perfume.php', true);
      xhr.onload = function () {
        if ((this.status = 200)) {
          let data = this.responseXML;
          let perfumedata = data.getElementsByTagName('perfume');
          for (let i = 0; i < perfumedata.length; i++) {
            output += `<div class="card m-2" style="width: 18rem">
              <img src="${
                perfumedata[i].getElementsByTagName('img')[0].childNodes[0]
                  .nodeValue
              }" height="150px" width="100%" style="object-fit: cover;" class="card-img-top" alt="..." />
              <div class="card-body">
                  <h5 class="card-title">${
                    perfumedata[i].getElementsByTagName('name')[0].childNodes[0]
                      .nodeValue
                  }</h5>
                 

              </div>
              <div class="card-footer">
                  <a href="product.php?id=${
                    perfumedata[i].getElementsByTagName('id')[0].childNodes[0]
                      .nodeValue
                  }" class="btn btn-primary">View details</a>
              </div>
              </div>`;
          }
        }
        output += `</div></div>`;
        display.innerHTML = output;
      };
      xhr.send();
      break;
    case 'electronic1':
      output = `<div class="my-4"><div class="container d-flex justify-content-between"><h2>Electronic1</h2></div><div class="row justify-content-center">`;
      xhr.open('GET', 'backend/electronic1.php', true);
      xhr.onload = function () {
        if ((this.status = 200)) {
          let data = this.responseXML;
          let electronic1data = data.getElementsByTagName('electronic1');
          for (let i = 0; i < electronic1data.length; i++) {
            output += `<div class="card m-2" style="width: 18rem">
              <img src="${
                electronic1data[i].getElementsByTagName('img')[0].childNodes[0]
                  .nodeValue
              }" height="150px" width="100%" style="object-fit: cover;" class="card-img-top" alt="..." />
              <div class="card-body">
                  <h5 class="card-title">${
                    electronic1data[i].getElementsByTagName('name')[0]
                      .childNodes[0].nodeValue
                  }</h5>
                 

              </div>
              <div class="card-footer">
                  <a href="product.php?id=${
                    electronic1data[i].getElementsByTagName('id')[0]
                      .childNodes[0].nodeValue
                  }" class="btn btn-primary">View details</a>
              </div>
              </div>`;
          }
        }
        output += `</div></div>`;
        display.innerHTML = output;
      };
      xhr.send();
      break;
    case 'electronic2':
      output = `<div class="my-4"><div class="container d-flex justify-content-between"><h2>Electronic2</h2></div><div class="row justify-content-center">`;
      xhr.open('GET', 'backend/electronic2.php', true);
      xhr.onload = function () {
        if ((this.status = 200)) {
          let data = this.responseXML;
          let electronic2data = data.getElementsByTagName('electronic2');
          for (let i = 0; i < electronic2data.length; i++) {
            output += `<div class="card m-2" style="width: 18rem">
              <img src="${
                electronic2data[i].getElementsByTagName('img')[0].childNodes[0]
                  .nodeValue
              }" height="150px" width="100%" style="object-fit: cover;" class="card-img-top" alt="..." />
              <div class="card-body">
                  <h5 class="card-title">${
                    electronic2data[i].getElementsByTagName('name')[0]
                      .childNodes[0].nodeValue
                  }</h5>
                  

              </div>
              <div class="card-footer">
                  <a href="product.php?id=${
                    electronic2data[i].getElementsByTagName('id')[0]
                      .childNodes[0].nodeValue
                  }" class="btn btn-primary">View details</a>
              </div>
              </div>`;
          }
        }
        output += `</div></div>`;
        display.innerHTML = output;
      };
      xhr.send();
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

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + '..' : str;
}
// electronics2
{
  /* <ul class='card-text'>
  <li>
    Price : $$
    {
      electronic2data[i].getElementsByTagName('price')[0].childNodes[0]
        .nodeValue
    }
  </li>
  <li>
    Brand : ${electronic2data[i].getElementsByTagName('brand')[0].textContent}
  </li>
  <li>OS : ${electronic2data[i].getElementsByTagName('os')[0].textContent}</li>
  <li>
    CPU : ${electronic2data[i].getElementsByTagName('cpu')[0].textContent}
  </li>
  <li>
    Memory size : $
    {electronic2data[i].getElementsByTagName('computer_memory')[0].textContent}
  </li>
  <li>
    Hardisk size : $
    {electronic2data[i].getElementsByTagName('hardisk')[0].textContent}
  </li>
</ul>; */
}
// electronic1
{
  //  <ul class='card-text'>
  //    <li>
  //      Price : $$
  //      {
  //        electronic1data[i].getElementsByTagName('price')[0].childNodes[0]
  //          .nodeValue
  //      }
  //    </li>
  //    <li>
  //      Brand : $
  //      {electronic1data[i].getElementsByTagName('brand')[0].textContent}
  //    </li>
  //    <li>
  //      OS : ${electronic1data[i].getElementsByTagName('os')[0].textContent}
  //    </li>
  //    <li>
  //      Memory : $
  //      {electronic1data[i].getElementsByTagName('memory')[0].textContent}
  //    </li>
  //  </ul>;
}
// perfumes
//  <ul class='card-text'>
//    <li>
//      Price : $$
//      {perfumedata[i].getElementsByTagName('price')[0].childNodes[0].nodeValue}
//    </li>
//    <li>
//      Brand : ${perfumedata[i].getElementsByTagName('brand')[0].textContent}
//    </li>
//    <li>
//      Weight : ${perfumedata[i].getElementsByTagName('weight')[0].textContent}
//    </li>
//  </ul>;
