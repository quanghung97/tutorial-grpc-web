install golang in disk /d/Go

source code: /d/Go/src/quanghung97

install protoc https://github.com/google/protobuf/releases

Extract all to D:/Go/protoc 
Your directory structure should now be
D:\protoc\bin 
D:\protoc\include
Finally, add D:\protoc\bin to your PATH:


updated .bashrc

export GOPATH='/d/Go/bin'
export PATH=$PATH:'/d/Go/bin'
export PATH=$PATH:'/d/Go/protoc/bin'
export PATH="$PATH:$GOPATH/bin"

go mod init github.com/quanghung97/tutorial-grpc-web

// install protoc-gen-go, protoc-gen-go-grpc

go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2

go mod tidy

////////////////////////////////////////////

npm install --global protoc-gen-js

// install grpc-web https://github.com/grpc/grpc-web/releases
// download protoc-gen-grpc-web-1.4.2-windows-x86_64.exe and modify
D:.
  |--protoc-gen
  |    |--protoc.exe
  |    |--protoc-gen-grpc-web.exe


/////////////////////////////////////////

// update client
npx webpack client/client.js
// make file index.html using dist/main.js


/////////////////////////////////////////

docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro -p 8080:8080 -p 9901:9901 envoyproxy/envoy:v1.22.0

////////////////////////////////////////

//serve index.html with python3
py -m http.server 8081 &

///////////////////////////////////////

syntax kieu du lieu pho bien
dia chi, con tro
cac framework beego, gin
ORM (mo hinh map kien truc backend)
implement kien truc vao golang

MVC (model-view-controller)
implement kien truc vao golang

socket.io golang

queue job (redis, database)

nang cao:
dependency injection
repository pattern (SOLID) 

grpc (tools for microservices) (streaming API (client, server) http/2)
