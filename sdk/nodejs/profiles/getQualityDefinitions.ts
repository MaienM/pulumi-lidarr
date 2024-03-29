// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Profiles -->List all available Quality Definitions.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as lidarr from "@pulumi/lidarr";
 *
 * const example = lidarr.Profiles.getQualityDefinitions({});
 * ```
 */
export function getQualityDefinitions(opts?: pulumi.InvokeOptions): Promise<GetQualityDefinitionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("lidarr:Profiles/getQualityDefinitions:getQualityDefinitions", {
    }, opts);
}

/**
 * A collection of values returned by getQualityDefinitions.
 */
export interface GetQualityDefinitionsResult {
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * Quality Definition list.
     */
    readonly qualityDefinitions: outputs.Profiles.GetQualityDefinitionsQualityDefinition[];
}
