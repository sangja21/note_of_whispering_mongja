# note_of_whispering_mongja
transcription project

# Whispering Mongja

Whispering Mongja는 OpenAI의 Whisper 모델을 사용하여 음성 파일을 텍스트로 변환하는 프로젝트입니다. 이 프로젝트는 음성 인식 API를 활용하여 다양한 언어의 음성을 텍스트로 변환하고, 변환된 텍스트를 `.txt` 파일로 저장하는 기능을 제공합니다.

## 프로젝트 기능

- 음성 파일을 텍스트로 변환
- 변환된 텍스트를 `.txt` 파일로 저장
- Whisper 모델을 사용한 음성 인식

## 시작하기

이 프로젝트를 로컬에서 실행하려면 아래 단계를 따라주세요.

### 1. 저장소 클론

먼저 이 프로젝트를 클론합니다.

```bash
git clone https://github.com/yourusername/whispering-mongja.git
cd whispering-mongja
```

### 2. 의존성 설치

프로젝트의 의존성을 설치합니다. Yarn을 사용하여 패키지를 설치합니다.

```bash
yarn install
```

### 3. 환경 변수 설정

OpenAI API 키를 `.env` 파일에 추가해야 합니다. 프로젝트 루트 디렉터리에 `.env` 파일을 만들고, 아래와 같이 `OPENAI_API_KEY`를 설정합니다.

```env
OPENAI_API_KEY=your-api-key-here
```

### 4. 음성 텍스트 변환 실행

음성 파일을 `src/audio/your-audio.mp3`에 추가한 후, `yarn dev` 명령어를 실행하여 음성을 텍스트로 변환하고 `.txt` 파일로 저장할 수 있습니다.

```bash
yarn dev
```

변환된 텍스트는 `src/transcription/transcription.txt` 파일로 저장됩니다.

## 프로젝트 구조

```
whispering-mongja/
├── src/                      # 소스 코드 폴더
│   ├── audio/                # 오디오 파일들
│   ├── transcription/        # 텍스트 파일들
│   ├── transcription.js      # 음성 텍스트 변환 코드
│   └── index.js              # 실행 파일
├── .env                      # 환경 변수 파일
├── package.json              # 프로젝트 설정 파일
├── .gitignore                # Git 무시 파일
└── README.md                 # 프로젝트 설명 파일
```

## 사용된 기술

- **OpenAI Whisper**: 음성 인식 및 텍스트 변환
- **Node.js**: JavaScript 런타임 환경
- **Yarn**: 패키지 관리 도구