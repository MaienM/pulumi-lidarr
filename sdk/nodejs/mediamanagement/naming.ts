// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Media Management -->Naming resource.
 * For more information refer to [Naming](https://wiki.servarr.com/lidarr/settings#community-naming-suggestions) documentation.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as lidarr from "@maienm/pulumi-lidarr";
 *
 * const example = new lidarr.mediamanagement.Naming("example", {
 *     artistFolderFormat: "{Artist Name}",
 *     multiDiscTrackFormat: "{Album Title} ({Release Year})/{Medium Format} {medium:00}/{Artist Name} - {Album Title} - {track:00} - {Track Title}",
 *     renameTracks: true,
 *     replaceIllegalCharacters: true,
 *     standardTrackFormat: "{Album Title} ({Release Year})/{Artist Name} - {Album Title} - {track:00} - {Track Title}",
 * });
 * ```
 *
 * ## Import
 *
 * import
 *
 * ```sh
 *  $ pulumi import lidarr:MediaManagement/naming:Naming example
 * ```
 */
export class Naming extends pulumi.CustomResource {
    /**
     * Get an existing Naming resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NamingState, opts?: pulumi.CustomResourceOptions): Naming {
        return new Naming(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'lidarr:MediaManagement/naming:Naming';

    /**
     * Returns true if the given object is an instance of Naming.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Naming {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Naming.__pulumiType;
    }

    /**
     * Artist folder format.
     */
    public readonly artistFolderFormat!: pulumi.Output<string>;
    /**
     * Multi disc track format.
     */
    public readonly multiDiscTrackFormat!: pulumi.Output<string>;
    /**
     * Lidarr will use the existing file name if false.
     */
    public readonly renameTracks!: pulumi.Output<boolean>;
    /**
     * Replace illegal characters. They will be removed if false.
     */
    public readonly replaceIllegalCharacters!: pulumi.Output<boolean>;
    /**
     * Standard track formatss.
     */
    public readonly standardTrackFormat!: pulumi.Output<string>;

    /**
     * Create a Naming resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NamingArgs | NamingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NamingState | undefined;
            resourceInputs["artistFolderFormat"] = state ? state.artistFolderFormat : undefined;
            resourceInputs["multiDiscTrackFormat"] = state ? state.multiDiscTrackFormat : undefined;
            resourceInputs["renameTracks"] = state ? state.renameTracks : undefined;
            resourceInputs["replaceIllegalCharacters"] = state ? state.replaceIllegalCharacters : undefined;
            resourceInputs["standardTrackFormat"] = state ? state.standardTrackFormat : undefined;
        } else {
            const args = argsOrState as NamingArgs | undefined;
            if ((!args || args.artistFolderFormat === undefined) && !opts.urn) {
                throw new Error("Missing required property 'artistFolderFormat'");
            }
            if ((!args || args.multiDiscTrackFormat === undefined) && !opts.urn) {
                throw new Error("Missing required property 'multiDiscTrackFormat'");
            }
            if ((!args || args.renameTracks === undefined) && !opts.urn) {
                throw new Error("Missing required property 'renameTracks'");
            }
            if ((!args || args.replaceIllegalCharacters === undefined) && !opts.urn) {
                throw new Error("Missing required property 'replaceIllegalCharacters'");
            }
            if ((!args || args.standardTrackFormat === undefined) && !opts.urn) {
                throw new Error("Missing required property 'standardTrackFormat'");
            }
            resourceInputs["artistFolderFormat"] = args ? args.artistFolderFormat : undefined;
            resourceInputs["multiDiscTrackFormat"] = args ? args.multiDiscTrackFormat : undefined;
            resourceInputs["renameTracks"] = args ? args.renameTracks : undefined;
            resourceInputs["replaceIllegalCharacters"] = args ? args.replaceIllegalCharacters : undefined;
            resourceInputs["standardTrackFormat"] = args ? args.standardTrackFormat : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Naming.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Naming resources.
 */
export interface NamingState {
    /**
     * Artist folder format.
     */
    artistFolderFormat?: pulumi.Input<string>;
    /**
     * Multi disc track format.
     */
    multiDiscTrackFormat?: pulumi.Input<string>;
    /**
     * Lidarr will use the existing file name if false.
     */
    renameTracks?: pulumi.Input<boolean>;
    /**
     * Replace illegal characters. They will be removed if false.
     */
    replaceIllegalCharacters?: pulumi.Input<boolean>;
    /**
     * Standard track formatss.
     */
    standardTrackFormat?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Naming resource.
 */
export interface NamingArgs {
    /**
     * Artist folder format.
     */
    artistFolderFormat: pulumi.Input<string>;
    /**
     * Multi disc track format.
     */
    multiDiscTrackFormat: pulumi.Input<string>;
    /**
     * Lidarr will use the existing file name if false.
     */
    renameTracks: pulumi.Input<boolean>;
    /**
     * Replace illegal characters. They will be removed if false.
     */
    replaceIllegalCharacters: pulumi.Input<boolean>;
    /**
     * Standard track formatss.
     */
    standardTrackFormat: pulumi.Input<string>;
}
