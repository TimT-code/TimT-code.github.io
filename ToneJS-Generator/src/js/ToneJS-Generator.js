// Ensure Tone.js is initialized and the AudioContext is running

// (often done with Tone.start() on a user interaction)
let editedSoundName='';//Save for later to capture the eduted name

document.getElementById('startButton').addEventListener('click', () => {

    Tone.start();

    console.log('AudioContext is running');

    // Create a Tone.Player instance
  
  const soundUrl = 'https://tonejs.github.io/audio/berklee/gong_1.mp3';

    const player = new Tone.Player(soundUrl)/*.toDestination()*/;

    // Play the sound once the buffer is loaded

    // You can also use player.autostart = true;

    // if you want it to play as soon as the file is loaded.
  player.autostart=true;
  player.volume.value='0';//Set initial value
  player.loop=false;
  
  if(player.state === 'stopped'){
      document.getElementById('stopButton').style.color='red';
      document.getElementById('startButton').style.color='green';
  }
  
  // Create a function to run when the player stops
  function onPlayerStopped() {
      if(player.state !== 'stopped'){
          console.log('Player has stopped!');
      }
  document.getElementById('startButton').style.color='black';
  document.getElementById('stopButton').style.color='black';
  document.getElementById('loopButton').style.color='black';

  // Add other logic here, such as updating UI or triggering new audio

}
  
  // Schedule a repeated event to check the player's state

  const checkInterval = '0.1'; // Check every 10th of a second

  const checkStateEvent = Tone.Transport.scheduleRepeat((time) => {

    // Check if the player's state is 'stopped'

    if (player.state === 'stopped') {

      onPlayerStopped();

      // Unschedule the event so it doesn't keep running

      Tone.Transport.clear(checkStateEvent);

    }

  }, checkInterval);

  // Start the transport to begin playback and the state checks

  Tone.Transport.start();
  
  // Create an Analyser instance

// 'waveform' for time-domain analysis, 'fft' for frequency-domain analysis

// 2048 is the FFT size, must be a power of two

const analyser = new Tone.Analyser("waveform", 2048); 

// Connect the synth to the analyser, and then connect the analyser to the destination

player.connect(analyser);

analyser.connect(Tone.Destination); // Or connect analyser to a different node if needed
  
  // Audio file duration, length in seconds
  Tone.loaded().then(() => {
    const audioDuration = player.buffer.duration;
    document.getElementById('audioDuration_stats').innerText=audioDuration + ' Seconds';
    console.log('Audio duration:', audioDuration, 'Seconds');
    
    // Truncate to 2 decimal places
    const twoDec = Math.trunc(audioDuration * 100) / 100;
    document.getElementById('audioDuration_trunc_stats').innerText=twoDec + ' Seconds';
    console.log('Audio duration - Short:', twoDec, 'seconds');
    
    // Volume settings
    document.getElementById('audioVolume_stats').innerText=player.volume.value;

    console.log('Audio Volume:', player.volume.value, ' db');
    
    // Editable Sound Name
    
    if (editedSoundName !== null && editedSoundName !== undefined && editedSoundName.length > 0) {// The string is not empty, null, or undefined
  document.getElementById('editableSoundName_stats').innerText=editedSoundName;
      console.log('Edited Sound Name', editedSoundName);
    }else{//Use original file name if sound name not edited yet
      editableSoundName=soundUrl.replace(/\.[^/.]+$/, "").split('/').pop();
      document.getElementById('editableSoundName_stats').innerText=editableSoundName;
      console.log('Editable Sound Name:', editableSoundName);
  }
    
    document.getElementById ('editableSoundName_stats').addEventListener('blur', (event) => {
      captureEdits=document.getElementById('editableSoundName_stats').innerText;
      
 if(captureEdits !== editableSoundName){
   document.getElementById('editableSoundName_title').style.backgroundColor='black';
   document.getElementById('editableSoundName_title').style.color='white';
   document.getElementById('editableSoundName_stats').style.backgroundColor='white';
   document.getElementById('editableSoundName_stats').style.color='black';
   editedSoundName=document.getElementById('editableSoundName_stats').innerText;
   document.getElementById('editableSoundName_stats').textContent=editedSoundName;
   document.getElementById('editableSoundName_title').innerText='*Edited Sound Name';
   console.log('*Edited Sound Name', editedSoundName);
 }
    }, true);
    
    

    // Original Sound Name
    const originalSoundName=soundUrl.replace(/\.[^/.]+$/, "").split('/').pop();

    document.getElementById('originalSoundName_stats').innerText=originalSoundName;

    console.log('Original Sound Name:', originalSoundName);
    
    // Full URL
    document.getElementById('fullUrl_stats').innerText=soundUrl;
    console.log('Full Url:', soundUrl);
    
    // Origin URL - using URL api
    const url = new URL(soundUrl);
    const originUrl = url.origin + '/';
    document.getElementById('originUrl_stats').innerText=originUrl;
    console.log('Origin Url:', originUrl);
    
    // Folder URL
    function getFolderNameFromUrl(soundUrl){
     const folderUrl = soundUrl;
  //Coded directly into variable inside function, or pass in the url string with an argument and an outside variable 
  //const url='https://tonejs.github.io/audio/berklee/gong_1.mp3';
  
  //const url = 'https://github.com/davidysoards/svg_drum_machine/blob/master/docs/drums/808BDLong2.wav';
  
  //const url = 'https://google.com/file.mp3';  
  //const url = 'https://github.com/file.mp3';
  
  let protocolPiece='';//stays empty and not used if there are folders in URL
  let processedUrl = folderUrl;//stays original url if there is no 'https://' protocol in the url string..
  
  if(folderUrl.includes('https://')){
    protocolPiece='https://';
    // Replace https:// with empty text
    processedUrl = folderUrl.replace(/^(https?:\/\/)/, '');
    }else{
      processedUrl = folderUrl;
      }
  
  
  // Split the string by '/', which will be an array of the parts
  if(!processedUrl.includes('/')){
    //console.log('No file name in url');
    return protocolPiece + folderUrl;
    }else{
      //Must be folders in URL and slashes
      const partsUrl = processedUrl.split('/');
      const partsCount = partsUrl.length;
      if(partsCount == 2){
        //Must be just origin and file name
        //Just show origin URL if the file is at the root of the site url
        //console.log(partsUrl[0]);
        document.getElementById('foldersUrl_stats').innerText=folderUrl;

    console.log('Folder name:', folderUrl);

    
      }else if(partsCount > 2){
        //Must be some folders in the url
        //Remove one element starting at index 0 (the first element)
        partsUrl.splice(0, 1);
        //Remove last index..filename from end
        partsUrl.pop();
        //Combine parts together with slash in middle, and slashes at each end
        const combinedPartsUrl = '/' + partsUrl.join('/') + '/';
        //console.log(combinedPartsUrl);
        return combinedPartsUrl;
        }
  }
      return folderUrl;
}
    document.getElementById('foldersUrl_stats').innerText=getFolderNameFromUrl(soundUrl);
    
    console.log('Folders Url:', getFolderNameFromUrl(soundUrl));
    
    //Base URL
    //Remove trailing slash from end of originUrl with .sluce() method
    document.getElementById('baseUrl_stats').innerText = originUrl.slice(0, -1) + getFolderNameFromUrl(soundUrl);
    console.log('Base Url:', originUrl.slice(0, -1)+ getFolderNameFromUrl(soundUrl));
    
    // File name from base url and URL api
    // Get the pathname (e.g., /documents/report.pdf)
    const pathname = url.pathname;
    
    // Extract the filename from the pathname
    const filename = pathname.substring(pathname.lastIndexOf('/') + 1);
    // Get the file extension
//const fileExtension = filename.split('.').pop();

    
   // const soundName = fileName.pop();
    document.getElementById('fileName_stats').innerText=filename;
    console.log('File Name:', filename);
    
    const audioMimeTypes = {
      mp3: "audio/mpeg",
      wav: "audio/wav",
      ogg: "audio/ogg",
      aac: "audio/aac",
      flac: "audio/flac",
      m4a: "audio/mp4", // Often used for AAC audio
      opus: "audio/opus",
      webm: "audio/webm", // Can contain audio (Opus or Vorbis)
      aiff: "audio/aiff",
      alac: "audio/x-m4a" // Apple Lossless Audio Codec
    };
    
    // fileType check - by text extraction
    const fileType_check = soundUrl.split('.').pop();
    document.getElementById('fileType_stats').innerText='.' + fileType_check;
    console.log('File type:' + '.' + fileType_check);
    
    document.getElementById('mimeType_stats').innerText=audioMimeTypes[fileType_check];

    console.log('Audio Mime Type:' + '.' + fileType_check);
    
    const sampleRate = Tone.context.sampleRate;
    document.getElementById('sampleRate_stats').innerText=sampleRate + ' Hz';

    console.log('Audio Sample Rate:' + sampleRate + ' Hz');
    console.log(player.volume.value);
    
    //Analyzer
    const canvas = document.getElementById("analyzerCanvas");

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight / 2;

    function draw() {

        requestAnimationFrame(draw);

        const values = analyser.getValue(); // Get waveform or FFT data

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();

        ctx.lineWidth = 2;

        ctx.strokeStyle = "rgb(0, 255, 0)";

        const sliceWidth = canvas.width * 1.0 / values.length;

        let x = 0;

        for (let i = 0; i < values.length; i++) {

            const v = values[i];

            const y = canvas.height - ((v + 1) / 2) * canvas.height; // Adjust for waveform displa

            if (i === 0) {

                ctx.moveTo(x, y);

            } else {

                ctx.lineTo(x, y);

            }

            x += sliceWidth;

        }

        ctx.stroke();

    }

    // Start drawing when audio is ready or playback begins

    // For example, after player loads:

        draw();
     

});
  
  document.getElementById('stopButton').addEventListener('click', () => {
      player.stop();
      player.loop=false;
      document.getElementById('loopButton').style.backgroundImage='';
      document.getElementById('loopButton').style.backgroundSize='';
      document.getElementById('loopButton').style.backgroundRepeat='';
      document.getElementById('loopButton').style.backgroundPosition='';
  });
      

  });
  
  document.getElementById('loopButton').addEventListener('click', () => {
      player.loop=true;
      document.getElementById('loopButton').style.color='green';
      document.getElementById('loopButton').style.backgroundImage='url("images/g0es.gif")';
      document.getElementById('loopButton').style.backgroundSize='cover';
      document.getElementById('loopButton').style.backgroundRepeat='no-repeat';
      document.getElementById('loopButton').style.backgroundPosition='center';
  });
  
  });


