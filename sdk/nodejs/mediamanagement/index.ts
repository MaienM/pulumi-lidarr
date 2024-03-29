// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

// Export members:
export { GetMediaManagementResult } from "./getMediaManagement";
export const getMediaManagement: typeof import("./getMediaManagement").getMediaManagement = null as any;
utilities.lazyLoad(exports, ["getMediaManagement"], () => require("./getMediaManagement"));

export { GetNamingResult } from "./getNaming";
export const getNaming: typeof import("./getNaming").getNaming = null as any;
utilities.lazyLoad(exports, ["getNaming"], () => require("./getNaming"));

export { GetRootFolderArgs, GetRootFolderResult, GetRootFolderOutputArgs } from "./getRootFolder";
export const getRootFolder: typeof import("./getRootFolder").getRootFolder = null as any;
export const getRootFolderOutput: typeof import("./getRootFolder").getRootFolderOutput = null as any;
utilities.lazyLoad(exports, ["getRootFolder","getRootFolderOutput"], () => require("./getRootFolder"));

export { GetRootFoldersResult } from "./getRootFolders";
export const getRootFolders: typeof import("./getRootFolders").getRootFolders = null as any;
utilities.lazyLoad(exports, ["getRootFolders"], () => require("./getRootFolders"));

export { MediaManagementArgs, MediaManagementState } from "./mediaManagement";
export type MediaManagement = import("./mediaManagement").MediaManagement;
export const MediaManagement: typeof import("./mediaManagement").MediaManagement = null as any;
utilities.lazyLoad(exports, ["MediaManagement"], () => require("./mediaManagement"));

export { NamingArgs, NamingState } from "./naming";
export type Naming = import("./naming").Naming;
export const Naming: typeof import("./naming").Naming = null as any;
utilities.lazyLoad(exports, ["Naming"], () => require("./naming"));

export { RootFolderArgs, RootFolderState } from "./rootFolder";
export type RootFolder = import("./rootFolder").RootFolder;
export const RootFolder: typeof import("./rootFolder").RootFolder = null as any;
utilities.lazyLoad(exports, ["RootFolder"], () => require("./rootFolder"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "lidarr:MediaManagement/mediaManagement:MediaManagement":
                return new MediaManagement(name, <any>undefined, { urn })
            case "lidarr:MediaManagement/naming:Naming":
                return new Naming(name, <any>undefined, { urn })
            case "lidarr:MediaManagement/rootFolder:RootFolder":
                return new RootFolder(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("lidarr", "MediaManagement/mediaManagement", _module)
pulumi.runtime.registerResourceModule("lidarr", "MediaManagement/naming", _module)
pulumi.runtime.registerResourceModule("lidarr", "MediaManagement/rootFolder", _module)
