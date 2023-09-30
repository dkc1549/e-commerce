<?php
require("../process/connect.php");
if ((isset($_GET['slug']))&&(isset($_GET['max']))&&(isset($_GET['min']))) {
    $table=$_GET['slug'];
    $max=$_GET['max'];
    $min=$_GET['min'];
    $select = "SELECT * FROM $table WHERE price>='$min' && price<='$max' ";
    $arr = array();
    $result = mysqli_query($connect, $select);
    if (mysqli_num_rows($result) > 0) {
        while ($resultarr = mysqli_fetch_assoc($result)) {
            $arr[] = $resultarr;
        }
        echo json_encode($arr);
    }
}
