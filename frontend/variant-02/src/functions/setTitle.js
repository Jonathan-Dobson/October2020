module.exports = (pathname) => {
    document.title = pathname.length>1 
        ? pathname.replace(/\/[a-z]/gi,(e,f)=>` ${pathname[f+1].toUpperCase()}`) 
        : 'Shop'
  }