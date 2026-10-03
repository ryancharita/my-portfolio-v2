export const THEME_KEY = "theme";

/** Inlined in <head>: applies a saved theme before first paint so light never flashes dark. */
export const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;
