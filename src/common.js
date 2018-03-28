
export const qs = (args) => document.querySelector(args);

export const qsa = (args) => document.querySelectorAll(args);

export const apply = (templete, key, value) => templete.replace(new RegExp(`{{\\s*${key}\\s*}}`,'g'), value);

export const templeteApply = (templete, args) => {
  let element = document.createElement('templete');
  element.innerHTML = templete;
  
  for (const key in args) {
    if (!args.hasOwnProperty(key)) continue;
    element.innerHTML = apply(element.innerHTML, key, args[key]);
  }

  return element.childNodes;
};