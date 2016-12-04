<!DOCTYPE html>
<html lang="en">
<head>
  <?php
    $work = [
      "test5" => [
          "name" => "TEST",
          "link" => "http://www.google.com",
          "img" => "moonprojects.jpg"
      ],
      "Moon Projects" => [
          "name" => "Moon Projects",
          "link" => "http://kierondowie.github.io/MoonProjects",
          "img" => "moonprojects.jpg"
      ],
      "test2" => [
          "name" => "TEST2",
          "link" => "http://www.google.com",
          "img" => "moonprojects.jpg"
      ]
    ];
  ?>
  <?php include 'html/head.html' ?>
</head>
<body>
  <?php include 'html/home.html' ?>
  <?php include 'html/about.html' ?>
  <?php include 'html/work.php' ?>
  <?php include 'html/scripts.html' ?>
</body>
</html>
