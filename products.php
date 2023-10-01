<?php
require('process/connect.php');
require('include/header.php');
include('include/navbar.php');
if (isset($_GET['category'])) {
    $category = $_GET['category'];
    if ($category == 'electronic1s' || $category == 'electronic2s') {
        $select = "SELECT * FROM $category WHERE electronic=(SELECT id FROM electronics WHERE name = '$category')";
    } else {
        $select = "SELECT * From $category WHERE product=(SELECT id FROM products WHERE CATEGORY = '$category')";
    }
    $result = mysqli_query($connect, $select);

    // word limit
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
    <main>

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 justify-content-center" style="height: fit-content;">
                    <div class="" style="margin:20px auto;position:fixed">

                    </div>
                </div>

                <div class="col-md-9 container">
                    <div class="row">
                        <div>
                            <div class="category-title-container">

                                <h2><?php echo strtoupper($category); ?></h2>

                            </div>
                            <div class="cards-container " id="filteroutput">
                                <!-- card with image title description -->
                                <?php

                                while ($product = mysqli_fetch_assoc($result)) {
                                ?>
                                    <div class="card m-2 " style="width: 18rem">
                                        <img src="<?php echo $product['img'] ?>" height="150px" width="100%" style="object-fit: cover;" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 title="<?php echo $product['name']; ?>" class="card-title"><?php echo cutString($product['name'], 30) ?></h5>
                                            <ul class="card-text">
                                                <li>Price : $<?php echo $product['price']; ?></li>

                                            </ul>

                                        </div>
                                        <div class="card-footer">
                                            <a href="product.php?id=<?php echo $product['id']; ?>&slug=<?php echo $category; ?>" class="btn btn-primary">View details</a>
                                        </div>
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