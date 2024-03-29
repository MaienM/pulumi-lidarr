// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Artists -->Single Artist.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as lidarr from "@pulumi/lidarr";
 *
 * const example = lidarr.Artists.getArtist({
 *     foreignArtistId: "1f9df192-a621-4f54-8850-2c5373b7eac9",
 * });
 * ```
 */
export function getArtist(args: GetArtistArgs, opts?: pulumi.InvokeOptions): Promise<GetArtistResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("lidarr:Artists/getArtist:getArtist", {
        "foreignArtistId": args.foreignArtistId,
    }, opts);
}

/**
 * A collection of arguments for invoking getArtist.
 */
export interface GetArtistArgs {
    /**
     * Foreign artist ID.
     */
    foreignArtistId: string;
}

/**
 * A collection of values returned by getArtist.
 */
export interface GetArtistResult {
    /**
     * Artist name.
     */
    readonly artistName: string;
    /**
     * Foreign artist ID.
     */
    readonly foreignArtistId: string;
    /**
     * List genres.
     */
    readonly genres: string[];
    /**
     * Artist ID.
     */
    readonly id: number;
    /**
     * Metadata profile ID.
     */
    readonly metadataProfileId: number;
    /**
     * Monitored flag.
     */
    readonly monitored: boolean;
    /**
     * Overview.
     */
    readonly overview: string;
    /**
     * Full artist path.
     */
    readonly path: string;
    /**
     * Quality profile ID.
     */
    readonly qualityProfileId: number;
    /**
     * Artist status.
     */
    readonly status: string;
    /**
     * List of associated tags.
     */
    readonly tags: number[];
}
/**
 * <!-- subcategory:Artists -->Single Artist.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as lidarr from "@pulumi/lidarr";
 *
 * const example = lidarr.Artists.getArtist({
 *     foreignArtistId: "1f9df192-a621-4f54-8850-2c5373b7eac9",
 * });
 * ```
 */
export function getArtistOutput(args: GetArtistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetArtistResult> {
    return pulumi.output(args).apply((a: any) => getArtist(a, opts))
}

/**
 * A collection of arguments for invoking getArtist.
 */
export interface GetArtistOutputArgs {
    /**
     * Foreign artist ID.
     */
    foreignArtistId: pulumi.Input<string>;
}
