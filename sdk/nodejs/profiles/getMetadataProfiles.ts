// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Profiles -->List all available Metadata Profiles.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as lidarr from "@pulumi/lidarr";
 *
 * const example = lidarr.Profiles.getMetadataProfiles({});
 * ```
 */
export function getMetadataProfiles(opts?: pulumi.InvokeOptions): Promise<GetMetadataProfilesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("lidarr:Profiles/getMetadataProfiles:getMetadataProfiles", {
    }, opts);
}

/**
 * A collection of values returned by getMetadataProfiles.
 */
export interface GetMetadataProfilesResult {
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * Metadata Profile list.
     */
    readonly metadataProfiles: outputs.Profiles.GetMetadataProfilesMetadataProfile[];
}
