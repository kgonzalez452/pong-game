import socket from '../socket';
import Chat from './Chat';
import $ from "jquery";
import {  } from "./Game";

let NAME = '';

export const Lock = () => {
    let LockScreen = document.createElement('div');
    LockScreen.setAttribute('id', 'lock-screen-container');
    LockScreen.classList.add('lock-screen-container');
    LockScreen.innerHTML = `
    <input placeholder='ENTER NAME' id='name' class='name-input' type='text'/>
    <button id='start-btn' class='start-btn'>START GAME</button
    `;

    LockScreenListeners(LockScreen);

    return LockScreen;
}

function LockScreenListeners(LockScreen) {
    $(LockScreen).on('click', '#start-btn', function (e) {
        e.preventDefault();

        let name = $('#name').val();
        console.log('clicked');
        if (name) {
            NAME = name;
            // socket.emit('PLAYER JOIN', name);
            LockScreen.remove();
            Chat(document.body, 'Frank');
        }
        else {
            alert('Enter Name To Join');
        }
    });
}