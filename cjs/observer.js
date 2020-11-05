'use strict';
// TODO: this dance is probably wrong as it shouldn't work with table/tr/td

const replace = child => {
  const {parentNode} = child;
  if (parentNode) {
    const {$, _} = child;
    // TODO: children is weird to solve here ...
    // _.children = ignore.slice.call(child.children);
    parentNode.replaceChild($(_).valueOf(), child);
  }
};

const upgrade = element => {
  for (let children = element.querySelectorAll('kaboobie'), i = 0, {length} = children; i < length; i++) {
    const child = children[i];
    upgrade(child);
    replace(child);
  }
};

new MutationObserver(records => {
  for (let i = 0, {length} = records; i < length; i++) {
    for (let {addedNodes} = records[i], j = 0, {length} = addedNodes[j]; j < length; j++) {
      const element = addedNodes[j];
      if (element.querySelectorAll) {
        upgrade(element);
        if (/^kaboobie$/i.test(element.tagName))
          replace(element);
      }
    }
  }
}).observe(document, {childList: true, subtree: true});
