import dotenv from 'dotenv';

dotenv.config();

export const config = {
    ADDRESS: process.env.ADDRESS || '127.0.0.1',
    PORT: process.env.PORT,
    HOST: process.env.HOST,
};
