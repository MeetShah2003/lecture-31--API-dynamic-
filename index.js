document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let student = {
    img: document.getElementById("img").value,
    gr: document.getElementById("gr").value,
    name: document.getElementById("fullname").value,
    email: document.getElementById("email").value,
    pass: document.getElementById("passwd").value,
    course: document.getElementById("course").value,
    mono: document.getElementById("mono").value,
  };

  fetch("http://localhost:8090/student", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
});

const uimaker = (data) => {
  document.getElementById("uimaker").innerHTML = "";
  data.map((item) => {
    let img = document.createElement("img");
    img.src = item.img;
    let gr = document.createElement("h4");
    gr.innerHTML = item.gr;
    let name = document.createElement("h3");
    name.innerHTML = item.name;
    let email = document.createElement("h4");
    email.innerHTML = item.email;
    let pass = document.createElement("h4");
    pass.innerHTML = item.pass;
    let course = document.createElement("h4");
    course.innerHTML = item.course;
    let mono = document.createElement("h4");
    mono.innerHTML = item.mono;
    let btn1 = document.createElement("button");
    btn1.innerHTML = "Delete";
    btn1.addEventListener("click", () => {
      dlt(item.id);
    });
    let btn2 = document.createElement("button");
    btn2.innerHTML = "Update";
    let div = document.createElement("div");
    div.append(img, gr, name, email, pass, course, mono, btn1, btn2);
    document.getElementById("uimaker").append(div);
  });
};

const dlt = async (id) => {
  fetch(`http://localhost:8090/student/${id}`, {
    method: "DELETE",
  });
};

fetch("http://localhost:8090/student", {})
  .then((res) => res.json())
  .then((data) => uimaker(data));