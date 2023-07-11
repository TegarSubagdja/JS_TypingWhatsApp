var message = '<span class="selectable-text copyable-text" data-lexical-text="true">Yoell</span>';
var send = '<button data-testid="compose-btn-send" data-tab="11" aria-label="Kirim" class="tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq"><span data-testid="send" data-icon="send" class=""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg></span></button>';
var counter = parseInt(prompt("How many Times ?", 10));
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent("input", { bubbles: true });
var textbox = document.getElementsByClassName("selectable-text copyable-text iq0m558w")[0];
var btnbox = document.getElementsByClassName("selectable-text copyable-text iq0m558w")[0];
for (let index = 0; index < counter; index++) {

    textbox.innerHTML = message;
    textbox.dispatchEvent(event);

    // Membuat elemen button baru
    var button = document.createElement('button');
    button.setAttribute('data-testid', 'compose-btn-send');
    button.setAttribute('data-tab', '11');
    button.setAttribute('aria-label', 'Kirim');
    button.setAttribute('class', 'tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq');

    // Membuat elemen span baru
    var span = document.createElement('span');
    span.setAttribute('data-testid', 'send');
    span.setAttribute('data-icon', 'send');
    span.setAttribute('class', '');

    // Membuat elemen svg baru
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('height', '24');
    svg.setAttribute('width', '24');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.setAttribute('class', '');
    svg.setAttribute('version', '1.1');
    svg.setAttribute('x', '0px');
    svg.setAttribute('y', '0px');
    svg.setAttribute('enable-background', 'new 0 0 24 24');
    svg.setAttribute('xml:space', 'preserve');

    // Membuat elemen path baru
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', 'currentColor');
    path.setAttribute('d', 'M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z');

    // Menambahkan elemen path ke dalam elemen svg
    svg.appendChild(path);

    // Menambahkan elemen svg ke dalam elemen span
    span.appendChild(svg);

    // Menambahkan elemen span ke dalam elemen button
    button.appendChild(span);

    // Menambahkan elemen button ke dalam elemen div
    btnbox.appendChild(button);
    document.getElementsByClassName("tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq")[0].click();
}