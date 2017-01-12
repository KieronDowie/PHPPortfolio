var chats = {};
$(document).ready(function(){
	loadIds(function(ids){
		for (i=0;i<ids.length;i++)
		{
			var id = ids[i];
			if (chats[id])
			{
				loadMessages(id);
			}
			else
			{
				addNewChat(id,function(){
					loadMessages(id);
				});
			}

		}
	});
});
function addNewChat(id, callback)
{
	chats[id] = true;
	var chat = $('.realtimechat');
	chat = $('<div id='+id+'>');
	chat.addClass('realtimechat');
	var header = $('<header>');
	header.html('<p>'+id+'</p>');
	var chatpart = $('<ul id="chatbox">');
	var input = $('<input id="chatin">');
	input.keydown(function(e){
	  if (e.keyCode == 13) //Enter
	  {
	    chatEnter($(this));
	  }
	});
	chat.append(header);
	chat.append(chatpart);
	chat.append(input);
	$('body').append(chat);
	callback();
}
function loadMessages(id)
{
	updateChat(id,function(){
    setTimeout(function(){ loadMessages(id) },50);
  });
}
function updateChat(id, callback)
{
  var messages = [];
  $.ajax({
    url: "messages.php",
    type:'post',
    data:{'id':id},
    success:function(res){
      messages = res;
      var bottom = atBottom($('#'+id+' ul'));
      $('#'+id+' ul').html('');
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
        $('#'+id+' ul').append(li);
      }
      if (prev)
      {
       prev.addClass('last');
      }
      if (bottom) scrollToBottom(id);
      if (callback) callback();
    },
    error:function(a,err){
      console.log('oops error');
      console.log(err);
      if (callback)  callback();
    }
  });
}
function scrollToBottom(id)
{
  var chat = $('#'+id+' ul');
  var height = $('#'+id+' ul')[0].scrollHeight;
  chat.scrollTop(height);
}
function atBottom(elem)
{
  var scrollPos = elem.scrollTop();
  var scrollHeight = elem[0].scrollHeight;
  var height = elem.outerHeight();
  return (scrollPos + height >= scrollHeight);
}
function chatEnter(elem)
{
  var msg = elem.val();
  elem.val('');
  var ul = elem.parent();
  var id = ul.attr('id');
  sendMessage(msg,function(res){
  }, id);
}
function sendMessage(message,callback, id)
{
   $.ajax({
    url: "newmessage.php",
    type:'post',
    data:{'id':id, message:message, password:'test'},
    success:function(res){
      callback(res);
    }
  });
}