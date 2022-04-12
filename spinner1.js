process.stdout.write(`hello from spiner1.js...\rheyyy\n`) // \r returns cursor to start of the line. then \n moves cursor to new line

//can use \r to keep the cursor at the start and setTimeOut to create animation of different strings. 

  setTimeout(() => {
    process.stdout.write(`\r| `);
  }, 100)

  setTimeout(() => {
    process.stdout.write(`\r/  `)
  }, 300)

  setTimeout(() => {
    process.stdout.write(`\r-  `)
  }, 500)

  setTimeout(() => {
    process.stdout.write(`\r\\  `)
  }, 700)

  setTimeout(() => {
    process.stdout.write(`\r| \n`)
  }, 900)
