# React Hot Toast Magic

[![React Hot Toast Magic - Try it out](https://github.com/pranavgoel29/react-hot-toast-magic/raw/main/assets/header.svg)](https://github.com/pranavgoel29/react-hot-toast-magic)

<div align="center">
    <img src="https://badgen.net/npm/v/react-hot-toast-magic" alt="NPM Version" />
    <img src="https://badgen.net/bundlephobia/minzip/react-hot-toast-magic" alt="minzipped size"/>
    <img src="https://github.com/pranavgoel29/react-hot-toast-magic/workflows/CI/badge.svg" alt="Build Status" />
</div>
<br />
<div align="center"><strong>Spicy and Enhanced Notifications for React (Extension of react-hot-toast).</strong></div>
<div align="center"> More functions, more spiciness, and frequent updates.</div>
<br />
<div align="center">
<a href="https://twitter.com/Pranavgoel_29">Twitter</a>
</div>

<br />
<div align="center">
  <sub>Cooked by <a href="https://twitter.com/Pranavgoel_29">Pranav Goel</a> 👨‍🍳</sub>
</div>

<br />

## Features

- 🔥 **Hotter by default**
- 🔩 **Richer Customization**
- ⏳ **Extended Promise API** - _Automatic loader with additional features_
- 🌶️ **Extra Spiciness** - _Enhanced functionality for a delightful experience_
- ✅ **Up-to-date and Maintained**
- 🚀 **Frequent Updates**
- 🥳 **Additional Toast Types** - _Introducing `info()` and `warn()` for more versatile notifications_

## Installation (Not-out-yet)

#### With yarn

```sh
yarn add react-hot-toast-magic
```

#### With NPM

```sh
npm install react-hot-toast-magic
```

## Getting Started

Add the Toaster to your app first. It will take care of rendering all notifications emitted. Now you can trigger \`toast()\` from anywhere!

```jsx
import toast, { Toaster } from 'react-hot-toast-magic';

const notify = () => toast('Here is your spicy toast.');

const App = () => {
  return (
    <div>
      <button onClick={notify}>Make me a spicy toast</button>
      <Toaster />
    </div>
  );
};
```

## Why React Hot Toast Magic?

While `react-hot-toast` has been a fantastic choice for many, the decision to create React Hot Toast Magic was driven by a desire for more functions, increased spiciness, and the need for more frequent updates. If you've been looking for a notification library that goes the extra mile, React Hot Toast Magic is here to meet those expectations.

## Enhanced Toasts - Info and Warning
React Hot Toast Magic introduces additional toast types such as `info()` and `warning()`, providing more options for your notifications.


![React Hot Toast Magic - Info Toast](https://github.com/pranavgoel29/react-hot-toast-magic/blob/main/assets/info_toast.png)

![React Hot Toast Magic - Warn Toast](https://github.com/pranavgoel29/react-hot-toast-magic/blob/main/assets/warning_toast.png)

## Migration from `react-hot-toast`

If you're currently using `react-hot-toast` and considering upgrading to `react-hot-toast-magic`, worry not! Migration is straightforward, and most of the code remains compatible

## Contributing

Your contributions are more than welcome! Whether you want to report a bug, suggest a feature, or contribute code, please check our [contribution guidelines](https://react-hot-toast-magic.com/docs/contributing).

## Community and Support

Your feedback is invaluable and helps shape the future of React Hot Toast Magic. We appreciate your involvement in making this library even better.

## License

React Hot Toast Magic is released under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute it in accordance with the terms of the license.

---

**Note:** This library is an extension of \`react-hot-toast\` and strives to enhance your notification experience in React. If you have any questions or need support, feel free to reach out on [Twitter](https://twitter.com/Pranavgoel_29). Happy toasting!