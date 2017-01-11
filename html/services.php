<section class="services">
	<h2>Services</h2>
	<?php
    $c = 0;
    foreach ($services as $key => $value)
    {
      $c++;
      ?>
      <div class="option">
      	<div class="optionimgcontainer">	
      		<img src="<?php echo $services[$key]["img"] ?>" alt="">
      	</div>
      	<div class="infocontainer">
      		<h3><?php echo $services[$key]["name"] ?></h3>
      		<p><?php echo $services[$key]["text"] ?></p>
      	</div>
      </div>
    <?php
    } ?>
</section>	