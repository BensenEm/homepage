
<?php
require 'vendor/autoload.php'; 

$email = new \SendGrid\Mail\Mail(); 
$email->setFrom($_POST["email"], $_POST["name"]);
$email->setSubject($_POST["subject"]);
$email->addTo("info@buzzem.de", "Contact Form");
$email->addContent("text/html", $_POST["text"]);
$sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}
header("Location: index.html");