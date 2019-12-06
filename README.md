# react-collapse [![npm](https://img.shields.io/npm/v/variant-select?style=for-the-badge)](https://www.npmjs.com/package/variant-select)

styled-components ile oluşturduğunuz componentlerin variantlarını kolay bir şekilde yönetmenizi sağlar.

## Installation

### NPM

```sh
npm install --save variant-select
```

### yarn

```sh
yarn add variant-select
```

## Usage

Create variants. You can give variants objects or strings.

```js
import {css} from 'styled-components';
import theme from 'variant-select';

//create variants
const variant = theme.variants("variant", {
  primary: css`
      background-color: #ddf4ff;
      border-color: #1cb0f6;
      color: white;
    `,
    success: css`
      background-color: green;
      border-color: greenyellow;
      color: white
    `,
});
```
NOTE: variant'ı bu kısımda component inject edebilmek için css(string) olarak tanımladım. İsterseniz object olarak da verip component içerisinde o şekilde kullanılabilir.
```js
// Button Component
const Button = styled.button`
  font-size:12px;
  width:auto;
  height: 20px;
  
  ${variant};
`;

```


```jsx
<Button variant="primary"> Primary </Button>
<Button variant="success"> Success </Button>
```

## License

MIT