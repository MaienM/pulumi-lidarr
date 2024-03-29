// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Metadata -->Single Metadata.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as lidarr from "@pulumi/lidarr";
 *
 * const example = lidarr.Metadata.getMetadata({
 *     name: "Example",
 * });
 * ```
 */
export function getMetadata(args: GetMetadataArgs, opts?: pulumi.InvokeOptions): Promise<GetMetadataResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("lidarr:Metadata/getMetadata:getMetadata", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getMetadata.
 */
export interface GetMetadataArgs {
    /**
     * Metadata name.
     */
    name: string;
}

/**
 * A collection of values returned by getMetadata.
 */
export interface GetMetadataResult {
    /**
     * Album images flag.
     */
    readonly albumImages: boolean;
    /**
     * Album metadata flag.
     */
    readonly albumMetadata: boolean;
    /**
     * Artist images flag.
     */
    readonly artistImages: boolean;
    /**
     * Artist metadata flag.
     */
    readonly artistMetadata: boolean;
    /**
     * Metadata configuration template.
     */
    readonly configContract: string;
    /**
     * Enable flag.
     */
    readonly enable: boolean;
    /**
     * Metadata ID.
     */
    readonly id: number;
    /**
     * Metadata implementation name.
     */
    readonly implementation: string;
    /**
     * Metadata name.
     */
    readonly name: string;
    /**
     * List of associated tags.
     */
    readonly tags: number[];
    /**
     * Track metadata flag.
     */
    readonly trackMetadata: boolean;
}
/**
 * <!-- subcategory:Metadata -->Single Metadata.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as lidarr from "@pulumi/lidarr";
 *
 * const example = lidarr.Metadata.getMetadata({
 *     name: "Example",
 * });
 * ```
 */
export function getMetadataOutput(args: GetMetadataOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMetadataResult> {
    return pulumi.output(args).apply((a: any) => getMetadata(a, opts))
}

/**
 * A collection of arguments for invoking getMetadata.
 */
export interface GetMetadataOutputArgs {
    /**
     * Metadata name.
     */
    name: pulumi.Input<string>;
}
