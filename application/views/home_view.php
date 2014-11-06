<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Simple Login with CodeIgniter - Private Area</title>
    <link rel="stylesheet" href="<?php echo(CSS.'style.css'); ?>">
    <link rel="import" href="http://www.polymer-project.org/components/paper-ripple/paper-ripple.html">
    <link rel="import" href="http://www.polymer-project.org/components/core-icons/core-icons.html">
    <link rel="import" href="http://www.polymer-project.org/components/font-roboto/roboto.html">
</head>
<body>
<h1>Home</h1>
<h2>Welcome <?php echo $username; ?>!</h2>
<a href="home/logout">Logout</a>
</body>
</html>