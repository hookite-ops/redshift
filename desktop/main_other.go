//go:build !windows

package main

// Development runner for Linux/macOS: serves the packaged game exactly like the .exe does and prints the URL.
import (
	"fmt"
	"os"
)

func main() {
	url, err := serve()
	if err != nil {
		fmt.Println("error:", err)
		os.Exit(1)
	}
	fmt.Println("REDSHIFT desktop build serving at", url)
	select {}
}
