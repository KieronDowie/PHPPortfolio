function resizeH(start, decrement, unit)
{
  var h1 = $('h1');
  var h1container = $('.h1container');
  var spans = h1container.children();
  var totalWidth,containerWidth;
  var calcWidths = function(){
    totalWidth = 0;
    containerWidth = h1container.width();
    for (i=0;i<spans.length;i++)
    {
      totalWidth += $(spans[i]).width();
    }
  }
  var c = 0;
  h1container.css('fontSize',start+unit);
  do {
    calcWidths();
    if (containerWidth < totalWidth)
    {
      start-=decrement;
      h1container.css('fontSize',start+unit);
    }
    c++;
  } while (containerWidth < totalWidth && c < 400);
}
function openMenu()
{
  var menu = $('.home header nav ul');
  if (menu.hasClass('menuHidden'))
  {
    menu.removeClass('menuHidden');
    menu.animate({'top':'0'});
  }
  else
  {
    menu.animate({'top':'-100%'},function(){
      menu.addClass('menuHidden');
    });
  }
}
