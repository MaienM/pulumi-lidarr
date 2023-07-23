// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Notifications -->Notification Ntfy resource.
 * For more information refer to [Notification](https://wiki.servarr.com/lidarr/settings#connect) and [Ntfy](https://wiki.servarr.com/lidarr/supported#ntfy).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as lidarr from "@maienm/pulumi-lidarr";
 *
 * const example = new lidarr.notifications.NotificationNtfy("example", {
 *     fieldTags: [
 *         "warning",
 *         "skull",
 *     ],
 *     includeHealthWarnings: false,
 *     name: "Example",
 *     onApplicationUpdate: false,
 *     onDownloadFailure: false,
 *     onGrab: false,
 *     onHealthIssue: false,
 *     onImportFailure: true,
 *     onReleaseImport: true,
 *     onUpgrade: true,
 *     password: "%s",
 *     priority: 1,
 *     serverUrl: "https://ntfy.sh",
 *     topics: [
 *         "Topic1234",
 *         "Topic4321",
 *     ],
 *     username: "User",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import lidarr:Notifications/notificationNtfy:NotificationNtfy example 1
 * ```
 */
export class NotificationNtfy extends pulumi.CustomResource {
    /**
     * Get an existing NotificationNtfy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationNtfyState, opts?: pulumi.CustomResourceOptions): NotificationNtfy {
        return new NotificationNtfy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'lidarr:Notifications/notificationNtfy:NotificationNtfy';

    /**
     * Returns true if the given object is an instance of NotificationNtfy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationNtfy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationNtfy.__pulumiType;
    }

    /**
     * Click URL.
     */
    public readonly clickUrl!: pulumi.Output<string>;
    /**
     * Tags and emojis.
     */
    public readonly fieldTags!: pulumi.Output<string[]>;
    /**
     * Include health warnings.
     */
    public readonly includeHealthWarnings!: pulumi.Output<boolean>;
    /**
     * NotificationNtfy name.
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
     * Password.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * Priority. `1` Min, `2` Low, `3` Default, `4` High, `5` Max.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Server URL.
     */
    public readonly serverUrl!: pulumi.Output<string>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * Topics.
     */
    public readonly topics!: pulumi.Output<string[]>;
    /**
     * Username.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a NotificationNtfy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationNtfyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationNtfyArgs | NotificationNtfyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationNtfyState | undefined;
            resourceInputs["clickUrl"] = state ? state.clickUrl : undefined;
            resourceInputs["fieldTags"] = state ? state.fieldTags : undefined;
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
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["serverUrl"] = state ? state.serverUrl : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["topics"] = state ? state.topics : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as NotificationNtfyArgs | undefined;
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.topics === undefined) && !opts.urn) {
                throw new Error("Missing required property 'topics'");
            }
            resourceInputs["clickUrl"] = args ? args.clickUrl : undefined;
            resourceInputs["fieldTags"] = args ? args.fieldTags : undefined;
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
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["serverUrl"] = args ? args.serverUrl : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["topics"] = args ? args.topics : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(NotificationNtfy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NotificationNtfy resources.
 */
export interface NotificationNtfyState {
    /**
     * Click URL.
     */
    clickUrl?: pulumi.Input<string>;
    /**
     * Tags and emojis.
     */
    fieldTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * NotificationNtfy name.
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
     * Password.
     */
    password?: pulumi.Input<string>;
    /**
     * Priority. `1` Min, `2` Low, `3` Default, `4` High, `5` Max.
     */
    priority?: pulumi.Input<number>;
    /**
     * Server URL.
     */
    serverUrl?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Topics.
     */
    topics?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NotificationNtfy resource.
 */
export interface NotificationNtfyArgs {
    /**
     * Click URL.
     */
    clickUrl?: pulumi.Input<string>;
    /**
     * Tags and emojis.
     */
    fieldTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * NotificationNtfy name.
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
     * Password.
     */
    password?: pulumi.Input<string>;
    /**
     * Priority. `1` Min, `2` Low, `3` Default, `4` High, `5` Max.
     */
    priority?: pulumi.Input<number>;
    /**
     * Server URL.
     */
    serverUrl?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Topics.
     */
    topics: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
}