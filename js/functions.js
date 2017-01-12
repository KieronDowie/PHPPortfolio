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
var moving = 0;
function moveCarousel()
{
  if (!moving)
  {
    moving = 4;
    if ($(this).hasClass('leftImg'))
    {
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
  console.log('test');
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
}
function chatEnter()
{
  var msg = $('#chatin').val();
  $('#chatin').val('');
  sendMessage(msg,function(res){
    console.log(res);
    
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
  console.log('adsf');
  startChat();
}