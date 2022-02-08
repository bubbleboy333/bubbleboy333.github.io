function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

// white(#F9F9F9) for dark backgrounds
// dark grey(#282828) for light backgrounds
function adjustedTextColor(hex) {
  var c = hex.substring(1);      // strip #
  var rgb = parseInt(c, 16);   // convert rrggbb to decimal
  var r = (rgb >> 16) & 0xff;  // extract red
  var g = (rgb >>  8) & 0xff;  // extract green
  var b = (rgb >>  0) & 0xff;  // extract blue

  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  // result in 0(dark) - 255(light)
  if (luma < 64) {
    // dark color so text should be light
    return "#F9F9F9";
  } else {
    // light color so text should be dark
    return "#282828";
  }
}

function refreshColor() {
  var seconds = 1;
  var refreshRate = seconds*1000;
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  if (h <= 9) {h = '0'+h};
  if (m <= 9) {m = '0'+m};
  if (s <= 9) {s = '0'+s};

  var color = '#'+h+m+s;

  // set element colors here
  $("body").css("background", color);
  $("#time").text(color);
  $(".time-color-background-color").css("background-color", color);
  let root = document.documentElement;
  root.style.setProperty('--time-color', color);

  // set inverted colors here
  $(".time-color-inverse-color").css("color", invertColor(color));
  root.style.setProperty('--time-color-inverse', invertColor(color));

  // correct text tint to contrast backgrounds
  root.style.setProperty('--corrected-text-tint', adjustedTextColor(color));
  root.style.setProperty('--corrected-text-tint-inverse', adjustedTextColor(invertColor(color)));

  setTimeout(refreshColor, refreshRate);
}

refreshColor();
