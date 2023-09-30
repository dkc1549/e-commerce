<?php
require('process/connect.php');
include('include/header.php');
include('include/navbar.php');
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    if (in_array($id, ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b10', 'b11', 'b12', 'b16', 'b17', 'b18'])) {
        $category = 'books';
    } elseif (in_array($id, ['p1', 'p2', 'p13', 'p25', 'p28'])) {
        $category = 'perfumes';
    } elseif (in_array($id, ['e1', 'e2', 'e3', 'e4'])) {
        $category = 'electronic1s';
    } elseif (in_array($id, ['e5', 'e6', 'e7', 'e8'])) {
        $category = 'electronic2s';
    }
    if ($category == 'perfumes') {
        $select = "SELECT * FROM $category where id='$id'";
    } elseif ($category == 'electronic1s') {
        $select = "SELECT * FROM $category where id='$id'";
    } elseif ($category == 'electronic2s') {
        $select = "SELECT * FROM $category where id='$id'";
    } else {
        $select = "SELECT * FROM $category where id='$id'";
    }
    $result = mysqli_query($connect, $select);
    $product = mysqli_fetch_assoc($result);
?>
    <div class="mt-2">
        <h1 class="bg-secondary p-3 text-center mb-4"><?php echo $product['name']; ?></h1>
        <div class="container">
            <div class="product-details row">
                <div class="product-images text-center col-lg-6">
                    <a href="<?php echo $product['img']; ?>" target="_blank">
                        <img src="<?php echo $product['img']; ?>" class="rounded img-fluid" alt="Product Image">
                    </a>
                </div>
                <div class="product-info container col-lg-6">
                    <div>
                        <?php
                        if ($category == 'books') {
                        ?>
                            <h2>Author: <?php echo $product['author']; ?></h2>
                            <p class="description text-justify"><?php echo $product['description']; ?></p>
                            <ul class="amenities">
                                <li>Type: <?php echo $product['type']; ?></li>
                                <li>Price: $<?php echo $product['price']; ?></li>
                                <li>Category: <?php echo $product['category']; ?></li>
                            </ul>
                        <?php
                        } else {
                        ?>
                            <h2>Brand: <?php echo $product['brand']; ?></h2>
                            <ul class="amenities">
                                <li>Price: $<?php echo $product['price']; ?></li>
                                <?php if ($category == 'perfumes') {
                                ?>
                                    <li>Ingredient: <?php echo $product['ingredient']; ?></li>
                                    <li>Item weight: <?php echo $product['weight']; ?></li>
                                <?php
                                } else {
                                ?>
                                    <li>OS: <?php echo $product['os']; ?></li>
                                    <li>Screen Size : <?php echo $product['screen size']; ?></li>
                                    <?php
                                    if ($category == 'electronic1s') {
                                    ?>
                                        <li>Wireless Carrier: <?php echo $product['wireless carrier']; ?></li>
                                        <li>Memory size: <?php echo $product['memory']; ?></li>
                                    <?php
                                    } else {
                                    ?>
                                        <li>CPU: <?php echo $product['cpu']; ?></li>
                                        <li>Computer Memory size: <?php echo $product['memory size']; ?></li>
                                        <li>Harddisk size: <?php echo $product['hardisk size']; ?></li>
                                <?php
                                    }
                                }
                                ?>
                            </ul>
                        <?php
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php

}
include('include/footer.php');
?>