/**
 * Available filter values returned by /api/metrics/facets
 */
export interface FacetsResponse {
    /**Available operation types */
    operation_types: string[];

    /** Available business types */
    business_types: string[];

    /** Available categories */
    categories: string[];

    /** Earliest available date (YYYY-MM-DD) */
    min_date: string;

    /** Latest available date (YYYY-MM-DD) */
    max_date: string;
}
/**
 * One anomaly alert 
 */
export interface AlertEntry {
    /** Time period */
    time_period: string;

    /** Recorder outcome */
    outcome_total: number;

    /** Rolling average of the previous 3 periods */
    baseline_average: number;

    /** Percentage increase ratio */
    increase_ratio: number;
}

/**
 * List of anomaly alerts
 */
export type AlertsResponse = AlertEntry[];

/**
 * One top category
 */
export interface CategoryEntry {
    /** Category name */
    category: string;

    /** Operation type */
    operation_type: string;

    /** Total amount */
    total_amount: number;
}

/**
 * List of top categories
 */
export type TopCategoriesResponse = CategoryEntry[];