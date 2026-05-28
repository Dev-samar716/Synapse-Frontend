import { createContext, type Dispatch, type SetStateAction } from 'react';
import type { Content } from '../../../types/ContentType';

export interface ContentStateTypes {
    contents: Content[];
    setContents: Dispatch<SetStateAction<Content[]>>;
}

const ContentContext = createContext<ContentStateTypes | undefined>(undefined);

export default ContentContext;