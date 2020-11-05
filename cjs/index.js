'use strict';
// TODO: regular attributes should be passed as props too

require('./observer.js');

const {
  render, html: uhtml, svg: usvg, Component: UComponent, contextual, useState, useEffect, useContext, createContext, useRef, useReducer, useCallback, useMemo, useLayoutEffect
} = require('uland');

const components = new WeakMap;
const remapped = new WeakMap;
const ignore = [];

const addKeys = (keys, chunk) => {
  const attr = /(\w+)=/g;
  let match;
  while (match = attr.exec(chunk))
    keys.push(match[1]);
};

const create = tag => (template, ...values) => tag.apply(
  null,
  (
    remapped.get(template) ||
    remap(template, values)
  )(values)
);

const remap = (template, values) => {
  const T = [template[0]];
  const V = [];
  for (let j = 0, i = 1, {length} = template; i < length; i++) {
    const value = values[i - 1];
    if (
      typeof value === 'function' &&
      components.has(value) &&
      /<$/.test(T[j])
    ) {
      T[j++] += `kaboobie style="display:none" .$=`;
      T[j++] = ` ._=`;
      const keys = [];
      let index = 0;
      while ((index = template[i].indexOf('>')) < 0)
        addKeys(keys, template[i++]);
      addKeys(keys, template[i].slice(0, i));
      let rest = template[i].slice(index);
      if (0 < index && template[i][index - 1] === '/')
        rest = ' /' + rest;
      T[j] = rest.replace(/<\/>/g, '</kaboobie>');
      V.push(keys);
    }
    else {
      T[++j] = template[i].replace(/<\/>/g, '</kaboobie>');
      V.push(ignore);
    }
  }
  const {length} = V;
  const update = values => {
    const mapped = [];
    for (let j = 0, i = 0; i < length; i++) {
      const keys = V[i];
      if (keys === ignore)
        mapped.push(values[j++]);
      else {
        const uid = values[j++];
        const props = {};
        for (let k = 0, {length} = keys; k < length; k++)
          props[keys[k]] = values[j++];
        mapped.push(uid, props);
      }
    }
    return [T].concat(mapped);
  };
  remapped.set(template, update);
  return update;
};

const html = create(uhtml);
const svg = create(usvg);

exports.Component = Component;
exports.render = render;
exports.html = html;
exports.svg = svg;
exports.contextual = contextual;
exports.useState = useState;
exports.useEffect = useEffect;
exports.useContext = useContext;
exports.createContext = createContext;
exports.useRef = useRef;
exports.useReducer = useReducer;
exports.useCallback = useCallback;
exports.useMemo = useMemo;
exports.useLayoutEffect = useLayoutEffect;

function Component(fn) {
  const component = UComponent(fn);
  components.set(component, true);
  return component;
}
