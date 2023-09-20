<?php 
require ("../process/connect.php");
// Query to fetch data from the perfume table
$query = "SELECT * FROM perfumes";
$result = mysqli_query($connect,$query);


// Create an XML document
$xml = new SimpleXMLElement('<perfumes/>');

// // Fetch data and add it to the XML document
while ($row = $result->fetch_assoc()) {
    $perfume = $xml->addChild('perfume');
    $perfume->addChild('id', $row['id']);
    $perfume->addChild('name', $row['name']);
    $perfume->addChild('price', $row['price']);
    $perfume->addChild('brand', $row['brand']);
    $perfume->addChild('ingredient', $row['ingredient']);
    $perfume->addChild('weight', $row['weight']);
    $perfume->addChild('img', $row['img']);
}

// // Output the XML
header('Content-type: text/xml');
echo $xml->asXML();


?>