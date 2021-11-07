let blogs = [
  {
    title: `Post title1`,
    blogtext: `Some quick example text to build on the card
                title and make up the bulk of the card's content.`,
  },
  {
    title: `Post title2`,
    blogtext: `Some quick example text to build on the card
               title and make up the bulk of the card's content.`,
  },
  {
    title: `Post title3`,
    blogtext: `Some quick example text to build on the card
               title and make up the bulk of the card's content.`,
  },
  {
    title: `Post title4`,
    blogtext: `Some quick example text to build on the card
               title and make up the bulk of the card's content.`,
  },
];

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createBlogHtml = (blogs) => {
  const blogHtml = blogs.map((blog, index) => {
    let blogHtmlStr = "";
    let rand = randomInteger(1, 99);
    if (rand < 10) rand = "0" + rand;
    const imageUrl = `https://mdbootstrap.com/img/new/standard/nature/0${rand}.jpg`;
    console.log(imageUrl);
    if (index % 3 === 0) {
      // <div class="row"></div>
      if (index !== 0) blogHtmlStr += `</div>`;
      blogHtmlStr += `<div class="row">`;
    }

    blogHtmlStr += `<div class="col-lg-4 col-md-6 mb-4">
       <div class="card">
         <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
           <img src=${imageUrl} class="img-fluid" />
           <a href="#!">
             <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
           </a>
         </div>
         <div class="card-body">
           <h5 class="card-title">${blog.title}</h5>
           <p class="card-text">
              ${blog.blogtext}
           </p>
           <a href="#!" class="btn btn-primary">Read</a>
         </div>
       </div>
     </div>`;
    if (index === blogs.length - 1) blogHtmlStr += `</div>`;

    return blogHtmlStr;

    //console.log(cardHtml);
  });

  return blogHtml.join("");
};

(function () {
  "use strict";
  document.querySelector("#blogTitle").focus();
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity()) {
          let newBlog = {};
          newBlog.title = document.querySelector("#blogTitle").value;
          newBlog.blogtext = document.querySelector("#blogDetail").value;
          blogs.unshift(newBlog);
          document
            .querySelectorAll("#hposts ~ div[class='row']")
            .forEach((el) => el.remove());
          document
            .querySelector("#hposts")
            .insertAdjacentHTML("afterend", createBlogHtml(blogs));
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
  document
    .querySelector("#hposts")
    .insertAdjacentHTML("afterend", createBlogHtml(blogs));
})();
