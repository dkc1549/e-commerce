<?php
require('process/connect.php');
require('include/header.php');
include('include/navbar.php');

$product = "SELECT product FROM website";

$book = "SELECT * FROM books LIMIT 4";
$books = mysqli_query($connect, $book);

$perfume = "SELECT * FROM perfumes LIMIT 4";
$perfumes = mysqli_query($connect, $perfume);

$electronic1 = "SELECT * FROM electronic1s LIMIT 4";
$electronic1s = mysqli_query($connect, $electronic1);

$electronic2 = "SELECT * FROM electronic2s LIMIT 4";
$electronic2s = mysqli_query($connect, $electronic2);

//   function to cut the string and show the first 20 characters
function cutString($string, $length)
{
    if (strlen($string) > $length) {
        $string = substr($string, 0, $length);
        $string = substr($string, 0, strrpos($string, ' '));
        $string = $string . '...';
    }
    return $string;
}
?>

<main class="body">
    <!-- ========== Hero section starts============ -->
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="uploads/banner1.png" height="300px" style="object-fit: cover" alt="First slide" />
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="uploads/banner2.jpg" height="300px" style="object-fit: cover" alt="Second slide" />
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="uploads/banner3.png" height="300px" style="object-fit: cover" alt="Third slide" />
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <!-- ========== Hero section ends============ -->

    <!-- ========== Catchy Headline starts =========== -->
    <div class="container text-justify text-secondary small-description ">
        Welcome to SOF102, your one-stop shop for <b>perfumes, books, laptops, and mobiles!</b> We offer a wide selection of products from top brands at competitive prices. Whether you're <b>looking for a new signature scent, a good read, or a powerful new laptop</b>, we have something for everyone. We also have a team of friendly and knowledgeable customer service representatives who are always happy to help.<br /> You can search item through search bar and filter item by category and the item's max and min price.
    </div>
    <!-- ============= Catchy Headline ends ============ -->
    <div class="container-fluid">
        <div class="container">
            <h2 class="text-center p-4">Search filters</h2>
            <div class="row">
                <div class="col-6">
                    <h5>Filter by Category</h5>
                    <div class="row">
                        <div class="container-fluid">
                            <div class="row">
                                <select id="category" class="form-select col-8 form-control form-select mb-3" aria-label=".form-select example">
                                    <option selected disabled>Filter by Category</option>
                                    <option value="book">Book</option>
                                    <option value="perfume">Perfume</option>
                                    <option value="electronic1">Electronic1</option>
                                    <option value="electronic2">Electronic2</option>
                                </select>
                                <div class="col-2">
                                    <a name="" id="" class="btn btn-primary" href="index.php" role="button">Reset</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- =========== Price filter goes here =========== -->
                <div class="col-md-6" id="price">
                    <div class="row">
                        <h5 class="text-center">Filter by price</h5>
                        <div class="container">
                            <div class="row justify-content-evenly">
                                <div class="m-2">
                                    <label for="" class="form-label">Max</label>
                                    <input type="number" step="0.01" class="" name="" id="max" placeholder="">
                                </div>
                                <div class="m-2">
                                    <label for="" class="form-label">Min</label>
                                    <input type="number" step="0.01" class="" name="" id="min" placeholder="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="container-fluid" id="filteroutput">
            <div class="my-4">
                <div class="container d-flex justify-content-between">
                    <h2>Book</h2>
                    <div><a href="products.php?category=<?php echo "books"; ?>" class="fs-1">View more....</a></div>
                </div>
                <div class="row justify-content-center">
                    <?php while ($bookarr = $books->fetch_assoc()) { ?>
                        <div class="card m-2" style="width: 18rem">
                            <img src="<?php echo $bookarr['img'] ?>" height="150px" width="100%" style="object-fit: cover;" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 title="<?php echo $bookarr['name']; ?>" class="card-title"><?php


                                                                                                echo cutString($bookarr['name'], 30) ?></h5>
                                <ul class="card-text">
                                    <li>Price : $<?php echo $bookarr['price']; ?></li>

                                </ul>

                            </div>
                            <div class="card-footer">
                                <a href="product.php?id=<?php echo $bookarr['id']; ?>&slug=books" class="btn btn-primary">View details</a>
                            </div>
                        </div>
                    <?php
                    } ?>
                </div>
            </div>

            <div class="my-4">
                <div class="container d-flex justify-content-between">
                    <h2>Perfume</h2>
                    <div><a href="products.php?category=<?php echo 'perfumes'; ?>" class="fs-1">View more....</a></div>
                </div>
                <div class="row justify-content-center">
                    <?php while ($perfumearr = $perfumes->fetch_assoc()) { ?>
                        <div class="card m-2" style="width: 18rem">
                            <img src="<?php echo $perfumearr['img'] ?>" height="150px" width="100%" style="object-fit: cover;" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 title="<?php echo $perfumearr['name']; ?>" class="card-title"><?php echo cutString($perfumearr['name'], 30) ?></h5>
                                <ul class="card-text">
                                    <li>Price : $<?php echo $perfumearr['price']; ?></li>

                                </ul>

                            </div>
                            <div class="card-footer">
                                <a href="product.php?id=<?php echo $perfumearr['id']; ?>&slug=perfumes" class="btn btn-primary">View details</a>
                            </div>
                        </div>
                    <?php
                    } ?>
                </div>
            </div>

            <div class="my-4">
                <div class="container d-flex justify-content-between">
                    <h2>Electronic1</h2>
                    <div><a href="products.php?category=<?php echo "electronic1s"; ?>" class="fs-1">View more....</a></div>
                </div>
                <div class="row justify-content-center">
                    <?php while ($electronic1arr = $electronic1s->fetch_assoc()) { ?>
                        <div class="card m-2" style="width: 18rem">
                            <img src="<?php echo $electronic1arr['img'] ?>" height="150px" width="100%" style="object-fit: cover;" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 title="<?php echo $electronic1arr['name']; ?>" class="card-title"><?php echo cutString($electronic1arr['name'], 30) ?></h5>
                                <ul class="card-text">
                                    <li>Price : $<?php echo $electronic1arr['price']; ?></li>

                                </ul>

                            </div>
                            <div class="card-footer">
                                <a href="product.php?id=<?php echo $electronic1arr['id']; ?>&slug=electronic1s" class="btn btn-primary">View details</a>
                            </div>
                        </div>
                    <?php
                    } ?>
                </div>
            </div>

            <div class="my-4">
                <div class="container d-flex justify-content-between">
                    <h2>Electronic2</h2>
                    <div><a href="products.php?category=<?php echo "electronic2s"; ?>" class="fs-1">View more....</a></div>
                </div>
                <div class="row justify-content-center">
                    <?php while ($electronic2arr = $electronic2s->fetch_assoc()) { ?>
                        <div class="card m-2" style="width: 18rem">
                            <img src="<?php echo $electronic2arr['img'] ?>" height="150px" width="100%" style="object-fit: cover;" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 title="<?php echo $electronic2arr['name']; ?>" class="card-title"><?php echo cutString($electronic2arr['name'], 30) ?></h5>
                                <ul class="card-text">
                                    <li>Price : $<?php echo $electronic2arr['price']; ?></li>
                                </ul>

                            </div>
                            <div class="card-footer">
                                <a href="product.php?id=<?php echo $electronic2arr['id']; ?>&slug=electronic2s" class="btn btn-primary">View details</a>
                            </div>
                        </div>
                    <?php
                    } ?>
                </div>
            </div>

        </div>
</main>
<?php
require('include/footer.php');
?>