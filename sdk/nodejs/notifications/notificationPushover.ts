// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Notifications -->Notification Pushover resource.
 * For more information refer to [Notification](https://wiki.servarr.com/lidarr/settings#connect) and [Pushover](https://wiki.servarr.com/lidarr/supported#pushover).
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import lidarr:Notifications/notificationPushover:NotificationPushover example 1
 * ```
 */
export class NotificationPushover extends pulumi.CustomResource {
    /**
     * Get an existing NotificationPushover resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationPushoverState, opts?: pulumi.CustomResourceOptions): NotificationPushover {
        return new NotificationPushover(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'lidarr:Notifications/notificationPushover:NotificationPushover';

    /**
     * Returns true if the given object is an instance of NotificationPushover.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationPushover {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationPushover.__pulumiType;
    }

    /**
     * API key.
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * List of devices.
     */
    public readonly devices!: pulumi.Output<string[]>;
    /**
     * Expire.
     */
    public readonly expire!: pulumi.Output<number>;
    /**
     * Include health warnings.
     */
    public readonly includeHealthWarnings!: pulumi.Output<boolean>;
    /**
     * NotificationPushover name.
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
     * Priority. `-2` Silent, `-1` Quiet, `0` Normal, `1` High, `2` Emergency, `8` High.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Retry.
     */
    public readonly retry!: pulumi.Output<number>;
    /**
     * Sound.
     */
    public readonly sound!: pulumi.Output<string>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * User key.
     */
    public readonly userKey!: pulumi.Output<string | undefined>;

    /**
     * Create a NotificationPushover resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationPushoverArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationPushoverArgs | NotificationPushoverState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationPushoverState | undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["devices"] = state ? state.devices : undefined;
            resourceInputs["expire"] = state ? state.expire : undefined;
            resourceInputs["includeHealthWarnings"] = state ? state.includeHealthWarnings : undefined;
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
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["retry"] = state ? state.retry : undefined;
            resourceInputs["sound"] = state ? state.sound : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["userKey"] = state ? state.userKey : undefined;
        } else {
            const args = argsOrState as NotificationPushoverArgs | undefined;
            if ((!args || args.apiKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiKey'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            resourceInputs["apiKey"] = args?.apiKey ? pulumi.secret(args.apiKey) : undefined;
            resourceInputs["devices"] = args ? args.devices : undefined;
            resourceInputs["expire"] = args ? args.expire : undefined;
            resourceInputs["includeHealthWarnings"] = args ? args.includeHealthWarnings : undefined;
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
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["retry"] = args ? args.retry : undefined;
            resourceInputs["sound"] = args ? args.sound : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userKey"] = args?.userKey ? pulumi.secret(args.userKey) : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiKey", "userKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(NotificationPushover.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NotificationPushover resources.
 */
export interface NotificationPushoverState {
    /**
     * API key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * List of devices.
     */
    devices?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Expire.
     */
    expire?: pulumi.Input<number>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * NotificationPushover name.
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
     * Priority. `-2` Silent, `-1` Quiet, `0` Normal, `1` High, `2` Emergency, `8` High.
     */
    priority?: pulumi.Input<number>;
    /**
     * Retry.
     */
    retry?: pulumi.Input<number>;
    /**
     * Sound.
     */
    sound?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * User key.
     */
    userKey?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NotificationPushover resource.
 */
export interface NotificationPushoverArgs {
    /**
     * API key.
     */
    apiKey: pulumi.Input<string>;
    /**
     * List of devices.
     */
    devices?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Expire.
     */
    expire?: pulumi.Input<number>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * NotificationPushover name.
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
     * Priority. `-2` Silent, `-1` Quiet, `0` Normal, `1` High, `2` Emergency, `8` High.
     */
    priority?: pulumi.Input<number>;
    /**
     * Retry.
     */
    retry?: pulumi.Input<number>;
    /**
     * Sound.
     */
    sound?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * User key.
     */
    userKey?: pulumi.Input<string>;
}
