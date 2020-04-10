$(document).ready(() => {
  const $body = $('body');
  $body.html('');
  var timeArr = [];
  var tweetsArr = [];
  var handleArr = [];
  var timeStamp;
    streams.home.forEach((tweet) => {
      const handle = tweet.user;
      const message = tweet.message;
      timeStamp = tweet.created_at;
      timeArr.unshift(tweet.created_at);
      tweetsArr.unshift(message);
      handleArr.unshift(handle);
    });
  
    $body.before(`
    <div class="sidenav">
      <div id = 'userInputs'>
        <input id = 'userName' placeholder = 'Enter your name.'>

        <textarea name="userMessage" id='userMessage' rows="10"></textarea>
        
        <button id = 'userInputButton'>Send my tweet</button>
      </div>
    </div>
    `);
  
    $body.append(`<table><tr><td id = 'oneone' colspan = '2'>Twiddler!</td></tr><td id = 'twoone' valign = 'top'></td><td id = 'twotwo' valign = 'top'></td></tr></table>`);

    

  for (var i = 0; i < timeArr.length; i++){
    $('#twoone').append($(`
    
   <div class = 'centerText'>
    <aside class = '${handleArr[i]}'>
      <div class = 'handler'>
        @${handleArr[i]}:
      </div>
    </aside>
      <div class ="tweets">
        ${tweetsArr[i]}
      
      <div class ="times">
        ${moment(timeArr[i]).startOf().fromNow()}
      </div>
      </div>
      <p></p>

  </div>
      `));
  };

  

  $('.sidenav').prepend(`
         <div id = "cont">  
          <button id = 'myButton'>
            Refresh!
          </button>
         </div>
    `);


  $('#userInputButton').click(function(){
    var userName = document.getElementById('userName').value;
    var userMessage = document.getElementById('userMessage').value;
    // var $userMessage = $('textarea#userMessage').val();
    window.visitor = userName;
    if (!streams.users[userName]) {
      streams.users[userName] = [];
    };
    $(writeTweet(userMessage));
    document.getElementById('userMessage').value = '';
  });

  $('#myButton').click(function(){
    
  var timeArr2 = [];
  var tweetsArr2 = [];
  var handleArr2 = [];
    streams.home.forEach((tweet2) => {
      const text2 = `${tweet2.message}`;
      timeStamp2 = tweet2.created_at;
      const handle = tweet2.user;
      timeArr2.push(tweet2.created_at);
      tweetsArr2.push(text2);
      handleArr2.push(handle);
    });

    restartMainTweets();
    for (var i = 0; i < timeArr2.length; i++){
      $('#twoone').prepend($(`
    <div class = 'centerText'>  
      <aside class = '${handleArr2[i]}'>
      
        <div class = 'handler'>
          @${handleArr2[i]}:
        </div>
        </aside>
        <div class ="tweets">
          ${tweetsArr2[i]}
        </div>
        <div class ="times">
          ${moment(timeArr2[i]).startOf().fromNow()}
        </div>
        <p></p>
      
    </div>`
      ))};

  updateCSS();
  updateClickName();

  });
  var prettyButton = document.getElementById("myButton");
  prettyButton.style.position = 'fixed';

  

  var updateClickName = function(){
  $("aside").click(function(){

      removeBox();
      myBool = true;
      var myClass = $(this).attr("class");
      var timeArr = [];
      var tweetsArr = [];
      var handleArr = [];
    streams.home.forEach((tweet) => {
      if (tweet.user === myClass){
      const handle = tweet.user;
      const message = tweet.message;
      timeArr.unshift(tweet.created_at);
      tweetsArr.unshift(message);
      handleArr.unshift(handle);
      };
    });
    updateCSS();
    for (var i = 0; i < timeArr.length; i++){
      $('#twotwo').append($(`
   <ul id = "addEraseDiv">
    <div class = 'centerText'>
      <aside class = '${handleArr[i]}'>
        <div class = 'handler'>
          @${handleArr[i]}:
        </div>
      </aside>
        <div class ="tweets">
          ${tweetsArr[i]}
        </div>
        <div class ="times">
          ${moment(timeArr[i]).startOf().fromNow()}
        </div>
        <p></p>
    </div>
   </ul>
    `
      ))};
      updateCSS();
      updateClickName();
   })};
  /*
   var updateClickHash = function(){
    $("aside").click(function(){
  
        removeBox();
        myBool = true;
        var myClass = $(this).attr("class");
        var timeArr = [];
        var tweetsArr = [];
        var handleArr = [];
      streams.home.forEach((tweet) => {
        if (tweet.user === myClass){
        const handle = tweet.user;
        const message = tweet.message;
        timeArr.unshift(tweet.created_at);
        tweetsArr.unshift(message);
        handleArr.unshift(handle);
        };
      });
      updateCSS();
      for (var i = 0; i < timeArr.length; i++){
        $('#twotwo').append($(`
     <ul id = "addEraseDiv">
      <div class = 'centerText'>
        <aside class = '${handleArr[i]}'>
          <div class = 'handler'>
            @${handleArr[i]}:
          </div>
        </aside>
          <div class ="tweets">
            ${tweetsArr[i]}
          </div>
          <div class ="times">
            ${moment(timeArr[i]).startOf().fromNow()}
          </div>
          <p></p>
      </div>
     </ul>
      `
        ))};
        updateCSS();
        updateClickName();
     });
 */
  
   var myBool = false;
   updateClickName();

function updateCSS(){
  $('body')
  .css('background', 'darkblue')
  .css('max-height', '200px')
  .css('padding-left', '160px');

$('#myButton')
  .css('margin-left', '35px')
  .css('height', '50px')
  .css('width', '100px')
  .css('font-size', 'large')
  .css('font-weight', 'bold')
  .css('cursor', 'pointer');

$('#userInputButton')
   .css('margin-left', '13px');

$('#userInputs')
  .css('margin-top', '100px')
  .css('margin-left', '9px');

$('#userMessage')
  .css('height', '20%');

$('.sidenav')
  .css('height', '100%')
  .css('width', '160px')
  .css('position', 'fixed')
  .css('top', '0')
  .css('left', '0')
  .css('overflow-x', 'hidden')
  .css('padding-top', '20px')

  .css('background-color', 'darkblue');

  $('.botnav')
  .css('height', '15%')
  .css('width', '100%')
  .css('position', 'fixed')
  .css('bottom', '0')
  .css('left', '0')
  .css('overflow-x', 'hidden')
  .css('padding-top', '20px')
  .css('background-color', 'darkblue');

  $('.times')
  .css('color', 'orange')
  .css('fontFamily', "Comic Sans MS")
  .css('fontSize','xx-small')
  .css('background', 'red')
  .css('text-align', 'center')
  .css('fontWeight', 'bold');

$('.tweets')
.css('fontSize', 'medium')
.css('text-align', 'center')
.css('fontFamily', 'monospace');

$('.handler')
.css('cursor', 'pointer')
.css('fontSize', 'x-large')
.css('fontFamily', 'cursive')
.css('text-align', 'center')
.css('background', 'lightblue');

$('table')
.css('background', 'lightblue')
.css('centered', 'fixed')
.css('table-layout', 'fixed');

$('div');

$('#twoone')
.css('border-style', 'outset')
.css('width', '400px')
.css('padding-left', '40px')
.css('padding-right', '40px');



$('#twotwo')
.css('border-style', 'outset')
.css('width', '400px')
.css('padding-right', '40px');

$('#oneone')
.css('border-style', 'outset')
.css('font-size', 'xxx-large')
.css('font-weight', 'bold')
.css('text-align', 'center');

$('.centerText')
.css('background-color', 'lightblue');
};

updateCSS();

function restartMainTweets(){
  var parent = document.getElementById('twoone');
  parent.innerHTML = '';
};

function removeBox(){
  if (myBool){
var parent = document.getElementById('twotwo');
parent.innerHTML = '';
};
};

});
