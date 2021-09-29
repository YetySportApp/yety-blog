import { gql } from '@apollo/client';

export const ME = gql`
    query me {
        me {
            id
            username
            email
            nome
            cognome
            telefono
            foto {
                url
            }
            verificato
            completo
            confirmed
            blocked
            sesso
            telefono
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
            place_of_birth {
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
            data_nascita
            role {
                id
                name
                type
            }
        }
    }
`;
