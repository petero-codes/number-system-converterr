# Number System Converter (Binary, Octal, Decimal, Hex)

A cross-platform mobile app built with Expo (React Native + TypeScript) for converting numbers between Binary, Octal, Decimal, and Hexadecimal. Includes a clean Material-style UI, conversion history, copy-to-clipboard, unit tests, CI, and deployment guidance.

## Features
- Convert between Binary, Octal, Decimal, and Hexadecimal in any direction
- Input validation per base
- Clean UI using React Native Paper
- Conversion history (recent 20)
- Copy result to clipboard, clear inputs
- Unit tests for conversion logic
- GitHub Actions for CI

## Tech Stack
- Framework: Expo (React Native + TypeScript)
- UI: React Native Paper
- Tests: Jest + jest-expo
- CI: GitHub Actions

## Getting Started

### Prerequisites
- Node.js LTS and npm or yarn
- Expo CLI: `npm i -g expo`

### Install
```bash
npm install
# or
yarn
```

### Run (development)
```bash
npm run start
# press `a` for Android emulator/device, `i` for iOS (on macOS), or open the QR code in Expo Go
```

### Test
```bash
npm test
```

## Project Structure
```
.
├── App.tsx
├── src/
│   ├── components/
│   │   └── ConverterScreen.tsx
│   ├── utils/
│   │   └── conversion.ts
│   └── theme.ts
├── __tests__/
│   └── conversion.test.ts
├── docs/
│   ├── process.md
│   └── program.md
├── .github/workflows/ci.yml
├── package.json
├── tsconfig.json
├── app.json
├── babel.config.js
└── README.md
```

## Deployment

### Android (APK/AAB)
1. Install EAS CLI: `npm i -g eas-cli`
2. Configure project: `eas build:configure`
3. Build AAB (Play Store): `eas build -p android --profile production`
   - APK for testing: `eas build -p android --profile preview`
4. Download artifact from the EAS build page and upload AAB to Google Play Console.

### iOS (App Store)
1. On macOS, install Xcode and EAS CLI.
2. `eas build -p ios --profile production`
3. Submit to App Store: `eas submit -p ios`

See docs in `docs/program.md` for detailed step-by-step deployment.

## Adding a Collaborator on GitHub
- Go to Settings → Collaborators (or Settings → Collaborators & Teams)
- Add collaborator → Enter instructor’s GitHub username/email → Send invite
- For this project, add the handle: `LLmwai`

## License
MIT
