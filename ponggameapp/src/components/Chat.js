import $ from "jquery";
import socket from '../socket';

import { isNode, isElement } from '../validate';

function Chat(wrapper, name) {
  let container = document.body;
  let chat = document.createElement("div");
  chat.classList.add("chat", "chat-hide");
  chat.setAttribute("id", "chat");

  if(typeof(wrapper) === 'string') {
    let element = document.getElementById(container);
    if(element) {
      container = element;
    }
  }
  else if (isNode(wrapper) || isElement(wrapper)) {
    container = wrapper;
  }

  chat.innerHTML = `
  <div id="chat-header" class="chat-header">
    <i id="chat-close" class="icon ion-close-round"></i>
  </div>
  <div class="messages-container">
    <ul id="messages"></ul>
  </div>

  <div class="input-container">
    <div style="flex-grow: 1; display: flex;">
      <input id="m" autocomplete="off" />
      <button id="btn">Send</button>
    </div>
  </div>`;

  $(container).append(chat);
  return listeners(container, name);
}

function listeners(container, name) {

  $(container).on('click', '#btn', function (e) {
    e.preventDefault();

    console.log('clicked');

    sendMessase(name);
  });

  $(container).on('click', '#chat-close', function (e) {
    e.stopPropagation();
    console.log('hide');

    $('#chat').addClass('chat-hide');
  });

  $(container).on('click', '#chat-header', function (e) {

    console.log('show');

    $('#chat').removeClass('chat-hide');
  });

  $(container).on('keypress', '#m', function (e) {
    if (e.keyCode === 13) {
      sendMessase(name);
    }
  });

  socket.on('CHAT MESSAGE', function (data) {
    $('#messages').append($('<li>').text(data.name + ': ' + data.text));
  });

}

const scroll = () => $('#messages-container').scrollTop($('.messages-container')[0].scrollHeight);

const sendMessase = (name) => {
  if ($('#m').val()) {
    socket.emit('CHAT MESSAGE', { 
      name: name, 
      text: $('#m').val() 
    });
    $('#m').val('');
    scroll();
  }
}

export default Chat;