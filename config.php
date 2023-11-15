'''php
<?php
//Retrieve values from $_POST superglobal (assuming the method attribute is a set to "post")
$name = $_POST['name'];
$email = $_POST['email']

//Perform further operations with retrieved values if needed

//Set up email parameters
$to = 'feef5102@gmail.com';
$subject = 'Form DAta Submission';
$message = "Name: $name\nEmail:
$email";

//Send emailusing mail()function if(mail($to,$subject,$message)){echo 'Data sent successfully!';} else{echo 'Failed to send data.';}?>
'''