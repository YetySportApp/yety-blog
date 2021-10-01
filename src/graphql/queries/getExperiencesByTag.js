import { gql } from '@apollo/client';
export const GET_EXPERIENCE_BY_TAG = gql`
    query GetExperienceByTag {
        eventos(where: { tipo: "esperienza", status: "active", tags: { nome_in: ["Castro Legend Cup"] } }) {
            id
            nome
            slug
            tipo
            address {
                full_address
                route
                postal_code
                house_number
                city
                province
                region
                country
                latitude
                longitude
            }
            sports {
                id
                nome
                tags {
                    nome
                }
            }
            tags {
                id
                nome
            }
            immagine {
                url
                id
                alternativeText
            }
            galleria {
                url
                id
            }
        }
    }
`;
