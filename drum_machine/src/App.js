import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const { useState } = React;

const drumPads = [
                {
                    "key": "Q",
                    "song": "Heater-1",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                },
                {
                    "key": "W",
                    "song": "Heater-2",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                },
                {
                    "key": "E",
                    "song": "Heater-3",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                },
                {
                    "key": "A",
                    "song": "Heater-4",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                },
                {
                    "key": "S",
                    "song": "Heater-6",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                },
                {
                    "key": "D",
                    "song": "Dsc_Oh",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                },
                {
                    "key": "Z",
                    "song": "Kick_n_Hat",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                },
                {
                    "key": "X",
                    "song": "RP4_KICK_1",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                },
                {
                    "key": "C",
                    "song": "Cev_H2",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                }
  ];

const DrumPad = ({ drumKey, song, url}) => {
  return(
    <button className="drum-pad" id={song} onClick={(drumKey)}>
      {drumKey}
      <audio className="clip" src={url} id={drumKey} />
     </button>
  )
  
  
}

const DrumMachine = () => {
  const [display, setDisplay] = useState('');

  const playSound = (sound) => {
   
    const audio = document.getElementById(sound);
    audio.currentTime = 0;
    audio.play();
    setDisplay(sound);
      }
     
   React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, []);
 
    const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    const button = document.getElementById(key);
    
    if (button){
      button.play();
      setDisplay(key);
    };
  }

   
    
    
    
    return (
    <div className="bg-info text-black text-center" id="drum-machine">
       <h2>DRUM MACHINE</h2>
        {drumPads.map( item => (
          <DrumPad
            song={item.song}
            key={item.key}
            drumKey={item.key}
            handleClick={item.key}
            url={item.url}
           />
      ))}
      <div className="row">
        <div className="col-4 ">
          <div className="drum-pad" id="sound1" onClick={() => playSound('Q')}>
            <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
            Q
          </div>
        </div>
        <div className="col-4">
          <div className="drum-pad"  id="sound2" onClick={() => playSound('W')}>
            <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
            W 
          </div>
        </div>
        <div className="col-4">
          <div className="drum-pad"  id="sound3" onClick={() => playSound('E')}>
            <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
            E 
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-4">
          <div className="drum-pad" id="sound4" onClick={() => playSound('A')}>
            <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
            A 
          </div>
        </div>
        <div className="col-4">
          <div className="drum-pad" id="sound5" onClick={() => playSound('S')}>
            <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
            S 
          </div>
        </div>
        <div className="col-4">
          <div className="drum-pad" id="sound6" onClick={() => playSound('D')}>
            <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
            D 
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="drum-pad" id="sound7" onClick={() => playSound('Z')}>
            <audio className="clip" id="Z"  src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
            Z 
          </div>
        </div>
        <div className="col-4">
          <div className="drum-pad" id="sound8" onClick={() => playSound('X')}>
            <audio className="clip" id="X"  src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
            X 
          </div>
        </div>
        <div className="col-4">
          <div className="drum-pad" id="sound9" onClick={() => playSound('C')}>
            <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
            C 
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4 bg-secondary text-white rounded">
          <div className="display" id="display">{display}</div>
        </div>
      </div> 
    </div>
  );
};

export default DrumMachine;
