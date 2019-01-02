(function() {
  var form = document.querySelector(".form");
  var iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    "http://localhost:4000/form/newcustomer/test.html"
  );
  iframe.setAttribute("width", "300");
  iframe.setAttribute("height", "240");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("scrolling", "no");
  form.parentNode.replaceChild(iframe, form);
})();
