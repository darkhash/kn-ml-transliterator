var data = require("sdk/self").data;
var contextMenu = require("sdk/context-menu");
var KnMlDict = '{"ಂ":"ം", "ಃ":"ഃ", "ಅ":"അ", "ಆ":"ആ", "ಇ":"ഇ", "ಈ":"ഈ", "ಉ":"ഉ", "ಊ":"ഊ", "ಋ":"ഋ", "ಌ":"ഌ", "ಎ":"എ", "ಏ":"ഏ", "ಐ":"ഐ", "ಒ":"ഒ", "ಓ":"ഓ", "ಔ":"ഔ", "ಕ":"ക", "ಖ":"ഖ", "ಗ":"ഗ", "ಘ":"ഘ", "ಙ":"ങ", "ಚ":"ച", "ಛ":"ഛ", "ಜ":"ജ", "ಝ":"ഝ", "ಞ":"ഞ", "ಟ":"ട", "ಠ":"ഠ", "ಡ":"ഡ", "ಢ":"ഢ", "ಣ":"ണ", "ತ":"ത", "ಥ":"ഥ", "ದ":"ദ", "ಧ":"ധ", "ನ":"ന", "ಪ":"പ", "ಫ":"ഫ", "ಬ":"ബ", "ಭ":"ഭ", "ಮ":"മ", "ಯ":"യ", "ರ":"ര", "ಱ":"റ", "ಲ":"ല", "ಳ":"ള", "ವ":"വ", "ಶ":"ശ", "ಷ":"ഷ", "ಸ":"സ", "ಹ":"ഹ", "಼": "಼", "ಽ":"ഽ", "ಾ":"ാ", "ಿ":"ി", "ೀ":"ീ", "ು":"ു", "ೂ":"ൂ", "ೃ":"ൃ", "ೄ":"ൄ", "ೆ":"െ", "ೇ":"േ", "ೈ":"ൈ", "ೊ":"ൊ", "ೋ":"ോ", "ೌ":"ൌ", "್":"്", "ೕ":"ൕ", "ೖ":"ൖ", "ೞ":"൞", "ೠ":"ൠ", "ೡ":"ൡ", "ೢ":"ൢ", "ೣ":"ൣ", "೦":"൦", "೧":"൧", "೨":"൨", "೩":"൩", "೪":"൪", "೫":"൫", "೬":"൬", "೭":"൭", "೮":"൮", "೯":"൯", " ":" ", ";":";", ":":":"}'
var dictObj = JSON.parse(KnMlDict)
var text_entry = require("sdk/panel").Panel({
	width: 180,
	height: 60, 
 contentURL: data.url("text-entry.html"),
  contentScriptFile: data.url("popup.js")
});
var menuItem = contextMenu.Item({
  label: "മലയാളം",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  var text = window.getSelection().toString();' +
                 '  self.postMessage(text);' +
                 '});',
  onMessage: function (selectionText) {
    console.log(selectionText);
    var outText = ''
    for (var i = 0, len = selectionText.length; i < len; i++) {
		if(dictObj[selectionText[i]]){
	  		outText += dictObj[selectionText[i]];
			console.log(dictObj[selectionText[i]]);
		}
	}
  		console.log(outText)
		text_entry.show()
		text_entry.postMessage(outText);
	}
});
