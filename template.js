const loadPartial = (selector, target) => {
  fetch("./partials.html")
    .then(response => {
      return response.text();
    })
    .then(data => {
      const parser = new DOMParser();
      const html = parser.parseFromString(data, "text/html");
      return html.querySelector(selector);
    })
    .then(partial => {
      const replaceMe = document.querySelector(target);
      replaceMe.parentNode.replaceChild(partial, replaceMe);
    })
    .then(() => {
      // remove display:none on body after insertion of partials to avoid FOUC
      setTimeout(function() {
        document.querySelector("body").style.display = "block";
      }, 300);
    });
};

loadPartial("head", "head");
loadPartial("header", "header");
loadPartial("#nav", "nav");
loadPartial("footer", "footer");
loadPartial("#responsive", "#responsive");
