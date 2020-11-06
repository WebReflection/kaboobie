# 🐪 Kaboobie

<sup>**Social Media Photo by [Mariam Soliman](https://unsplash.com/@mariamsoliman) on [Unsplash](https://unsplash.com/)**</sup>


A **[<em>µ</em>land](https://github.com/WebReflection/uland#readme)** based **experiment**.


```js
import {Component, render, html, useState} from 'kaboobie';

// components are identical to µland, except
// each component receives its "props" object
const Counter = Component(({start}) => {
  const [count, setCount] = useState(start);
  return html`
  <button onclick=${() => setCount(count + 1)}>
    Count: ${count}
  </button>`;
});

// "props" are like attributes passed as key => value
render(document.body, html`
  <div>
    A bounce of counters.<hr>
    <!-- these two will be two buttons -->
    <${Counter} start=${0} />
    <${Counter} start=${1} />
  </div>
`);
```

**[Live Demo](https://webreflection.github.io/kaboobie/test/)**

For other examples, check the [test folder](./test) published live too.
