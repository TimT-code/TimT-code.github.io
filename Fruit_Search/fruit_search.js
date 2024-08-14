window.stopper();//clear any leftover speech upon refresh of this page
var fruit_count_div = document.createElement("div");
document.body.appendChild(fruit_count_div);
/*Listed Fruit Count Div first, and the Fruit Count after*/

var fruit_type_div = document.createElement("div");
document.body.appendChild(fruit_type_div);
fruit_type_div.innerHTML = 'Fruit';
fruit_type_div.title = 'Fruit Pics';
fruit_type_div.className = 'fruit_type_wrap';
fruit_type_div.onclick = pic_ond;

var fruit_slice_div = document.createElement("div");
document.body.appendChild(fruit_slice_div);
fruit_slice_div.innerHTML = 'Slices';
fruit_slice_div.title = 'Fruit Slice Pics';
fruit_slice_div.className = 'fruit_slice_wrap';
fruit_slice_div.onclick = pic2_ond;

var fruit_search_div = document.createElement("div");
document.body.appendChild(fruit_search_div);
fruit_search_div.innerHTML = 'Fruit Search Links';
fruit_search_div.title = 'Fruit Search Links';
fruit_search_div.className = 'fruit_search_wrap';

var newline = document.createElement("br"); //line break
document.body.appendChild(newline);

function Fruit(whole_fruit_pic, slice_pic, fruit_name, fruit_genus) {
  this.whole_fruit_pic = whole_fruit_pic;
  this.slice_pic = slice_pic;
  this.fruit_name = fruit_name;
  this.fruit_genus = fruit_genus;

  var nm = document.createElement("div"); //fruit name div
  var name_anchor = document.createElement("a"); //name_anchor
  nm.appendChild(name_anchor);
  document.body.appendChild(nm);
  name_anchor.href = '#' + fruit_name;
  name_anchor.innerHTML = fruit_name + ' ';
  nm.title = fruit_name;
  nm.style.backgroundImage="url('https://timt-code.github.io/Fruit_Search/images/background/" + fn +".jpg')";
  nm.addEventListener('click', function() {
    if ('speechSynthesis' in window) { //check if browser is capable
      utterThis = new SpeechSynthesisUtterance(fruit_name);
      window.speechSynthesis.speak(utterThis);
    }
  });
  nm.className = 'name_wrap hover_name';
  nm.onclick = audio1_func;

  function pl_ch() { /*plural checker*/
    if (fruit_name.match(/^[aeiou]/i)) {
      value = 'an ';
    } else {
      value = 'a ';
    }
    return value;
  }
  
  var fruitname_expand = document.createElement("a"); //fruitname_expand anchor
  fruitname_expand.innerHTML = '+';
  //fruitname_expand.href = '#';
  //fruitname_expand.onclick = audio3_func;
  //fruitname_expand.target = '_self';
  fruitname_expand.title = 'Expand - ' + fruit_name + ' list ';
  fruitname_expand.className = 'fruitname_expand_wrap fruitname_expand-hover_wrap';
  nm.appendChild(fruitname_expand);
  
  var fruitname_expand_arrow = document.createElement('span');
  fruitname_expand_arrow.className = 'fruitname_expand_arrow_wrap fruitname_expand_arrow-hover_wrap';
  nm.appendChild(fruitname_expand_arrow);

  var pic = document.createElement("img"); //whole_fruit_pic
  document.body.appendChild(pic);
  pic.src = whole_fruit_pic;
  pic.title = fruit_name;
  pic.alt = fruit_name;
  pic.className = 'pic_wrap';
  pic.onmouseover = hover_size;
  pic.onmouseout = size_resets;
  pic.onclick = resize_up;
  pic.addEventListener('click', function() {
    if (state !== 'upsized') {
      if ('speechSynthesis' in window) { //check if browser is capable
        utterThis = new SpeechSynthesisUtterance(fruit_name + ' picture');
        window.speechSynthesis.speak(utterThis);
      }
    }
    //pic.blur();
  });

  var pic2 = document.createElement("img"); //slice_pic
  document.body.appendChild(pic2);
  pic2.src = slice_pic;
  pic2.title = fruit_name + ' slice';
  pic2.alt = fruit_name + ' slice';
  pic2.className = 'pic_wrap';
  pic2.onmouseover = hover_size_2;
  pic2.onmouseout = size_resets_2;
  pic2.onclick = resize_up;
  pic2.addEventListener('click', function() {
    if (state !== 'upsized') {
      if ('speechSynthesis' in window) { //check if browser is capable
        utterThis = new SpeechSynthesisUtterance(fruit_name + ' slice picture');
        window.speechSynthesis.speak(utterThis);
      }
    }
    //pic2.blur();
  });

  var wikiDiv = document.createElement("div");
  var wiki = document.createElement("a"); //wikianchor
  wiki.innerHTML = 'Wikipedia';
  wiki.href = 'https://en.wikipedia.org/wiki/' + fruit_name;
  wiki.onclick = audio3_func;
  wiki.target = '_blank';
  wiki.title = 'Wikipedia Search for ' + fruit_name + ' - ' + wiki.href;
  wiki.className = 'wiki_wrap hover_wrap';
  wikiDiv.className = 'wiki_div';
  wikiDiv.appendChild(wiki);
  document.body.appendChild(wikiDiv);
  wiki.addEventListener('click', function() {
    if ('speechSynthesis' in window) { //check if browser is capable
      utterThis = new SpeechSynthesisUtterance('You clicked the link to ' + fruit_name + ', on Wikipedia.org');
      window.speechSynthesis.speak(utterThis);
      wiki.blur();
    }
  });
  var wiki_audio_text = document.createElement("a"); //wiki audio/text anchor
  wiki_audio_text.innerHTML = 'Wiki-Audio/Text';
  wiki_audio_text.href = '#' + fruit_name;
  wiki_audio_text.onclick = audio3_func;
  wiki_audio_text.target = '_self';
  wiki_audio_text.title = 'Wikipedia Audio/Text for ' + fruit_name + ' - ' + wiki.href;
  wiki_audio_text.className = 'wiki_audio_text_wrap wiki_audio_text_hover_wrap';
  wikiDiv.appendChild(wiki_audio_text);
  
  function show_audio_text_div(){
    stopper();//clear speech before opening
    if ('speechSynthesis' in window) { //check if browser is capable
      utterThis = new SpeechSynthesisUtterance('You clicked on the Audio and Text description for ' + fruit_name + ', on Wikipedia.org');
      window.speechSynthesis.speak(utterThis);
      wiki_audio_text.blur();
    };
    begin(fruit_name);//begin speech and expand bottom text area div
    newline_top.style.display='block';//make invisible line break element reappear
    Wiki_Text_Audio_Div.style.display='block';//make div appear for placement of wiki text
    Wiki_Text_Audio_Div.style.backgroundColor='black';
    Wiki_Text_Audio_Div.style.color='white';
    wiki_audio_text.style.backgroundColor='silver';//change colors on expansion/click
    wiki_audio_text.style.color='black';
    wiki.style.backgroundColor='black';
    wiki.style.color='white';
  };
  
  function hide_audio_text_div(){
    stopper();//stop text/speech and collapse/hide bottom text area div
    newline_top.style.display='none';//make invisible - line break element
    Wiki_Text_Audio_Div.style.display='none';//make div disappear for placement of wiki text
    Wiki_Text_Audio_Div.style.backgroundColor='white';
    Wiki_Text_Audio_Div.style.color='red';
    wiki_audio_text.style.backgroundColor='black';//change colors on expansion/click
    wiki_audio_text.style.color='white';
    wiki.style.backgroundColor='white';
    wiki.style.color='blue';
  };
  
  wiki_audio_text.addEventListener('click', function(){
    if (window.getComputedStyle(Wiki_Text_Audio_Div).display=='none'){
      show_audio_text_div();
    }else{
      hide_audio_text_div();
    };
  });    

  var googDiv = document.createElement("div");
  var goog = document.createElement("a"); //goog-anchor
  goog.innerHTML = 'Google Images';
  goog.href = 'https://www.google.com/images?q=' + fruit_name;
  goog.onclick = audio4_func;
  goog.target = '_blank';
  goog.title = 'Google Images Search for ' + fruit_name + ' - ' + goog.href;
  goog.className = 'goog_wrap hover_wrap';
  googDiv.className = 'goog_div';
  googDiv.appendChild(goog);
  document.body.appendChild(googDiv);
  goog.addEventListener('click', function() {
    if ('speechSynthesis' in window) { //check if browser is capable
      utterThis = new SpeechSynthesisUtterance('Now displaying pictures of ' + pl_ch() + fruit_name + ', from Google Images');
      window.speechSynthesis.speak(utterThis);
      goog.blur();
    }
  });

  var googleDiv = document.createElement("div");
  var google = document.createElement("a"); //google-anchor
  google.innerHTML = 'Google';
  google.href = 'https://www.google.com/search?q=' + fruit_name;
  google.onclick = audio5_func;
  google.target = '_blank';
  google.title = 'Google Search for ' + fruit_name + ' - ' + google.href;
  google.className = 'google_wrap hover_wrap';
  googleDiv.className = 'google_div';
  googleDiv.appendChild(google);
  document.body.appendChild(googleDiv);
  google.addEventListener('click', function() {
    if ('speechSynthesis' in window) { //check if browser is capable
      utterThis = new SpeechSynthesisUtterance('Now showing the search results of ' + pl_ch() + fruit_name + ', on Google');
      window.speechSynthesis.speak(utterThis);
      google.blur();
    }
  });

  var ytDiv = document.createElement("div");
  var yt = document.createElement("a"); //youtube anchor
  yt.innerHTML = 'YouTube';
  yt.href = 'https://www.youtube.com/results?search_query=' + fruit_name;
  yt.target = '_blank';
  yt.onclick = audio6_func;
  yt.title = 'YouTube Search for ' + fruit_name + ' - ' + yt.href;
  yt.className = 'yt_wrap hover_wrap';
  ytDiv.className = 'yt_div';
  ytDiv.appendChild(yt);
  document.body.appendChild(ytDiv);
  yt.addEventListener('click', function() {
    if ('speechSynthesis' in window) { //check if browser is capable
      utterThis = new SpeechSynthesisUtterance('Now showing a video search on ' + pl_ch() + fruit_name + ', at Youtube');
      window.speechSynthesis.speak(utterThis);
      google.blur();
    }
  });
  
  var newline_top = document.createElement("br"); //line break
  newline_top.id='newline_top_break';
  document.body.appendChild(newline_top);  
  
  var Wiki_Text_Audio_Div = document.createElement("div");
  //Wiki_Text_Audio_Div.className = window['wiki_text_audio_div' + '_' + fruit_name];
  Wiki_Text_Audio_Div.className = 'wiki_text_audio_div';
  document.body.appendChild(Wiki_Text_Audio_Div);
  

  var newline = document.createElement("br"); //line break
  document.body.appendChild(newline);

}


//Thanks to - https://github.com/9bitStudios/wikiblurb - This got to the point of what I wanted to do
function stopper(){window.speechSynthesis.cancel()};
stopper();
function begin(fruit_name){//Added a begin speech function because speechSynthesis.speak() was deprecated December 2018 unless user interaction
console.clear();
  stopper();

        var thePage=fruit_name
        $('.wiki_text_audio_div').wikiblurb({
        wikiURL: "https://en.wikipedia.org/",
        apiPath: 'w',
        section: 0,
        page: thePage,
        removeLinks: true,	    
        type: 'text',
        customSelector: '',
        callback: function(){
          //var abbrev = window['.wiki_text_audio_div_' + fruit_name];
          //var audio_output=$(abbrev).text();
          var audio_output=$('.wiki_text_audio_div').text();
          console.log('"' + thePage + '"' + ' - Wikipedia Text/Speech - Summary...');
          console.log(audio_output);
              if ('speechSynthesis' in window) {//check if browser is capable
                var utterThis = new SpeechSynthesisUtterance(audio_output);
                //utterThis.rate=0.87;
                //utterThis.pitch=0.75;
                window.speechSynthesis.speak(utterThis);
                
  }
        }
              
    });
}


//fruit images folder - concatenated to pic name
var img_folder='https://timt-code.github.io/Fruit_Search/images/fruit/';
var img_main = function(){return img_folder + fn + '.jpg'};
var img_slice = () => img_folder + fn +'-slice.jpg';//shorter ES6 arrow function just to show both ways
//var img_slice = () =>{ return img_folder + fn +'-slice.jpg' };

//begin fruits listing
/*
var orange = new Fruit(
  img_folder + "orange.jpg", //main pic
  img_folder + "orange-slice.jpg", //slice_pic
  "Orange", //fruit name
  "Citrus" //genus
);

var apple = Fruit(//You can omit the word "new" from in front of "Fruit"
  img_folder + "apple.png",
  img_folder + "apple-slice.jpg",
  "Apple",
  "Citrus"
);
*/

var fruitname = 'orange';
var fn = fruitname;
fn = new Fruit( 
  img_main(),
  img_slice(),
  fn,
  "citrus"
);

var fruitname = 'apple';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "malus"
);

var fruitname = 'lime';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Citrus" //genus
);

var fruitname = 'lemon';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Citrus" //genus
);

var fruitname = 'pear';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Pome" //genus
);

var fruitname = 'pineapple';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Ananas" //genus
);

var fruitname = 'watermelon';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Citrullus" //genus
);

var fruitname = 'coconut';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Cocos" //genus
);

var fruitname = 'banana';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Musa" //genus
);

var fruitname = 'cantaloupe';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "" //genus
);

var fruitname = 'peach';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Prunus" //genus
);

var fruitname = 'strawberry';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Fragaria" //genus
);

var fruitname = 'grapefruit';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Citrus" //genus
);

var fruitname = 'blueberry';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Vaccinium" //genus
);

var fruitname = 'cherry';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Prunus" //genus
);

var fruitname = 'raspberry';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Rubus" //genus
);

var fruitname = 'grape';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Vitus" //genus
);

var fruitname = 'mango';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn, //name
  "Mangifera" //genus
);

var fruitname = 'kiwi';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Prunus"
);

var fruitname = 'plum';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Prunus" //genus
);

var fruitname = 'persimmon';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Diospyros" //genus
);

var fruitname = 'date';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Phoenix" //genus
);

var fruitname = 'tangelo';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Citrus" //genus
);

var fruitname = 'dragonfruit';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Hylocereus" //genus
);

var fruitname = 'cranberry';
var fn = fruitname;
fn = Fruit( 
  img_main(),
  img_slice(),
  fn,
  "Vaccinium" //genus
);

/*Fruit Count at the end*/
fruit_count = document.querySelectorAll('.name_wrap').length;
fruit_count_div.innerHTML = fruit_count + ' Fruits listed';
fruit_count_div.title = fruit_count + ' Fruits listed';
fruit_count_div.className = 'fruit_count_wrap';

function hover_size() //pic1
{
  this.style.width = '151px';
  this.style.height = '104px';
  this.style.border = '0';
  this.style.borderRight = '2px solid black';
  this.style.cursor = 'zoom-in';
  this.style.filter = 'filter:progid:DXImageTransform.Microsoft.Alpha(opacity=85)';
  this.style.opacity = '0.85';
  //document.querySelector('.fruit_type_wrap').style.backgroundColor = '#100010';
  //document.querySelector('.fruit_type_wrap').style.color = '#ff9';
}

function hover_size_2()//pic2
{
  this.style.width='151px';
  this.style.height='104px';
  this.style.border='0';
  this.style.borderRight='2px solid black';
  this.style.cursor='zoom-in';
  this.style.filter='filter:progid:DXImageTransform.Microsoft.Alpha(opacity=85)';
  this.style.opacity='0.85';
  //document.querySelector('.fruit_slice_wrap').style.backgroundColor='#100010';
  //document.querySelector('.fruit_slice_wrap').style.color='#ff9';
}

/*
function hover_size_2() {
  hover_size.call(this);
  //document.querySelector('.fruit_type_wrap').style.backgroundColor = 'black';
  //document.querySelector('.fruit_type_wrap').style.color = 'white';
  //document.querySelector('.fruit_slice_wrap').style.backgroundColor = '#100010';
  //document.querySelector('.fruit_slice_wrap').style.color = '#ff9';
}
*/

function size_resets() //pic1
{
  state = 'downsized';
  this.style.width = '151px';
  this.style.height = '99px';
  this.style.border = '2px solid black';
  this.style.borderLeft = '0';
  this.style.cursor = 'zoom-in';
  this.style.filter = 'filter:progid:DXImageTransform.Microsoft.Alpha(opacity=100)';
  this.style.opacity = '1.0';
  //document.querySelector('.fruit_type_wrap').style.backgroundColor = 'black';
  //document.querySelector('.fruit_type_wrap').style.color = 'white';
}

function size_resets_2() //pic2
{
  size_resets.call(this);
  //document.querySelector('.fruit_type_wrap').style.backgroundColor = 'black';
  //document.querySelector('.fruit_type_wrap').style.color = 'white';
  //document.querySelector('.fruit_slice_wrap').style.backgroundColor = 'black';
  //document.querySelector('.fruit_slice_wrap').style.color = 'white';
}

state = {};

function resize_up() {
  window.state = 'upsized';
  this.style.border = '0';
  this.style.width = '180px';
  this.style.height = '130px';
  this.style.cursor = 'zoom-out';
  this.onclick = resize_down;
  this.onmouseout = resize_down;
  this.onmouseout = size_resets;
  this.style.filter = 'filter:progid:DXImageTransform.Microsoft.Alpha(opacity=100)';
  this.style.opacity = '1.0';
}

function resize_down() {
  window.state = 'downsized';
  this.style.border = '0';
  this.style.borderRight = '2px solid black';
  this.style.width = '151px';
  this.style.height = '104px';
  this.style.cursor = 'zoom-in';
  this.onclick = resize_up;
  this.onmouseout = size_resets;
}

function pic_ond() {
  var x = document.querySelectorAll('.pic_wrap');
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.float = 'right';
  }
  document.querySelector('.fruit_type_wrap').style.left = '490px';
  document.querySelector('.fruit_slice_wrap').style.left = '337px';
  document.querySelector('.pic_wrap').style.float = 'right';
  this.style.color = 'green';
  document.querySelector('.fruit_slice_wrap').style.color = 'red';
  this.onclick = pic2_ond;
}

function pic2_ond() {
  var x = document.querySelectorAll('.pic_wrap');
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.float = 'left';
  }
  document.querySelector('.fruit_type_wrap').style.left = '337px';
  document.querySelector('.fruit_slice_wrap').style.left = '490px';
  document.querySelector('.fruit_search_wrap').style.left = '643px';
  document.querySelector('.pic_wrap').style.float = 'left';
  this.style.color = 'red';
  document.querySelector('.fruit_type_wrap').style.color = 'green';
  this.onclick = pic_ond;
}

/* Audio */
//Audio folder
var audio_folder='https://timt-code.github.io/Fruit_Search/audio/';
//a1
var audio1 = document.createElement('audio');
document.body.appendChild(audio1);
audio1.controls = false;
//audio1.autoplay=true;
audio1.id = 'audio1_id';
var source1 = document.createElement('source');
source1.type = 'audio/mpeg';
source1.src = audio_folder + 'sound11.mp3';
audio1.appendChild(source1);

function audio1_func() {
  document.getElementById('audio1_id').play();
}

//a2
var audio2 = document.createElement('audio');
document.body.appendChild(audio2);
audio2.controls = false;
//audio2.autoplay=true;
audio2.id = 'audio2_id';
var source2 = document.createElement('source');
source2.type = 'audio/mpeg';
source2.src = audio_folder + 'sound12.mp3';
audio2.appendChild(source2);

function audio2_func() {
  document.getElementById('audio2_id').play();
}

//a3
var audio3 = document.createElement('audio');
document.body.appendChild(audio3);
audio3.controls = false;
//audio3.autoplay=true;
audio3.id = 'audio3_id';
var source3 = document.createElement('source');
source3.type = 'audio/mpeg';
source3.src = audio_folder + 'sound6.mp3';
audio3.appendChild(source3);

function audio3_func() {
  document.getElementById('audio3_id').play();
}

//a4
var audio4 = document.createElement('audio');
document.body.appendChild(audio4);
audio4.controls = false;
//audio4.autoplay=true;
audio4.id = 'audio4_id';
var source4 = document.createElement('source');
source4.type = 'audio/mpeg';
source4.src = audio_folder + 'sound19.mp3';
audio4.appendChild(source4);

function audio4_func() {
  document.getElementById('audio4_id').play();
}

//a5
var audio5 = document.createElement('audio');
document.body.appendChild(audio5);
audio5.controls = false;
//audio5.autoplay=true;
audio5.id = 'audio5_id';
var source5 = document.createElement('source');
source5.type = 'audio/mpeg';
source5.src = audio_folder + 'sound40.mp3';
audio5.appendChild(source5);

function audio5_func() {
  document.getElementById('audio5_id').play();
}

//a6
var audio6 = document.createElement('audio');
document.body.appendChild(audio6);
audio6.controls = false;
//audio6.autoplay=true;
audio6.id = 'audio6_id';
var source6 = document.createElement('source');
source6.type = 'audio/mpeg';
source6.src = audio_folder + 'sound36.mp3';
audio6.appendChild(source6);

function audio6_func() {
  document.getElementById('audio6_id').play();
}
