// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Import Lists -->Import List Lidarr resource.
 * For more information refer to [Import List](https://wiki.servarr.com/lidarr/settings#import-lists) and [Lidarr](https://wiki.servarr.com/lidarr/supported#lidarrimport).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as lidarr from "@maienm/pulumi-lidarr";
 *
 * const example = new lidarr.importlists.ImportListLidarr("example", {
 *     apiKey: "APIKey",
 *     baseUrl: "http://127.0.0.1:8686",
 *     enableAutomaticAdd: false,
 *     metadataProfileId: 1,
 *     monitorNewItems: "all",
 *     name: "Example",
 *     profileIds: [
 *         1,
 *         2,
 *     ],
 *     qualityProfileId: 1,
 *     rootFolderPath: "/config",
 *     shouldMonitor: "specificAlbum",
 *     shouldSearch: false,
 *     tagIds: [
 *         1,
 *         2,
 *         3,
 *     ],
 *     tags: [
 *         1,
 *         2,
 *         3,
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import lidarr:ImportLists/importListLidarr:ImportListLidarr example 1
 * ```
 */
export class ImportListLidarr extends pulumi.CustomResource {
    /**
     * Get an existing ImportListLidarr resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImportListLidarrState, opts?: pulumi.CustomResourceOptions): ImportListLidarr {
        return new ImportListLidarr(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'lidarr:ImportLists/importListLidarr:ImportListLidarr';

    /**
     * Returns true if the given object is an instance of ImportListLidarr.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ImportListLidarr {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ImportListLidarr.__pulumiType;
    }

    /**
     * API key.
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * Base URL.
     */
    public readonly baseUrl!: pulumi.Output<string>;
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
     * Profile IDs.
     */
    public readonly profileIds!: pulumi.Output<number[]>;
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
     * Tag IDs.
     */
    public readonly tagIds!: pulumi.Output<number[]>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;

    /**
     * Create a ImportListLidarr resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImportListLidarrArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ImportListLidarrArgs | ImportListLidarrState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ImportListLidarrState | undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["baseUrl"] = state ? state.baseUrl : undefined;
            resourceInputs["enableAutomaticAdd"] = state ? state.enableAutomaticAdd : undefined;
            resourceInputs["listOrder"] = state ? state.listOrder : undefined;
            resourceInputs["metadataProfileId"] = state ? state.metadataProfileId : undefined;
            resourceInputs["monitorNewItems"] = state ? state.monitorNewItems : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["profileIds"] = state ? state.profileIds : undefined;
            resourceInputs["qualityProfileId"] = state ? state.qualityProfileId : undefined;
            resourceInputs["rootFolderPath"] = state ? state.rootFolderPath : undefined;
            resourceInputs["shouldMonitor"] = state ? state.shouldMonitor : undefined;
            resourceInputs["shouldMonitorExisting"] = state ? state.shouldMonitorExisting : undefined;
            resourceInputs["shouldSearch"] = state ? state.shouldSearch : undefined;
            resourceInputs["tagIds"] = state ? state.tagIds : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ImportListLidarrArgs | undefined;
            if ((!args || args.apiKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiKey'");
            }
            if ((!args || args.baseUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'baseUrl'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            resourceInputs["apiKey"] = args?.apiKey ? pulumi.secret(args.apiKey) : undefined;
            resourceInputs["baseUrl"] = args ? args.baseUrl : undefined;
            resourceInputs["enableAutomaticAdd"] = args ? args.enableAutomaticAdd : undefined;
            resourceInputs["listOrder"] = args ? args.listOrder : undefined;
            resourceInputs["metadataProfileId"] = args ? args.metadataProfileId : undefined;
            resourceInputs["monitorNewItems"] = args ? args.monitorNewItems : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["profileIds"] = args ? args.profileIds : undefined;
            resourceInputs["qualityProfileId"] = args ? args.qualityProfileId : undefined;
            resourceInputs["rootFolderPath"] = args ? args.rootFolderPath : undefined;
            resourceInputs["shouldMonitor"] = args ? args.shouldMonitor : undefined;
            resourceInputs["shouldMonitorExisting"] = args ? args.shouldMonitorExisting : undefined;
            resourceInputs["shouldSearch"] = args ? args.shouldSearch : undefined;
            resourceInputs["tagIds"] = args ? args.tagIds : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ImportListLidarr.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ImportListLidarr resources.
 */
export interface ImportListLidarrState {
    /**
     * API key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Base URL.
     */
    baseUrl?: pulumi.Input<string>;
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
     * Profile IDs.
     */
    profileIds?: pulumi.Input<pulumi.Input<number>[]>;
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
     * Tag IDs.
     */
    tagIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a ImportListLidarr resource.
 */
export interface ImportListLidarrArgs {
    /**
     * API key.
     */
    apiKey: pulumi.Input<string>;
    /**
     * Base URL.
     */
    baseUrl: pulumi.Input<string>;
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
     * Profile IDs.
     */
    profileIds?: pulumi.Input<pulumi.Input<number>[]>;
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
     * Tag IDs.
     */
    tagIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}