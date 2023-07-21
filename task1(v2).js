var btni = document.querySelector("#btni");
var divs1 = document.querySelector("#divs1");
var divs2 = document.querySelector("#divs2");
var cross = document.querySelector("#cross");
var popo = document.querySelector("#popo");
var submit = document.querySelector("#submit");
var obtn = document.querySelectorAll(".obtn");
var Section1 = document.querySelector("#Section1");
var p1 = document.querySelector("#p1");
var count = 0;

divs2.addEventListener("click", () => {
    // console.log(btni.className);

    if (btni.className.includes("fa-rotate-270")) {
        btni.className = btni.className.replace("fa-rotate-270", "fa-rotate-90");
        divs1.style.display = "none";
    } else {
        btni.className = btni.className.replace("fa-rotate-90", "fa-rotate-270");
        divs1.style.display = "flex";
    }
    divs2.classList.toggle("l-20")

})
cross.addEventListener("click", () => {
    popo.style.display = "none";
})
submit.addEventListener("click", () => {
    window.URL.refress();
})
obtn.forEach(element => {
    element.addEventListener("click", () => {
        // console.log("clicked");
        popo.style.display = "flex";
    })
});
setInterval(() => {
    count++;
    console.log(count);
    let img1 = "https://media.istockphoto.com/id/1437990851/photo/handsome-asian-male-searching-for-groceries-from-the-list-on-his-mobile-phone.webp?b=1&s=170667a&w=0&k=20&c=yamDqqcCnep7R9euqg7GBIAGFoLAwT2pk4IqUJaVejk=";
    let img2 = "https://img.freepik.com/premium-vector/winner-cheerful-mood-thumbs-up-concept-young-smiling-man-cartoon-character-showing-thumbs-up_442961-226.jpg?size=626&ext=jpg"


    if (count == 1) {
        let fimg = img1;
        Section1.style.background = `url(${fimg})`;
        Section1.style.backgroundPosition = "center";
        Section1.style.backgroundRepeat = "no-repeat";
        Section1.style.backgroundSize = "cover";
        p1.innerHTML = " 1000 + stores across india <br> 📍Delhi , 📍Bangalore , 📍Munbai";
    } else if (count == 2) {
        let fimg = img2;
        Section1.style.background = `url(${fimg})`;
        Section1.style.backgroundSize = "";
        p1.innerHTML = "More than 35000 customers Trust Us <br> with Service across india";
    } else {
        Section1.style.background = 'url(https://media.istockphoto.com/id/1437821111/photo/customer-service-happy-and-communication-of-woman-at-call-center-pc-talking-with-joyful-smile.webp?b=1&s=170667a&w=0&k=20&c=VaNC1beA8yRqc22HZdOnyyl8KrHNNXNmOoZ5T_xr6HY=)';
        count = 0;
        Section1.style.backgroundPosition = "center";
        Section1.style.backgroundRepeat = "no-repeat";
        Section1.style.backgroundSize = "cover";
        p1.innerHTML = "24/7 Custumer support <br> with 10000 service persons";
    }

}, 3800);