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

const attr = /(\w+)(=[^\s]*|\s|$)/g;
const close = /<\/{1,2}>/g;

const addKeys = (keys, chunk) => {
  let match;
  while (match = attr.exec(chunk)) {
    const k = match[1];
    let v = match[2];
    const {length} = v;
    if (length && v[0] === '=')
      v = 1 < length ? v.slice(1).replace(/('|")([^\1]*?)\1[\s\S]*$/, '$2') : ignore;
    else
      v = '';
    keys.push({k, v});
  }
};

const apply = (tag, template, values) => tag.apply(
  null,
  (remapped.get(template) || remap(template, values))(values)
);

const create = tag => {
  const kaboobie = (t, ...v) => apply(tag, t, v);
  kaboobie.for = (ref, id) => (t, ...v) => apply(tag.for(ref, id), t, v);
  return kaboobie;
};

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
      addKeys(keys, template[i].slice(0, index));
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
        for (let l = 0, {length} = keys; l < length; l++) {
          const {k, v} = keys[l];
          props[k] = v === ignore ? values[j++] : v;
        }
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
