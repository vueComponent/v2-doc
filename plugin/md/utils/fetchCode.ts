const scriptRE = /<script[^>]*>([\s\S]*)<\/script>/;
const templateRE = /<template[^>]*>([\s\S]*)<\/template>/;
const styleRE = /<style[^>]*>([\s\S]*)<\/style>/;
const docsRE = /(?<=<docs>)([\s\S]*)(?=<\/docs>)/;
const reObj = {
  script: scriptRE,
  style: styleRE,
  docs: docsRE,
  template: templateRE,
};

export default function fetchCode(src: string, type: string): string {
  const matches = src.match(reObj[type]);
  return matches ? matches[0] : '';
}
