let heading = document.getElementById("head");
let text = document.getElementById("para");
let image = document.getElementById("img1");

function clickone() {
    heading.innerHTML = `HTML`;
    text.innerHTML = `HTML, or Hypertext Markup Language,
     is the foundational language for creating web pages.
      Developed by Tim Berners-Lee in 1991, it structures content on
       the web using elements like headings, paragraphs, and links. Over the years,
        HTML has evolved, with HTML5 introducing multimedia support and semantic elements.
         Integral to web development, HTML works with CSS and JavaScript,
          forming the core of modern, interactive websites.`;
    image.innerHTML = `<img src="images/html.jpg" alt="html pic">`
}

function clicktwo() {
    heading.innerHTML = `CSS`;
    text.innerHTML = `CSS, or Cascading Style Sheets, is essential for web design, 
    controlling the presentation and layout of HTML elements. Introduced in 1996,
     CSS allows for styling web pages with fonts, colors, and spacing. 
     It enables responsive design, ensuring websites look good on various devices.
      CSS, combined with HTML and JavaScript, forms the backbone of modern web development.`;
    image.innerHTML = `<img src="images/css.jpg" alt="css pic">`
}

function clickthree() {
    heading.innerHTML = `JS`;
    text.innerHTML = `JavaScript (JS) is a versatile programming language 
    essential for web development. It enhances user interactivity and dynamic 
    content on websites. JS operates on both the client and server sides,
     enabling complex features like animations, form validations, and asynchronous operations.
      Its frameworks and libraries, such as React and Node.js, further simplify and expand its 
      application, making it indispensable in modern web development.`;
    image.innerHTML = `<img src="images/javascript.png" alt="javascript pic">`
}