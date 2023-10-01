<?php
require('../process/connect.php');
$output = array();
if (isset($_GET['search'])) {
    $search = $_GET['search'];
    $select = "SELECT id,name 
        FROM books
        WHERE id LIKE '%$search%' OR name LIKE '%$search%' UNION
        SELECT id,name 
        FROM perfumes
        WHERE id LIKE '%$search%' OR name LIKE '%$search%' UNION
        SELECT id,name 
        FROM electronic1s
        WHERE id LIKE '%$search%' OR name LIKE '%$search%' UNION
        SELECT id,name 
        FROM electronics
        WHERE id LIKE '%$search%' OR name LIKE '%$search%'";
    $result = mysqli_query($connect, $select);
    if (mysqli_num_rows($result) > 0) {

        while ($resultarr = mysqli_fetch_assoc($result)) {
            $output[] = $resultarr;
        }
    }
    // else{
    //     $output[]=["name"=>"Cannot find data"];
    // }
    $output = json_encode($output);
}
echo json_encode($output);
