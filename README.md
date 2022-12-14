# TikTok Text-to-speech API in Node


#### Node interpretation of [oscie57's tiktok-voice](https://github.com/oscie57/tiktok-voice). Please consider [donating to him](https://oscie.net/support).

It takes every .txt file present in `/inputTextFiles/`  and creates a .wav output with the same file name as the .txt input file, using the TikTok API inside `/audioOutput/`. This folder will be created automatically.
There's no character or word limit whatsoever.

## Usage

 1. Create a `.env` file in the root folder (next to `/utils/` and `/inputTextFiles/` and set an environment variable called **SESSIONID=[your-session-id](https://github.com/oscie57/tiktok-voice/wiki/Obtaining-SessionID)**
 2. Create a folder named `inputTextFiles` and add the .txt files you want to voice-over
 3.   `npm i`

 4. `npm run start`
 5. Right now you should be able to listen to the files inside `/audioOutput/` but if you want to import them into another software, the file would show up as corrupt. As a temporary fix, you should be able to load the .wav files into an online audio converter, once you download them, it should be fine. (There's a GH issue already created for this matter.) **Handbrake won't work for the conversion.**
 6. Done.

Note that by default, it's using a narrator voice. You can change this string in the line 21 of `generateAudio.mjs` , there's a list of voices inside `voices.mjs`.
In the future, we should be able to pass the voice as a flag when running the `start` script. (There's a GH issue already created for this matter too.)
 
 


