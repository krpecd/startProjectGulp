<!DOCTYPE HTML>

<html lang="en">
<head>
  <meta charset="UTF-8">

  <title>Some title</title>
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <meta name="author" content="David Krpec, Freelance web developer" />

  <meta name="robots" content="index, follow" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />



  <!-- ### CSS loading ### --> 
  
  <meta name="fullcss"  content="css/front.css">
  <meta name="fulljs"  content="js/enhancements.js">
    <!--#if expr="$HTTP_COOKIE=/fullcss\=true/" -->
      <link rel="stylesheet" href="css/front.css">
    <!--#else -->
  <style>
    /* critical CSS styles for this template go here... */
    <?php include('css/critical.css'); ?>
  </style>
<!--#endif -->  
  <script>
    <!--#include virtual="js/enhance.js" -->
  </script>
  
  <noscript><link rel="stylesheet" href="css/front.css"></noscript>


  <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
  <![endif]-->
</head>
<body>





  <script src="js/front.js"></script>


</body>
</html>
