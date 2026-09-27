BINARY_NAME := hello-devops
CMD_DIR := ./cmd/hello-devops

.PHONY: all build run test vet fmt clean

all: build

build:
	@mkdir -p bin
	go build -o bin/$(BINARY_NAME) $(CMD_DIR)

run: build
	./bin/$(BINARY_NAME)

test:
	go test ./...

vet:
	go vet ./...

fmt:
	gofmt -w .

clean:
	rm -rf bin/
