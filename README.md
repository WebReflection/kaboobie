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

## F.A.Q.

<details>
  <summary><strong>Who is Kaboobie?</strong></summary>
  <div>

It's [Shazzan](https://en.wikipedia.org/wiki/Shazzan)'s flying camel, and *Shazzan* is a cartoon I've watched when I was a kid.

Magic, illusions, and a flying camel, summarize pretty well the idea behind this project:

  * the template literal you write is *not* the template literal *µland* parses
  * if *µland* is "*a unicorn*" in terms of easiness, features, and lightness, a flying camel is the closest unicorn's friend I could think about
  * finding an *npm* name that's not already taken is hard, but "*fortunately*" I'm old enough to know magic creatures younger developers might have never heard about

  </div>
</details>

<details>
  <summary><strong>How does it work?</strong></summary>
  <div>

The concept is a mix of re-mapped templates literals and related values through placeholder *DOM* elements handled by a *MutationObserver* that gets upgraded in a similar way *Custom Elements* do, each time one new component lands on the page, and without needing *Custom Elements* at all.

Basically, the following template literal tag:

```js
html`
  <${Component} test=${{data: 123}} value=${456}>
    <${A} any=${'thing'} />
    <${B}> Hello </>
  </>
`;
```

Would represent the following template literal and values as arguments:

```js
html(
  [
    "<", " test=", " value=", ">\n    <",
    " any=", " />\n    <",
    "> Hello </>\n  </>"
  ],
  Component,
  {data: 123},
  456,
  A,
  B
)
```

What *Kaboobie* does, is re-map once both template and values to become the following:

```js
html`
  <kaboobie style="display:none"
            .$=${Component} ._=${{test: {data: 123}, value: 456}}>
    <kaboobie style="display:none" .$=${A} ._=${{any: 'thing'}} />
    <kaboobie style="display:none" .$=${B} ._=${{}}> Hello </kaboobie>
  </kaboobie>
`;
```

Meaning, the tag will receive instead:

```js
html(
  [
    "<kaboobie style=\"display:none\" .$=", " ._=",
    ">\n    <kaboobie style=\"display:none\" .$=", " ._=",
    " />\n    <kaboobie style=\"display:none\" .$=", " ._=",
    "> Hello </kaboobie>\n  </kaboobie>"
  ],
  Component,
  {test: {data: 123}, value: 456},
  A,
  {any: 'thing'},
  B,
  {}
)
```

And render it accordingly with *uhtml* direct properties `.name=${value}` feature.

The *MutationObserver* at this point looks only for `<kaboobie>` nodes, and replaces these with a *µland* component through the `render(...)` utility.

```js
const fragment = document.createDocumentFragment();
render(fragment, kaboobie.$(kaboobie._));
```

Props are also defined as *setter*, so that whenever an outer component gets rendered again, setting `kaboobie._ = props` would re-trigger a render update, as the outer component would still believe it has *kaboobie* nodes within its content, making the concept an illusion for the underlying [µhtml](https://github.com/WebReflection/uhtml#readme) parser.

That's it: a template/values manipulation to trick *µhtml* parser while serving *µland* components, updated each time through hooks and `render(...)`.

  </div>
</details>

<details>
  <summary><strong>Is it fast?</strong></summary>
  <div>

*Kaboobie* can't be faster than *µland* due extra one-off template parsing, followed by *values* updates to recreate *props* each time, and it's surely not faster than *µhtml*.

However, since *µhtml* is probably [the fastest library of its kind](https://rawgit.com/krausest/js-framework-benchmark/master/webdriver-ts-results/table.html), *Kaboobie* should be fast enough for medium to complex hooks based applications.

That being said, for now I'm playing around to make it work so performance might be even better in the future, but so far I couldn't measure any relevant bottleneck.

  </div>
</details>

<details>
  <summary><strong>What about memory?</strong></summary>
  <div>

Magic has a cost, and in *Kaboobie* case, each component inevitably needs to retain its own placeholder and a unique document fragment reference to work as expected.

While the *fragment* could probably be avoided somehow, outer rendered components still need to update their `<kaboobie>` nodes to signal, and pass along, new possible `props` for each nested component.

In few words, components cost whatever *µland* costs, or any hook based library as there's a lot of *GC* going on there, plus a disconnected unknown *kaboobie* node and a fragment per each component.

Have these ever been a real issue? I don't think so, but if you consider that no Virtual DOM is used, I think memory consumption is at par, if not lower, than most competitors.

  </div>
</details>


<details>
  <summary><strong>Can I use it already?</strong></summary>
  <div>

Please do, but be aware this is currently an **experiment**, so while I don't think its most basic features will ever change, and so far these work more or less as expected, it's not been used in production like [my libraries alternatives](https://gist.github.com/WebReflection/761052d6dae7c8207d2fcba7cdede295) do.

  </div>
</details>

<details>
  <summary><strong>Any better example?</strong></summary>
  <div>

For other basic examples, check the [test folder](./test), which is also published live.

As I'll likely keep playing around with this idea, more examples will come, but if you have some cool demo around this library, please do let me know (file an issue, [contact me on twitter](https://twitter.com/WebReflection), any other mean) and I'll list it in this README, thank you ♥

  </div>
</details>
