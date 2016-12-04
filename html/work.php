<section class="work">
  <h2>My Work</h2>
  <div class="carousel">
    <?php
    $c = 0;
    foreach ($work as $key => $value)
    {
      $c++;
      ?>
      <div class="imgcontainer <?php
      if ($c == 1)
      {
        echo "leftImg";
      }
      else if ($c == 2)
      {
        echo "midImg";
      }
      else if ($c == 3)
      {
        echo "rightImg";
      }
      ?>">
        <div class="overlay">
          <p><?php echo $work[$key]["name"] ?></p>
          <button onclick='window.open("<?php echo $work[$key]["link"] ?>")'>Visit Website</button>
        </div>
        <img src="<?php echo "img/projects/".$work[$key]["img"]; ?>" alt="<?php echo $work[$key]["name"]; ?>" />
      </div>
    <?php
    } ?>
    <div class="tags">

    </div>
  </div>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque molestias, perspiciatis architecto voluptas, sequi debitis error voluptatem quasi ratione? A et adipisci ipsum sit nostrum voluptatem quo totam magni mollitia esse omnis ullam, ducimus cumque provident debitis, earum, labore aut fugiat necessitatibus qui reprehenderit quasi vel aliquid nam. Nemo, nihil!</p>
</section>
