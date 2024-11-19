while (true) {
    menu = prompt('Digite que ação deseja realizar: \n1 - Calcular o Fatorial e Sequência de Fibonacci \n0 - Sair \n: ');
    switch (menu) {
        case '1':
            const num1 = Number(prompt('Digite um número inteiro positivo: '));
            let fatorial = 1;
            for (i = 1; i <= num1; i++) {
                fatorial *= i;
            }
            console.log(`O fatorial do número ${num1} é igual a ${fatorial}`);
            window.alert(`O fatorial do número ${num1} é igual a ${fatorial}`);

            let primeiroTermo = 0;
            let segundoTermo = 1;
            let fibonacci = []

            fibonacci.push(primeiroTermo);
            fibonacci.push(segundoTermo);

        for (i = 0; i < num1; i++) {
            if (i === 0) {
                console.log(primeiroTermo);
            } else if (i === 1) {
                console.log(segundoTermo);
            } else {
                let proximoTermo = primeiroTermo + segundoTermo;
                fibonacci.push(proximoTermo);
                primeiroTermo = segundoTermo;
                segundoTermo = proximoTermo;
            }
            console.log(`A sequência de Fibonacci do número ${num1} é igual a: ${fibonacci}`);
            window.alert(`A sequência de Fibonacci do número ${num1} é igual a: ${fibonacci}`);
        }

        case '0':
            console.log('Estamos encerrando.');
            breack;

    }
}