import User from "../models/User";

class UserController {

    async store(req, res) {
        const userExist = await User.findOne({ where: { email: req.body.email } });
        if (userExist) {
            return res.status(400).json({ error: 'user alread existis' });
        }
        const { id, nome, email, provider } = await User.create(req.body);

        res.json({
            id,
            nome,
            email,
            provider
        });
    }

    async update(req, res) {
        const { email, oldPassword } = req.body;
        const user  = await  User.findByPk(req.params.id);

        if(!user){
            res.json({error:"usuários não localizado"});
        }

        if (email != user.email) {
            const userExist = await User.findOne({ where: { email: email } });
            if (userExist) {
                return res.status(400).json({ error: 'user alread existis' });
            }
        }

        if( oldPassword && oldPassword != user.password_hash){
            return res.status(401).json({error: 'password not match'});
        }

        const { id, nome, provider } = await  user.update(req.body);

        return res.json({
            id,
            nome,
            provider
        });
    }
}

export default new UserController();