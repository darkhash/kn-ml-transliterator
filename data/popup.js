//window.addEventListener("message", function(event) {
//  window.port = event.ports[0];
//  window.port.onmessage = receive;
//});
//
//var response = document.getElementById("response");
//function receive(event) {
//  response.textContent = event.data;
//}

self.on("message", function(addonMessage) {
  response.textContent = addonMessage
});
