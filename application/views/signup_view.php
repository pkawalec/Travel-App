<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Simple Login with CodeIgniter</title>

    <link rel="stylesheet" href="<?php echo(CSS.'style.css'); ?>">
    <link rel="import" href="http://www.polymer-project.org/components/paper-ripple/paper-ripple.html">
    <link rel="import" href="http://www.polymer-project.org/components/core-icons/core-icons.html">
    <link rel="import" href="http://www.polymer-project.org/components/font-roboto/roboto.html">
</head>
<body>


<div id="nav">


</div>



<div id="loginBox">

<h1>Simple Signup</h1>
  <fieldset>
    <legend>Personal Information</legend>
    <?php
      $userData = array(
        'name'  => 'username',
        'size'  => '20',
        'id'    => 'username',
        'placeholder' => 'Username'
      );
      $userPass = array(
        'name'  => 'password',
        'size'   => '20',
        'id'    => 'password',
        'placeholder' =>'Password'
      );

      echo form_open('login/verifySignup');
      echo form_input($userData) . '<br />';
      echo form_password($userPass) . '<br />';
      echo form_submit('submit', 'Sign Up');


    ?>
    
  </fieldset>
  
  <a href="../login">Login</a>


</div>
</body>
</html>