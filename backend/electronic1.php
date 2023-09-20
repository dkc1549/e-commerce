<?php 
require ("../process/connect.php");
// Query to fetch data from the electronic1 table
$query = "SELECT * FROM electronic1s";
$result = mysqli_query($connect,$query);


// Create an XML document
$xml = new SimpleXMLElement('<main/>');

// // Fetch data and add it to the XML document
while ($row = $result->fetch_assoc()) {
    $perfume = $xml->addChild('electronic1');
    $perfume->addChild('id', $row['id']);
    $perfume->addChild('name', $row['name']);
    $perfume->addChild('price', $row['price']);
    $perfume->addChild('wireless_carrier', $row['wireless carrier']);
    $perfume->addChild('brand', $row['brand']);
    $perfume->addChild('color', $row['color']);
    $perfume->addChild('memory', $row['memory']);
    $perfume->addChild('screen_size', $row['screen size']);
    $perfume->addChild('os', $row['os']);
    $perfume->addChild('img', $row['img']);
}

// // Output the XML
header('Content-type: text/xml');
echo $xml->asXML();


?>