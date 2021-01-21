export function setRootElementForApp(id = 'container'): Element {
  let div = document.getElementById('container');

  if (!div) {
    div = document.createElement('div');
    div.id = id;
  }

  return div;
}
