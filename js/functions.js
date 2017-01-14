//Smooth scroll plugin
(function(t){function e(t){return t.replace(/(:|\.)/g,"\\$1")}var l="1.5.2",o={},s={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},n=function(e){var l=[],o=!1,s=e.dir&&"left"===e.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!==document&&this!==window){var e=t(this);e[s]()>0?l.push(this):(e[s](1),o=e[s]()>0,o&&l.push(this),e[s](0))}}),l.length||this.each(function(){"BODY"===this.nodeName&&(l=[this])}),"first"===e.el&&l.length>1&&(l=[l[0]]),l};t.fn.extend({scrollable:function(t){var e=n.call(this,{dir:t});return this.pushStack(e)},firstScrollable:function(t){var e=n.call(this,{el:"first",dir:t});return this.pushStack(e)},smoothScroll:function(l,o){if(l=l||{},"options"===l)return o?this.each(function(){var e=t(this),l=t.extend(e.data("ssOpts")||{},o);t(this).data("ssOpts",l)}):this.first().data("ssOpts");var s=t.extend({},t.fn.smoothScroll.defaults,l),n=t.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(l){var o=this,r=t(this),i=t.extend({},s,r.data("ssOpts")||{}),c=s.exclude,a=i.excludeWithin,f=0,h=0,u=!0,d={},p=location.hostname===o.hostname||!o.hostname,m=i.scrollTarget||t.smoothScroll.filterPath(o.pathname)===n,S=e(o.hash);if(i.scrollTarget||p&&m&&S){for(;u&&c.length>f;)r.is(e(c[f++]))&&(u=!1);for(;u&&a.length>h;)r.closest(a[h++]).length&&(u=!1)}else u=!1;u&&(i.preventDefault&&l.preventDefault(),t.extend(d,i,{scrollTarget:i.scrollTarget||S,link:o}),t.smoothScroll(d))}),this}}),t.smoothScroll=function(e,l){if("options"===e&&"object"==typeof l)return t.extend(o,l);var s,n,r,i,c,a=0,f="offset",h="scrollTop",u={},d={};"number"==typeof e?(s=t.extend({link:null},t.fn.smoothScroll.defaults,o),r=e):(s=t.extend({link:null},t.fn.smoothScroll.defaults,e||{},o),s.scrollElement&&(f="position","static"===s.scrollElement.css("position")&&s.scrollElement.css("position","relative"))),h="left"===s.direction?"scrollLeft":h,s.scrollElement?(n=s.scrollElement,/^(?:HTML|BODY)$/.test(n[0].nodeName)||(a=n[h]())):n=t("html, body").firstScrollable(s.direction),s.beforeScroll.call(n,s),r="number"==typeof e?e:l||t(s.scrollTarget)[f]()&&t(s.scrollTarget)[f]()[s.direction]||0,u[h]=r+a+s.offset,i=s.speed,"auto"===i&&(c=u[h]-n.scrollTop(),0>c&&(c*=-1),i=c/s.autoCoefficient),d={duration:i,easing:s.easing,complete:function(){s.afterScroll.call(s.link,s)}},s.step&&(d.step=s.step),n.length?n.stop().animate(u,d):s.afterScroll.call(s.link,s)},t.smoothScroll.version=l,t.smoothScroll.filterPath=function(t){return t=t||"",t.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},t.fn.smoothScroll.defaults=s})(jQuery);
//Remove style plugin
(function($)
{
    $.fn.removeStyle = function(style)
    {
        var search = new RegExp(style + '[^;]+;?', 'g');

        return this.each(function()
        {
            $(this).attr('style', function(i, style)
            {
                return style.replace(search, '');
            });
        });
    };
}(jQuery));
//--
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
function showWorkInfo(info)
{
  $('#workinfo').html(info);
}
var moving = 0;
function moveCarousel()
{
  if (!moving)
  {
    moving = 4;
    if ($(this).hasClass('leftImg'))
    {
      var info = $('.leftImg .hidden')[0].innerHTML;
      //Move the carousel right.
      //Make right block disappear.
      $('.rightImg').animate({
        right: '-100%'
      },function(){
        $(this).removeClass('rightImg');
        moving--;
      });
      //Left block to center
      $('.leftImg').animate({
        left:'50%',
        height: $('.midImg').height(),
        width: $('.midImg').width()
      },function(){
        $(this).removeClass('leftImg').addClass('midImg');
        $(this).attr('style','')
        moving--;
      });
      $('.leftImg .overlay').animate({
        marginBottom: '-400px'
      });
      //Move middle block right
      $('.midImg').animate({
        left:'100%',
        height: $('.rightImg').height(),
        width: $('.rightImg').width()
      },function(){
        $(this).removeClass('midImg').addClass('rightImg');
        $(this).attr('style','')
        $(this).click(moveCarousel);
        moving--;
      });
      $('.midImg .overlay').animate({
        marginBottom: '-200px'
      });
      //Move the last block to the left.
      var containers = $('.imgcontainer');
      var last = containers[containers.length-1];
      $(last).css({
        display: 'block',
        left:'-50%',
        top:'50%',
        transform:'translate(-50%,-50%)'
      });
      $(last).animate({
        left: '0',
        height: $('.rightImg').height(),
        width: $('.rightImg').width()
      },function(){
        $(last).addClass('leftImg');
        $(this).attr('style','')
        $(this).click(moveCarousel);
        //Move this to the beginning of the list.
        $(this).prependTo($('.carousel'));
        moving--;
      });
    }
    else
    {
      var info = $('.rightImg .hidden')[0].innerHTML;
      //Move the carousel left.
      //Make left block disappear, move it to the end of the blocks.
      $('.leftImg').animate({
        left: '-100%'
      },function(){
        $(this).removeClass('leftImg');
        moving--;
        $('.carousel').append($(this));
      });
      //Right block to center
      $('.rightImg').animate({
        right:'50%',
        height: $('.midImg').height(),
        width: $('.midImg').width()
      },function(){
        $(this).removeClass('rightImg').addClass('midImg');
        $(this).attr('style','')
        moving--;
      });
      $('.rightImg .overlay').animate({
        marginBottom: '-400px'
      });
      //Move middle block left
      $('.midImg').animate({
        left:'0',
        height: $('.leftImg').height(),
        width: $('.leftImg').width()
      },function(){
        $(this).removeClass('midImg').addClass('leftImg');
        $(this).attr('style','')
        $(this).click(moveCarousel);
        moving--;
      });
      $('.midImg .overlay').animate({
        marginBottom: '-200px'
      });
      //Move the fourth block to the right.
      var containers = $('.imgcontainer');
      var last = containers[3];
      $(last).css({
        display: 'block',    
        left:'150%',
        top:'50%',
        transform:'translate(-50%,-50%)'
      });
      $(last).animate({
        left: '100%',
        height: $('.leftImg').height(),
        width: $('.leftImg').width()
      },function(){
        $(last).addClass('rightImg');
        $(this).attr('style','')
        $(this).click(moveCarousel);
        //Move this to the beginning of the list.
        moving--;
      });
    }
  }
  showWorkInfo(info);
}
function sendMessage(id,message)
{
  $.ajax({
    url: "chat/newmessage.php",
    type:'post',
    data:{'id':id, 'message':message},
    success:function(res){
      console.log(res);
    },
    error:function(a,err){
      console.log('oops error');
      console.log(err);
    }
  }); 
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var cookies = document.cookie;
    cookies = cookies.split('=');
    for (i=0;i<cookies.length;i+=2)
    {
      if (cookies[i] == cname)
      {
        var target = cookies[i+1];
        target =  target.split(';')[0];
        return target;
      }
    }
    return "";
}
function getId()
{
  var id;
  if (getCookie('id') != '')
  {
    id = getCookie('id');
  }
  else
  {
    var idstr = "";
    while (idstr.length < 8)
    {
      idstr += Math.floor(Math.random()*10);
    }
    setCookie('id',idstr,30);
    id = idstr;
  }
  return id;
}
function chatClick(e)
{
  e.preventDefault();
  startChat(getId());
}
function startChat(id)
{
  showChat();
  openChat();
  updateChat(id);
  loadMessages();
}
function loadIds(callback)
{
  $.ajax({
    url: "getallids.php",
    type:'post',
    data:{},
    success:function(res){
      callback(res);
    }
  });
}
function loadMessages()
{
  updateChat(getId(),function(){
    setTimeout(loadMessages,50);
  });
}
function showChat()
{
  var chat = $('.realtimechat');
  if (chat[0] === undefined)
  {
    chat = $('<div>');
    chat.addClass('realtimechat');
    var header = $('<header>');
    header.click(function(){
      if ($('.realtimechat').hasClass('open'))
      {
        $('.realtimechat').animate({height:'30px'});
        $('.realtimechat').removeClass('open');
      }
      else
      {
        openChat();
      }
    });
    header.html('<p>Chat Window</p>');
    var chatpart = $('<ul id="chatbox">');
    var input = $('<input id="chatin">');
    input.keydown(function(e){
      if (e.keyCode == 13) //Enter
      {
        chatEnter();
      }
    });
    chat.append(header);
    chat.append(chatpart);
    chat.append(input);
    $('body').append(chat);
  }
}
function openChat()
{
  $('.realtimechat').animate({height: '300px'});
  $('.realtimechat').addClass('open');
}
function chatEnter()
{
  var msg = $('#chatin').val();
  $('#chatin').val('');
  sendMessage(msg,function(res){
    
  });
  console.log('sent');
}
function sendMessage(message,callback)
{
   $.ajax({
    url: "chat/newmessage.php",
    type:'post',
    data:{'id':getId(), message:message},
    success:function(res){
      callback(res);
    }
  });
}
function updateChat(id, callback)
{
  var messages = [];
  $.ajax({
    url: "chat/messages.php",
    type:'post',
    data:{'id':id},
    success:function(res){
      messages = res;
      var bottom = atBottom($('#chatbox'));
      $('#chatbox').html('');
      var last = '';
      var prev = undefined;
      for (i in messages)
      {
        var msg ="";
        var li = $('<li>');
        if (messages[i].substring(0,4) == 'Me: ')
        {
          if (last != 'Me: ')
          {
            li.addClass('first');
            if (prev)
            {
              prev.addClass('last');
            }
          }
          msg = messages[i];
          msg = msg.substring(4,msg.length);
          li.addClass('me');
          last = 'Me: ';
        }
        else if (messages[i].substring(0,5) == 'You: ')
        {
          if (last != 'You: ')
          {
            li.addClass('first');
            if (prev)
            {
              prev.addClass('last');
            }
          }
          msg = messages[i];
          msg = msg.substring(5,msg.length);
          li.addClass('you');
          last = 'You: ';
        }
        prev = li;
        li.text(msg);
        $('#chatbox').append(li);
      }
      if (prev)
      {
       prev.addClass('last');
      }
      if (bottom) scrollToBottom();
      if (callback) callback();
    },
    error:function(a,err){
      console.log('oops error');
      console.log(err);
      if (callback)  callback();
    }
  });
}
function sanitize(str)
{
  str = str.replace(/</g,'&#060;');
  str = str.replace(/>/g,'&gt;');
  str = str.replace(/&/g,'&amp;');

  return str;
}
function scrollToBottom()
{
  var chat = $('#chatbox');
  var height = $('#chatbox')[0].scrollHeight;
  chat.scrollTop(height);
}
function atBottom(elem)
{
  var scrollPos = elem.scrollTop();
  var scrollHeight = elem[0].scrollHeight;
  var height = elem.outerHeight();
  return (scrollPos + height >= scrollHeight);
}
function openLink(link)
{
  window.open(link);
}
if (getCookie('id') != '')
{
  startChat();
}
$(document).ready(function(){
  showWorkInfo($('.midImg .hidden')[0].innerHTML);
});