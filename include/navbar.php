<body>
    <header class='sticky-top'>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
            <a class="navbar-brand title-animation" href="index.php">
                <img src="uploads/logo.png" width="50" height="50" class="d-inline-block align-top" alt="logo">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
                <div class="">
                    <ul class=" footer-page">
                        <li class="nav-item active head-nav">
                            <a class="nav-link head-nav" href="index.php">Home
                                <span class="sr-only">(current)</span></a>
                        </li>
                        <li>
                            <form class="form-inline my-2 my-lg-0 w-25">

                                <div id="mainsearch" class="d-block">
                                    <script>
                                        function hideSearch() {
                                            // wait two second and make it empty
                                            setTimeout(function() {
                                                document.getElementById('searchitem').innerHTML = '';
                                            }, 500)
                                            // document.getElementById('searchitem').innerHTML = '';
                                        }
                                    </script>
                                    <input onblur="hideSearch()" class="form-control mr-sm-2" type="search" id="searchbtn" placeholder="Search by id or name" aria-label="Search" />
                                    <div class="bg-light text-secondary" id="searchitem">

                                    </div>
                                </div>

                            </form>
                        </li>
                        <li class="nav-item ">
                            <a class=" head-nav" href="aboutus.php">About US</a>
                        </li>
                        <!-- <li class="nav-item " style="margin-top: 5px">
                            <div class="">
                                <div class="">
                                    <select id="category" class="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example">
                                        <option selected disabled>Category</option>
                                        <option value="book">Book</option>
                                        <option value="perfume">Perfume</option>
                                        <option value="electronic1">Electronic1</option>
                                        <option value="electronic2">Electronic2</option>
                                    </select>

                                </div>
                            </div>
                        </li> -->
                    </ul>
                </div>



            </div>
        </nav>
    </header>