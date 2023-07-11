var message = prompt("Enter your message", "");
var counter = parseInt(prompt("How many Times ?", 10));
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent("input", { bubbles: true });
var textbox = document.getElementsByClassName("_3Uu1_")[0];
for (let index = 0; index < counter; index++) {
    document.getElementsByClassName("to2l77zo gfz4du6o ag5g9lrv bze30y65 kao4egtt")[0].click();
    textbox.innerHTML = message;
    textbox.dispatchEvent(event);
    document.getElementsByClassName("tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq")[0].click();
}