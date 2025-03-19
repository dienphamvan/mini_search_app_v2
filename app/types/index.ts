export type SearchResponse = {
    TotalNumberOfResults: number
    Page: number
    PageSize: number
    ResultItems: SearchRecord[]
}

export type SearchRecord = {
    DocumentId: string
    DocumentTitle: {
        Text: string
        Highlights: {
            BeginOffset: number
            EndOffset: number
        }[]
    }
    DocumentExcerpt: TextHighLight
    DocumentURI: string
}

export type TextHighLight = {
    Text: string
    Highlights: {
        BeginOffset: number
        EndOffset: number
    }[]
}

export type SuggestionResponse = {
    stemmedQueryTerm: string
    suggestions: string[]
}
