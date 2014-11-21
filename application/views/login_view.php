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

<h1>Simple Login</h1>
<?php echo validation_errors(); ?>
<?php echo form_open('verifylogin'); ?>

<input type="text" size="20" id="username" name="username" placeholder="Username"/>
<br/>
<input type="password" size="20" id="passowrd" name="password" placeholder="Password"/>
<br/>
<input type="submit" value="Login"/>
<a href="login/signup">Create account</a>



</div>
  
  
</body>
</html>