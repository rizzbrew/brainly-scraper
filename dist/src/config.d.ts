export declare const graphql_query = "query SearchQuery($query: String!, $first: Int!, $after: ID) {\n        questionSearch(query: $query, first: $first, after: $after) {\n            count\n            edges {\n                node {\n                    databaseId\n                    content\n                    points\n                    created\n                    lastActivity\n                    attachments {\n                        url\n                    }\n                    author {\n                        databaseId\n                        nick\n                        points\n                        gender\n                        description\n                        isDeleted\n                        avatar {\n                            url\n                        }\n                        category\n                        clientType\n                        rank {\n                            databaseId\n                            name\n                        }\n                        receivedThanks\n                        bestAnswersCount\n                        helpedUsersCount\n                    }\n                    isAuthorsFirstQuestion\n                    canBeAnswered\n                    pointsForAnswer\n                    pointsForBestAnswer\n                    answers {\n                        nodes {\n                            databaseId\n                            content\n                            points\n                            isBest\n                            created\n                            rating\n                            ratesCount\n                            thanksCount\n                            attachments {\n                                url\n                            }\n                            author {\n                                databaseId\n                                nick\n                                points\n                                gender\n                                description\n                                isDeleted\n                                avatar {\n                                    url\n                                }\n                                category\n                                clientType\n                                rank {\n                                    databaseId\n                                    name\n                                }\n                                receivedThanks\n                                bestAnswersCount\n                                helpedUsersCount\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }";
export declare const baseURLs: {
    id: string;
    us: string;
    es: string;
    pt: string;
    ru: string;
    ro: string;
    tr: string;
    ph: string;
    pl: string;
    hi: string;
};
export declare const languages: string[];
