const MyReact = require('./MyReact');

function useSplitURL(str) {
  const [ text, setText ] = MyReact.useState(str);
  const masked = text.split('.');
  return [ masked, setText ];
} 

module.exports = useSplitURL;
