// Preloader Starts

let loader = document.getElementById("preloader")

window.addEventListener("load",()=>{
    loader.style.display  = "none"
})

// Preloader Ends

//Typewriter Effect starts
const text = ["Developer", "Student","Designer"]
let count =0;
let index = 0;
letter = "";
currentletter = "";
(function type(){
    if (count == 3){
        count = 0;
    }
    currentletter = text[count];
    letter = currentletter.slice(0,index++)
    document.querySelector(".txt").textContent = letter
    if (letter.length == currentletter.length){
        index=0;
        count++;
    }
    setTimeout(type,400);
})()
// TypeWriter Effect Ends

// Button effect starts

const btn_ef = document.querySelector(".tour")
btn_ef.addEventListener("mouseover",(event)=>{
    let y = event.pageY - btn_ef.offsetTop;
    let x = event.pageX - btn_ef.offsetLeft;
    btn_ef.style.setProperty("--aes",x+"px");
    btn_ef.style.setProperty("--sea",y+"px");
})

// Button effects Ends

// hover sidebar starts

var ihtml = "hi"
const sidebe =()=>{
    console.log(ihtml)
    if (ihtml == "hi"){
        ihtml = `<ul>
        <li><a href="#top" class = "btn">Home</a></li>
        <li><a href="#About" class = "btn">About</a></li>
        <li><a href="#Skills" class = "btn">Skills</a></li>
        <li><a href="#Project" class = "btn">Project</a></li>
        <li><a href="#contact" class = "btn">Contact</a></li>
    </ul>`
    document.getElementById("menulist").innerHTML  = ihtml;
    ihtml = "no";
    }
    else{
        document.getElementById("menulist").innerHTML = "";
        ihtml = "hi";   
    }
    
}
// hover sidebar ends

// Scrollbar effect starts

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const hideel = document.querySelectorAll('.hidden');
hideel.forEach((el)=> observer.observe(el));

// Scrollbar effect ends 