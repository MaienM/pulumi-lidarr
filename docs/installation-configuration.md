---
title: Lidarr Installation & Configuration
meta_desc: Information on how to install the Lidarr provider.
layout: installation
---

## Installation

The Pulumi Lidarr provider is available as a package in all Pulumi languages:

* JavaScript/TypeScript: [`@maienm/pulumi-lidarr`](https://www.npmjs.com/package/@maienm/pulumi-lidarr)
* Python: [`pulumi_lidarr`](https://pypi.org/project/pulumi_lidarr/)
* Go: [`github.com/MaienM/pulumi-lidarr/sdk/go/lidarr`](https://pkg.go.dev/github.com/MaienM/pulumi-lidarr/sdk/go/lidarr)
* .NET: [`MaienM.Lidarr`](https://www.nuget.org/packages/MaienM.Lidarr)


## Configuration

> Note:  
> Replace the following **sample content**, with the configuration options
> of the wrapped Terraform provider and remove this note.

The following configuration points are available for the `lidarr` provider:

- `lidarr:apiKey` (environment: `lidarr_API_KEY`) - the API key for `lidarr`
- `lidarr:region` (environment: `lidarr_REGION`) - the region in which to deploy resources

### Provider Binary

The Lidarr provider binary is a third party binary. It can be installed using the `pulumi plugin` command.

```bash
pulumi plugin install resource lidarr <version>
```

Replace the version string `<version>` with your desired version.
