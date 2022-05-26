console.log('Taartenshop');

//elementen die veranderen
var taartEl = document.querySelector('.image');
var tekst = document.querySelector('#tekst');
var totalSum = document.querySelector('.totalsum');

//buttons
var vanilla = document.querySelector('#flavor1');
var chocolate = document.querySelector('#flavor2');
var strawberry = document.querySelector('#flavor3');

var buttercream = document.querySelector('#cream1');
var chocoCream = document.querySelector('#cream2');
var jam = document.querySelector('#cream3');

var chocoTop = document.querySelector('#top1');
var butterTop = document.querySelector('#top2');
var nakedTop = document.querySelector('#top3');

var whipped = document.querySelector('#topping1');
var sprinkles = document.querySelector('#topping2');
var pearls = document.querySelector('#topping3');

//ingredients
var base = "none";
var naked = "none";

//comments
var comment = ["Yum!", "Yummmm!", "Good choice!", "Hmmm! Love it!", "You have great taste!", "That looks so yummy!", "What a great combo!", "Classic!"];

//bedrag
var sum = document.querySelector('#totalsum');
var afronding = "none";
var modal = document.querySelector('#mymodal');
var modalchange = document.querySelector('#scndmodal');
var buy = document.querySelector('#buyBtn');
var nameBtn = document.querySelector('#nameBtn');


//name
var nameInput = document.querySelector('#name');
var nameSpan = document.querySelector('#nameSpan');



//functions

/*pick a flavour*/
function klikVanilla(){
    taartEl.src = "./images/1.png";
    var randomCom = Math.random()*8;
    randomCom = Math.floor(randomCom);
    tekst.textContent = comment[randomCom];
    sum.textContent = '$5';
    base = "vanilla"; 
    console.log('vanilla flavor');

    if(naked == "clicked"){
        document.querySelector('#nakedchoco').classList.remove('show');
        document.querySelector('#nakedstraw').classList.remove('show');
        document.querySelector('#nakedvanilla').classList.add('show');
    }

    else if(afronding == "afgerond"){
        sum.textContent = "$25";
    }
}

function klikChoco(){
    taartEl.src = "./images/2.png";
    var randomCom = Math.random()*8;
    randomCom = Math.floor(randomCom);
    tekst.textContent = comment[randomCom];
    sum.textContent = '$5';
    base = "choco";
    console.log('chocolate flavor');

    if(naked == "clicked"){
        document.querySelector('#nakedchoco').classList.add('show');
        document.querySelector('#nakedstraw').classList.remove('show');
        document.querySelector('#nakedvanilla').classList.remove('show');
    }

    else if(afronding == "afgerond"){
        sum.textContent = "$25";
    }
}

function klikStrawberry(){
    taartEl.src="./images/3.png";
    var randomCom = Math.random()*8;
    randomCom = Math.floor(randomCom);
    tekst.textContent = comment[randomCom];
    sum.textContent = '$5';
    base = "strawberry";
    console.log('strawberry flavor');

    if(naked == "clicked"){
        document.querySelector('#nakedchoco').classList.remove('show');
        document.querySelector('#nakedstraw').classList.add('show');
        document.querySelector('#nakedvanilla').classList.remove('show');
    }

    else if(afronding == "afgerond"){
        sum.textContent = "$25";
    }
}

/*pick a cream*/
function klikButtercream(){
    sum.textContent = "$15";
    var randomCom = Math.random()*8;
    randomCom = Math.floor(randomCom);
    tekst.textContent = comment[randomCom];
    document.querySelector('#buttercream').classList.add('show');
    document.querySelector('#chococream').classList.remove('show');
    document.querySelector('#jam').classList.remove('show');
    console.log('buttercream');

    if(afronding == "afgerond"){
        sum.textContent = "$25";
    }
}

function klikChococream(){
    sum.textContent = "$15";
    var randomCom = Math.random()*8;
    randomCom = Math.floor(randomCom);
    tekst.textContent = comment[randomCom];
    document.querySelector('#chococream').classList.add('show');
    document.querySelector('#buttercream').classList.remove('show');
    document.querySelector('#jam').classList.remove('show');
    console.log('chococream');

    if(afronding == "afgerond"){
        sum.textContent = "$25";
    }
}

function klikJam(){
    sum.textContent = "$15";
    var randomCom = Math.random()*8;
    randomCom = Math.floor(randomCom);
    tekst.textContent = comment[randomCom];
    document.querySelector('#jam').classList.add('show');
    document.querySelector('#chococream').classList.remove('show');
    document.querySelector('#buttercream').classList.remove('show');
    console.log('jam');

    if(afronding == "afgerond"){
        sum.textContent = "$25";
    }
}

/*pick a top layer*/
function klikChocotop(){
    sum.textContent = "$20";
    document.querySelector('#chocotop').classList.add('show');
    var randomCom = Math.random()*8;
    randomCom = Math.floor(randomCom);
    tekst.textContent = comment[randomCom];
    naked = "unclicked";
    document.querySelector('#buttertop').classList.remove('show');
    document.querySelector('#nakedvanilla').classList.remove('show');
    document.querySelector('#nakedchoco').classList.remove('show');
    document.querySelector('#nakedstraw').classList.remove('show');
    console.log('chocolate topping');

    if(afronding == "afgerond"){
        sum.textContent = "$25";
    }
}

function klikButtertop(){
    sum.textContent = "$20";
    document.querySelector('#buttertop').classList.add('show');
    var randomCom = Math.random()*8;
    randomCom = Math.floor(randomCom);
    tekst.textContent = comment[randomCom];
    naked = "unclicked";
    document.querySelector('#chocotop').classList.remove('show');
    document.querySelector('#nakedvanilla').classList.remove('show');
    document.querySelector('#nakedchoco').classList.remove('show');
    document.querySelector('#nakedstraw').classList.remove('show');
    console.log('buttercream topping');

    if(afronding == "afgerond"){
        sum.textContent = "$25";
    }
}

function klikNakedTop(){
    sum.textContent = "$20";
    var randomCom = Math.random()*8;
    randomCom = Math.floor(randomCom);
    tekst.textContent = comment[randomCom];
    naked = "clicked";

    document.querySelector('#buttertop').classList.remove('show');
    document.querySelector('#chocotop').classList.remove('show');
    console.log('no topping');

    if(base == "vanilla"){
        document.querySelector('#nakedvanilla').classList.add('show');
        console.log('vanilla naked');
    }

    else if(base == "choco"){
        document.querySelector('#nakedchoco').classList.add('show');
    }

    else if(base == "strawberry"){
        document.querySelector('#nakedstraw').classList.add('show');
    }

    else if(afronding == "afgerond"){
        sum.textContent = "$25";
    }
        
}

/*pick a topping*/
function klikWhipped(){
    sum.textContent = "$25";
    var randomCom = Math.random()*8;
    randomCom = Math.floor(randomCom);
    tekst.textContent = comment[randomCom];
    afronding = "afgerond";
    document.querySelector("#tufts").classList.add('show');

    document.querySelector('#sprinkles').classList.remove('show');
    document.querySelector('#pearls').classList.remove('show');
    console.log('whipped cream');
}

function klikSprinkles(){
    sum.textContent = "$25";
    var randomCom = Math.random()*8;
    randomCom = Math.floor(randomCom);
    tekst.textContent = comment[randomCom];
    afronding = "afgerond";
    document.querySelector("#sprinkles").classList.add('show');

    document.querySelector('#tufts').classList.remove('show');
    document.querySelector('#pearls').classList.remove('show');
    console.log('sprinkles');
}

function klikPearls(){
    sum.textContent = "$25";
    var randomCom = Math.random()*8;
    randomCom = Math.floor(randomCom);
    tekst.textContent = comment[randomCom];
    afronding = "afgerond";
    document.querySelector("#pearls").classList.add('show');

    document.querySelector('#tufts').classList.remove('show');
    document.querySelector('#sprinkles').classList.remove('show');
    console.log('pearls');
}

/*buying and modal*/
function klikBuy() {
    document.querySelector('#mymodal').classList.add('displaymodal');
    audio.play();
    console.log('buy');
}

function buyAudio(){
    document.getElementById('buyAudio').play();
}


window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    console.log('close modal');
} 

function klikNameBtn(){
    document.querySelector('#mymodal').classList.remove('displaymodal');
    document.querySelector('#scndmodal').classList.add('displaymodal');
    nameSpan.textContent = nameInput.value;
    console.log('Thank you');

    setTimeout(closemodal, 3500);
}

function closemodal (){
    document.querySelector('#scndmodal').classList.add('closemodal');
    location.reload(true);
}


//addEventlistener
vanilla.addEventListener('click', klikVanilla);
chocolate.addEventListener('click', klikChoco);
strawberry.addEventListener('click', klikStrawberry);

buttercream.addEventListener('click', klikButtercream);
chocoCream.addEventListener('click', klikChococream);
jam.addEventListener('click', klikJam);

chocoTop.addEventListener('click', klikChocotop);
butterTop.addEventListener('click', klikButtertop);
nakedTop.addEventListener('click', klikNakedTop);

whipped.addEventListener('click', klikWhipped);
sprinkles.addEventListener('click', klikSprinkles);
pearls.addEventListener('click', klikPearls);

buy.addEventListener('click', klikBuy);
nameBtn.addEventListener('click', klikNameBtn);
nameInput.addEventListener('keypress', function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("nameBtn").click();
    } //bron: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
});