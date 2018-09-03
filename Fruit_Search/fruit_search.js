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

  var nm = document.createElement("div"); //name
  document.body.appendChild(nm);
  nm.innerHTML = fruit_name;
  nm.href = '#';
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
  wiki.href = 'https://en.wikipedia.org/wiki/' + fruit_name + '_(fruit)';
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

  var newline = document.createElement("br"); //line break
  document.body.appendChild(newline);

}

//begin fruits listing

var orange = new Fruit(
  /*whole_fruit_pic*/
  "http://rs115.pbsrc.com/albums/n306/mmarch694/orange.jpg~c200",
  /*slice_pic*/
  "http://www.mannatechblog.com/wp-content/uploads/2014/12/Orange_Slice.jpg",
  /*name*/
  "Orange",
  /*genus*/
  "Citrus"
);

var apple = new Fruit(
  "http://www.kimmelorchard.org/img/icon_apple_gala.png", //whole_fruit_pic
  "http://flipthatstock.com/wp-content/uploads/2014/05/apple-slice.jpg", //slice_pic
  "Apple", //name
  "Citrus" //genus
);

var lime = new Fruit(
  "http://www.foodsubs.com/Photos/clime.jpg", //whole_fruit_pic
  "http://researcher.watson.ibm.com/researcher/files/us-rabbah/lime.gif", //slice_pic
  "Lime", //name
  "Citrus" //genus
);

var lemon = new Fruit(
  "https://edc2.healthtap.com/ht-staging/user_answer/reference_image/9114/large/Lemon_allergy.jpeg?1386670847", //whole_fruit_pic
  "http://www.thewholetortilla.com/images/lemon_slice.jpg", //slice_pic
  "Lemon", //name
  "Citrus" //genus
);

var pear = new Fruit(
  "http://www.finecooking.com/assets/uploads/posts/5587/051108064-04-forelle-pear_xlg.jpg", //whole_fruit_pic
  "http://static.wixstatic.com/media/41d9d6_d6e6be57d47042d7b82eda4dcfb4c0e1.jpg/v1/fill/w_473,h_610,al_c,q_90/41d9d6_d6e6be57d47042d7b82eda4dcfb4c0e1.jpg", //slice_pic
  "Pear", //name
  "Pome" //genus
);

var pineapple = new Fruit(
  "http://www.natures-health-foods.com/images/Pineapple-clean-FD-xl.jpg", //whole_fruit_pic
  "http://www.fruit-powered.com/wp-content/uploads/2013/11/Pineapple-slice-resembling-the-sun.jpg", //slice_pic
  "Pineapple", //name
  "Ananas" //genus
);

var watermelon = new Fruit(
  "http://www.universetoday.com/wp-content/uploads/2009/08/watermelon.jpg", //whole_fruit_pic
  "http://cdn.skim.gs/image/upload/v1456343706/msi/isolated-slice-of-watermelon_w6khuv.jpg", //slice_pic
  "Watermelon", //name
  "Citrullus" //genus
);

var coconut = new Fruit(
  "http://assets.nydailynews.com/polopoly_fs/1.2129222.1424898461!/img/httpImage/image.jpg_gen/derivatives/article_750/154768913.jpg", //whole_fruit_pic
  "https://i.dailymail.co.uk/i/pix/2014/01/31/article-0-1AAF4AD900000578-65_634x557.jpg", //slice_pic
  "Coconut", //name
  "Cocos" //genus
);

var banana = new Fruit(
  "https://media.licdn.com/mpr/mpr/p/2/005/061/3dc/115e118.jpg", //whole_fruit_pic
  "http://previews.123rf.com/images/LepasR/LepasR1409/lepasr140900292/31189607-Banana-slice-closeup-isolated-on-white-background-Stock-Photo.jpg", //slice_pic
  "Banana", //name
  "Musa" //genus
);

var canteloupe = new Fruit(
  "https://cdn.shopify.com/s/files/1/1321/7103/products/cantaloupe-hero_large.jpeg?v=1465353350", //whole_fruit_pic
  "http://www.freshfoodcentral.com/uploads/Melons/melons-20060723-cantaloupe-02.jpg", //slice_pic
  "Canteloupe", //name
  "" //genus
);

var peach = new Fruit(
  "http://www.changedlivesnewjourneys.com/wp-content/uploads/Peach-Pixabay219845_640.jpg", //whole_fruit_pic
  "http://sr.photos2.fotosearch.com/bthumb/CSP/CSP990/k9995296.jpg", //slice_pic
  "Peach", //name
  "Prunus" //genus
);

var strawberry = new Fruit(
  "http://www.rodalesorganiclife.com/sites/rodalesorganiclife.com/files/images/chemicals-strawberries-320.jpg", //whole_fruit_pic
  "https://atlas-content2-cdn.pixelsquid.com/assets_v2/11/1188492562868999748/jpeg-600/G03.jpg", //slice_pic
  "Strawberry", //name
  "Fragaria" //genus
);

var grapefruit = new Fruit(
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQcGUP1hfK1Yeqz8FfILfCPpA4q2xI42IgOXp72prfA0w7y4gS2g", //whole_fruit_pic
  "http://www.learnrawfood.com/images/uploads/Grapefruit_1.jpg", //slice_pic
  "Grapefruit", //name
  "Citrus" //genus
);

var Blueberry = new Fruit(
  "https://cdn.authoritynutrition.com/wp-content/uploads/2015/02/a-single-blueberry.jpg", //whole_fruit_pic
  "http://farm5.static.flickr.com/4145/5010626717_980662dc88.jpg", //slice_pic
  "Blueberry", //name
  "Vaccinium" //genus
);

var cherry = new Fruit(
  "http://img.ifreepic.com/56/56056_icon.jpg", //whole_fruit_pic
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Cross-section_cherry.jpg/334px-Cross-section_cherry.jpg", //slice_pic
  "Cherry", //name
  "Prunus" //genus
);

/*
var orange = new Fruit(
  "",//whole_fruit_pic
  "",//slice_pic
  "",//name
  ""//genus
);

var orange = new Fruit(
  "",//whole_fruit_pic
  "",//slice_pic
  "",//name
  ""//genus
);

var orange = new Fruit(
  "",//whole_fruit_pic
  "",//slice_pic
  "",//name
  ""//genus
);

var orange = new Fruit(
  "",//whole_fruit_pic
  "",//slice_pic
  "",//name
  ""//genus
);

var orange = new Fruit(
  "",//whole_fruit_pic
  "",//slice_pic
  "",//name
  ""//genus
);

var orange = new Fruit(
  "",//whole_fruit_pic
  "",//slice_pic
  "",//name
  ""//genus
);

//copy template for more fruit
/*
var orange = new Fruit(
  "http://rs115.pbsrc.com/albums/n306/mmarch694/orange.jpg~c200",//whole_fruit_pic
  "http://www.mannatechblog.com/wp-content/uploads/2014/12/Orange_Slice.jpg",//slice_pic
  "Orange",//name
  "Citrus"//genus
);
//change fruit name and fill in the blanks

var orange = new Fruit(
  "",//whole_fruit_pic
  "",//slice_pic
  "",//name
  ""//genus
);

*/
/*Fruit Count at the end*/
fruit_count = document.querySelectorAll('.name_wrap').length;
fruit_count_div.innerHTML = fruit_count + ' Fruits listed';
fruit_count_div.title = fruit_count + ' Fruits listed';
fruit_count_div.className = 'fruit_count_wrap';

function hover_size() //pic1
{
  this.style.width = '150px';
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
  this.style.width='150px';
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
  this.style.width = '150px';
  this.style.height = '100px';
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
  this.style.width = '150px';
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
  document.querySelector('.fruit_type_wrap').style.left = '478px';
  document.querySelector('.fruit_slice_wrap').style.left = '326px';
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
  document.querySelector('.fruit_type_wrap').style.left = '326px';
  document.querySelector('.fruit_slice_wrap').style.left = '478px';
  document.querySelector('.pic_wrap').style.float = 'left';
  this.style.color = 'red';
  document.querySelector('.fruit_type_wrap').style.color = 'green';
  this.onclick = pic_ond;
}

var btm_brdr = document.createElement("div"); //last in list black border
document.body.appendChild(btm_brdr);
btm_brdr.className = 'btm_brdr';

/* Audio */
//a1
var audio1 = document.createElement('audio');
document.body.appendChild(audio1);
audio1.controls = false;
//audio1.autoplay=true;
audio1.id = 'audio1_id';
var source1 = document.createElement('source');
source1.type = 'audio/mpeg';
source1.src = 'http://tteacher.net/Flash/sound/sound11.mp3';
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
source2.src = 'http://tteacher.net/Flash/sound/sound12.mp3';
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
source3.src = 'http://tteacher.net/Flash/sound/sound6.mp3';
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
source4.src = 'http://tteacher.net/Flash/sound/sound19.mp3';
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
source5.src = 'http://tteacher.net/Flash/sound/sound40.mp3';
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
source6.src = 'http://tteacher.net/Flash/sound/sound36.mp3';
audio6.appendChild(source6);

function audio6_func() {
  document.getElementById('audio6_id').play();
}
