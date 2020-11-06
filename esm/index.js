// TODO: regular attributes should be passed as props too
// TODO: should ...${props} work as well?

import './observer.js';

import {freeze, ignore} from './common.js';

import {
  render, html as uhtml, svg as usvg, Component as UComponent,
  contextual,
  useState,
  useEffect,
  useContext, createContext,
  useRef,
  useReducer,
  useCallback,
  useMemo,
  useLayoutEffect
} from 'uland';

const components = new WeakMap;
const remapped = new WeakMap;

const attr = /(\w+)=/g;
const close = /<\/{1,2}>/g;

const addKeys = (keys, chunk) => {
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
      T[j] = rest.replace(close, '</kaboobie>');
      V.push(keys);
    }
    else {
      T[++j] = template[i].replace(close, '</kaboobie>');
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
        const component = values[j++];
        const props = {};
        for (let k = 0, {length} = keys; k < length; k++)
          props[keys[k]] = values[j++];
        mapped.push(component, props);
      }
    }
    return [template].concat(mapped);
  };
  remapped.set(template, update);
  template = freeze(T);
  return update;
};

const html = create(uhtml);
const svg = create(usvg);

export {
  Component, render, html, svg,
  contextual,
  useState,
  useEffect,
  useContext, createContext,
  useRef,
  useReducer,
  useCallback,
  useMemo,
  useLayoutEffect
};

function Component(fn) {
  const Kaboobie = UComponent(fn);
  components.set(Kaboobie, true);
  return Kaboobie;
}
