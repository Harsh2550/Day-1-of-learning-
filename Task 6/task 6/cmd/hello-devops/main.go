package main

import (
	"flag"
	"fmt"
	"os"

	"github.com/harshpandey/devops-toolkit/internal/greeting"
)

const defaultAudience = "DevOps"

func main() {
	name := flag.String("name", defaultAudience, "audience to greet")
	flag.Parse()

	if err := run(*name); err != nil {
		fmt.Fprintln(os.Stderr, "error:", err)
		os.Exit(1)
	}
}

func run(name string) error {
	if name == "" {
		name = defaultAudience
	}
	fmt.Println(greeting.Hello(name))
	return nil
}
