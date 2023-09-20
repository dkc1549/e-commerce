<?php 
require ("../process/connect.php");
$select="SELECT * FROM books";
$arr=array();
$result=mysqli_query($connect,$select);
if(mysqli_num_rows($result)>0){
    while($resultarr=mysqli_fetch_assoc($result)){
        $arr[]=$resultarr;
    }
    echo json_encode($arr);
}