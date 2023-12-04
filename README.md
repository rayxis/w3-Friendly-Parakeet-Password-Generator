# Friendly Parakeet Password Generator

## Description

This utilizes a cryptographically strong random number generator to create a secure password which matches the
user's selected criteria.

Notes:

* Cloned code from the following repo for the basis of this project:
  https://github.com/coding-boot-camp/friendly-parakeet
* Researched random generator here, and reworked example code a little:
  https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues

## Installation

Move files to your root web directory (ex. /var/www/html/) on your web server and visit within your browser. Nothing
else needs to be done as long as you've properly configured your web server. For that, please refer to your
documentation.

## Usage

When the user clicks on the `Generate Password` button, they will be prompted for their password requirements. They can
select characters with a length of 8-128, utilizing any combination of the following: lowercase, uppercase, numeric and
special characters. If the user does not make a selection with the required parameters, they will be prompted to do
so. Upon completion, the user is presented with a randomly generated password within the provided field.

A live version can be seen here: https://rayxis.github.io/w3-Friendly-Parakeet-Password-Generator/

## Screenshots

![Screenshot of completed website](./screenshots/Screenshot%202023-12-04%20at%208.33.58%E2%80%AFAM.png)
![Password prompt](./screenshots/Screenshot%202023-12-04%20at%208.43.58%E2%80%AFAM.png)
![Generated password](./screenshots/Screenshot%202023-12-04%20at%208.44.14%E2%80%AFAM.png)

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```