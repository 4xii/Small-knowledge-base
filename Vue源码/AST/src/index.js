import parse from './parse.js'
var templateString = `
  <div>
    <h3>你好</h3>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </div>
`;
const ast = parse(templateString);
console.log(ast);