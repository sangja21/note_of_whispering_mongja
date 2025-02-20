const fs = require('fs');
const path = require('path');

// 기본 폴더 구조 생성
const createDirectoryStructure = () => {
  const dirs = [
    'src',
    'src/audio',
    'src/components',
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`폴더 생성: ${dir}`);
    }
  });
};

// 기본 파일 생성
const createFiles = () => {
  const files = [
    { path: 'src/index.js', content: 'console.log("Whispering Mongja 프로젝트 시작!");' },
    { path: 'src/transcription.js', content: 'console.log("음성 텍스트 변환 시작");' },
    { path: 'src/audio/your-audio.mp3', content: '' },
  ];

  files.forEach(file => {
    if (!fs.existsSync(file.path)) {
      fs.writeFileSync(file.path, file.content);
      console.log(`파일 생성: ${file.path}`);
    }
  });
};

// 초기화 실행
createDirectoryStructure();
createFiles();
