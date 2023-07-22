// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));


// Export sub-modules:
import * as artists from "./artists";
import * as config from "./config";
import * as downloadclient from "./downloadclient";
import * as importlists from "./importlists";
import * as indexers from "./indexers";
import * as mediamanagement from "./mediamanagement";
import * as metadata from "./metadata";
import * as notifications from "./notifications";
import * as profiles from "./profiles";
import * as status from "./status";
import * as tags from "./tags";
import * as types from "./types";

export {
    artists,
    config,
    downloadclient,
    importlists,
    indexers,
    mediamanagement,
    metadata,
    notifications,
    profiles,
    status,
    tags,
    types,
};
pulumi.runtime.registerResourcePackage("lidarr", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:lidarr") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
