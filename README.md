# Extra Pipe 🚀

Welcome to the documentation for the **extra-pipe** library! This library provides a collection of custom pipes that you can use to enhance your Angular applications. Each pipe serves a specific purpose, from text formatting to data manipulation. The pipes are designed to be standalone, making it easy to integrate them into your projects.

## Table of Contents

1. Installation
2. Usage
3. Pipes
   - CapitalizePipe
   - FileSizePipe
   - HidePipe
   - Base64ImgUrlPipe
   - LocalizedPipe
   - RoundHalfUpPipe
   - UpperCaseFromPipe
   - ReplaceCommaPipe
4. Contribution
5. License

## Installation

To start using the extra-pipe library, you need to install it in your Angular project. You can do this using npm or yarn:

```bash
npm install extra-pipe
```

or

```bash
yarn add extra-pipe
```

## Usage

Once you've installed the library, you can import and use the custom pipes in your Angular components and templates. Import the desired pipe and add it to your NgModule's declarations array.

```typescript
import { NgModule } from '@angular/core';
import { CapitalizePipe } from 'extra-pipe';

@NgModule({
  declarations: [
    // ... other declarations
    CapitalizePipe,
  ],
})
export class YourModule {}
```

Now you can use the CapitalizePipe in your component templates:

```html
{{'title' | capitalize }}
```

## Pipes

### CapitalizePipe

This pipe capitalizes the first letter of a string.

```html
<p>{{ 'hello' | capitalize } }}</p>
<!-- Output: Hello -->
```

### FileSizePipe

Converts a file size in bytes into a human-readable format (e.g., KB, MB, GB).

```html
<p>{{ 1024 | fileSize }}</p>
<!-- Output: 1 KB -->
```

### HidePipe

Hides sensitive information by masking characters.

```html
<p>{{ '1234567890' | hide }}</p>
<!-- Output: ********* -->
```

### Base64ImgUrlPipe

Converts a base64-encoded image to a data URL for display.

```html
<img [src]="'data:image/png;base64,iVBORw0KG...' | base64ImgUrl" alt="Image" />
```

### LocalizedPipe

Formats a date or number based on the user's locale.

```html
<p>{{ someDate | localized: 'short' }}</p>
```

### RoundHalfPipe

Rounds a number using the "round half" method takes up or down as param.

```html
<p>{{ 3.45 | roundHalfUp }}</p>
<!-- Output: 3.5 -->
```

### UpperCaseFromPipe

Converts text to uppercase from a specified index.

```html
<p>{{ 'hello' | upperCaseFrom: 2 }}</p>
<!-- Output: heLLO -->
```

### ReplaceCommaPipe

Replaces commas with a specified separator.

```html
<p>{{ '44,54' | replaceComma }}</p>
<!-- 44.54 -->
```

### CamelToSnakePipe

Convert camel case strings to snake case.

```html
<p>{{ 'camelCase' | camelToSnake }}</p>
<!-- camel_case -->
```

### SnakeToCamelPipe

Convert a string from snake case to camel case.

```html
<p>{{ 'snake_case' | snakeToCamel }}</p>
<!-- snakeCase -->
```

## Contribution

If you'd like to contribute to the extra-pipe library, feel free to open issues or submit pull requests on the GitHub repository. We welcome any suggestions, bug reports, or enhancements.

### License

This library is released under the MIT License.

We hope you find the extra-pipe library helpful for enhancing your Angular applications. If you have any questions or need assistance, don't hesitate to reach out to our community or the library's maintainers. Happy coding!
