<?php
$host="localhost";
$user="root";
$pass="";
$dbname="practice";
$con=mysqli_connect($host,$user,$pass,$dbname);
if (mysqli_connect_errno($con))
{
echo "<h1>Failed to connect to MySQL: " . mysqli_connect_error() ."</h1>";
}
$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$comment=$_POST['comment'];
$sql="INSERT INTO guest_book(name,email,phone,comment) VALUES('$name','$email','$phone','$comment')";
if (!mysqli_query($con,$sql))
{
die('Error: ' . mysqli_error($con));
}
else
echo "Values Stored in our Database!";
mysqli_close($con);
?>