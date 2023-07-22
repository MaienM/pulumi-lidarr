// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Import Lists -->Import List Last.fm User resource.
 * For more information refer to [Import List](https://wiki.servarr.com/lidarr/settings#import-lists) and [Last.fm User](https://wiki.servarr.com/lidarr/supported#lastfmuser).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as lidarr from "@maienm/pulumi-lidarr";
 *
 * const example: lidarr.importlists.ImportListLastfmUser[] = [];
 * for (const range = {value: 0}; range.value < 25; range.value++) {
 *     example.push(new lidarr.importlists.ImportListLastfmUser(`example-${range.value}`, {
 *         enableAutomaticAdd: false,
 *         metadataProfileId: 1,
 *         monitorNewItems: "all",
 *         name: "Example",
 *         qualityProfileId: 1,
 *         rootFolderPath: "/config",
 *         shouldMonitor: "specificAlbum",
 *         shouldSearch: false,
 *         userId: "UserExample",
 *     }));
 * }
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import lidarr:ImportLists/importListLastfmUser:ImportListLastfmUser example 1
 * ```
 */
export class ImportListLastfmUser extends pulumi.CustomResource {
    /**
     * Get an existing ImportListLastfmUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImportListLastfmUserState, opts?: pulumi.CustomResourceOptions): ImportListLastfmUser {
        return new ImportListLastfmUser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'lidarr:ImportLists/importListLastfmUser:ImportListLastfmUser';

    /**
     * Returns true if the given object is an instance of ImportListLastfmUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ImportListLastfmUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ImportListLastfmUser.__pulumiType;
    }

    /**
     * Elements to pull from list.
     */
    public readonly countList!: pulumi.Output<number>;
    /**
     * Enable automatic add flag.
     */
    public readonly enableAutomaticAdd!: pulumi.Output<boolean>;
    /**
     * List order.
     */
    public readonly listOrder!: pulumi.Output<number>;
    /**
     * Metadata profile ID.
     */
    public readonly metadataProfileId!: pulumi.Output<number>;
    /**
     * Monitor new items.
     */
    public readonly monitorNewItems!: pulumi.Output<string>;
    /**
     * Import List name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Quality profile ID.
     */
    public readonly qualityProfileId!: pulumi.Output<number>;
    /**
     * Root folder path.
     */
    public readonly rootFolderPath!: pulumi.Output<string>;
    /**
     * Should monitor.
     */
    public readonly shouldMonitor!: pulumi.Output<string>;
    /**
     * Should monitor existing flag.
     */
    public readonly shouldMonitorExisting!: pulumi.Output<boolean>;
    /**
     * Should search flag.
     */
    public readonly shouldSearch!: pulumi.Output<boolean>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * User ID.
     */
    public readonly userId!: pulumi.Output<string>;

    /**
     * Create a ImportListLastfmUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImportListLastfmUserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ImportListLastfmUserArgs | ImportListLastfmUserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ImportListLastfmUserState | undefined;
            resourceInputs["countList"] = state ? state.countList : undefined;
            resourceInputs["enableAutomaticAdd"] = state ? state.enableAutomaticAdd : undefined;
            resourceInputs["listOrder"] = state ? state.listOrder : undefined;
            resourceInputs["metadataProfileId"] = state ? state.metadataProfileId : undefined;
            resourceInputs["monitorNewItems"] = state ? state.monitorNewItems : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["qualityProfileId"] = state ? state.qualityProfileId : undefined;
            resourceInputs["rootFolderPath"] = state ? state.rootFolderPath : undefined;
            resourceInputs["shouldMonitor"] = state ? state.shouldMonitor : undefined;
            resourceInputs["shouldMonitorExisting"] = state ? state.shouldMonitorExisting : undefined;
            resourceInputs["shouldSearch"] = state ? state.shouldSearch : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["userId"] = state ? state.userId : undefined;
        } else {
            const args = argsOrState as ImportListLastfmUserArgs | undefined;
            if ((!args || args.countList === undefined) && !opts.urn) {
                throw new Error("Missing required property 'countList'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.userId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userId'");
            }
            resourceInputs["countList"] = args ? args.countList : undefined;
            resourceInputs["enableAutomaticAdd"] = args ? args.enableAutomaticAdd : undefined;
            resourceInputs["listOrder"] = args ? args.listOrder : undefined;
            resourceInputs["metadataProfileId"] = args ? args.metadataProfileId : undefined;
            resourceInputs["monitorNewItems"] = args ? args.monitorNewItems : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["qualityProfileId"] = args ? args.qualityProfileId : undefined;
            resourceInputs["rootFolderPath"] = args ? args.rootFolderPath : undefined;
            resourceInputs["shouldMonitor"] = args ? args.shouldMonitor : undefined;
            resourceInputs["shouldMonitorExisting"] = args ? args.shouldMonitorExisting : undefined;
            resourceInputs["shouldSearch"] = args ? args.shouldSearch : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ImportListLastfmUser.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ImportListLastfmUser resources.
 */
export interface ImportListLastfmUserState {
    /**
     * Elements to pull from list.
     */
    countList?: pulumi.Input<number>;
    /**
     * Enable automatic add flag.
     */
    enableAutomaticAdd?: pulumi.Input<boolean>;
    /**
     * List order.
     */
    listOrder?: pulumi.Input<number>;
    /**
     * Metadata profile ID.
     */
    metadataProfileId?: pulumi.Input<number>;
    /**
     * Monitor new items.
     */
    monitorNewItems?: pulumi.Input<string>;
    /**
     * Import List name.
     */
    name?: pulumi.Input<string>;
    /**
     * Quality profile ID.
     */
    qualityProfileId?: pulumi.Input<number>;
    /**
     * Root folder path.
     */
    rootFolderPath?: pulumi.Input<string>;
    /**
     * Should monitor.
     */
    shouldMonitor?: pulumi.Input<string>;
    /**
     * Should monitor existing flag.
     */
    shouldMonitorExisting?: pulumi.Input<boolean>;
    /**
     * Should search flag.
     */
    shouldSearch?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * User ID.
     */
    userId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ImportListLastfmUser resource.
 */
export interface ImportListLastfmUserArgs {
    /**
     * Elements to pull from list.
     */
    countList: pulumi.Input<number>;
    /**
     * Enable automatic add flag.
     */
    enableAutomaticAdd?: pulumi.Input<boolean>;
    /**
     * List order.
     */
    listOrder?: pulumi.Input<number>;
    /**
     * Metadata profile ID.
     */
    metadataProfileId?: pulumi.Input<number>;
    /**
     * Monitor new items.
     */
    monitorNewItems?: pulumi.Input<string>;
    /**
     * Import List name.
     */
    name: pulumi.Input<string>;
    /**
     * Quality profile ID.
     */
    qualityProfileId?: pulumi.Input<number>;
    /**
     * Root folder path.
     */
    rootFolderPath?: pulumi.Input<string>;
    /**
     * Should monitor.
     */
    shouldMonitor?: pulumi.Input<string>;
    /**
     * Should monitor existing flag.
     */
    shouldMonitorExisting?: pulumi.Input<boolean>;
    /**
     * Should search flag.
     */
    shouldSearch?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * User ID.
     */
    userId: pulumi.Input<string>;
}
