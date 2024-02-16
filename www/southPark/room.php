<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <?php include("cdn/cdn.php"); ?>
  <title>South Park</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-image: url('southSchool.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
</head>

<body>
<div id="myModal">
    <p>¡Felicidades! Has completado el puzzle.</p>
  </div>

  <?php include("characters/cartman.php"); ?>
</body>

</html>