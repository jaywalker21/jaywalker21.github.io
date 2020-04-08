function isEmpty(input) {
  switch(typeof input) {
    case "undefined":
      return true;
    case "boolean":
      return !input;
    case "number":
      return input === 0;
    case "string":
      return input === '';
    case "object":
      if(Array.isArray(input)) {
          return input.length === 0;
      } else {
          return input === null || Object.keys(input) === 0;
      }
    default:
      return false;
  }
}

function debounce(func, timeout=1000) {
	let timerId;
	return(
    function() {
      let context = this;
      let args = arguments;
      if(timerId) { 
        clearTimeout(timerId);
      }
      timerId = setTimeout(func.apply(context, args), timeout);
    }
  );
}
export { isEmpty, debounce }