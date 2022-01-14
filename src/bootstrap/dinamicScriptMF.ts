interface IProps{
  script:string;
  scope:string;
  module:string;
  local?:string;
}
export async function dynamicScript({ script, scope, module, local }:IProps) {
  const l = document.location.href.toLowerCase();
  const host = ~l.indexOf('127.0.0.1') ||
  ~l.indexOf('localhost') ? 'https://sapd-fes-ap01.vtb24.ru:44310/' : '/';

  if (!local && !~l.indexOf('z_hr_services_t')) {
    script = script.toLowerCase().replace('_t/', '/');
  }


  const part = await new Promise((resolve) => {
    const scr = document.createElement('script');
    scr.setAttribute('src', local || (host + script + '?' + new Date().getTime()));
    document.head.appendChild(scr);
    // @ts-ignore
    scr.onload = () => resolve(window[scope]);
  });

  // @ts-ignore
  await __webpack_init_sharing__('default');
  // @ts-ignore
  await part.init(__webpack_share_scopes__.default);

  // @ts-ignore
  const factory = await window[scope].get(module);
  // @ts-ignore
  return factory();
}
