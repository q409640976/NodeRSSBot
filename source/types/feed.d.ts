export interface Feed {
    feed_id: number;
    url: string;
    feed_title: string;
    recent_hash_list: string;
    error_count: number;
    sub_count?: number;
}
