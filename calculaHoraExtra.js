const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function calcula() {
  const totalHorasSemana = await new Promise((resolve) => {
    rl.question("Digite quantas horas por semana você trabalha: ", resolve);
  });
  const salario = await new Promise((resolve) => {
    rl.question("Digite o valor do seu salário (bruto): ", resolve);
  });

  const mesQtd = 5;
  const totalHorasMes = totalHorasSemana * mesQtd;

  const valorHora = salario / totalHorasMes;
  const horaExtra50 = valorHora * 1.5;
  const horaExtra75 = valorHora * 1.75;

  const totalDiasSemana = 5;
  const todoDia1HoraExtra50 = Number(salario) + Number((horaExtra50 * (totalDiasSemana * mesQtd)));
  const todoDia2HoraExtra50 = Number(salario) + Number((horaExtra75 * (totalDiasSemana * mesQtd * 2)));

  console.log(`\nvocê ganha R$ ${valorHora.toFixed(2)} reais por hora;`);
  console.log(`50% da sua hora extra é: R$ ${horaExtra50.toFixed(2)};`);
  console.log(`75% da sua hora extra é: R$ ${horaExtra75.toFixed(2)};`);
  console.log(`Trabalhando todo dia 1 hora extra, você ganha: R$ ${todoDia1HoraExtra50.toFixed(2)};`);
  console.log(`Trabalhando todo dia 2 hora extra, você ganha: R$ ${todoDia2HoraExtra50.toFixed(2)};`);

  rl.close();
  process.exit();
}

calcula();
