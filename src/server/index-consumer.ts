import interfaceRpc from './interface'
import startConsumer from '../../rpc-client-js/consumer'

const host = 'amqp://guest:guest@localhost:5672';
const queueName = 'test_queue'

startConsumer(host, queueName, interfaceRpc).then((e) => {
    console.log(e);
});

module.exports.Server