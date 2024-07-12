const sub= document.querySelector(".minus");
const add= document.querySelector(".plus");
const num= document.querySelector(".num");
let desc=document.querySelector(".describe");
let info=document.querySelector(".add-info");
let review=document.querySelector(".review");
let l=document.querySelector(".details-size-button-l");
let xl=document.querySelector(".details-size-button-xl");
let xs=document.querySelector(".details-size-button-xs");
let addtocart=document.querySelector(".addtocart");
let increment=document.querySelector(".cart-increment")
let a=0;
let anti;



add.addEventListener("click", ()=>{
    a++;
    num.innerHTML=a;
    anti=a;
})
sub.addEventListener("click", ()=>{
    if(a<=1){
        num.innerHTML=a;
        anti=a;
    }
    else{
        a--;
        num.innerHTML=a;
        anti=a;
    }
})

addtocart.addEventListener("click", ()=>{
    document.getElementById('cart-increment').innerHTML=a;

})
desc.addEventListener("click", ()=>{
    document.getElementById('describe').style.color="black";
    document.getElementById('add-info').style.color="#9f9f9f";
    document.getElementById('review').style.color="#9f9f9f";
    document.getElementById('change-one').innerText="Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road."
    document.getElementById('change-two').innerText="Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel."

})
info.addEventListener("click", ()=>{
    document.getElementById('add-info').style.color="black";
    document.getElementById('describe').style.color="#9f9f9f";
    document.getElementById('review').style.color="#9f9f9f";
    document.getElementById('change-one').innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    document.getElementById('change-two').innerText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."

})
review.addEventListener("click", ()=>{
    document.getElementById('review').style.color="black";
    document.getElementById('add-info').style.color="#9f9f9f";
    document.getElementById('describe').style.color="#9f9f9f";
    document.getElementById('change-one').innerText="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
    document.getElementById('change-two').innerText="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
})
l.addEventListener("click", ()=>{
    document.getElementById('l').style.backgroundColor="#b88e2f";
    document.getElementById('l').style.color="white";
    document.getElementById('xl').style.color="black";
    document.getElementById('xs').style.color="black";

    document.getElementById('xl').style.backgroundColor="#efefef";
    document.getElementById('xs').style.backgroundColor="#efefef";
})
xl.addEventListener("click", ()=>{
    document.getElementById('xl').style.backgroundColor="#b88e2f";
    document.getElementById('xl').style.color="white";
    document.getElementById('l').style.color="black";
    document.getElementById('xs').style.color="black";    
    document.getElementById('l').style.backgroundColor="#efefef";
    document.getElementById('xs').style.backgroundColor="#efefef";
})
xs.addEventListener("click", ()=>{
    document.getElementById('xs').style.backgroundColor="#b88e2f";
    document.getElementById('xs').style.color="white";
    document.getElementById('xl').style.color="black";
    document.getElementById('l').style.color="black";
    document.getElementById('xl').style.backgroundColor="#efefef";
    document.getElementById('l').style.backgroundColor="#efefef";
})
const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");
pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      
links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());



