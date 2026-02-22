import { CreationOptional, DataTypes, InferAttributes, Model, Optional, Sequelize } from "sequelize";
import { Role as UserRole } from "../utils/interfaces";

export interface UserAttributes { // attributes for table in the database
    id: number;
    fullName: string;
    email: string;
    passwordHash: string;
    role: UserRole;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    firstConnection: boolean;
}

export type UserCreationAttributes = Optional<UserAttributes, 'id' | 'role' | 'isActive'>

export class User
    extends Model<InferAttributes<User>, UserCreationAttributes>
    implements UserAttributes {
    declare id: CreationOptional<number>;
    declare fullName: string;
    declare email: string;
    declare passwordHash: string;
    declare role: UserRole;
    declare isActive: boolean;
    declare readonly createdAt?: Date;
    declare readonly updatedAt?: Date;
    declare firstConnection: boolean;
}

export const initUserModel = (sequelize: Sequelize) => {
    User.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: false
        }
    })
}