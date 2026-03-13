import { addLines} from './utils'
import { rl } from './input'
import { ask } from './input'
import { clearScreen } from './utils';



async function mainMenu () {
    while (true) {

    clearScreen();

    console.log('Editor de listas');
    addLines()
    console.log('1 - Exibir lista');
    console.log('2 - Inserir item');
    console.log('3 - Remover item');
    console.log('4 - Exibir item');
    console.log('5 - Exibir posição do item');
    console.log('6 - Esvaziar lista');;
    console.log('0 - Sair');

    const option = await ask('Escolha uma das opções: ');




    
}
}


mainMenu()


