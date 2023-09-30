<?php
require("../process/connect.php");
if ((isset($_GET['slug']))&&(isset($_GET['max']))&&(isset($_GET['min']))) {
    $table=$_GET['slug'];
    $max=(int)$_GET['max'];
    $min=(int)$_GET['min'];
    // $select = `SELECT * FROM $table WHERE price > '$min' && price < '$max'`;
    
    $arr = array();
    $result = mysqli_query($connect, "SELECT * FROM $table WHERE price GE '0' AND price LE '1000'");
    if (mysqli_num_rows($result) > 0) {
        while ($resultarr = mysqli_fetch_assoc($result)) {
            $arr[] = $resultarr;
        }
        echo json_encode($arr);
    }
}
