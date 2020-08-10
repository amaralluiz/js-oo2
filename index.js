import { Cliente } from './Cliente.js';
import { Gerente } from './Funcionario/Gerente.js';
import { Diretor } from './Funcionario/Diretor.js';
import { SistemaAutentificacao } from './SistemaAutentificacao.js';

const diretor = new Diretor('Rodrigo', 10000, 12345678900);
diretor.cadastrarSenha('123456');
const gerente = new Gerente('Ricardo', 5000, 12378945601);
gerente.cadastrarSenha('123');

const cliente = new Cliente('Lais', 789456123, '456');
const gerenteEstaLogado = SistemaAutentificacao.login(gerente, '123');
const diretorEstaLogado = SistemaAutentificacao.login(diretor, '123456');
console.log(gerenteEstaLogado, diretorEstaLogado);
const clienteEstaLogado = SistemaAutentificacao.login(cliente, '456');
console.log(clienteEstaLogado);
