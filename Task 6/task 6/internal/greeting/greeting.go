package greeting

import "fmt"

func Hello(audience string) string {
	if audience == "" {
		audience = "DevOps"
	}
	return fmt.Sprintf("Hello %s", audience)
}
