export type Pagination = {
    count: number;
    per_page: number;
    current_page: number;
    next_page: string | null;
    has_more: boolean;
};

export type Team = {
    id: number;
    gender: string | null;
    name: string;
    short_name: string | null;
    image_path: string | null;
    type: string | null;
}