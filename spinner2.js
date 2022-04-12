
let timer = 100;
let spinner = ["|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  \n"];
for (const char of spinner) {
  timer += 400;
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
}
  
