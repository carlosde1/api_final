const jwt = require('jsonwebtoken');
const SECRET_KEY = 'mi_clave_secreta_super_segura';

function verificarToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) return res.status(403).json({ message: 'Token requerido' });

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token inválido o expirado' });
    }
}

module.exports = verificarToken;