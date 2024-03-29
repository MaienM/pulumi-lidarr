// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

// Export members:
export { GetImportListArgs, GetImportListResult, GetImportListOutputArgs } from "./getImportList";
export const getImportList: typeof import("./getImportList").getImportList = null as any;
export const getImportListOutput: typeof import("./getImportList").getImportListOutput = null as any;
utilities.lazyLoad(exports, ["getImportList","getImportListOutput"], () => require("./getImportList"));

export { GetImportListExclusionArgs, GetImportListExclusionResult, GetImportListExclusionOutputArgs } from "./getImportListExclusion";
export const getImportListExclusion: typeof import("./getImportListExclusion").getImportListExclusion = null as any;
export const getImportListExclusionOutput: typeof import("./getImportListExclusion").getImportListExclusionOutput = null as any;
utilities.lazyLoad(exports, ["getImportListExclusion","getImportListExclusionOutput"], () => require("./getImportListExclusion"));

export { GetImportListExclusionsResult } from "./getImportListExclusions";
export const getImportListExclusions: typeof import("./getImportListExclusions").getImportListExclusions = null as any;
utilities.lazyLoad(exports, ["getImportListExclusions"], () => require("./getImportListExclusions"));

export { GetImportListsResult } from "./getImportLists";
export const getImportLists: typeof import("./getImportLists").getImportLists = null as any;
utilities.lazyLoad(exports, ["getImportLists"], () => require("./getImportLists"));

export { ImportListArgs, ImportListState } from "./importList";
export type ImportList = import("./importList").ImportList;
export const ImportList: typeof import("./importList").ImportList = null as any;
utilities.lazyLoad(exports, ["ImportList"], () => require("./importList"));

export { ImportListExclusionArgs, ImportListExclusionState } from "./importListExclusion";
export type ImportListExclusion = import("./importListExclusion").ImportListExclusion;
export const ImportListExclusion: typeof import("./importListExclusion").ImportListExclusion = null as any;
utilities.lazyLoad(exports, ["ImportListExclusion"], () => require("./importListExclusion"));

export { ImportListHeadphonesArgs, ImportListHeadphonesState } from "./importListHeadphones";
export type ImportListHeadphones = import("./importListHeadphones").ImportListHeadphones;
export const ImportListHeadphones: typeof import("./importListHeadphones").ImportListHeadphones = null as any;
utilities.lazyLoad(exports, ["ImportListHeadphones"], () => require("./importListHeadphones"));

export { ImportListLastfmTagArgs, ImportListLastfmTagState } from "./importListLastfmTag";
export type ImportListLastfmTag = import("./importListLastfmTag").ImportListLastfmTag;
export const ImportListLastfmTag: typeof import("./importListLastfmTag").ImportListLastfmTag = null as any;
utilities.lazyLoad(exports, ["ImportListLastfmTag"], () => require("./importListLastfmTag"));

export { ImportListLastfmUserArgs, ImportListLastfmUserState } from "./importListLastfmUser";
export type ImportListLastfmUser = import("./importListLastfmUser").ImportListLastfmUser;
export const ImportListLastfmUser: typeof import("./importListLastfmUser").ImportListLastfmUser = null as any;
utilities.lazyLoad(exports, ["ImportListLastfmUser"], () => require("./importListLastfmUser"));

export { ImportListLidarrArgs, ImportListLidarrState } from "./importListLidarr";
export type ImportListLidarr = import("./importListLidarr").ImportListLidarr;
export const ImportListLidarr: typeof import("./importListLidarr").ImportListLidarr = null as any;
utilities.lazyLoad(exports, ["ImportListLidarr"], () => require("./importListLidarr"));

export { ImportListLidarrListArgs, ImportListLidarrListState } from "./importListLidarrList";
export type ImportListLidarrList = import("./importListLidarrList").ImportListLidarrList;
export const ImportListLidarrList: typeof import("./importListLidarrList").ImportListLidarrList = null as any;
utilities.lazyLoad(exports, ["ImportListLidarrList"], () => require("./importListLidarrList"));

export { ImportListMusicBrainzArgs, ImportListMusicBrainzState } from "./importListMusicBrainz";
export type ImportListMusicBrainz = import("./importListMusicBrainz").ImportListMusicBrainz;
export const ImportListMusicBrainz: typeof import("./importListMusicBrainz").ImportListMusicBrainz = null as any;
utilities.lazyLoad(exports, ["ImportListMusicBrainz"], () => require("./importListMusicBrainz"));

export { ImportListSpotifyAlbumsArgs, ImportListSpotifyAlbumsState } from "./importListSpotifyAlbums";
export type ImportListSpotifyAlbums = import("./importListSpotifyAlbums").ImportListSpotifyAlbums;
export const ImportListSpotifyAlbums: typeof import("./importListSpotifyAlbums").ImportListSpotifyAlbums = null as any;
utilities.lazyLoad(exports, ["ImportListSpotifyAlbums"], () => require("./importListSpotifyAlbums"));

export { ImportListSpotifyArtistsArgs, ImportListSpotifyArtistsState } from "./importListSpotifyArtists";
export type ImportListSpotifyArtists = import("./importListSpotifyArtists").ImportListSpotifyArtists;
export const ImportListSpotifyArtists: typeof import("./importListSpotifyArtists").ImportListSpotifyArtists = null as any;
utilities.lazyLoad(exports, ["ImportListSpotifyArtists"], () => require("./importListSpotifyArtists"));

export { ImportListSpotifyPlaylistsArgs, ImportListSpotifyPlaylistsState } from "./importListSpotifyPlaylists";
export type ImportListSpotifyPlaylists = import("./importListSpotifyPlaylists").ImportListSpotifyPlaylists;
export const ImportListSpotifyPlaylists: typeof import("./importListSpotifyPlaylists").ImportListSpotifyPlaylists = null as any;
utilities.lazyLoad(exports, ["ImportListSpotifyPlaylists"], () => require("./importListSpotifyPlaylists"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "lidarr:ImportLists/importList:ImportList":
                return new ImportList(name, <any>undefined, { urn })
            case "lidarr:ImportLists/importListExclusion:ImportListExclusion":
                return new ImportListExclusion(name, <any>undefined, { urn })
            case "lidarr:ImportLists/importListHeadphones:ImportListHeadphones":
                return new ImportListHeadphones(name, <any>undefined, { urn })
            case "lidarr:ImportLists/importListLastfmTag:ImportListLastfmTag":
                return new ImportListLastfmTag(name, <any>undefined, { urn })
            case "lidarr:ImportLists/importListLastfmUser:ImportListLastfmUser":
                return new ImportListLastfmUser(name, <any>undefined, { urn })
            case "lidarr:ImportLists/importListLidarr:ImportListLidarr":
                return new ImportListLidarr(name, <any>undefined, { urn })
            case "lidarr:ImportLists/importListLidarrList:ImportListLidarrList":
                return new ImportListLidarrList(name, <any>undefined, { urn })
            case "lidarr:ImportLists/importListMusicBrainz:ImportListMusicBrainz":
                return new ImportListMusicBrainz(name, <any>undefined, { urn })
            case "lidarr:ImportLists/importListSpotifyAlbums:ImportListSpotifyAlbums":
                return new ImportListSpotifyAlbums(name, <any>undefined, { urn })
            case "lidarr:ImportLists/importListSpotifyArtists:ImportListSpotifyArtists":
                return new ImportListSpotifyArtists(name, <any>undefined, { urn })
            case "lidarr:ImportLists/importListSpotifyPlaylists:ImportListSpotifyPlaylists":
                return new ImportListSpotifyPlaylists(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("lidarr", "ImportLists/importList", _module)
pulumi.runtime.registerResourceModule("lidarr", "ImportLists/importListExclusion", _module)
pulumi.runtime.registerResourceModule("lidarr", "ImportLists/importListHeadphones", _module)
pulumi.runtime.registerResourceModule("lidarr", "ImportLists/importListLastfmTag", _module)
pulumi.runtime.registerResourceModule("lidarr", "ImportLists/importListLastfmUser", _module)
pulumi.runtime.registerResourceModule("lidarr", "ImportLists/importListLidarr", _module)
pulumi.runtime.registerResourceModule("lidarr", "ImportLists/importListLidarrList", _module)
pulumi.runtime.registerResourceModule("lidarr", "ImportLists/importListMusicBrainz", _module)
pulumi.runtime.registerResourceModule("lidarr", "ImportLists/importListSpotifyAlbums", _module)
pulumi.runtime.registerResourceModule("lidarr", "ImportLists/importListSpotifyArtists", _module)
pulumi.runtime.registerResourceModule("lidarr", "ImportLists/importListSpotifyPlaylists", _module)
