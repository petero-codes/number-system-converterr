# Process Documentation

## Introduction
This project delivers a cross-platform mobile application that automates number system conversions among Binary, Octal, Decimal, and Hexadecimal using Expo (React Native + TypeScript).

## Problem Statement
Converting numbers between bases manually is error-prone and time-consuming. Users need a reliable, offline-capable mobile tool for quick, accurate conversions with a clean UI.

## Objectives
- Implement accurate conversions between Binary, Octal, Decimal, and Hexadecimal.
- Provide a modern, responsive UI.
- Support Android and iOS through a single codebase.
- Include unit tests, CI, and clear deployment instructions.

## System Requirements
- Node.js LTS, npm/yarn
- Expo CLI, optional Android/iOS SDKs for local builds
- Internet connection for EAS builds

## Methodology
- Use React Native with Expo for cross-platform compatibility.
- Implement conversion logic with TypeScript and BigInt for correctness.
- Follow component-driven UI with React Native Paper.
- Test conversion utilities via Jest.

## Design Flow
1. Requirements gathering and base selection (2, 8, 10, 16)
2. Algorithm design (parse/validate, BigInt conversion)
3. UI layout (input, base selectors, actions, history)
4. Implementation and unit tests
5. CI setup and deployment documentation

### Algorithm Overview
- Validate input by base-specific regex.
- Normalize sign and digits.
- Convert input string to BigInt from source base.
- Convert BigInt to target base string.

## Implementation & Testing
- Core logic in `src/utils/conversion.ts` with unit tests in `__tests__/conversion.test.ts`.
- UI with React Native Paper in `src/components/ConverterScreen.tsx`.

## Deployment Steps
- Android/iOS builds via EAS (see `docs/program.md`).

## Conclusion & Recommendations
The app is stable for typical conversions and extensible. Future improvements may include localization, theming, and more bases.
