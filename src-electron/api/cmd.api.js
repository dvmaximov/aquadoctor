/**
 * Код взят из источника orange-pi-gpio https://github.com/BorisKotlyarov/orange-pi-gpio
 * Причины:
 * - предупреждения необработанного отказа промиса при создании объекта Gpio
 *   во время разработки при неустановленной библиотеки WiringOP
 * - необходимость добавить ключ -1 к команде gpio для обращения по физическому
 *   номеру пина
 * - необходимость выставить логическую 1 перед уставленовкой режима пина из-за
 *   применения реле с нормально-замкнутым ключом
 */
import * as cp from "child_process";

const exec = cp.exec;
const emptyFn = () => {};

export class CMD {
  constructor() {}

  run(command) {
    let result = "no result";
    this.cmd(`${command}`)
      .then((answer) => (result = answer))
      .catch((error) => console.log(error));
    return result;
  }

  cmd(command) {
    return new Promise((resolve, reject) => {
      exec(command, (error, stdout) => {
        if (error) {
          reject(error);
        }
        resolve(stdout);
      });
    });
  }
}
