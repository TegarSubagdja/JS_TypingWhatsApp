var counter = parseInt(prompt("How many Times ?", 2));
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent("input", { bubbles: true });
var textbox = document.getElementsByClassName("selectable-text copyable-text iq0m558w")[0];
for (let index = 0; index < counter; index++) {
    textbox.dispatchEvent(event);
    document.getElementsByClassName("tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq")[0].click();
}