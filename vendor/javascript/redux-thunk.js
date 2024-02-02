function createThunkMiddleware(e){const middleware=({dispatch:t,getState:r})=>a=>n=>typeof n==="function"?n(t,r,e):a(n);return middleware}var e=createThunkMiddleware();var t=createThunkMiddleware;export{e as thunk,t as withExtraArgument};

