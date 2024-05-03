// BEGIN
const magic = (...args) => {
    const sum = args.reduce((acc, current) => acc + current, 0);
    const inner = (...innerArgs) => magic(sum, ...innerArgs);
    inner.valueOf = () => sum;
    return inner;
  };
  
  export default magic;
// END
