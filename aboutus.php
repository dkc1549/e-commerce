<?php
require('process/connect.php');
include_once('include/header.php');
include_once('include/navbar.php');
?>
<main>
    <div class="container">
        <h1 class="text-center p-2">About Us</h1>
        <h3 class="text-center text-primary p-3">We are a team of passionate and dedicated individuals who are committed to providing our website with the best possible service.</h3>

        <div class="row" id="studentInfo">

        </div>

    </div>

    <script>
        let display = document.getElementById('studentInfo');
        let xhr = new XMLHttpRequest();
        let output = '';
        xhr.open('GET', 'backend/aboutus.php', true);
        xhr.onload = function() {
            if (this.status == 200) {
                let data = JSON.parse(this.responseText);
                if (typeof data == 'string') {
                    data = JSON.parse(data);
                }
                for (const key in data) {
                    output += `<div class="col-md-6">
        <div class="card my-3">
          <div class="card-header">
            <h5 class="card-title">Name: ${data[key].name}</h5>
          </div>
          <div class="card-body">
            <p class="card-text">
              <b>Number:</b> ${data[key].number}
              <br>
              <b>Email:</b> ${data[key].email}
            </p>
            <p class="card-text">
              <b>Work Reflection:</b>
              ${data[key].work_reflection}
            </p>
          </div>
        </div>
      </div>`;
                }
            }
            display.innerHTML = output;
        };
        xhr.send();
    </script>
</main>
<?php
include_once('include/footer.php');
?>