# Program Documentation

## Title Page & Abstract
- Title: Number System Converter (Binary, Octal, Decimal, Hex)
- Abstract: A mobile app that provides accurate and fast conversions among Binary, Octal, Decimal, and Hexadecimal, with a clean UI, validation, history, and testing.

## Overview of the App
The application allows users to input a number, choose a source base and a target base, and view the converted result. It supports copy, clear, and maintains a short conversion history.

## Source Code Explanation
- `App.tsx`: App entry; sets up theme, navigation, and the main screen.
- `src/components/ConverterScreen.tsx`: UI for input, base selection, conversion actions, result and history.
- `src/utils/conversion.ts`: Conversion utilities (validation, parse to BigInt, convert to target base).
- `src/theme.ts`: Theme customization.
- `__tests__/conversion.test.ts`: Unit tests for conversion logic.

## Conversion Algorithms (with comments)
- Validate input using base-specific regex.
- Normalize sign and digits (strip `+/-`).
- Convert from source base to `BigInt`.
- Convert from `BigInt` to target base string.
- Error handling for invalid inputs.

## UI Screenshots
Add screenshots after running the app:
- `docs/assets/home.png`
- `docs/assets/result.png`

## Input/Output Examples
- Decimal 10 → Binary = 1010
- Binary 11111111 → Hex = FF
- Octal 777 → Hex = 1FF

## Testing Results
Run `npm test`. All tests in `__tests__/conversion.test.ts` should pass. Add more tests as needed for edge cases.

## Deployment Steps (Detailed)
### Android (Google Play)
1. Install EAS CLI: `npm i -g eas-cli`
2. Configure: `eas build:configure`
3. Create production profile (auto): follow prompts
4. Build: `eas build -p android --profile production`
5. Download AAB and upload to Google Play Console.

### iOS (App Store)
1. On macOS with Xcode installed, run: `eas build -p ios --profile production`
2. Submit: `eas submit -p ios`
3. Complete App Store Connect metadata and review steps.

## Future Improvements
## Collaboration
- Add collaborator on GitHub with handle `LLmwai` via Settings → Collaborators.
- Dark mode and theme picker
- More numeral systems (e.g., base 3, base 12)
- Localization/i18n
- Persistent history and export
