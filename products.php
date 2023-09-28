<?php
require('process/connect.php');
require('include/header.php');
include('include/navbar.php');
if (isset($_GET['category'])) {
    $category = $_GET['category'];
    if ($category == 'electronic1s' || $category == 'electronic2s') {
        $select = "SELECT * FROM $category WHERE product=(SELECT id FROM electronic WHERE name = '$category')";
    } else {
        $select = "SELECT * From $category WHERE product=(SELECT id FROM products WHERE CATEGORY = '$category')";
        $result = mysqli_query($connect, $select);
    }
?>
    <main>

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 text-center pt-4 fixed">
                    filter by price<br />
                    <div class="m-4">
                        <span>max</span>
                        <input type="number" />
                    </div>
                    <div class="m-4">
                        <span>min</span>
                        <input type="number" />
                    </div>
                    <br />
                </div>
                <div class="col-md-9 container">
                    <div class="row">
                        <div>
                            <div class="category-title-container">
                                <h2>category name</h2>

                            </div>
                            <div class="cards-container">
                                <!-- card with image title description -->
                                <?php
                                while ($product = mysqli_fetch_assoc($result)) {
                                ?>
                                    <img src="<?php echo $product['img'] ?>" height="150px" width="100%" style="object-fit: cover;" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title"><?php echo $product['name'] ?></h5>
                                        <ul class="card-text">
                                            <li>Price : $<?php echo $product['price']; ?></li>
                                            <!-- <li>Brand : <?php echo $product['brand']; ?></li>
                                    <li>Weight : <?php echo $product['weight']; ?></li> -->
                                        </ul>

                                    </div>
                                    <div class="card-footer">
                                        <a href="product.php?id=<?php echo $product['id']; ?>" class="btn btn-primary">View details</a>
                                    </div>
                                <?php
                                }
                                ?>
                            </div>
                        </div>
                    </div>


                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>

    </main>
<?php
}
include('include/footer.php');
?>