let vitorias;
let derrotas;
let saldoVitorias;
let nivel;

vitorias = 40;
derrotas = 0;


function comparaVitoriasDerrotas(vitorias, derrotas) {
    saldoVitorias = vitorias - derrotas
    return saldoVitorias
}

comparaVitoriasDerrotas(vitorias, derrotas)

if (saldoVitorias <= 10) {
    nivel = 'Ferro';
} else if (saldoVitorias > 10 && saldoVitorias <= 20) {
    nivel = 'Bronze';
} else if (saldoVitorias > 20 && saldoVitorias <= 50) {
    nivel = 'Prata';
} else if (saldoVitorias > 50 && saldoVitorias <= 80) {
    nivel = 'Ouro';
} else if (saldoVitorias > 70 && saldoVitorias <= 80) {
    nivel = 'Platina';
} else if (saldoVitorias > 90 && saldoVitorias <= 100) {
    nivel = 'Ascendente';
} else if (saldoVitorias >= 101) {
    nivel = 'Radiante';
} 

console.log('O Herói tem saldo de ' + saldoVitorias + ' está no nível de '+ nivel) 