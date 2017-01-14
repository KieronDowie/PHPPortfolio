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
      "Website Creation" => [
          "name" => "Website Creation",
          "text" => "My primary skillset. I can take a website idea from design phase to completion using HTML, CSS, Javascript and any other required tools or frameworks.",
          "img" => "./img/services/web.png"
      ],
      "Web Design" => [
          "name" => "Web Design",
          "text" => "I can create website mockups using Photoshop or Gimp, to be converted later into an actual website.",
          "img" => "./img/services/design.png"
      ],
      "Wordpress" => [
          "name" => "Wordpress",
          "text" => "Have a mockup of a website? I can take it and turn it into a working and polished Wordpress site.",
          "img" => "./img/services/wordpress.png"
      ],
      "Web Scraping" => [
          "name" => "Web Scraping",
          "text" => "I can write programs to scrape the web for you and retrieve large quantities of useful data for business purposes.",
          "img" => "./img/services/scraper.png"
      ],
      "Firefox and Chrome plugins" => [
          "name" => "Firefox and Chrome plugins",
          "text" => "Have a plugin idea, or just want to automate a menial task you need to do every day? I can write a Chrome or Firefox plugin of your choice.",
          "img" => "./img/services/plugin.png"
      ],
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
