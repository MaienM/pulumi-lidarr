// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Notifications -->Notification Emby resource.
 * For more information refer to [Notification](https://wiki.servarr.com/lidarr/settings#connect) and [Emby](https://wiki.servarr.com/lidarr/supported#mediabrowser).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as lidarr from "@maienm/pulumi-lidarr";
 *
 * const example = new lidarr.notifications.NotificationEmby("example", {
 *     apiKey: "API_Key",
 *     host: "emby.lcl",
 *     includeHealthWarnings: false,
 *     name: "Example",
 *     onApplicationUpdate: false,
 *     onGrab: false,
 *     onHealthIssue: false,
 *     onReleaseImport: true,
 *     onRename: false,
 *     onTrackRetag: false,
 *     onUpgrade: true,
 *     port: 8096,
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import lidarr:Notifications/notificationEmby:NotificationEmby example 1
 * ```
 */
export class NotificationEmby extends pulumi.CustomResource {
    /**
     * Get an existing NotificationEmby resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationEmbyState, opts?: pulumi.CustomResourceOptions): NotificationEmby {
        return new NotificationEmby(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'lidarr:Notifications/notificationEmby:NotificationEmby';

    /**
     * Returns true if the given object is an instance of NotificationEmby.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationEmby {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationEmby.__pulumiType;
    }

    /**
     * API key.
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * Host.
     */
    public readonly host!: pulumi.Output<string>;
    /**
     * Include health warnings.
     */
    public readonly includeHealthWarnings!: pulumi.Output<boolean>;
    /**
     * NotificationEmby name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notify flag.
     */
    public readonly notify!: pulumi.Output<boolean>;
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
     * On release import flag.
     */
    public readonly onReleaseImport!: pulumi.Output<boolean>;
    /**
     * On rename flag.
     */
    public readonly onRename!: pulumi.Output<boolean>;
    /**
     * On track retag flag.
     */
    public readonly onTrackRetag!: pulumi.Output<boolean>;
    /**
     * On upgrade flag.
     */
    public readonly onUpgrade!: pulumi.Output<boolean>;
    /**
     * Port.
     */
    public readonly port!: pulumi.Output<number>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * Update library flag.
     */
    public readonly updateLibrary!: pulumi.Output<boolean>;
    /**
     * Use SSL flag.
     */
    public readonly useSsl!: pulumi.Output<boolean>;

    /**
     * Create a NotificationEmby resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationEmbyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationEmbyArgs | NotificationEmbyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationEmbyState | undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["includeHealthWarnings"] = state ? state.includeHealthWarnings : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notify"] = state ? state.notify : undefined;
            resourceInputs["onAlbumDelete"] = state ? state.onAlbumDelete : undefined;
            resourceInputs["onApplicationUpdate"] = state ? state.onApplicationUpdate : undefined;
            resourceInputs["onArtistDelete"] = state ? state.onArtistDelete : undefined;
            resourceInputs["onGrab"] = state ? state.onGrab : undefined;
            resourceInputs["onHealthIssue"] = state ? state.onHealthIssue : undefined;
            resourceInputs["onHealthRestored"] = state ? state.onHealthRestored : undefined;
            resourceInputs["onReleaseImport"] = state ? state.onReleaseImport : undefined;
            resourceInputs["onRename"] = state ? state.onRename : undefined;
            resourceInputs["onTrackRetag"] = state ? state.onTrackRetag : undefined;
            resourceInputs["onUpgrade"] = state ? state.onUpgrade : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["updateLibrary"] = state ? state.updateLibrary : undefined;
            resourceInputs["useSsl"] = state ? state.useSsl : undefined;
        } else {
            const args = argsOrState as NotificationEmbyArgs | undefined;
            if ((!args || args.apiKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiKey'");
            }
            if ((!args || args.host === undefined) && !opts.urn) {
                throw new Error("Missing required property 'host'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            resourceInputs["apiKey"] = args?.apiKey ? pulumi.secret(args.apiKey) : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["includeHealthWarnings"] = args ? args.includeHealthWarnings : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notify"] = args ? args.notify : undefined;
            resourceInputs["onAlbumDelete"] = args ? args.onAlbumDelete : undefined;
            resourceInputs["onApplicationUpdate"] = args ? args.onApplicationUpdate : undefined;
            resourceInputs["onArtistDelete"] = args ? args.onArtistDelete : undefined;
            resourceInputs["onGrab"] = args ? args.onGrab : undefined;
            resourceInputs["onHealthIssue"] = args ? args.onHealthIssue : undefined;
            resourceInputs["onHealthRestored"] = args ? args.onHealthRestored : undefined;
            resourceInputs["onReleaseImport"] = args ? args.onReleaseImport : undefined;
            resourceInputs["onRename"] = args ? args.onRename : undefined;
            resourceInputs["onTrackRetag"] = args ? args.onTrackRetag : undefined;
            resourceInputs["onUpgrade"] = args ? args.onUpgrade : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["updateLibrary"] = args ? args.updateLibrary : undefined;
            resourceInputs["useSsl"] = args ? args.useSsl : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(NotificationEmby.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NotificationEmby resources.
 */
export interface NotificationEmbyState {
    /**
     * API key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Host.
     */
    host?: pulumi.Input<string>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * NotificationEmby name.
     */
    name?: pulumi.Input<string>;
    /**
     * Notify flag.
     */
    notify?: pulumi.Input<boolean>;
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
     * On release import flag.
     */
    onReleaseImport?: pulumi.Input<boolean>;
    /**
     * On rename flag.
     */
    onRename?: pulumi.Input<boolean>;
    /**
     * On track retag flag.
     */
    onTrackRetag?: pulumi.Input<boolean>;
    /**
     * On upgrade flag.
     */
    onUpgrade?: pulumi.Input<boolean>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Update library flag.
     */
    updateLibrary?: pulumi.Input<boolean>;
    /**
     * Use SSL flag.
     */
    useSsl?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a NotificationEmby resource.
 */
export interface NotificationEmbyArgs {
    /**
     * API key.
     */
    apiKey: pulumi.Input<string>;
    /**
     * Host.
     */
    host: pulumi.Input<string>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * NotificationEmby name.
     */
    name: pulumi.Input<string>;
    /**
     * Notify flag.
     */
    notify?: pulumi.Input<boolean>;
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
     * On release import flag.
     */
    onReleaseImport?: pulumi.Input<boolean>;
    /**
     * On rename flag.
     */
    onRename?: pulumi.Input<boolean>;
    /**
     * On track retag flag.
     */
    onTrackRetag?: pulumi.Input<boolean>;
    /**
     * On upgrade flag.
     */
    onUpgrade?: pulumi.Input<boolean>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Update library flag.
     */
    updateLibrary?: pulumi.Input<boolean>;
    /**
     * Use SSL flag.
     */
    useSsl?: pulumi.Input<boolean>;
}