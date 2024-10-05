"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

class TokenController {
  async store(req, res) {
    const { email = "", password = "" } = req.body;
    if (!email.length || !password.length) {
      return res.status(401).json({
        errors: ["Email ou senha invalidos."],
      });
    }

    const user = await _User2.default.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        errors: ["Email ou senha invalidos."],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ["Senha inválida."],
      });
    }

    const { id } = user;
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    res.json({ token });
  }
}

exports. default = new TokenController();
