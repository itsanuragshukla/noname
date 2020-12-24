var i=0;
var lastsong=0;
var aud=new Audio();
var content=document.getElementById("content");
var list = function(id, name, author) {
        
        return `    
       <div class="cardlist" id ="cardlist${id}" onclick="playselected(this,${id})"> 
       <div class ="art"></div>
       <div class ="details">
       <div class="titlelist">${name}</div>        
       <div class="authorlist">${author}</div>
       </div>
       </div>
        `;
        
        };
for (let i='0';i<= songs.length -1;i++) {
    content.innerHTML += list(i , songs[i].name , songs[i].artist );}
$("#cardlist0").css("background","#501f3a");
function openSearch(){
$("#name").toggleClass("searchActive");
$("#searchBar").toggleClass("searchActive")
$("#searchBar").val("");
$(".cardlist").each(function(){$(this).css('display',"")});}

function openSideNav(){
$("#sideNav").toggleClass("navActive");
$("#navdiv").toggleClass("navdivActive");
}

function transition(){
$("#player").css("transition","0.5s");
}

function slideUp(e){
var slideUp=document.getElementById("player").classList.contains("slideUp");
if(slideUp==true){
$(e).css("border-width","0px")
$(e).css('height',"0vh");
$(e).toggleClass("slideUp");
$("#up").css("transform","rotate(0deg)");
}
if(slideUp==false){
$(e).css("height","60vh");
$(e).css("border-width","2px")
$(e).toggleClass("slideUp");
$("#up").css("transform","rotate(180deg)");
}}



function search() {
            var m = $(".cardlist");
            var inp = $("#searchBar").val().toUpperCase();
            for(var i = 0; i <= m.length - 1; i++) {
                if(m[i].innerHTML.toUpperCase().indexOf(inp) != -1) {
                    m[i].style.display = "";
                } else {
                    m[i].style.display = "none";
                }
            }
        }
      
      
      
      var isPlaying = aud.currentTime > 0 && !aud.paused && !aud.ended && aud.readyState > 2;
      
     
             function playselected(t,id){
                aud.src=songs[id].song;
                $(`#cardlist${lastsong}`).css("background","");
                lastsong=id;
                $(`#cardlist${lastsong}`).css("background","#501f3a");
                $("#title").html(songs[id].name);
                $("#artist").html(songs[id].artist);
                $(".footertitle").html(songs[id].name);
                $(".footerauthor").html(songs[id].artist);
                if(isPlaying){
                play();}
                duration();
                play();}
                
                function next(){
                if(isPlaying){
                play();}
                $(`#cardlist${lastsong}`).css("background","");
                lastsong+=1;
                $(`#cardlist${lastsong}`).css("background","#501f3a");
                if (lastsong > (songs.length-1)){
                $(`#cardlist${lastsong}`).css("background","");
                lastsong=0;
                $(`#cardlist${lastsong}`).css("background","#501f3a");
                }
                aud.src=songs[lastsong].song;
                $("#title").html(songs[lastsong].name);
                $("#artist").html(songs[lastsong].artist);
                $(".footertitle").html(songs[lastsong].name);
                $(".footerauthor").html(songs[lastsong].artist);
                play();
                }
                function prev(){
                if(isPlaying){
                play();}
                $(`#cardlist${lastsong}`).css("background","");
                lastsong-=1;
                $(`#cardlist${lastsong}`).css("background","#501f3a");
                if (lastsong < 0){
                $(`#cardlist${lastsong}`).css("background","");
                lastsong=(songs.length-1);
                $(`#cardlist${lastsong}`).css("background","#501f3a");
                }
                aud.src=songs[lastsong].song;
                $("#title").html(songs[lastsong].name);
                $("#artist").html(songs[lastsong].artist);
                $(".footertitle").html(songs[lastsong].name);
                $(".footerauthor").html(songs[lastsong].artist);
                play();
                }
                
               function	play(){
               var isPlaying = aud.currentTime > 0 && !aud.paused && !aud.ended && aud.readyState > 2;
               if(isPlaying==false){
               aud.play();
               $("#playbtn").html("<path d='M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z'>");
               $("#footerplaybtn").html("<path d='M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z'>");}
               
               else{
               aud.pause();
               $("#playbtn").html("<path d='M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z'/>");
               $("#footerplaybtn").html("<path d='M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z'/>");
               }}
               
               
               function duration(){
               aud.onloadedmetadata = function() { 
               let duration = aud.duration;
               let current = aud.currentTime;
               let currentMinutes = Math.floor(current / 60);
               let currentSeconds = Math.floor(current - currentMinutes * 60);
               let durationMinutes = Math.floor(duration / 60);
               let durationSeconds = Math.floor(duration - durationMinutes * 60);
               if (currentSeconds < 10) {
               currentSeconds = "0" + currentSeconds;
               }
               if (durationSeconds < 10) {
               durationSeconds = "0" + durationSeconds;
               }
               if (currentMinutes < 10) {
               currentMinutes = "0" + currentMinutes;
               }
               if (durationMinutes < 10) {
               durationMinutes = "0" + durationMinutes;
               }
               let curr_time = document.getElementById("curr");
               let total_duration =document.getElementById("dur");
               let footer_curr_time = document.getElementById("footercurr");
               let footer_total_duration =document.getElementById("footerdur");
               curr_time.textContent = currentMinutes + ":" + currentSeconds;
               total_duration.textContent = durationMinutes + ":" + durationSeconds;
               footer_curr_time.textContent = currentMinutes + ":" + currentSeconds;
               footer_total_duration.textContent = durationMinutes + ":" + durationSeconds;
               
               }};
               
               function stop(){
               aud.pause();
               $("#playbtn").html("<path d='M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z'/>");
               $("#footerplaybtn").html("<path d='M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z'/>");
               
               aud.currentTime=0;
               }
               
     function seekTo(e) {
 //    let seek_slider = document.querySelector(".seek_slider");
  //   let footer_seek_slider = document.querySelector(".footer_seek_slider");
     seekto = aud.duration * (e.value / 100);
     aud.currentTime = seekto;
     let current = aud.currentTime;
     let currentMinutes = Math.floor(current / 60);
     let currentSeconds = Math.floor(current - currentMinutes * 60);
     if (currentSeconds < 10) {
     currentSeconds = "0" + currentSeconds;
     }
     if (currentMinutes < 10) {
     currentMinutes = "0" + currentMinutes;
     let curr_time = document.getElementById("curr");
     curr_time.textContent = currentMinutes + ":" + currentSeconds;
     }
     
     
     }
     
     function curr(){
     let curr = aud.currentTime;
     let currentMinutes = Math.floor(curr / 60);
     let currentSeconds = Math.floor(curr - currentMinutes * 60);
     if (currentSeconds < 10) {
     currentSeconds = "0" + currentSeconds;
     }
     if (currentMinutes < 10) {
     currentMinutes = "0" + currentMinutes;
     let curr_time = document.getElementById("curr");
     curr_time.textContent = currentMinutes + ":" + currentSeconds;
     let footer_curr_time = document.getElementById("footercurr");
     footer_curr_time.textContent = currentMinutes + ":" + currentSeconds;
     
     let seek_slider = document.querySelector(".seek_slider");
     seek_slider.value = aud.currentTime*("100")/aud.duration;              
     let footer_seek_slider = document.querySelector(".footer_seek_slider");
     footer_seek_slider.value = aud.currentTime*("100")/aud.duration;              
     
     };    
     }
     setInterval(seekUpdate, 1000)
     
     
     
     function seekUpdate(){
     let seekPosition = 0;        
     seekPosition = aud.currentTime * (100 / aud.duration);
     let seek_slider = document.querySelector(".seek_slider");
     seek_slider.value = seekPosition;
     let footer_seek_slider = document.querySelector(".footer_seek_slider");
     footer_seek_slider.value = seekPosition;
     
     let currentMinutes = Math.floor(aud.currentTime / 60);
     let currentSeconds = Math.floor(aud.currentTime - currentMinutes * 60);
     let durationMinutes = Math.floor(aud.duration / 60);
     let durationSeconds = Math.floor(aud.duration - durationMinutes * 60);
     
     if (currentSeconds < 10) {
     currentSeconds = "0" + currentSeconds;
     }
     if (durationSeconds < 10) {
     durationSeconds = "0" + durationSeconds;
     }
     if (currentMinutes < 10) {
     currentMinutes = "0" + currentMinutes;
     }
     if (durationMinutes < 10) {
     durationMinutes = "0" + durationMinutes;
     }
     let curr_time = document.getElementById("curr");
     curr_time.textContent = currentMinutes + ":" + currentSeconds;
     let total_duration = document.getElementById("dur");
     total_duration.textContent = durationMinutes + ":" + durationSeconds;
     let footer_curr_time = document.getElementById("footercurr");
     footer_curr_time.textContent = currentMinutes + ":" + currentSeconds;
     let footer_total_duration = document.getElementById("footerdur");
     footer_total_duration.textContent = durationMinutes + ":" + durationSeconds;
     
     }
     
     aud.onended = function() {
     aud.currentTime=0;
     $("#playbtn").html("<path d='M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z'/>")
    $("#footerplaybtn").html("<path d='M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z'/>")
    
    };
/*  let elem=document.documentElement;
  elem.onclick = function() {
  req = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen;
  req.call(elem);}*/
