// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Profiles -> Generic Custom Format Condition data source. When possible use a specific data source instead.
 * For more information refer to [Custom Format Conditions](https://wiki.servarr.com/lidarr/settings#conditions).
 *  To be used in conjunction with Custom Format.
 *
 * {{% examples %}}
 * ## Example Usage
 * {{% example %}}
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as lidarr from "@maienm/pulumi-lidarr";
 * import * as lidarr from "@pulumi/lidarr";
 *
 * const exampleCustomFormatCondition = lidarr.Profiles.getCustomFormatCondition({
 *     name: "Example",
 *     implementation: "SizeSpecification",
 *     negate: false,
 *     required: false,
 *     min: 0,
 *     max: 100,
 * });
 * const exampleCustomFormat = new lidarr.profiles.CustomFormat("exampleCustomFormat", {
 *     includeCustomFormatWhenRenaming: false,
 *     name: "Example",
 *     specifications: [exampleCustomFormatCondition],
 * });
 * ```
 * {{% /example %}}
 * {{% /examples %}}
 */
export function getCustomFormatCondition(args: GetCustomFormatConditionArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomFormatConditionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("lidarr:Profiles/getCustomFormatCondition:getCustomFormatCondition", {
        "implementation": args.implementation,
        "max": args.max,
        "min": args.min,
        "name": args.name,
        "negate": args.negate,
        "required": args.required,
        "value": args.value,
    }, opts);
}

/**
 * A collection of arguments for invoking getCustomFormatCondition.
 */
export interface GetCustomFormatConditionArgs {
    /**
     * Implementation.
     */
    implementation: string;
    /**
     * Max.
     */
    max?: number;
    /**
     * Min.
     */
    min?: number;
    /**
     * Specification name.
     */
    name: string;
    /**
     * Negate flag.
     */
    negate: boolean;
    /**
     * Computed flag.
     */
    required: boolean;
    /**
     * Value.
     */
    value?: string;
}

/**
 * A collection of values returned by getCustomFormatCondition.
 */
export interface GetCustomFormatConditionResult {
    /**
     * Custom format condition ID.
     */
    readonly id: number;
    /**
     * Implementation.
     */
    readonly implementation: string;
    /**
     * Max.
     */
    readonly max: number;
    /**
     * Min.
     */
    readonly min: number;
    /**
     * Specification name.
     */
    readonly name: string;
    /**
     * Negate flag.
     */
    readonly negate: boolean;
    /**
     * Computed flag.
     */
    readonly required: boolean;
    /**
     * Value.
     */
    readonly value: string;
}
/**
 * <!-- subcategory:Profiles -> Generic Custom Format Condition data source. When possible use a specific data source instead.
 * For more information refer to [Custom Format Conditions](https://wiki.servarr.com/lidarr/settings#conditions).
 *  To be used in conjunction with Custom Format.
 *
 * {{% examples %}}
 * ## Example Usage
 * {{% example %}}
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as lidarr from "@maienm/pulumi-lidarr";
 * import * as lidarr from "@pulumi/lidarr";
 *
 * const exampleCustomFormatCondition = lidarr.Profiles.getCustomFormatCondition({
 *     name: "Example",
 *     implementation: "SizeSpecification",
 *     negate: false,
 *     required: false,
 *     min: 0,
 *     max: 100,
 * });
 * const exampleCustomFormat = new lidarr.profiles.CustomFormat("exampleCustomFormat", {
 *     includeCustomFormatWhenRenaming: false,
 *     name: "Example",
 *     specifications: [exampleCustomFormatCondition],
 * });
 * ```
 * {{% /example %}}
 * {{% /examples %}}
 */
export function getCustomFormatConditionOutput(args: GetCustomFormatConditionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomFormatConditionResult> {
    return pulumi.output(args).apply((a: any) => getCustomFormatCondition(a, opts))
}

/**
 * A collection of arguments for invoking getCustomFormatCondition.
 */
export interface GetCustomFormatConditionOutputArgs {
    /**
     * Implementation.
     */
    implementation: pulumi.Input<string>;
    /**
     * Max.
     */
    max?: pulumi.Input<number>;
    /**
     * Min.
     */
    min?: pulumi.Input<number>;
    /**
     * Specification name.
     */
    name: pulumi.Input<string>;
    /**
     * Negate flag.
     */
    negate: pulumi.Input<boolean>;
    /**
     * Computed flag.
     */
    required: pulumi.Input<boolean>;
    /**
     * Value.
     */
    value?: pulumi.Input<string>;
}
