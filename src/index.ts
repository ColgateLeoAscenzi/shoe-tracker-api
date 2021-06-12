import app from './server';

const start = async () => {
    try {
        await app.ready();
        await app.listen(process.env.PORT || 3000);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

start();
