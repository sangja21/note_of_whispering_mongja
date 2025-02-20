console.log("음성 텍스트 변환 시작");

import fs from 'fs';
import OpenAI from 'openai';

// OpenAI 클라이언트 설정ß
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 음성 파일을 텍스트로 변환하는 함수
export async function transcribeAudio() {
  try {
    // 오디오 파일을 읽어서 Whisper 모델에 전송
    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream('src/audio/your-audio.mp3'), // 여기에 변환할 오디오 파일 경로
      model: 'whisper-1',
      response_format: "text",
    });


    // 텍스트를 .txt 파일로 저장
    const filePath = 'src/transcription/transcription.txt'; // 저장할 파일 경로
    fs.writeFileSync(filePath, transcription.text, 'utf8'); // 텍스트 파일로 저장
    
    console.log(`Transcription saved to ${filePath}`);
  } catch (error) {
    console.error('Error transcribing audio: ', error);
  }
}
