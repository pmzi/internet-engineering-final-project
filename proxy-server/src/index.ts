import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line import/first
import proxyServer from './proxyServer';

proxyServer.start(8080);
