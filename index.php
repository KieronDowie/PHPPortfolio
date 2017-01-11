<!DOCTYPE html>
<html lang="en">
<head>
  <?php
    $work = [
      "test5" => [
          "name" => "One",
          "link" => "http://www.google.com",
          "img" => "moonprojects.jpg"
      ],
      "Moon Projects" => [
          "name" => "Moon Projects",
          "link" => "http://kierondowie.github.io/MoonProjects",
          "img" => "moonprojects.jpg"
      ],
      "test2" => [
          "name" => "Three",
          "link" => "http://www.google.com",
          "img" => "moonprojects.jpg"
      ],
      "test3" => [
          "name" => "Four",
          "link" => "http://www.google.com",
          "img" => "moonprojects.jpg"
      ],
      "test1" => [
          "name" => "Five",
          "link" => "http://www.google.com",
          "img" => "moonprojects.jpg"
      ]
    ];
    $services = [
      "one" => [
          "name" => "Service Name",
          "text" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis saepe adipisci accusamus, ex error nostrum quasi. Perspiciatis tempora ipsa suscipit ducimus eaque, tempore sint eum totam blanditiis eligendi? Fugit, pariatur.",
          "img" => "./img/services/placehold.png"
      ],
      "two" => [
          "name" => "Service Name",
          "text" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis saepe adipisci accusamus, ex error nostrum quasi. Perspiciatis tempora ipsa suscipit ducimus eaque, tempore sint eum totam blanditiis eligendi? Fugit, pariatur.",
          "img" => "./img/services/placehold.png"
      ],
      "test2" => [
          "name" => "Service Name",
          "text" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis saepe adipisci accusamus, ex error nostrum quasi. Perspiciatis tempora ipsa suscipit ducimus eaque, tempore sint eum totam blanditiis eligendi? Fugit, pariatur.",
          "img" => "./img/services/placehold.png"
      ],
      "test3" => [
          "name" => "Service Name",
          "text" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis saepe adipisci accusamus, ex error nostrum quasi. Perspiciatis tempora ipsa suscipit ducimus eaque, tempore sint eum totam blanditiis eligendi? Fugit, pariatur.",
          "img" => "./img/services/placehold.png"
      ],
      "test1" => [
          "name" => "Service Name",
          "text" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis saepe adipisci accusamus, ex error nostrum quasi. Perspiciatis tempora ipsa suscipit ducimus eaque, tempore sint eum totam blanditiis eligendi? Fugit, pariatur.",
          "img" => "./img/services/placehold.png"
      ]
    ];
  ?>
  <?php include 'html/head.html' ?>
</head>
<body>
  <?php include 'html/home.html' ?>
  <?php include 'html/about.html' ?>
  <?php include 'html/work.php' ?>
  <?php include 'html/services.php' ?>
  <?php include 'html/contact.html' ?>
  <?php include 'html/scripts.html' ?>
</body>
</html>
