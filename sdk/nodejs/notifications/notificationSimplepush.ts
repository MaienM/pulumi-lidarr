// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Notifications -->Notification Simplepush resource.
 * For more information refer to [Notification](https://wiki.servarr.com/lidarr/settings#connect) and [Simplepush](https://wiki.servarr.com/lidarr/supported#simplepush).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as lidarr from "@maienm/pulumi-lidarr";
 *
 * const example = new lidarr.notifications.NotificationSimplepush("example", {
 *     event: "Event",
 *     includeHealthWarnings: false,
 *     key: "Key",
 *     name: "Example",
 *     onApplicationUpdate: false,
 *     onDownloadFailure: false,
 *     onGrab: false,
 *     onHealthIssue: false,
 *     onImportFailure: true,
 *     onReleaseImport: true,
 *     onUpgrade: true,
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import lidarr:Notifications/notificationSimplepush:NotificationSimplepush example 1
 * ```
 */
export class NotificationSimplepush extends pulumi.CustomResource {
    /**
     * Get an existing NotificationSimplepush resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationSimplepushState, opts?: pulumi.CustomResourceOptions): NotificationSimplepush {
        return new NotificationSimplepush(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'lidarr:Notifications/notificationSimplepush:NotificationSimplepush';

    /**
     * Returns true if the given object is an instance of NotificationSimplepush.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationSimplepush {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationSimplepush.__pulumiType;
    }

    /**
     * Event.
     */
    public readonly event!: pulumi.Output<string>;
    /**
     * Include health warnings.
     */
    public readonly includeHealthWarnings!: pulumi.Output<boolean>;
    /**
     * Key.
     */
    public readonly key!: pulumi.Output<string>;
    /**
     * NotificationSimplepush name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * On album delete flag.
     */
    public readonly onAlbumDelete!: pulumi.Output<boolean>;
    /**
     * On application update flag.
     */
    public readonly onApplicationUpdate!: pulumi.Output<boolean>;
    /**
     * On artist delete flag.
     */
    public readonly onArtistDelete!: pulumi.Output<boolean>;
    /**
     * On download failure flag.
     */
    public readonly onDownloadFailure!: pulumi.Output<boolean>;
    /**
     * On grab flag.
     */
    public readonly onGrab!: pulumi.Output<boolean>;
    /**
     * On health issue flag.
     */
    public readonly onHealthIssue!: pulumi.Output<boolean>;
    /**
     * On health restored flag.
     */
    public readonly onHealthRestored!: pulumi.Output<boolean>;
    /**
     * On download flag.
     */
    public readonly onImportFailure!: pulumi.Output<boolean>;
    /**
     * On release import flag.
     */
    public readonly onReleaseImport!: pulumi.Output<boolean>;
    /**
     * On upgrade flag.
     */
    public readonly onUpgrade!: pulumi.Output<boolean>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;

    /**
     * Create a NotificationSimplepush resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationSimplepushArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationSimplepushArgs | NotificationSimplepushState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationSimplepushState | undefined;
            resourceInputs["event"] = state ? state.event : undefined;
            resourceInputs["includeHealthWarnings"] = state ? state.includeHealthWarnings : undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["onAlbumDelete"] = state ? state.onAlbumDelete : undefined;
            resourceInputs["onApplicationUpdate"] = state ? state.onApplicationUpdate : undefined;
            resourceInputs["onArtistDelete"] = state ? state.onArtistDelete : undefined;
            resourceInputs["onDownloadFailure"] = state ? state.onDownloadFailure : undefined;
            resourceInputs["onGrab"] = state ? state.onGrab : undefined;
            resourceInputs["onHealthIssue"] = state ? state.onHealthIssue : undefined;
            resourceInputs["onHealthRestored"] = state ? state.onHealthRestored : undefined;
            resourceInputs["onImportFailure"] = state ? state.onImportFailure : undefined;
            resourceInputs["onReleaseImport"] = state ? state.onReleaseImport : undefined;
            resourceInputs["onUpgrade"] = state ? state.onUpgrade : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as NotificationSimplepushArgs | undefined;
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            resourceInputs["event"] = args ? args.event : undefined;
            resourceInputs["includeHealthWarnings"] = args ? args.includeHealthWarnings : undefined;
            resourceInputs["key"] = args?.key ? pulumi.secret(args.key) : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["onAlbumDelete"] = args ? args.onAlbumDelete : undefined;
            resourceInputs["onApplicationUpdate"] = args ? args.onApplicationUpdate : undefined;
            resourceInputs["onArtistDelete"] = args ? args.onArtistDelete : undefined;
            resourceInputs["onDownloadFailure"] = args ? args.onDownloadFailure : undefined;
            resourceInputs["onGrab"] = args ? args.onGrab : undefined;
            resourceInputs["onHealthIssue"] = args ? args.onHealthIssue : undefined;
            resourceInputs["onHealthRestored"] = args ? args.onHealthRestored : undefined;
            resourceInputs["onImportFailure"] = args ? args.onImportFailure : undefined;
            resourceInputs["onReleaseImport"] = args ? args.onReleaseImport : undefined;
            resourceInputs["onUpgrade"] = args ? args.onUpgrade : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["key"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(NotificationSimplepush.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NotificationSimplepush resources.
 */
export interface NotificationSimplepushState {
    /**
     * Event.
     */
    event?: pulumi.Input<string>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * Key.
     */
    key?: pulumi.Input<string>;
    /**
     * NotificationSimplepush name.
     */
    name?: pulumi.Input<string>;
    /**
     * On album delete flag.
     */
    onAlbumDelete?: pulumi.Input<boolean>;
    /**
     * On application update flag.
     */
    onApplicationUpdate?: pulumi.Input<boolean>;
    /**
     * On artist delete flag.
     */
    onArtistDelete?: pulumi.Input<boolean>;
    /**
     * On download failure flag.
     */
    onDownloadFailure?: pulumi.Input<boolean>;
    /**
     * On grab flag.
     */
    onGrab?: pulumi.Input<boolean>;
    /**
     * On health issue flag.
     */
    onHealthIssue?: pulumi.Input<boolean>;
    /**
     * On health restored flag.
     */
    onHealthRestored?: pulumi.Input<boolean>;
    /**
     * On download flag.
     */
    onImportFailure?: pulumi.Input<boolean>;
    /**
     * On release import flag.
     */
    onReleaseImport?: pulumi.Input<boolean>;
    /**
     * On upgrade flag.
     */
    onUpgrade?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a NotificationSimplepush resource.
 */
export interface NotificationSimplepushArgs {
    /**
     * Event.
     */
    event?: pulumi.Input<string>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * Key.
     */
    key: pulumi.Input<string>;
    /**
     * NotificationSimplepush name.
     */
    name: pulumi.Input<string>;
    /**
     * On album delete flag.
     */
    onAlbumDelete?: pulumi.Input<boolean>;
    /**
     * On application update flag.
     */
    onApplicationUpdate?: pulumi.Input<boolean>;
    /**
     * On artist delete flag.
     */
    onArtistDelete?: pulumi.Input<boolean>;
    /**
     * On download failure flag.
     */
    onDownloadFailure?: pulumi.Input<boolean>;
    /**
     * On grab flag.
     */
    onGrab?: pulumi.Input<boolean>;
    /**
     * On health issue flag.
     */
    onHealthIssue?: pulumi.Input<boolean>;
    /**
     * On health restored flag.
     */
    onHealthRestored?: pulumi.Input<boolean>;
    /**
     * On download flag.
     */
    onImportFailure?: pulumi.Input<boolean>;
    /**
     * On release import flag.
     */
    onReleaseImport?: pulumi.Input<boolean>;
    /**
     * On upgrade flag.
     */
    onUpgrade?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}
