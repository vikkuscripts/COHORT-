const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('count')
  .description('count the number of lines')
  .argument('<file>', 'file to count')
  .action((file) => {

    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      const lines = data.split('\n').length;
      console.log(`There are ${lines} lines in ${file}`);
    });

  });

program.parse();