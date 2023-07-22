// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Download Clients -->Download Client UsenetDownloadStation resource.
 * For more information refer to [Download Client](https://wiki.servarr.com/lidarr/settings#download-clients) and [UsenetDownloadStation](https://wiki.servarr.com/lidarr/supported#usenetdownloadstation).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as lidarr from "@maienm/pulumi-lidarr";
 *
 * const example = new lidarr.downloadclient.DownloadClientUsenetDownloadStation("example", {
 *     enable: true,
 *     host: "downloadstation",
 *     name: "Example",
 *     port: 5000,
 *     priority: 1,
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import lidarr:DownloadClient/downloadClientUsenetDownloadStation:DownloadClientUsenetDownloadStation example 1
 * ```
 */
export class DownloadClientUsenetDownloadStation extends pulumi.CustomResource {
    /**
     * Get an existing DownloadClientUsenetDownloadStation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DownloadClientUsenetDownloadStationState, opts?: pulumi.CustomResourceOptions): DownloadClientUsenetDownloadStation {
        return new DownloadClientUsenetDownloadStation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'lidarr:DownloadClient/downloadClientUsenetDownloadStation:DownloadClientUsenetDownloadStation';

    /**
     * Returns true if the given object is an instance of DownloadClientUsenetDownloadStation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DownloadClientUsenetDownloadStation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DownloadClientUsenetDownloadStation.__pulumiType;
    }

    /**
     * Enable flag.
     */
    public readonly enable!: pulumi.Output<boolean>;
    /**
     * host.
     */
    public readonly host!: pulumi.Output<string>;
    /**
     * Music category.
     */
    public readonly musicCategory!: pulumi.Output<string>;
    /**
     * Music directory.
     */
    public readonly musicDirectory!: pulumi.Output<string>;
    /**
     * Download Client name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Password.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * Port.
     */
    public readonly port!: pulumi.Output<number>;
    /**
     * Priority.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Remove completed downloads flag.
     */
    public readonly removeCompletedDownloads!: pulumi.Output<boolean>;
    /**
     * Remove failed downloads flag.
     */
    public readonly removeFailedDownloads!: pulumi.Output<boolean>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * Use SSL flag.
     */
    public readonly useSsl!: pulumi.Output<boolean>;
    /**
     * Username.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a DownloadClientUsenetDownloadStation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DownloadClientUsenetDownloadStationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DownloadClientUsenetDownloadStationArgs | DownloadClientUsenetDownloadStationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DownloadClientUsenetDownloadStationState | undefined;
            resourceInputs["enable"] = state ? state.enable : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["musicCategory"] = state ? state.musicCategory : undefined;
            resourceInputs["musicDirectory"] = state ? state.musicDirectory : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["removeCompletedDownloads"] = state ? state.removeCompletedDownloads : undefined;
            resourceInputs["removeFailedDownloads"] = state ? state.removeFailedDownloads : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["useSsl"] = state ? state.useSsl : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as DownloadClientUsenetDownloadStationArgs | undefined;
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["musicCategory"] = args ? args.musicCategory : undefined;
            resourceInputs["musicDirectory"] = args ? args.musicDirectory : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["removeCompletedDownloads"] = args ? args.removeCompletedDownloads : undefined;
            resourceInputs["removeFailedDownloads"] = args ? args.removeFailedDownloads : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["useSsl"] = args ? args.useSsl : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(DownloadClientUsenetDownloadStation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DownloadClientUsenetDownloadStation resources.
 */
export interface DownloadClientUsenetDownloadStationState {
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * host.
     */
    host?: pulumi.Input<string>;
    /**
     * Music category.
     */
    musicCategory?: pulumi.Input<string>;
    /**
     * Music directory.
     */
    musicDirectory?: pulumi.Input<string>;
    /**
     * Download Client name.
     */
    name?: pulumi.Input<string>;
    /**
     * Password.
     */
    password?: pulumi.Input<string>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Remove completed downloads flag.
     */
    removeCompletedDownloads?: pulumi.Input<boolean>;
    /**
     * Remove failed downloads flag.
     */
    removeFailedDownloads?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Use SSL flag.
     */
    useSsl?: pulumi.Input<boolean>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DownloadClientUsenetDownloadStation resource.
 */
export interface DownloadClientUsenetDownloadStationArgs {
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * host.
     */
    host?: pulumi.Input<string>;
    /**
     * Music category.
     */
    musicCategory?: pulumi.Input<string>;
    /**
     * Music directory.
     */
    musicDirectory?: pulumi.Input<string>;
    /**
     * Download Client name.
     */
    name: pulumi.Input<string>;
    /**
     * Password.
     */
    password?: pulumi.Input<string>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Remove completed downloads flag.
     */
    removeCompletedDownloads?: pulumi.Input<boolean>;
    /**
     * Remove failed downloads flag.
     */
    removeFailedDownloads?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Use SSL flag.
     */
    useSsl?: pulumi.Input<boolean>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
}
