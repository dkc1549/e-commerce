<?php 
require ("../process/connect.php");
// Query to fetch data from the electronic2s table
$query = "SELECT * FROM electronic2s";
$result = mysqli_query($connect,$query);


// Create an XML document
$xml = new SimpleXMLElement('<main/>');

// Fetch data and add it to the XML document
while ($row = $result->fetch_assoc()) {
    $perfume = $xml->addChild('electronic2');
    $perfume->addChild('id', $row['id']);
    $perfume->addChild('name', $row['name']);
    $perfume->addChild('price', $row['price']);
    $perfume->addChild('brand', $row['brand']);
    $perfume->addChild('os', $row['os']);
    $perfume->addChild('cpu', $row['cpu']);
    $perfume->addChild('screen_size', $row['screen size']);
    $perfume->addChild('computer_memory', $row['memory size']);
    $perfume->addChild('hardisk', $row['hardisk size']);
    $perfume->addChild('img', $row['img']);
}

// Output the XML
header('Content-type: text/xml');
echo $xml->asXML();


?>