import { Sequelize } from 'sequelize-typescript';

import UserModel from "../user/infraestructure/model/userModel";


export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'viaduct.proxy.rlwy.net',
    database: 'railway',
    username: 'postgres',
    password: '125c*b4GD2CDE-FC5G52GAD644-F6C2E',
    port: 55446,
    models: [UserModel],
});

export async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente.');
        await sequelize.sync({ force: false });
    } catch (err) {
        console.error('No se pudo conectar a la base de datos:', err);
        process.exit(1);  // Cierra la aplicación si hay un error de conexión
    }
}