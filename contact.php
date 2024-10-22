<?php
// Error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Ensure this path is correct

$mail = new PHPMailer(true);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header('Content-Type: application/json'); // Set JSON response header

    // Get the raw POST data
    $data = json_decode(file_get_contents("php://input"), true);

    // Collect and sanitize form data
    $name = htmlspecialchars($data['name']);
    $email = htmlspecialchars($data['email']);
    $message = htmlspecialchars($data['message']);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["error" => "Invalid email format."]);
        exit();
    }

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'mdy082005@gmail.com'; // Your Gmail address
        $mail->Password   = 'feggcydsvvdldcsk'; // Your App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom('mdy082005@gmail.com', 'Yusuf');
        $mail->addAddress('mdy082005@gmail.com'); 

        // Email content
        $mail->isHTML(true);
        $mail->Subject = 'New Message from Your Portfolio';
        $mail->Body    = "<strong>Name:</strong> $name<br><strong>Email:</strong> $email<br><strong>Message:</strong> $message";
        $mail->AltBody = "Name: $name\nEmail: $email\nMessage: $message"; // Plain text version

        // Send email
        if ($mail->send()) {
            echo json_encode(["success" => true, "name" => $name]);
        } else {
            echo json_encode(["error" => "Message could not be sent."]);
        }
    } catch (Exception $e) {
        echo json_encode(["error" => "Mailer Error: {$mail->ErrorInfo}"]);
    }
} else {
    header('HTTP/1.1 405 Method Not Allowed');
    echo json_encode(["error" => "Invalid request."]);
}
?>
