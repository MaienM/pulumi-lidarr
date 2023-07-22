package shim

import (
	"github.com/devopsarr/terraform-provider-lidarr/internal/provider"
	tf "github.com/hashicorp/terraform-plugin-framework/provider"
)

func NewProvider(version string) func() tf.Provider {
	return provider.New(version)
}
