<?php
if(isset($_POST['submit'])) {
$to = "vstup.piitu@gmail.com";
$subject = "Трафик людей с piitu-asu.kh.ua";
$name_field = $_POST['name'];    //ИД поля в форме
$email_field = $_POST['email'];    //ИД поля в форме
$message = $_POST['message'];    //ИД поля в форме
 
$body = "From: $name_field\n E-Mail: $email_field\n Message:\n $message";
 
// echo "Data has been submitted to $to!";
mail($to, $subject, $body);
header ("Location:http://piitu-asu.kh.ua/#contact1");
} else {
    echo '<script type="text/javascript">alert("Oops something goes wrong")</script>';
    header ("Location:http://piitu-asu.kh.ua");
}
?>
