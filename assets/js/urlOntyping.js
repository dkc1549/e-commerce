document.getElementById('searchbtn').addEventListener('input', search);
let catgry = document.getElementById('category');
catgry.addEventListener('change', function () {
  category(catgry.value);
});
if(catgry.value!="Filter by Category"){
  document.getElementById('price').style.display="block";
}else{
  document.getElementById('price').style.display="none";  
}

document.getElementById('max').addEventListener('change', price);
document.getElementById('min').addEventListener('change', price);

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
  document.getElementById('price').style.display="block";
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
                  }&slug=books" class="btn btn-primary">View details</a>
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
                  }&slug=perfumes" class="btn btn-primary">View details</a>
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
                  }&slug=electronic1s" class="btn btn-primary">View details</a>
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
                  }&slug=electronic2s" class="btn btn-primary">View details</a>
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

// <======== SCRIPT FOR PRICE FILTER =========>
function price() {
  let slug = document.getElementById('category').value;
  let display = document.getElementById('filteroutput');
  let output = `<div class="my-4"><div class="container d-flex justify-content-between"></div><div class="row justify-content-center">`;
  if (slug !== null) {
    let xhr = new XMLHttpRequest();
    console.log('slug empty chaina wala');
    let maximum = document.getElementById('max').value;
    console.log(`maximum = ${maximum}`);
    let minimum = document.getElementById('min').value;
    console.log(`minimum = ${minimum}`);
    console.log(typeof minimum);
    if (maximum === '' && minimum === '') {
      maximum = 10000;
      minimum = 0;
      console.log('maximum and minimum empty chaina wala');
      xhr.open(
        'GET',
        `backend/price.php?max=${maximum}&min=${minimum}&slug=${slug}s`,
        true
      );
    }

    try {
      if (maximum !== '' && minimum !== '') {
        console.log('maximum and minimum wala');
        xhr.open(
          'GET',
          `backend/price.php?max=${maximum}&min=${minimum}&slug=${slug}s`,
          true
        );
      } else if (maximum !== '') {
        console.log('Maximum wala');
        minimum = 0;
        xhr.open(
          'GET',
          `backend/price.php?max=${maximum}&min=${minimum}&slug=${slug}s`,
          true
        );
      } else if (minimum !== '') {
        console.log('minimum wala');
        maximum = 10000;
        xhr.open(
          'GET',
          `backend/price.php?max=${maximum}&min=${minimum}&slug=${slug}s`,
          true
        );
      }
      xhr.onload = function () {
        if (this.status == 200) {
          let data = JSON.parse(this.responseText);
          console.log(data);
          if (typeof data == 'string') {
            data = JSON.parse(data);
          }
          console.log(data);

          data.map((item) => {
            output += `<div class="card m-2" style="width: 18rem">
            <img src="${
              item.img
            }" height="150px" width="100%" style="object-fit: cover;" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 title="${item.name}" class="card-title">${truncate(
              item.name,
              30
            )}</h5>
                <p class="card-text">Price : $${item.price}</p>
                </div>
                 <div class="card-footer">
                  <a href="product.php?id=${
                    item.id
                  }&slug=electronic2s" class="btn btn-primary">View details</a>
              </div>
                </div>
                `;
          });
          display.innerHTML = output;
        }
      };
      xhr.send();
    } catch (error) {
      let output = `<div class="my-4"><div class="container d-flex justify-content-between"></div><div class="row justify-content-center">`;
      // display product not found
      output += `<div class="card m-2" style="width: 18rem">
      <div class="card-body">
          <h5 class="card-title">Product not found</h5>
          </div>
           </div>
           `;
      document.getElementById('filteroutput').innerHTML = output;
    }
    if (maximum !== '' && minimum !== '' && maximum < minimum) {
      let output = `<div class="my-4"><div class="container d-flex justify-content-between"></div><div class="row justify-content-center">`;
      output += `<h3>Products Not found</h3>`;
      display.innerHTML = output;
    }
  }
  else{
    
  }
}
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
