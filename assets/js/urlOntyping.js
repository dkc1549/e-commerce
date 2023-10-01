document.getElementById('searchbtn').addEventListener('input', search);
let catgry = document.getElementById('category');
catgry.addEventListener('change', function () {
  category(catgry.value);
});

document.getElementById('max').addEventListener('change', price);
document.getElementById('min').addEventListener('change', price);

// <======= SCRIPT FOR NAV BAR SEARCH ============>
let searchvalue = document.getElementById('searchitem');

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
      }"  href="product.php?id=${data[key].id}">(${data[key].id}) ${
        data[key].name !== '' && truncate(data[key].name, 20)
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
               <p class="card-text">Price : $${data[key].price}</p>
                 

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

    let maximum = document.getElementById('max').value;

    let minimum = document.getElementById('min').value;
    if (maximum !== '' && minimum !== '' && maximum < minimum) {
      let output = `<div class="my-4"><div class="container d-flex justify-content-between"></div><div class="row justify-content-center">`;
      output += `<h3>maximum should be greater than minimum</h3>`;
      display.innerHTML = output;
      return;
    }
    if (maximum === '' && minimum === '') {
      maximum = 10000;
      minimum = 0;
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

          if (typeof data == 'string') {
            data = JSON.parse(data);
          }

          if (data.length > 0) {
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
          } else {
            let output = `<div class="my-4"><div class="container d-flex justify-content-between"></div><div class="row justify-content-center">`;
            output += `<h3>Products Not found</h3>`;
            display.innerHTML = output;
          }
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
  }
}
function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + '..' : str;
}
