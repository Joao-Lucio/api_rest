import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Joaquim",
      sobrenome: "da Silva",
      email: "j@j.com",
      idade: 22,
      peso: 85.5,
      altura: 1.75,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
