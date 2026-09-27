# Containerized Full-Stack Deployment — DevOps Toolkit

Initial scaffold of the **Containerized Full-Stack Deployment** project.
The first utility is a small Go CLI, `hello-devops`, that prints
`Hello DevOps` to verify the Go toolchain and project structure.

## Project structure

```
.
├── cmd/
│   └── hello-devops/
├── internal/
│   └── greeting/
├── pkg/
├── go.mod
├── Makefile
└── README.md
```

## Requirements

- Go >= 1.27 (`go version` to check)

## Usage

```bash
go run ./cmd/hello-devops
go run ./cmd/hello-devops -name World
make run
```

## Build

```bash
make build
./bin/hello-devops
```

## Tests & checks

```bash
make test
make vet
make fmt
```
