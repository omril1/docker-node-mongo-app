module.exports = function stringArrayToHtml(array) {
  var html = "<ul>";
  html += array.map(function (c) { return "<li><a href=\"/" + c + "\">" + c + "</a></li>"; }).join('');
  html += "</ul>";
  return html;
};
