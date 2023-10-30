import { withAPIKey } from '@aws/amazon-location-utilities-auth-helper';
import { GetPlaceCommand, LocationClient, SearchPlaceIndexForSuggestionsCommand } from "@aws-sdk/client-location";


const apiKey = "v1.public.eyJqdGkiOiI5ZDE0YmUxYi02NWIzLTQ0NjctYjlkOS01OTg5MDZhNGI5YzEifVwORcmhMVCPL6433rX_v6Ggm6b2xUetCC-PFVdsIF_HRtkWpt58rT9kEYEaAwY64IrGENE0ggv5ePDbYb_Zgp79_9aIjINDaMRgbHPCSYpPONIeUXPSnNg2dcBDUFu9FNNCjJUlmqnPzRiQdK-toF63kpgpDf7fZBIBtV1u7McR9GeBCjH62UqJf2uW66vQGSe3s5D5W10MyMpSZiCvTXiJZUrfVXCObo8lNbnXdDj_SH2HXcwXrJuVe5mqNZHoadjZVCiBnFhKJOOOpQhpJE2b3ftVBrBl-_MJ00vY37TCzbiQeUUbAhLO5P6kpQq4ygWqDLt12gfPPHCCQQqQwLE.ZWU0ZWIzMTktMWRhNi00Mzg0LTllMzYtNzlmMDU3MjRmYTkx"
const authHelper = await withAPIKey(apiKey); // use API Key id for credentials

//initialize the Location client:
const client = new LocationClient({
    region: "us-east-1",
    ...authHelper.getLocationClientConfig() // sets up the Location client to use the API Key defined above
});

//call a search function with the location client:
export const getSuggestions = (text: string) => client.send(new SearchPlaceIndexForSuggestionsCommand({
    IndexName: "hereLocationIndex",
    Text: text,
    MaxResults: 10,
    FilterCategories: ['MunicipalityType', 'RegionType', 'CountryType'],
})).then((response) => response.Results);

export const getPlaceDetails = async (placeId: string) => {
    const result = await client.send(new GetPlaceCommand({
        IndexName: "hereLocationIndex",
        PlaceId: placeId,
        Language: "en"
    })).then((response) => response.Place)

    if (!result) {
        throw Error("Place not found")
    }

    console.log(result)

    return {id: placeId, label: result.Label!}
};

export const getPlaces = async (placeId: string) => {
    const result = await client.send(new GetPlaceCommand({
        IndexName: "hereLocationIndex",
        PlaceId: placeId,
        Language: "en"
    })).then((response) => response.Place)

    if (!result) {
        throw Error("Place not found")
    }

    console.log(result)

    const places = []
    if(result.Municipality) {
        places.push(result.Municipality)
    }
    if (result.Region) {
        places.push(result.Region)
    } 
    if (result.Country){
        places.push(result.Country)
    }

    console.log(places)

    return places
};