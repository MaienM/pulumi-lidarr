// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Profiles -->List all available Custom Formats.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as lidarr from "@pulumi/lidarr";
 *
 * const example = lidarr.Profiles.getCustomFormats({});
 * ```
 */
export function getCustomFormats(opts?: pulumi.InvokeOptions): Promise<GetCustomFormatsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("lidarr:Profiles/getCustomFormats:getCustomFormats", {
    }, opts);
}

/**
 * A collection of values returned by getCustomFormats.
 */
export interface GetCustomFormatsResult {
    /**
     * Download Client list..
     */
    readonly customFormats: outputs.Profiles.GetCustomFormatsCustomFormat[];
    /**
     * The ID of this resource.
     */
    readonly id: string;
}
