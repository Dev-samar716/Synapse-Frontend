

export interface Content_Part {
      text: string;
}

export type Content_Parts = Content_Part[];

export interface Content {
    role: string;
    parts: Content_Parts;
}