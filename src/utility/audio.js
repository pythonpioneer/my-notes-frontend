// import requirements
import { Howl, Howler } from 'howler';


// to play various click sounds
export const playClickAudio = async (audio, volume=.2) => {

    // Create the Howl instance with the audio source
    const sound = new Howl({
        src: [audio],
        volume: volume,
        preload: true,
    });

    // Ensure that the AudioContext is resumed within a user gesture
    if (Howler.ctx.state === 'suspended') {
        try {
            await Howler.ctx.resume();
            sound.play();
        } catch (error) {
            console.error('Error resuming AudioContext:', error);
        }
    } else {
        sound.play();
    }
}
