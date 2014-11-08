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
  
  
  <div id="header">
<h2>Welcome <?php echo $username; ?>!</h2>

</div>
<div id="nav">
  <div id="hide">
    <button id="hide6">Hide widgets</button>
  </div>
  <div id="formContainer">
  <?php
    $data = array(
      'name'  => 'search',
      'size'  => '40',
      'id'    => 'search',
      'placeholder' => 'Your search'
    );
    echo form_open('search');
    echo form_input($data);
    echo form_submit('submit', 'Search');
?>
</div>
<div id="logout">
  
    <a href="home/logout">Logout</a>
 
</div>
</div>
  <div id="mainContainer">
    
    <!--for google maps-->
    

    <div id="flickerContainer">This is ready for flicker images</div>
    <div id="weatherContainer">This is ready for flicker images</div>
  </div>


   
  
  

</body>
</html>