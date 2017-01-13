<!DOCTYPE html>
<html lang="en">
<head>
  <?php
    $work = [
      "Starship Epiphron" => [
          "name" => "Starship Epiphron",
          "link" => "http://starshipepiphron.herokuapp.com/",
          "img" => "epiphron.jpg",
          "text" => "This was one of my earlier websites, used to explain the rules of the 'Starship Epiphron' game. It was the first site I made using Wordpress and I'm happy how it turned out from a design perspective. I was far less experienced with Wordpress and with CSS and HTML, as well as design in general, at the time I created it."
      ],
      "Moon Projects" => [
          "name" => "Moon Projects",
          "link" => "http://kierondowie.github.io/MoonProjects",
          "img" => "moonprojects.jpg",
          "text" => "A theme made in jekyll for 'Moon Projects', a safety consultancy company. It was made using Sass and Jekyll. I'm very happy with the end result and feel the tone achieved with the theme was very appropriate for the tone of the business."
      ],
      "Portfolio" => [
          "name" => "Portfolio",
          "link" => "#",
          "img" => "portfolio.png",
          "text" => "The site you are currently on! This was developed from the ground up by me using Sass, JQuery and HTML. I think I made some good colour scheme choices when making this, and I love how fluid the carousel ended up being. It took a while to make, but I think all the tweaking and adjustments were worth the end result."
      ],
      "That Techy Guy" => [
          "name" => "That Techy Guy",
          "link" => "https://kierondowie.github.io/Portfolio/",
          "img" => "techy.png",
          "text" => "My original portfolio site. This was created using plain HTML and CSS. I created it a long time ago, and I made some beginner mistakes with it. It doesn't have the unity that my other sites have, but I consider it a learning experience in my journey as a web developer."
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
