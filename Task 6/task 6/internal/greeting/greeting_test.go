package greeting

import "testing"

func TestHello(t *testing.T) {
	tests := []struct {
		name     string
		audience string
		want     string
	}{
		{name: "default audience", audience: "DevOps", want: "Hello DevOps"},
		{name: "custom audience", audience: "World", want: "Hello World"},
		{name: "empty falls back to DevOps", audience: "", want: "Hello DevOps"},
	}

	for _, tc := range tests {
		t.Run(tc.name, func(t *testing.T) {
			if got := Hello(tc.audience); got != tc.want {
				t.Errorf("Hello(%q) = %q, want %q", tc.audience, got, tc.want)
			}
		})
	}
}
