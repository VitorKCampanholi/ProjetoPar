function verificarNumero(num) {
    if (isNaN(num)) {
      alert('Entrada invalida. Por favor insira um numero.');
      return;
    }
    
      if (num > 100) {
        alert('Numero invalido');
      } else if (num < 100) {
        if (num % 2 === 0) {
      let resultado = 'Numeros pares até 100:\n';
          for (let i = num; i <= 100; i += 2) {
            resultado += i + '\n';
          }
          alert(resultado);
        } else {
          alert('Número não é par');
        }
      }
    }

    const numero = prompt('Digite um número:');
    verificarNumero(parseInt(numero));
    
    