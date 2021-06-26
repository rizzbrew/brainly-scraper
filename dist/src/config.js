"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languages = exports.baseURLs = exports.graphql_query = void 0;
exports.graphql_query = "query SearchQuery($query: String!, $first: Int!, $after: ID) {\n        questionSearch(query: $query, first: $first, after: $after) {\n            count\n            edges {\n                node {\n                    databaseId\n                    content\n                    points\n                    created\n                    lastActivity\n                    attachments {\n                        url\n                    }\n                    author {\n                        databaseId\n                        nick\n                        points\n                        gender\n                        description\n                        isDeleted\n                        avatar {\n                            url\n                        }\n                        category\n                        clientType\n                        rank {\n                            databaseId\n                            name\n                        }\n                        receivedThanks\n                        bestAnswersCount\n                        helpedUsersCount\n                    }\n                    isAuthorsFirstQuestion\n                    canBeAnswered\n                    pointsForAnswer\n                    pointsForBestAnswer\n                    answers {\n                        nodes {\n                            databaseId\n                            content\n                            points\n                            isBest\n                            created\n                            rating\n                            ratesCount\n                            thanksCount\n                            attachments {\n                                url\n                            }\n                            author {\n                                databaseId\n                                nick\n                                points\n                                gender\n                                description\n                                isDeleted\n                                avatar {\n                                    url\n                                }\n                                category\n                                clientType\n                                rank {\n                                    databaseId\n                                    name\n                                }\n                                receivedThanks\n                                bestAnswersCount\n                                helpedUsersCount\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }";
exports.baseURLs = {
    id: "https://brainly.co.id",
    us: "https://brainly.com",
    es: "https://brainly.lat",
    pt: "https://brainly.com.br",
    ru: "https://znanija.com",
    ro: "https://brainly.ro",
    tr: "https://eodev.com",
    ph: "https://brainly.ph",
    pl: "https://brainly.pl",
    hi: "https://brainly.in"
};
exports.languages = Object.keys(exports.baseURLs);
