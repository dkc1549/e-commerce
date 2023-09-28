<?php
require('process/connect.php');
include('include/header.php');
include('include/navbar.php');
if (isset($_GET['id']) && isset($_GET['slug'])) {
    $id = $_GET['id'];
    $slug = $_GET['slug'];
    if ($slug == 'perfumes') {
        $select = "SELECT * FROM $slug where id='$id'";
    } elseif ($slug == 'electronic1s') {
        $select = "SELECT * FROM $slug where id='$id'";
    } elseif ($slug == 'electronic2s') {
        $select = "SELECT * FROM $slug where id='$id'";
    } else {
        $select = "SELECT * FROM $slug where id='$id'";
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
                        if ($slug == 'books') {
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
                                <?php if($slug=='perfumes'){
                                    ?>
                                <li>Ingredient: <?php echo $product['ingredient']; ?></li>
                                <li>Item weight: <?php echo $product['weight']; ?></li>
                                <?php 
                                }else{
                                    ?>
                                        <li>OS: <?php echo $product['os'];?></li>
                                        <li>Screen Size : <?php echo $product['screen size'];?></li>
                                    <?php
                                    if($slug=='electronic1s'){
                                        ?>
                                            <li>Wireless Carrier: <?php echo $product['wireless carrier'];?></li>
                                            <li>Memory size: <?php echo $product['memory'];?></li>
                                        <?php
                                    }else{
                                        ?>
                                            <li>CPU: <?php echo $product['cpu'];?></li>
                                            <li>Computer Memory size: <?php echo $product['memory size'];?></li>
                                            <li>Harddisk size: <?php echo $product['harddisk size'];?></li>
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