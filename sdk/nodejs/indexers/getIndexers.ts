// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Indexers -->List all available Indexers.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as lidarr from "@pulumi/lidarr";
 *
 * const example = lidarr.Indexers.getIndexers({});
 * ```
 */
export function getIndexers(opts?: pulumi.InvokeOptions): Promise<GetIndexersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("lidarr:Indexers/getIndexers:getIndexers", {
    }, opts);
}

/**
 * A collection of values returned by getIndexers.
 */
export interface GetIndexersResult {
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * Indexer list.
     */
    readonly indexers: outputs.Indexers.GetIndexersIndexer[];
}
