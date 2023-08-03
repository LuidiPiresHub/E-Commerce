import app from './app';

const port: number = Number(process.env.PORT) || 3001;

app.listen(port, () => console.log(`App is running on port ${port}`));
