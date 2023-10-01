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


                    </ul>
                </div>



            </div>
        </nav>
    </header>