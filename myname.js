const content = "Hi. I'm Seung Chan, \n front-end developer.";
const text = document.querySelector(".animation_text");
let index = 0;


const showClock = () =>{
    var clock = document.querySelector(".clock");
    var currnetTime = new Date();
    var msg ="KST" + currnetTime.getHours()+":";
    msg += currnetTime.getMinutes()+":";
    msg += currnetTime.getSeconds();

    clock.innerText = msg;
    setTimeout(showClock, 1000);

}


const typing = ()=>{
    let txt = content[index++];
    text.innerHTML += txt ==="\n" ? "<br/>" : txt;
    if(index>content.length){
        text.textContent = "";
        index = 0;
    }
}

setInterval(typing,150);

document.addEventListener('scroll', ()=>{
    var content = document.querySelector('.profile');
    var currentScrollValue = document.documentElement.scrollTop;
    var myImg = document.querySelector('#my_img');
    var intriduce = document.querySelector('#introduce');

    if(currentScrollValue> 100){
        content.classList.add('active');

    }
    else{
        content.classList.remove('active')
    }

})

document.addEventListener('scroll' , ()=>{
    var currentScrollValue = document.documentElement.scrollTop;
    var myImg = document.querySelector('#my_img');
    var introduce = document.querySelector('#introduce');
    var keyword = document.querySelector('#keywords_1');
    var keyword2 = document.querySelector('#keywords_2');

    if(currentScrollValue> 888){
        myImg.style.opacity = "1";
        myImg.style.transform = 'translateX(0px)';
        myImg.style.transition = '2s ease-in-out';
        introduce.style.opacity = "1";        
        introduce.style.transform = "translateX(0px)";        
        introduce.style.transition = "2s ease-in-out";
        keyword.style.opacity = "1";        
        keyword.style.transform = "translateY(0px)";        
        keyword.style.transition = "2s ease-in-out";
        keyword2.style.opacity = "1";        
        keyword2.style.transform = "translateY(0px)";        
        keyword2.style.transition = "2s ease-in-out";
        
    }
    else{
        myImg.style.opacity = "0"
        myImg.style.transform = 'translateX(-50px)';
        introduce.style.opacity = "0"
        introduce.style.transform = 'translateX(50px)';
        keyword.style.opacity = "0";        
        keyword.style.transform = "translateY(150px)";   
        keyword2.style.opacity = "0";        
        keyword2.style.transform = "translateY(250px)";   
    }
})


document.addEventListener('scroll', ()=>{
    var currentScrollValue = document.documentElement.scrollTop;
    var html = document.querySelector('#html');
    var css = document.querySelector('#css');
    var js = document.querySelector('#js');
    var react = document.querySelector('#react');

    if(currentScrollValue>1500){
        html.style.width = '175px';
        css.style.width = '155px';
        js.style.width = '125px';
        react.style.width = '65px';
    }
    else{
        html.style.width = '5px';
        css.style.width = '5px';
        js.style.width = '5px';
        react.style.width = '5px';
    }
})

document.addEventListener('scroll', ()=>{
    var currentScrollValue = document.documentElement.scrollTop;
    var img1 = document.querySelector('#img_1');
    var img2 = document.querySelector('#img_2');
    var img3 = document.querySelector('#img_3');
    var img4 = document.querySelector('#img_4');
    var img5 = document.querySelector('#img_5');

    if(currentScrollValue>2000){
        img1.style.opacity = "1";
        img1.style.transform = 'translateX(0px)';
        img1.style.transition = '2s ease-in-out';
        img2.style.opacity = "1";
        img2.style.transform = 'translateY(0px)';
        img2.style.transition = '2s ease-in-out';
        img3.style.opacity = "1";
        img3.style.transform = 'translateX(0px)';
        img3.style.transition = '2s ease-in-out';
        img4.style.opacity = "1";
        img4.style.transform = 'translateY(0px)';
        img4.style.transition = '2s ease-in-out';
        img5.style.opacity = "1";
        img5.style.transform = 'translateY(0px)';
        img5.style.transition = '2s ease-in-out';
        
    }
    else{
        img1.style.opacity = "0"
        img1.style.transform = 'translateX(-100px)';
        img2.style.opacity = "0"
        img2.style.transform = 'translateY(-300px)';
        img3.style.opacity = "0"
        img3.style.transform = 'translateX(500px)';
        img4.style.opacity = "0"
        img4.style.transform = 'translateY(200px)';
        img5.style.opacity = "0"
        img5.style.transform = 'translateY(-400px)';
    }
})

document.addEventListener('scroll', ()=>{
    var currentScrollValue = document.documentElement.scrollTop;
    var about1 = document.querySelector('#about1');
    var about2 = document.querySelector('#about2');
    var about3 = document.querySelector('#about3');
    var about4 = document.querySelector('#about4');
    var about5 = document.querySelector('#about5');
    var about6 = document.querySelector('#about6');
    var conact2 = document.querySelector('#conact_2');

    if(currentScrollValue>2700){
        conact2.style.opacity = "1";
        conact2.style.transform = 'translateX(0px)';
        conact2.style.transition = '1s ease-in-out';
        about1.style.opacity = "1";
        about1.style.transform = 'translateX(0px)';
        about1.style.transition = '2s ease-in-out';
        about2.style.opacity = "1";
        about2.style.transform = 'translateX(0px)';
        about2.style.transition = '2.5s ease-in-out';
        about3.style.opacity = "1";
        about3.style.transform = 'translateX(0px)';
        about3.style.transition = '3s ease-in-out';
        about4.style.opacity = "1";
        about4.style.transform = 'translateX(0px)';
        about4.style.transition = '3.5s ease-in-out';
        about5.style.opacity = "1";
        about5.style.transform = 'translateX(0px)';
        about5.style.transition = '4s ease-in-out';
        about6.style.opacity = "1";
        about6.style.transform = 'translateX(0px)';
        about6.style.transition = '4.5s ease-in-out';
    }
    else{
        conact2.style.opacity = "0"
        conact2.style.transform = 'translateX(-100px)';
        about1.style.opacity = "0"
        about1.style.transform = 'translateX(100px)';
        about2.style.opacity = "0"
        about2.style.transform = 'translateX(100px)';
        about3.style.opacity = "0"
        about3.style.transform = 'translateX(100px)';
        about4.style.opacity = "0"
        about4.style.transform = 'translateX(100px)';
        about5.style.opacity = "0"
        about5.style.transform = 'translateX(100px)';
        about6.style.opacity = "0"
        about6.style.transform = 'translateX(100px)';
    }
})