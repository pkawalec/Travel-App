

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Simple Login with CodeIgniter - Private Area</title>
     <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
	 <meta charset="utf-8">
    <link rel="stylesheet" href="<?php echo(CSS.'style.css'); ?>">
    <link rel="import" href="http://www.polymer-project.org/components/paper-ripple/paper-ripple.html">
    <link rel="import" href="http://www.polymer-project.org/components/core-icons/core-icons.html">
    <link rel="import" href="http://www.polymer-project.org/components/font-roboto/roboto.html">

    <script src="<?php echo (JS.'jq.js');?>" type="text/javascript"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>


  </head>
<body id="body">

<div id="nav">
  <div id="hide">
    <button id="hideBtn"  >Hide widgets</button>
  </div>

  
  <div id="formContainer">
  	<input id="searchinput" type="text" onchange="calcRoute();" />
   
  </div>

  <div id="logout">
  
    <a href="home/logout">Logout</a>
 
  </div>
</div>
          <!------------------------------------------------------------>

  
  
  <div id="map-canvas"></div>
    
    <!--for google maps---------------------------------------------->
  <div id="mainContainer">



    <div id="flickerContainer"></div>
    

    <div id="weatherContainer">
       <div id="weatherImage">
</div>

    <div id="weatherImage2">
</div>

 
        <div id="weatherImage"></div>
        <div id="tomeTable"></div>
    </div>
     
     
    
  </div>
  

  
      <script src="<?php echo(JS.'custom.js');?>"  type="text/javascript"></script>
  <script src="<?php echo (JS.'yahooWeather.js');?>" type="text/javascript" ></script>

    <script src="<?php echo (JS.'maps.js');?>" type="text/javascript" ></script>

</body>
</html>