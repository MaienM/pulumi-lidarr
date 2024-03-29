// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Metadata -->Metadata Config resource.
 * For more information refer to [Metadata](https://wiki.servarr.com/lidarr/settings#options) documentation.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as lidarr from "@maienm/pulumi-lidarr";
 *
 * const example = new lidarr.metadata.MetadataConfig("example", {
 *     scrubAudioTags: false,
 *     writeAudioTags: "no",
 * });
 * ```
 *
 * ## Import
 *
 * import does not need parameters
 *
 * ```sh
 *  $ pulumi import lidarr:Metadata/metadataConfig:MetadataConfig example
 * ```
 */
export class MetadataConfig extends pulumi.CustomResource {
    /**
     * Get an existing MetadataConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MetadataConfigState, opts?: pulumi.CustomResourceOptions): MetadataConfig {
        return new MetadataConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'lidarr:Metadata/metadataConfig:MetadataConfig';

    /**
     * Returns true if the given object is an instance of MetadataConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MetadataConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MetadataConfig.__pulumiType;
    }

    /**
     * Metadata Source.
     */
    public readonly metadataSource!: pulumi.Output<string>;
    /**
     * Scrub audio tags.
     */
    public readonly scrubAudioTags!: pulumi.Output<boolean>;
    /**
     * Write audio tags.
     */
    public readonly writeAudioTags!: pulumi.Output<string>;

    /**
     * Create a MetadataConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MetadataConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MetadataConfigArgs | MetadataConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MetadataConfigState | undefined;
            resourceInputs["metadataSource"] = state ? state.metadataSource : undefined;
            resourceInputs["scrubAudioTags"] = state ? state.scrubAudioTags : undefined;
            resourceInputs["writeAudioTags"] = state ? state.writeAudioTags : undefined;
        } else {
            const args = argsOrState as MetadataConfigArgs | undefined;
            if ((!args || args.scrubAudioTags === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scrubAudioTags'");
            }
            if ((!args || args.writeAudioTags === undefined) && !opts.urn) {
                throw new Error("Missing required property 'writeAudioTags'");
            }
            resourceInputs["metadataSource"] = args ? args.metadataSource : undefined;
            resourceInputs["scrubAudioTags"] = args ? args.scrubAudioTags : undefined;
            resourceInputs["writeAudioTags"] = args ? args.writeAudioTags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MetadataConfig.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering MetadataConfig resources.
 */
export interface MetadataConfigState {
    /**
     * Metadata Source.
     */
    metadataSource?: pulumi.Input<string>;
    /**
     * Scrub audio tags.
     */
    scrubAudioTags?: pulumi.Input<boolean>;
    /**
     * Write audio tags.
     */
    writeAudioTags?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MetadataConfig resource.
 */
export interface MetadataConfigArgs {
    /**
     * Metadata Source.
     */
    metadataSource?: pulumi.Input<string>;
    /**
     * Scrub audio tags.
     */
    scrubAudioTags: pulumi.Input<boolean>;
    /**
     * Write audio tags.
     */
    writeAudioTags: pulumi.Input<string>;
}
