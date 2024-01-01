// import requirements
import { Howl, Howler } from 'howler';


// to play various click sounds
export const playClickAudio = (audio, volume=.2) => {

    // Create the Howl instance with the audio source
    const sound = new Howl({
        src: [audio],
        volume: volume,
        preload: true,
    });

    // Ensure that the AudioContext is resumed within a user gesture
    if (Howler.ctx.state === 'suspended') {
        Howler.ctx.resume().then(() => {
            sound.play();
        });
    } else {
        sound.play();
    }
}
