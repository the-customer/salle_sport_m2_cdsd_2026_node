import { hashPassword } from './../utils/password';
import { User } from "../models";
import { users } from '../data/user.data';
import { NumberLiteralType } from 'typescript';
import { Op } from 'sequelize';

type ListQuery = {
    page?: number;
    limit?: number;
    search?: string;
    isActive?: string;
}

export const UserService = {
    async list(query:ListQuery) {
        const page = query.page && query.page > 0 ? query.page : 1;
        const isActive = query.isActive ? query.isActive : '';
        const limit = query.limit && query.limit>0 ? Math.min(query.limit,100) : 20;
        const offset = (page - 1) * limit

        const where: any = {} 

        if(isActive === "active"){
            where.isActive = true;
        }else if(isActive === "inactive"){
            where.isActive = false;
        }

        if (query.search && query.search.trim()){
            const q = `%${query.search.trim()}%`;
            where[Op.or] = [
                { fullName: {[Op.like] : q} },
                { email: {[Op.like] : q} }
            ]
        }

        const {rows, count} = await User.findAndCountAll({
            where,
            limit,
            offset,
            order: [['fullName','ASC']]
        });
        return {
            items: rows,
            total: count,
            page,
            limit,
            totalPages: Math.ceil(count/limit)
        };
    },
    findById(userId: number) {
        return users.find(u => u.id === userId);
    },



    //seeder
    async seedUsers(){
        const userCount = await User.count();
        if(userCount === 0){
            const adminPass = await hashPassword('admin1234')
            await User.create({
                fullName: 'Super Admin',
                email: 'admin@example.com',
                passwordHash: adminPass,
                role: 'ADMIN',
                firstConnection: false,
                isActive: true,
            });
            console.log('Default admin created : admin@example.com / admin1234')
            //
            const cashierPass = await hashPassword('cashier1234')
            await User.create({
                fullName: 'Cashier',
                email: 'cashier@example.com',
                passwordHash: cashierPass,
                role: 'CASHIER',
                firstConnection: false,
                isActive: true,
            });
            console.log('Default cashier created : cashier@example.com / cashier1234')
            //
            const controllerPass = await hashPassword('cashier1234')
            await User.create({
                fullName: 'Controller',
                email: 'controller@example.com',
                passwordHash: controllerPass,
                role: 'CONTROLLER',
                firstConnection: false,
                isActive: true,
            });
            console.log('Default controller created : controller@example.com / controller1234')
        }
    }
}