export interface Videos {
    id:      number;
    results: Result[];
}

export interface Result {
    iso_639_1:    ISO639_1;
    iso_3166_1:   ISO3166_1;
    name:         string;
    key:          string;
    site:         Site;
    size:         number;
    type:         string;
    official:     boolean;
    published_at: Date;
    id:           string;
}

export enum ISO3166_1 {
    MX = "MX",
}

export enum ISO639_1 {
    Es = "es",
}

export enum Site {
    YouTube = "YouTube",
}
