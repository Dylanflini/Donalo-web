export function getTokenSession(){

  return window.sessionStorage.getItem('TOKEN');

}

export function closeSession(){
  return window.sessionStorage.clear();
}