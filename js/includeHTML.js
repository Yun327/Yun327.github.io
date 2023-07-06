/* function includeHTML(callback) {
  var elements = document.querySelectorAll("[include-html]");
  var elementsCount = elements.length;

  function loadHTML(element) {
    var file = element.getAttribute("include-html");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          element.innerHTML = xhr.responseText;
        }
        if (--elementsCount === 0) {
          callback();
        }
      }
    };
    xhr.open("GET", file, true);
    xhr.send();
  }

  for (var i = 0; i < elements.length; i++) {
    loadHTML(elements[i]);
  }
} */


/* function includeHTML(callback) {
  var elements = document.querySelectorAll("[include-html]");
  var elementsCount = elements.length;

  function loadHTML(element) {
    var file = element.getAttribute("include-html");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (element.tagName.toLowerCase() === "img") {
            element.src = file;
          } else {
            element.innerHTML = xhr.responseText;
          }
        } else {
          // Handle error or display alternative content
        }
        if (--elementsCount === 0) {
          callback();
        }
      }
    };
    xhr.open("GET", file, false);
    xhr.send();
  }

  for (var i = 0; i < elements.length; i++) {
    loadHTML(elements[i]);
  }
}
 */
/* function includeHTML(callback) {
  var elements = document.querySelectorAll("[include-html]");
  var elementsCount = elements.length;

  function loadHTML(element) {
    var file = element.getAttribute("include-html");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (element.tagName.toLowerCase() === "img") {
            element.setAttribute("src", file);
          } else {
            element.innerHTML = xhr.responseText;
          }
        } else {
          // Handle error or display alternative content
        }
        if (--elementsCount === 0) {
          callback();
        }
      }
    };
    xhr.open("GET", file, true);
    xhr.send();
  }

  for (var i = 0; i < elements.length; i++) {
    loadHTML(elements[i]);
  }
} */
/* function includeHTML(callback) {
  var elements = document.querySelectorAll("[include-html]");
  var elementsCount = elements.length;

  function loadHTML(element) {
    var file = element.getAttribute("include-html");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (element.tagName.toLowerCase() === "img") {
            element.src = file;
          } else {
            element.innerHTML = xhr.responseText;
          }
        } else {
          // Handle error or display alternative content
        }
        if (--elementsCount === 0 && typeof callback === "function") {
          callback();
        }
      }
    };
    xhr.open("GET", file, true);
    xhr.send();
  }

  for (var i = 0; i < elements.length; i++) {
    loadHTML(elements[i]);
  }
}
 */
/* function includeHTML(callback) {
  var elements = document.querySelectorAll("[include-html]");
  var elementsCount = elements.length;

  function loadHTML(element) {
    var file = element.getAttribute("include-html");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (element.tagName.toLowerCase() === "img") {
            element.setAttribute("src", file); // 이미지 파일 경로를 설정
          } else {
            element.innerHTML = xhr.responseText;
          }
        } else {
          // Handle error or display alternative content
        }
        if (--elementsCount === 0 && typeof callback === "function") {
          callback();
        }
      }
    };
    xhr.open("GET", file, true);
    xhr.send();
  }

  for (var i = 0; i < elements.length; i++) {
    loadHTML(elements[i]);
  }
} */

function includeHTML(callback) {
  var elements = document.querySelectorAll("[include-html]");
  var elementsCount = elements.length;

  function loadHTML(element) {
    var file = element.getAttribute("include-html");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (element.tagName.toLowerCase() === "img") {
            element.setAttribute("src", file); // 이미지 파일 경로를 설정
          } else {
            element.innerHTML = xhr.responseText;
          }
        } else {
          // Handle error or display alternative content
        }
        if (--elementsCount === 0 && callback) {
          callback();
        }
      }
    };
    xhr.open("GET", file, false);
    xhr.send();
  }

  elements.forEach(function (element) {
    loadHTML(element);
  });
}









