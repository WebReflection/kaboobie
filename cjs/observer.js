'use strict';
// TODO: this dance is probably wrong as it shouldn't work with table/tr/td

const {render} = require('uland');

const {defineProperty, freeze, slice} = require('./common.js');

const replace = child => {
  const {parentNode} = child;
  if (parentNode) {
    const children = freeze(slice.call(child.children));
    const fragment = document.createDocumentFragment();
    const {_} = child;
    delete child._;
    set.call(defineProperty(child, '_', {set}), _);
    parentNode.replaceChild(fragment, child);
    function set(_) {
      _.children = children;
      render(fragment, this.$(_));
    }
  }
};

const upgrade = element => {
  for (let
    children = element.querySelectorAll('kaboobie'),
    i = 0, {length} = children;
    i < length; i++
  ) {
    const child = children[i];
    upgrade(child);
    replace(child);
  }
};

new MutationObserver(records => {
  for (let i = 0, {length} = records; i < length; i++) {
    for (let
      {addedNodes} = records[i],
      j = 0, {length} = addedNodes;
      j < length; j++
    ) {
      const element = addedNodes[j];
      if (element.querySelectorAll) {
        upgrade(element);
        if (/^kaboobie$/i.test(element.tagName))
          replace(element);
      }
    }
  }
}).observe(document, {childList: true, subtree: true});
