const {EchoRequest, EchoResponse} = require('../pb/echo_pb.js');
const {EchoServiceClient} = require('../pb/echo_grpc_web_pb.js');

var echoService = new EchoServiceClient('http://localhost:8080');

var request = new EchoRequest();
request.setMessage('Hello World!');

echoService.echo(request, {}, function(err, response) {
    try {
        console.log(response.getMessage(), 11111);
    } catch (error) {
        console.log(err, 222)
    }
    
});
