<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "email_popin";


$email = $_POST["emailrecup"];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO informations (email) VALUES ('$email')";
    $conn->exec($sql);
    echo "OK";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>


